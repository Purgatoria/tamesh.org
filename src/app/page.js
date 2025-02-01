/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
    return (
        <div className="min-h-screen bg-white dark:bg-dark-200 transition-colors">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-b from-primary-500/10 via-transparent to-transparent dark:from-primary-900/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
                    <div className="text-center space-y-8">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
                            <span className="text-primary-600 dark:text-primary-500">Meshtastic</span> Türkiye<br />
                            Topluluğu
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Kablosuz Mesh Ağları ile İnternet Olmadan da Haberleşin, Afetlere Hazırlıklı Olun, Topluluğa Katılın
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link 
                                href="/kilavuz"
                                className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors"
                            >
                                Kurulum Kılavuzu
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Dekoratif Arka Plan */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] opacity-25"></div>
                </div>
            </section>

            {/* Biz Kimiz? */}
            <section className="py-24 bg-gray-50 dark:bg-dark-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            Biz Kimiz?
                        </h2>
                        <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-600 dark:text-gray-300">
                            <p>
                                Meshtastic Türkiye Topluluğu, kablosuz mesh ağ teknolojilerine ilgi duyan ve bu teknolojiyi Türkiye'de yaygınlaştırmayı hedefleyen gönüllülerden oluşan bir topluluktur.
                            </p>
                            <p>
                                Amacımız, afet durumlarında ve internet bağlantısının olmadığı yerlerde alternatif iletişim yöntemleri sunmak ve bu konuda farkındalık oluşturmaktır.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ne Yapıyoruz? */}
            <section className="py-24 bg-white dark:bg-dark-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            Ne Yapıyoruz?
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Aktivite 1 */}
                        <div className="bg-gray-50 dark:bg-dark-100 p-6 rounded-xl shadow-lg">
                            <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                Rehberler Hazırlıyoruz
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Meshtastic cihazları için kapsamlı kurulum ve kullanım rehberleri
                            </p>
                        </div>

                        {/* Aktivite 2 */}
                        <div className="bg-gray-50 dark:bg-dark-100 p-6 rounded-xl shadow-lg">
                            <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                Topluluk Buluşmaları
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Düzenli buluşmalar ve etkinlikler düzenliyoruz
                            </p>
                        </div>

                        {/* Aktivite 3 */}
                        <div className="bg-gray-50 dark:bg-dark-100 p-6 rounded-xl shadow-lg">
                            <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                Teknik Destek
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Topluluk üyelerine teknik destek sağlıyoruz
                            </p>
                        </div>

                        {/* Aktivite 4 */}
                        <div className="bg-gray-50 dark:bg-dark-100 p-6 rounded-xl shadow-lg">
                            <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                Açık Kaynak
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Açık kaynak projelere katkıda bulunuyoruz
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-primary-600 dark:bg-primary-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-8">
                        Topluluğumuza Katılın
                    </h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a 
                            href="https://discord.gg/purgatoria"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 text-lg font-medium text-white border-2 border-white rounded-lg hover:bg-white/10 transition-colors"
                        >
                            Discord
                            <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
                            </svg>
                        </a>
                        <a 
                            href="https://www.facebook.com/groups/tamesh"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 text-lg font-medium text-white border-2 border-white rounded-lg hover:bg-white/10 transition-colors"
                        >
                            Facebook Grubu
                            <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                        </a>
                        <a 
                            href="https://github.com/Meshtastic-Turkiye-Toplulugu"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 text-lg font-medium text-white border-2 border-white rounded-lg hover:bg-white/10 transition-colors"
                        >
                            GitHub
                            <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
} 