import { Article } from "@/types/article";
import Link from "next/link";

export function ArticleCard({ id,title, description, category}: Article) {
    return (
        <article className="bg-white rounded-lg border hover:border-gray-600 hover:scale-105 transition-all duration-500">
            <div className="p-4 flex flex-col h-full">
                <span className="inline-block text-xs font-medium text-blue-600 mb-2">
                    {category}
                </span>
                <h2 className="text-lg font-semibold text-gray-900 mb-1">{title}</h2>
                <p className="text-gray-600 mb-4">{description}</p>
                <div className="mt-auto">
                <Link 
                        href={`/articles/${id}`} 
                        className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center"
                    >
                        Devamını Oku
                        <svg className="w-4 h-4 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </article>
    )
}