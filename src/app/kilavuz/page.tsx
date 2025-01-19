import dynamic from 'next/dynamic'
import Link from 'next/link'

const Header = dynamic(() => import('@/components/Header'), {
  ssr: true,
  loading: () => (
    <div className="h-16 bg-gray-900 dark:bg-black animate-pulse" />
  )
})

export default function Guide() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-meshtastic-darker">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Kurulum</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Meshtastic Cihaz Kurulum Kılavuzu
          </p>
        </div>

        {/* Gereksinimler */}
        <section className="mb-12 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Gereksinimler</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 flex items-center">
                <span className="inline-flex items-center justify-center w-8 h-8 bg-meshtastic-primary rounded-lg mr-3 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </span>
                Donanım
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="h-2 w-2 bg-meshtastic-primary rounded-full mr-2 mt-2" />
                  <span>ESP32 tabanlı Meshtastic uyumlu bir cihaz (T-Beam, TTGO, Heltec vb.)</span>
                </li>
                <li className="flex items-start">
                  <span className="h-2 w-2 bg-meshtastic-primary rounded-full mr-2 mt-2" />
                  <span>USB-C veya Micro USB kablosu (cihazınıza uygun)</span>
                </li>
                <li className="flex items-start">
                  <span className="h-2 w-2 bg-meshtastic-primary rounded-full mr-2 mt-2" />
                  <span>LoRa anteni (Türkiye için 868MHz veya 915MHz uyumlu)</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 flex items-center">
                <span className="inline-flex items-center justify-center w-8 h-8 bg-meshtastic-primary rounded-lg mr-3 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                Yazılım
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="h-2 w-2 bg-meshtastic-primary rounded-full mr-2 mt-2" />
                  <span>Chrome veya Edge web tarayıcısı</span>
                </li>
                <li className="flex items-start">
                  <span className="h-2 w-2 bg-meshtastic-primary rounded-full mr-2 mt-2" />
                  <span>Meshtastic mobil uygulaması (Android/iOS)</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Kurulum Adımları */}
        <section className="mb-12 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Kurulum Adımları</h2>
          <div className="space-y-8">
            {/* 1. Adım */}
            <div className="relative pl-8 pb-8 border-l-2 border-meshtastic-primary">
              <div className="absolute -left-3 top-0">
                <span className="flex items-center justify-center w-6 h-6 bg-meshtastic-primary rounded-full text-white font-bold">
                  1
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                Web Flasher'a Erişim
              </h3>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mb-4">
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Meshtastic Web Flasher aracına erişmek için:
                </p>
                <a 
                  href="https://flasher.meshtastic.org" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center px-4 py-2 bg-meshtastic-primary text-gray-900 rounded hover:bg-meshtastic-accent transition-colors"
                >
                  Web Flasher'ı Aç
                </a>
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                <p>💡 Chrome veya Edge tarayıcı kullanmanız önerilir.</p>
              </div>
            </div>

            {/* 2. Adım */}
            <div className="relative pl-8 pb-8 border-l-2 border-meshtastic-primary">
              <div className="absolute -left-3 top-0">
                <span className="flex items-center justify-center w-6 h-6 bg-meshtastic-primary rounded-full text-white font-bold">
                  2
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                Cihaz Bağlantısı
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="h-2 w-2 bg-meshtastic-primary rounded-full mr-2 mt-2" />
                  <span>ESP32 cihazınızı USB kablosu ile bilgisayara bağlayın</span>
                </li>
                <li className="flex items-start">
                  <span className="h-2 w-2 bg-meshtastic-primary rounded-full mr-2 mt-2" />
                  <span>"Connect" butonuna tıklayın ve listeden cihazınızı seçin (genellikle "USB Serial Port" olarak görünür)</span>
                </li>
                <li className="flex items-start">
                  <span className="h-2 w-2 bg-meshtastic-primary rounded-full mr-2 mt-2" />
                  <span>Tarayıcının istediği USB erişim izinlerini onaylayın</span>
                </li>
              </ul>
            </div>

            {/* 3. Adım */}
            <div className="relative pl-8 pb-8 border-l-2 border-meshtastic-primary">
              <div className="absolute -left-3 top-0">
                <span className="flex items-center justify-center w-6 h-6 bg-meshtastic-primary rounded-full text-white font-bold">
                  3
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                Firmware Seçimi ve Ayarlar
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Cihaz Seçimi:</h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                    <li className="flex items-start">
                      <span className="h-2 w-2 bg-meshtastic-primary rounded-full mr-2 mt-2" />
                      <span>
                        <strong>TTGO T-Beam</strong> kullanıyorsanız: "TTGO T-BEAM"
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-2 w-2 bg-meshtastic-primary rounded-full mr-2 mt-2" />
                      <span>
                        <strong>TTGO LORA32</strong> kullanıyorsanız: "TTGO-LoRa32"
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-2 w-2 bg-meshtastic-primary rounded-full mr-2 mt-2" />
                      <span>
                        <strong>Heltec LoRa32</strong> kullanıyorsanız: "Heltec-v2"
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Bölge/Frekans Seçimi:</h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                    <li className="flex items-start">
                      <span className="h-2 w-2 bg-meshtastic-primary rounded-full mr-2 mt-2" />
                      <span>
                        Türkiye için <strong>EU_868</strong> (868MHz) veya <strong>EU_915</strong> (915MHz) seçin
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 4. Adım */}
            <div className="relative pl-8 pb-8 border-l-2 border-meshtastic-primary">
              <div className="absolute -left-3 top-0">
                <span className="flex items-center justify-center w-6 h-6 bg-meshtastic-primary rounded-full text-white font-bold">
                  4
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                Yükleme İşlemi
              </h3>
              <div className="space-y-4">
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="h-2 w-2 bg-meshtastic-primary rounded-full mr-2 mt-2" />
                    <span>"Install" butonuna tıklayın</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 bg-meshtastic-primary rounded-full mr-2 mt-2" />
                    <span>Yükleme işlemi yaklaşık 2-3 dakika sürecektir</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 bg-meshtastic-primary rounded-full mr-2 mt-2" />
                    <span>"Success!" mesajını görene kadar bekleyin</span>
                  </li>
                </ul>
                <div className="bg-blue-50 dark:bg-gray-700 p-4 rounded-lg">
                  <p className="text-blue-800 dark:text-blue-300">
                    ℹ️ Yükleme sırasında cihazınızın bağlantısını kesmeyin ve tarayıcı penceresini kapatmayın.
                  </p>
                </div>
              </div>
            </div>

            {/* 5. Adım */}
            <div className="relative pl-8 border-l-2 border-meshtastic-primary">
              <div className="absolute -left-3 top-0">
                <span className="flex items-center justify-center w-6 h-6 bg-meshtastic-primary rounded-full text-white font-bold">
                  5
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                Doğrulama ve İlk Kullanım
              </h3>
              <div className="space-y-4">
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="h-2 w-2 bg-meshtastic-primary rounded-full mr-2 mt-2" />
                    <span>Cihazınız otomatik olarak yeniden başlayacaktır</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 bg-meshtastic-primary rounded-full mr-2 mt-2" />
                    <span>Mavi LED'in düzenli aralıklarla yanıp söndüğünü kontrol edin</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 bg-meshtastic-primary rounded-full mr-2 mt-2" />
                    <span>Meshtastic mobil uygulamasını açın ve cihazınızı arayın</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 bg-meshtastic-primary rounded-full mr-2 mt-2" />
                    <span>Bluetooth üzerinden cihazınıza bağlanın ve temel ayarları yapılandırın</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Sorun Giderme */}
        <section className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Sorun Giderme</h2>
          <div className="space-y-6">
            <div className="p-4 bg-yellow-50 dark:bg-gray-700 rounded-lg">
              <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-400 mb-2">
                Cihaz Algılanmıyor?
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>USB kablonuzun veri transferi desteklediğinden emin olun</li>
                <li>Farklı bir USB bağlantı noktası deneyin</li>
                <li>Windows için CH340 sürücüsünün yüklü olduğunu kontrol edin</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 