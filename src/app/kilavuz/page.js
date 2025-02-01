export default function Guide() {
    return (
        <div className="min-h-screen bg-white dark:bg-dark-200 transition-colors">
            <div className="container py-12">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                        Meshtastic Kurulum Kılavuzu
                    </h1>

                    {/* Gereksinimler */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                            Gereksinimler
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Donanım */}
                            <div className="bg-gray-50 dark:bg-dark-100 rounded-xl p-6">
                                <h3 className="flex items-center text-lg font-semibold text-gray-900 dark:text-white mb-4">
                                    <svg className="w-6 h-6 mr-2 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                                    </svg>
                                    Donanım
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <span className="text-primary-500">•</span>
                                        <div>
                                            <p className="text-gray-900 dark:text-white font-medium">Meshtastic uyumlu bir cihaz</p>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">(T-Beam, T-LoRa, Heltec v3, RAK WisBlock 4631 vb.)</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-primary-500">•</span>
                                        <p className="text-gray-900 dark:text-white">USB-C veya Micro USB kablosu (cihazınıza uygun)</p>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-primary-500">•</span>
                                        <p className="text-gray-900 dark:text-white">LoRa anteni (Türkiye için 433MHz veya 868MHz uyumlu)</p>
                                    </li>
                                </ul>
                            </div>

                            {/* Yazılım */}
                            <div className="bg-gray-50 dark:bg-dark-100 rounded-xl p-6">
                                <h3 className="flex items-center text-lg font-semibold text-gray-900 dark:text-white mb-4">
                                    <svg className="w-6 h-6 mr-2 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    Yazılım
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <span className="text-primary-500">•</span>
                                        <p className="text-gray-900 dark:text-white">Chrome veya Edge web tarayıcısı</p>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-primary-500">•</span>
                                        <p className="text-gray-900 dark:text-white">Meshtastic mobil uygulaması (Android/iOS)</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Kurulum Adımları */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                            Kurulum Adımları
                        </h2>
                        <div className="relative">
                            {/* Kesintisiz yeşil çizgi */}
                            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary-500" />
                            
                            <div className="space-y-8">
                                {/* Cihaz Bağlantısı */}
                                <div className="relative pl-12">
                                    <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-primary-500 text-white flex items-center justify-center text-sm font-medium z-10">
                                        1
                                    </div>
                                    <div className="bg-gray-50 dark:bg-dark-100 rounded-xl p-6">
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                                            Cihaz Bağlantısı
                                        </h3>
                                        <ul className="space-y-3">
                                            <li className="flex items-start gap-3">
                                                <span className="text-primary-500">•</span>
                                                <p className="text-gray-900 dark:text-white">Meshtastic cihazınızı USB kablosu ile bilgisayara bağlayın</p>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-primary-500">•</span>
                                                <div>
                                                    <p className="text-gray-900 dark:text-white">Cihazınızı programlama moduna getirin</p>
                                                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                                        Genellikle bu adıma ihtiyacınız olmayacaktır. Bağlantı olduğunuz cihaz flash işlemi sırasında otomatik olarak programlama moduna girecektir. Ancak yine de programlama moduna otomatik olarak girmezse TTGO cihazları için "Boot" butonuna, T-Beam için "User" butonuna basılı tutarak USB kablosunu bağlayın. Wisblock için flasher aracında "Enter DFU Mode" butonuna basarak çıktı isteyen cihazınızı seçin.
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Web Flasher'a Erişim */}
                                <div className="relative pl-12">
                                    <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-primary-500 text-white flex items-center justify-center text-sm font-medium z-10">
                                        2
                                    </div>
                                    <div className="bg-gray-50 dark:bg-dark-100 rounded-xl p-6">
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                                            Web Flasher'a Erişim
                                        </h3>
                                        <p className="text-gray-900 dark:text-white mb-4">
                                            Meshtastic Web Flasher aracına erişmek için:
                                        </p>
                                        <a 
                                            href="https://flash.meshtastic.org"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
                                        >
                                            Web Flasher'ı Aç
                                            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                        <div className="mt-4 flex items-center text-sm text-gray-600 dark:text-gray-400">
                                            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            Chrome veya Edge tarayıcı kullanmanız önerilir.
                                        </div>
                                    </div>
                                </div>

                                {/* Firmware Yükleme */}
                                <div className="relative pl-12">
                                    <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-primary-500 text-white flex items-center justify-center text-sm font-medium z-10">
                                        3
                                    </div>
                                    <div className="bg-gray-50 dark:bg-dark-100 rounded-xl p-6">
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                                            Firmware'in Cihaza Yüklenmesi
                                        </h3>
                                        <ul className="space-y-3">
                                            <li className="flex items-start gap-3">
                                                <span className="text-primary-500">•</span>
                                                <p className="text-gray-900 dark:text-white">Flasher sayfasında "Select Target Device" butonuna basarak kullanmış olduğunuz cihazı seçin</p>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-primary-500">•</span>
                                                <p className="text-gray-900 dark:text-white">Cihazınızı arayın ve &apos;USB Serial Port&apos; olarak görünen cihazı seçin</p>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-primary-500">•</span>
                                                <p className="text-gray-900 dark:text-white">Tarayıcının istediği USB erişim izinlerini onaylayın</p>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-primary-500">•</span>
                                                <div>
                                                    <p className="text-gray-900 dark:text-white">Eğer ilk defa kurulum yapıyorsanız, "full erase and install" seçeneğini aktif edin</p>
                                                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                                        Bu ayar aktif değilse daha önce meshtastic üzerinde yaptığınız ayarlar korunacaktır. İlk defa bir cihaz kuruyorsanız bu seçeneği aktif etmeniz önerilir.
                                                    </p>
                                                </div>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-primary-500">•</span>
                                                <p className="text-gray-900 dark:text-white">"Erase Flash and Install" butonuna tıklayarak yükleme işlemini başlatın</p>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-primary-500">•</span>
                                                <p className="text-gray-900 dark:text-white">Yükleme işlemi yaklaşık 2-3 dakika sürecektir</p>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-primary-500">•</span>
                                                <p className="text-gray-900 dark:text-white">"Success!" mesajını görene kadar bekleyin</p>
                                            </li>
                                        </ul>
                                        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                                            <div className="flex items-center text-blue-700 dark:text-blue-300">
                                                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                Yükleme sırasında cihazınızın bağlantısını kesmeyin ve tarayıcı penceresini kapatmayın.
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Doğrulama ve İlk Kullanım */}
                                <div className="relative pl-12">
                                    <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-primary-500 text-white flex items-center justify-center text-sm font-medium z-10">
                                        4
                                    </div>
                                    <div className="bg-gray-50 dark:bg-dark-100 rounded-xl p-6">
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                                            Doğrulama ve İlk Kullanım
                                        </h3>
                                        <ul className="space-y-3">
                                            <li className="flex items-start gap-3">
                                                <span className="text-primary-500">•</span>
                                                <p className="text-gray-900 dark:text-white">Cihazınız otomatik olarak yeniden başlayacaktır</p>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-primary-500">•</span>
                                                <p className="text-gray-900 dark:text-white">Mavi LED'in düzenli aralıklarla yanıp söndüğünü kontrol edin</p>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-primary-500">•</span>
                                                <p className="text-gray-900 dark:text-white">Meshtastic mobil uygulamasını açın ve cihazınızı arayın</p>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-primary-500">•</span>
                                                <p className="text-gray-900 dark:text-white">Bluetooth üzerinden cihazınıza bağlanın ve temel ayarları yapılandırın</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sorun Giderme */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                            Sorun Giderme
                        </h2>
                        <div className="space-y-6">
                            <div className="bg-gray-50 dark:bg-dark-100 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                                    Cihaz Algılanmıyor?
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <span className="text-primary-500">•</span>
                                        <p className="text-gray-900 dark:text-white">USB kablonuzun veri transferi desteklediğinden emin olun</p>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-primary-500">•</span>
                                        <p className="text-gray-900 dark:text-white">Farklı bir USB bağlantı noktası deneyin</p>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-primary-500">•</span>
                                        <div>
                                            <p className="text-gray-900 dark:text-white">
                                                Windows için CH340 ya da CP210x sürücülerinin yüklü olduğunu kontrol edin. Kullandığınız cihazın sürücüsünü <a href="https://meshtastic.org/docs/getting-started/serial-drivers/" className="text-primary-500 hover:text-primary-600" target="_blank" rel="noopener noreferrer"> resmi meshtastic dökümanlarından </a>tespit edip yükleyebilirsiniz.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
} 