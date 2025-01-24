import { CategoryFilter } from '../CategoryFilter'
import { ArticleSearchProps } from '@/lib/props' 

export function ArticleHeader({ categories, selectedCategory,onCategorySelect,searchTerm,onSearch}:ArticleSearchProps) {
    return (
        <div className="bg-gray-300 border-b">
            <div className="max-w-7xl mx-auto px-4 py-6">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-semibold text-gray-900">Makaleler</h1>
                    <input 
                        type="search"
                        value={searchTerm}
                        onChange={(e) => onSearch(e.target.value)}
                        placeholder="Makale Ara"
                        className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
    
                </div>
                
                <CategoryFilter 
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onCategorySelect={onCategorySelect}
                />
            </div>
        </div>
    )
}