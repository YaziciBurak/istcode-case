import { getArticles } from '@/lib/articles'
import { ArticleContainer } from '@/components/articles/ArticleContainer'
import { Footer } from '@/components/Footer'

async function getData() {
  const articles = await getArticles()
  const categories = Array.from(new Set(articles.map(article => article.category)))
  return { articles, categories }
}

export default async function Home() {
  const { articles, categories } = await getData()

  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <div className="bg-gradient-radial from-primary-50 to-white">
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center space-x-2 mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                  Blog
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-gray-300"></span>
                <span className="text-sm text-gray-500">{articles.length} makale</span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Makaleler
              </h1>
              <p className="text-xl text-gray-600">
                Teknoloji, bilim, sanat ve felsefe üzerine ilgi çekici makaleler
              </p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-4 -mt-8">
          <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100">
            <ArticleContainer articles={articles} categories={categories} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

