const http = require('http');
const crypto = require('crypto');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

// 1. .env dosyasını manuel olarak yükleyelim (harici dotenv paketine ihtiyaç duymamak için)
const envPath = path.resolve(__dirname, '.env');
if (fs.existsSync(envPath)) {
    const envConfig = fs.readFileSync(envPath, 'utf8');
    envConfig.split('\n').forEach(line => {
        const match = line.match(/^([^=:#]+?)[=:](.*)/);
        if (match) {
            const key = match[1].trim();
            const value = match[2].trim().replace(/['"]/g, '');
            process.env[key] = value;
        }
    });
}

const PORT = process.env.PORT || 4000;
const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

if (!WEBHOOK_SECRET || WEBHOOK_SECRET === 'your_secure_random_string_here') {
    console.error('HATA: Geçerli bir WEBHOOK_SECRET .env dosyasında bulunamadı.');
    process.exit(1);
}

// 2. HTTP Sunucusu oluşturuluyor
const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/webhook') {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            const signature = req.headers['x-hub-signature-256'];
            
            if (!signature) {
                res.writeHead(401, { 'Content-Type': 'text/plain' });
                res.end('Unauthorized: No signature provided');
                return;
            }

            // 3. GitHub'dan gelen imzanın doğrulanması
            const hmac = crypto.createHmac('sha256', WEBHOOK_SECRET);
            const digest = 'sha256=' + hmac.update(body).digest('hex');

            if (crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(digest))) {
                try {
                    const payload = JSON.parse(body);
                    
                    // 4. Sadece 'main' branch'ine yapılan push'ları kabul et
                    if (req.headers['x-github-event'] === 'push' && payload.ref === 'refs/heads/main') {
                        console.log(`[${new Date().toISOString()}] Yeni push algılandı (main). Dağıtım başlatılıyor...`);
                        
                        res.writeHead(200, { 'Content-Type': 'text/plain' });
                        res.end('Deployment triggered successfully');

                        // 5. Dağıtım scriptini (deploy.sh) çalıştır
                        exec('bash deploy.sh', { cwd: __dirname }, (error, stdout, stderr) => {
                            if (error) {
                                console.error(`[Dağıtım Hatası]: ${error.message}`);
                                return;
                            }
                            if (stderr) {
                                console.error(`[Dağıtım Çıktısı - STDERR]: ${stderr}`);
                            }
                            console.log(`[Dağıtım Başarılı]:\n${stdout}`);
                        });
                    } else {
                        res.writeHead(200, { 'Content-Type': 'text/plain' });
                        res.end('Event ignored: Not a push to main branch.');
                    }
                } catch (err) {
                    res.writeHead(400, { 'Content-Type': 'text/plain' });
                    res.end('Bad Request: Invalid JSON payload');
                }
            } else {
                res.writeHead(403, { 'Content-Type': 'text/plain' });
                res.end('Forbidden: Invalid signature');
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

server.listen(PORT, '127.0.0.1', () => {
    console.log(`Webhook servisi http://127.0.0.1:${PORT}/webhook adresinde dinleniyor.`);
});
