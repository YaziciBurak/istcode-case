import { Article } from "@/types/article";

export interface ArticleGridProps {
    articles: Article[],
}

export interface CategoryFilterProps {
    categories: string[],
    selectedCategory: string | null,
    onCategorySelect: (category: string | null) => void
}

export interface ArticleContainerProps {
    articles: Article[],
    categories: string[]
}

export interface ArticleSearchProps extends CategoryFilterProps {
    searchTerm: string,
    onSearch: (term: string) => void
}