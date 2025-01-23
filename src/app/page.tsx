
import Button from '@/components/Button'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-250 dark:bg-gray-900">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Meshtastic Türkiye Topluluğu
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            Kablosuz Mesh Ağları ile İnternet Olmadan da Haberleşin, Afetlere Hazırlıklı Olun, Topluluğa Katılın
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Biz Kimiz?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
            Meshtastic Türkiye Topluluğu, kablosuz mesh ağ teknolojilerine ilgi duyan ve bu teknolojiyi Türkiye'de yaygınlaştırmayı 
            hedefleyen gönüllülerden oluşan bir topluluktur.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Amacımız, afet durumlarında ve internet bağlantısının olmadığı yerlerde alternatif iletişim yöntemleri sunmak 
            ve bu konuda farkındalık oluşturmaktır.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Ne Yapıyoruz?</h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-center">
                <span className="h-2 w-2 bg-teal-500 rounded-full mr-2"></span>
                Meshtastic cihazları için rehberler hazırlıyoruz
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-teal-500 rounded-full mr-2"></span>
                Topluluk buluşmaları düzenliyoruz
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-teal-500 rounded-full mr-2"></span>
                Teknik destek sağlıyoruz
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-teal-500 rounded-full mr-2"></span>
                Açık kaynak projelere katkıda bulunuyoruz
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Bize Katılın</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Topluluğumuza katılmak ve projelerimize katkıda bulunmak için:
            </p>
            <Button 
              href="/kilavuz" 
            >
              Kurulum Kılavuzu
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
} 