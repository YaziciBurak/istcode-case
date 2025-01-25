import { ArticleCard } from "../ArticleCard";
import { ArticleGridProps } from "@/lib/props";

export function ArticleGrid({ articles }: ArticleGridProps) {
    return (
        <div className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {articles.map((article) => (
                    <ArticleCard
                        key={article.id}
                        {...article}
                    />
                ))}
            </div>
            {articles.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-gray-500">Makale bulunamadı.</p>
                </div>
            )}
        </div>
    )
}