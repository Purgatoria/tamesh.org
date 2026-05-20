import os
import hmac
import hashlib
import subprocess
from http.server import HTTPServer, BaseHTTPRequestHandler

# .env dosyasını manuel okuyoruz (Sıfır bağımlılık)
def load_env():
    env_data = {}
    if os.path.exists('.env'):
        with open('.env', 'r') as f:
            for line in f:
                if '=' in line and not line.startswith('#'):
                    k, v = line.strip().split('=', 1)
                    env_data[k.strip()] = v.strip()
    return env_data

env = load_env()
SECRET = env.get('WEBHOOK_SECRET', 'varsayilan_secret').encode('utf-8')
PORT = int(env.get('PORT', 4000)) # .env dosyasında PORT olarak tanımlanmıştı

class WebhookHandler(BaseHTTPRequestHandler):
    def do_POST(self):
        if self.path != '/webhook':
            self.send_response(404)
            self.end_headers()
            return

        content_length = int(self.headers.get('Content-Length', 0))
        body = self.rfile.read(content_length)

        # GitHub İmzası Doğrulama
        signature = self.headers.get('X-Hub-Signature-256', '')
        if not signature.startswith('sha256='):
            self.send_response(401)
            self.end_headers()
            return

        mac = hmac.new(SECRET, body, hashlib.sha256)
        digest = 'sha256=' + mac.hexdigest()

        if not hmac.compare_digest(signature, digest):
            self.send_response(401)
            self.end_headers()
            return

        # Sadece push eventlerini tetikle
        if self.headers.get('X-GitHub-Event') == 'push':
            print("🔄 GitHub Push sinyali alındı. Dağıtım tetikleniyor...")
            # deploy.sh dosyasını tetikliyoruz
            subprocess.Popen(['bash', './deploy.sh'])

        self.send_response(200)
        self.end_headers()
        self.wfile.write(b'OK')

if __name__ == '__main__':
    print(f"🚀 Python Webhook dinleyicisi {PORT} portunda aktif...")
    server = HTTPServer(('127.0.0.1', PORT), WebhookHandler)
    server.serve_forever()
