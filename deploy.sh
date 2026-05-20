#!/bin/bash

# Hata oluştuğunda scriptin durmasını sağla
set -e

echo "[$(date)] Deployment başlatılıyor..."

# Proje kök dizinine geçiş yap
cd "$(dirname "$0")"

# 1. Değişiklikleri GitHub'dan çek
echo "=> Git repository güncelleniyor..."
git fetch origin main
git reset --hard origin/main

# 2. Bağımlılıkları yükle
echo "=> Bağımlılıklar yükleniyor..."
npm install

# 3. Next.js projesini derle
echo "=> Next.js projesi derleniyor..."
npm run build

# 4. CloudPanel Node.js servisini yeniden başlat
echo "=> CloudPanel servisleri yeniden başlatılıyor..."
# Not: sudo gerekiyorsa clpctl önünde sudo kullanılabilir. 
# CloudPanel dökümantasyonuna göre clpctl site:restart:services komutu kullanılır.
# clpctl site:restart:services --domainName=tamesh.org

echo "[$(date)] Deployment başarıyla tamamlandı!"
