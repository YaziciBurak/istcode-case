import { getArticles } from '@/lib/articles'
import { ArticleContainer } from '@/components/articles/ArticleContainer'

async function getData() {
  const articles = await getArticles()
  const categories = Array.from(new Set(articles.map(article => article.category)))
  return { articles, categories }
}

export default async function Home() {
  const { articles, categories } = await getData()

  return (
    <main className="min-h-screen bg-gray-50">
      <ArticleContainer articles={articles} categories={categories} />
    </main>
  )
}

