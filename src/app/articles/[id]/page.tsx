import { getArticles } from "@/lib/articles";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function ArticleDetail({ params}: { params: {id:string}}) {
    const articles = await getArticles()
    const article = articles.find(article => article.id === params.id)

    if(!article) {
        notFound()
    }

    return (
        <main className="min-h-screen bg-gray-50">
            <div className="max-w-4x1 mx-auto px-4 py-8">
                <Link href="/" className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center mb-6">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Ana Sayfaya Dön
                </Link>
                <span className="inline-block text-sm font-medium text-blue-600 mb-4">
                    {article.category}
                </span>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                    {article.title}
                </h1>
                <p className="text-lg text-gray-600">
                    {article.description}
                </p>
            </div>
        </main>
    )
}