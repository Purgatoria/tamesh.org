#!/bin/bash
set -e
echo "[$(date)] Deployment başlatılıyor..."

# CloudPanel'in tamesh kullanıcısı için yüklediği gizli NVM/Node yollarını buraya zorla enjekte ediyoruz:
export NVM_DIR="/home/tamesh/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
export PATH="/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:$PATH"

# Proje dizinine geçiyoruz (Eğer script başka yerden çağrılırsa diye)
cd "$(dirname "$0")"

echo "=> Git repository güncelleniyor..."
git fetch origin main && git reset --hard origin/main

echo "=> Bağımlılıklar yükleniyor..."
npm install

echo "=> Next.js projesi derleniyor..."
npm run build

echo "=> CloudPanel servisleri yeniden başlatılıyor..."
clpctl site:restart:services --domainName=tamesh.org

echo "✅ [$(date)] Dağıtım başarıyla tamamlandı!"
