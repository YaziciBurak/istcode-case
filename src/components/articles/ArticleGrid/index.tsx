import { ArticleCard } from "../ArticleCard";
import { ArticleGridProps } from "@/lib/props";

export function ArticleGrid({ articles }: ArticleGridProps) {
return (
    <div className="max-w-7x1 mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols3 xl:grid-cols-4 gap-4">
            {articles.map((article) => (
                <ArticleCard
                key={article.id}
                id={article.id}
                title={article.title}
                description={article.description}
                category={article.category}
                />
            ))}
        </div>
    </div>
)
}