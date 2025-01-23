
import Button from '@/components/Button'
import Link from 'next/link'

export default function Guide() {
  return (
    <div className="min-h-screen bg-gray-250 dark:bg-gray-900">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Kurulum</h1>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            Meshtastic Cihaz Kurulum Kılavuzu
          </p>
        </div>

        {/* Gereksinimler */}
        <section className="mb-12 bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Gereksinimler</h2>
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
                  <span>Meshtastic uyumlu bir cihaz. 
                    <span className='block text-xs'> (T-Beam, T-LoRa, Heltec v3, RAK WisBlock 4631 vb.)</span>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="h-2 w-2 bg-meshtastic-primary rounded-full mr-2 mt-2" />
                  <span>USB-C veya Micro USB kablosu (cihazınıza uygun)</span>
                </li>
                <li className="flex items-start">
                  <span className="h-2 w-2 bg-meshtastic-primary rounded-full mr-2 mt-2" />
                  <span>LoRa anteni (Türkiye için 433MHz veya 868MHz uyumlu)</span>
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
        <section className="mb-12 bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Kurulum Adımları</h2>
          <div className="space-y-8">
            {/* 1. Adım */}
            <div className="relative pl-8 pb-8 border-l-2 border-meshtastic-primary">
              <div className="absolute -left-3 top-0">
                <span className="flex items-center justify-center w-6 h-6 bg-meshtastic-primary rounded-full text-white font-bold">
                  1
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                Cihaz Bağlantısı
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="h-2 w-2 bg-meshtastic-primary rounded-full mr-2 mt-2" />
                  <span>Meshtastic cihazınızı USB kablosu ile bilgisayara bağlayın</span>
                </li>
                <li className="flex items-start">
                  <span className="h-2 w-2 bg-meshtastic-primary rounded-full mr-2 mt-2" />
                  <span className='block'>
                    Cihazınızı programlama moduna getirin.
                  </span>
                </li>
                <div className="flex items-start">
                  <span className="h-2 w-2 mr-2 mt-2" />
                  <span className='block text-gray-600 text-xs'>
                    Genellikle bu adıma ihtiyacınız olmayacaktır. 
                    Bağlamış olduğunuz cihaz flash işlemi sırasında otomatik olarak programlama moduna girecektir.
                    Ancak yine de programlama moduna otomatik olarak girmezse TTGO cihazları için "Boot" butonuna, 
                    T-Beam için "User" butonuna basılı tutarak USB kablosunu bağlayın. Wisblock için flasher aracında 
                    "Enter DFU Mode" butonuna basarak çıkan listeden cihazınızı seçin.
                  </span>
                </div>
              </ul>
            </div>

            {/* 2. Adım */}
            <div className="relative pl-8 pb-8 border-l-2 border-meshtastic-primary">
              <div className="absolute -left-3 top-0">
                <span className="flex items-center justify-center w-6 h-6 bg-meshtastic-primary rounded-full text-white font-bold">
                  2
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                Web Flasher'a Erişim
              </h3>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mb-4">
                <p className="text-gray-700 dark:text-gray-300 mb-7">
                  Meshtastic Web Flasher aracına erişmek için:
                </p>
                <Button target="_blank" href="https://flasher.meshtastic.org">
                  Web Flasher'ı Aç
                </Button>
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                <p>💡 Chrome veya Edge tarayıcı kullanmanız önerilir.</p>
              </div>
            </div>

            {/* 3. Adım */}
            <div className="relative pl-8 pb-8 border-l-2 border-meshtastic-primary">
              <div className="absolute -left-3 top-0">
                <span className="flex items-center justify-center w-6 h-6 bg-meshtastic-primary rounded-full text-white font-bold">
                  3
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                Firmware'in Cihaza Yüklenmesi
              </h3>
              <div className="space-y-6">
                <div>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300 ml-4">

                    <li className="flex items-start">
                      <span className="h-2 w-2 bg-meshtastic-primary rounded-full mr-2 mt-2" />
                      <span>Flasher sayfasında <strong>"Select Target Device"</strong> butonuna basarak kullanmış olduğunuz cihazı seçin.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-2 w-2 bg-meshtastic-primary rounded-full mr-2 mt-2" />
                      <span>"Flash" butonuna tıklayın ve listeden cihazınızı seçin (genellikle "USB Serial Port" olarak görünür)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-2 w-2 bg-meshtastic-primary rounded-full mr-2 mt-2" />
                      <span>Tarayıcının istediği USB erişim izinlerini onaylayın</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-2 w-2 bg-meshtastic-primary rounded-full mr-2 mt-2" />
                      <span>Eğer ilk defa kurulum yapıyorsanız, "full erase and install" seçeneğini aktif edin.</span>
                    </li>
                    <div className="flex items-start">
                      <span className="h-2 w-2 mr-2 mt-2" />
                      <span className='block text-gray-600 text-xs'>
                        Bu ayar aktif değilse daha önce meshtastic üzerinde yaptığınız ayarları koruyacaktır. 
                        İlk defa bir cihaz kuruyorsanız bu seçeneği aktif etmeniz önerilir.
                      </span>
                    </div>

                    <li className="flex items-start">
                      <span className="h-2 w-2 bg-meshtastic-primary rounded-full mr-2 mt-2" />
                      <span>"Erase Flash and Install" butonuna tıklayarak yükleme işlemini başlatın.</span>
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

                  <div className="bg-blue-50 dark:bg-gray-700 p-4 mt-4 rounded-lg">
                    <p className="text-blue-800 dark:text-blue-300">
                      ℹ️ Yükleme sırasında cihazınızın bağlantısını kesmeyin ve tarayıcı penceresini kapatmayın.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Adım */}
            <div className="relative pl-8 border-l-2 border-meshtastic-primary">
              <div className="absolute -left-3 top-0">
                <span className="flex items-center justify-center w-6 h-6 bg-meshtastic-primary rounded-full text-white font-bold">
                  4
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
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Sorun Giderme</h2>
          <div className="space-y-6">
            <div className="p-4 bg-yellow-50 dark:bg-gray-700 rounded-lg">
              <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-400 mb-2">
                Cihaz Algılanmıyor?
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>USB kablonuzun veri transferi desteklediğinden emin olun</li>
                <li>Farklı bir USB bağlantı noktası deneyin</li>
                <li>Windows için CH340 ya da CP210x sürücülerinin yüklü olduğunu kontrol edin. 
                  Kullandığınız cihazın sürücüsünü <Link className='text-meshtastic-primary' href="https://meshtastic.org/docs/getting-started/serial-drivers/" target="_blank" rel="noopener noreferrer">resmi meshtastic dökümanlarından</Link> tespit edip yükleyebilirsiniz.</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 