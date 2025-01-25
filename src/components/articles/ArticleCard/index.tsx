import { Article } from "@/types/article";
import Link from "next/link";
import Image from "next/image";


const CATEGORY_IMAGE_MAP: Record<string, number> = {
    'teknoloji': 1, 
    'bilim': 2,      
    'sanat': 3,      
    'felsefe': 4     
}

export function ArticleCard({ id, title, description, category}: Article) {
    const collectionId = CATEGORY_IMAGE_MAP[category.toLowerCase()] || 1

    return (
        <Link 
            href={`/articles/${id}`}
            className="group block h-full"
        >
            <article className="h-full bg-gradient-card rounded-xl shadow-sm border border-gray-100 
                            transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden">
                <div className="relative h-48 w-full">
                    <Image
                        src={`https://picsum.photos/seed/${id}/800/400?collection=${collectionId}`}
                        alt={title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                </div>
                <div className="p-6">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-50 text-primary-700 mb-4 group-hover:bg-primary-100">
                        {category}
                    </span>
                    <h2 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                        {title}
                    </h2>
                    <p className="text-gray-600 text-sm line-clamp-2">
                        {description}
                    </p>
                    <div className="mt-4 flex items-center text-sm text-primary-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        Devamını Oku
                        <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>
            </article>
        </Link>
    )
}