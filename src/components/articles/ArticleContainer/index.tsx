'use client'

import { ArticleHeader } from '../ArticleHeader'
import { ArticleGrid } from '../ArticleGrid'
import { useState } from 'react'
import { ArticleContainerProps } from '@/lib/props'

export function ArticleContainer({ articles, categories }: ArticleContainerProps) {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
    const [searchTerm, setSearchTerm] = useState('')

    const filteredArticles = articles.filter(article => {
        const categoryMatch = selectedCategory ? article.category === selectedCategory : true
        const searchMatch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) 
        || article.description.toLowerCase().includes(searchTerm.toLowerCase())

        return categoryMatch && searchMatch
    })

    return (
        <>
            <ArticleHeader 
                categories={categories} 
                selectedCategory={selectedCategory}
                onCategorySelect={setSelectedCategory}
                searchTerm={searchTerm}
                onSearch={setSearchTerm}
            />
            <ArticleGrid articles={filteredArticles} />
        </>
    )
} 