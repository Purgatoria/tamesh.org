import Button from '@/components/Button'

export default function MqttSetupGuide() {
  return (
    <div className="min-h-screen bg-gray-250 dark:bg-gray-900">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Meshtastic Android Uygulaması ile MQTT Ağına Bağlanma Kılavuzu</h1>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            Aşağıdaki adımları izleyerek Meshtastic Android uygulaması ile MQTT ağına bağlanabilirsiniz.
          </p>
        </div>

        {/* Adımlar */}
        <section className="mb-12 bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Adımlar</h2>
          <div className="space-y-8">
            {/* 1. Adım */}
            <div className="relative pl-8 pb-8 border-l-2 border-meshtastic-primary">
              <div className="absolute -left-3 top-0">
                <span className="flex items-center justify-center w-6 h-6 bg-meshtastic-primary rounded-full text-white font-bold">
                  1
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                Meshtastic Cihazınızı Bağlanın
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Meshtastic uygulamasını açın ve en sağda bulunan ayarlar sekmesine gelin.
              </p>
            </div>

            {/* 2. Adım */}
            <div className="relative pl-8 pb-8 border-l-2 border-meshtastic-primary">
              <div className="absolute -left-3 top-0">
                <span className="flex items-center justify-center w-6 h-6 bg-meshtastic-primary rounded-full text-white font-bold">
                  2
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                Cihazınızı Bağlayın
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Meshtastic cihazınızı USB kablosu ile Android cihazınıza bağlayın.
              </p>
            </div>

            {/* 3. Adım */}
            <div className="relative pl-8 pb-8 border-l-2 border-meshtastic-primary">
              <div className="absolute -left-3 top-0">
                <span className="flex items-center justify-center w-6 h-6 bg-meshtastic-primary rounded-full text-white font-bold">
                  3
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                Uygulamayı Açın
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Meshtastic uygulamasını açın ve cihazınızı tanıtın.
              </p>
            </div>

            {/* 4. Adım */}
            <div className="relative pl-8 pb-8 border-l-2 border-meshtastic-primary">
              <div className="absolute -left-3 top-0">
                <span className="flex items-center justify-center w-6 h-6 bg-meshtastic-primary rounded-full text-white font-bold">
                  4
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                MQTT Ayarlarını Yapın
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Uygulama içindeki ayarlar bölümüne gidin ve MQTT ayarlarını yapılandırın:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                <li>Sunucu: <strong>mqtt.example.com</strong></li>
                <li>Port: <strong>1883</strong></li>
                <li>Kullanıcı Adı: <strong>kullanici_adi</strong></li>
                <li>Şifre: <strong>sifre</strong></li>
              </ul>
            </div>

            {/* 5. Adım */}
            <div className="relative pl-8 border-l-2 border-meshtastic-primary">
              <div className="absolute -left-3 top-0">
                <span className="flex items-center justify-center w-6 h-6 bg-meshtastic-primary rounded-full text-white font-bold">
                  5
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                Bağlantıyı Test Edin
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Ayarları kaydettikten sonra "Connect" butonuna tıklayın. Bağlantı başarılıysa, uygulama arayüzünde "Connected" mesajını göreceksiniz.
              </p>
            </div>
          </div>
        </section>

        <div className="text-center">
          <Button href="/">Ana Sayfaya Dön</Button>
        </div>
      </main>
    </div>
  )
} 