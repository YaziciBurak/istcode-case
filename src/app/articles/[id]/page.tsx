import { getArticles } from "@/lib/articles";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Footer } from '@/components/Footer'

const CATEGORY_IMAGE_MAP: Record<string, number> = {
    'teknoloji': 1,
    'bilim': 2,
    'sanat': 3,
    'felsefe': 4
}

export default async function ArticleDetail({ params}: { params: {id:string}}) {
    const articles = await getArticles()
    const article = articles.find(article => article.id === params.id)

    if(!article) {
        notFound()
    }

    const suggestedArticles = articles
        .filter(a => a.id !== article.id)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)

    const collectionId = CATEGORY_IMAGE_MAP[article.category.toLowerCase()] || 1

    return (
        <>
            <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
                <div className="bg-gradient-radial from-primary-50 to-white">
                    <div className="max-w-4xl mx-auto px-4 py-12">
                        <Link 
                            href="/" 
                            className="inline-flex items-center text-sm text-primary-600 hover:text-primary-700 font-medium mb-8 group bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm"
                        >
                            <svg className="w-4 h-4 mr-1 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Ana Sayfaya Dön
                        </Link>
                        
                        <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-8 space-y-6 border border-gray-100">
                            <div className="flex items-center space-x-2">
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                                    {article.category}
                                </span>
                                <span className="h-1.5 w-1.5 rounded-full bg-gray-300"></span>
                                <span className="text-sm text-gray-500">5 dk okuma</span>
                            </div>
                            
                            <h1 className="text-4xl font-bold text-gray-900 leading-tight">
                                {article.title}
                            </h1>

                            <div className="relative h-[400px] w-full rounded-xl overflow-hidden">
                                <Image
                                    src={`https://picsum.photos/seed/${article.id}/1600/900?collection=${collectionId}`}
                                    alt={article.title}
                                    fill
                                    priority
                                    className="object-cover"
                                />
                            </div>

                            <p className="text-xl text-gray-600 leading-relaxed">
                                {article.description}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto px-4 py-12">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">
                            Önerilen Makaleler
                        </h2>
                        <Link 
                            href="/"
                            className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                        >
                            Tümünü Gör →
                        </Link>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {suggestedArticles.map((suggestedArticle) => (
                            <Link 
                                key={suggestedArticle.id} 
                                href={`/articles/${suggestedArticle.id}`}
                                className="group"
                            >
                                <div className="h-full bg-gradient-card rounded-xl shadow-sm p-6 border border-gray-100 
                                             transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                                    <div className="relative h-40 w-full mb-4 rounded-lg overflow-hidden">
                                        <Image
                                            src={`https://picsum.photos/seed/${suggestedArticle.id}/800/400?collection=${CATEGORY_IMAGE_MAP[suggestedArticle.category.toLowerCase()] || 1}`}
                                            alt={suggestedArticle.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-50 text-primary-700 mb-4 group-hover:bg-primary-100">
                                        {suggestedArticle.category}
                                    </span>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                                        {suggestedArticle.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm line-clamp-2">
                                        {suggestedArticle.description}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}