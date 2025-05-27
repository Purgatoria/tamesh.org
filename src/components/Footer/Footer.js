import Link from 'next/link';
import { communityLinks, officialLinks, mainNavigation, SITE_INFO } from '@/constants/navigation';

export default function Footer() {
    return (
        <footer className="bg-gray-100 dark:bg-dark-200 text-gray-600 dark:text-gray-400 border-t dark:border-gray-800 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo ve İletişim */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                            Hakkında
                        </h3>
                        <p className="text-sm">
                            {SITE_INFO.title}
                            <span className="block">
                                İletişim: <a href={`mailto:`+SITE_INFO.contactMail} className="hover:text-primary-500 transition-colors">{SITE_INFO.contactMail}</a>
                            </span>
                        </p>
                    </div>

                    {/* Bağlantılar */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                            Bağlantılar
                        </h3>
                        <ul className="space-y-2">
                            {mainNavigation.map((item, idx) => (
                                <li key={item.href + '-nav-' + idx}>
                                    <Link href={item.href} className="hover:text-primary-500 transition-colors">{item.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Topluluk */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                            Topluluk
                        </h3>
                        <ul className="space-y-2">
                        {communityLinks.map((item, idx) => (
                                <li key={item.href + '-community-' + idx}>
                                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="hover:text-primary-500 transition-colors">
                                        {item.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resmi Meshtastic */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                            Resmi Meshtastic
                        </h3>
                        <ul className="space-y-2">
                            {officialLinks.map((item, idx) => (
                                <li key={item.href + '-official-' + idx}>
                                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="hover:text-primary-500 transition-colors">
                                        {item.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Telif Hakkı */}
                <div className="mt-8 pt-8 border-t dark:border-gray-800">
                    <div className="space-y-4">
                        <p className="text-sm text-center">
                            © {new Date().getFullYear()} Meshtastic Türkiye Topluluğu. Tüm hakları saklıdır.
                        </p>
                        <p className="text-xs text-center text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                            Meshtastic Türkiye Topluluğu, Meshtastic projesinin resmi bir parçası değildir. 
                            Bu platform, Türkiye'deki gönüllü kullanıcılar tarafından oluşturulmuş bağımsız bir topluluk girişimidir. 
                            Meshtastic® ilgili tüm hakları kendi sahiplerine aittir.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
} 