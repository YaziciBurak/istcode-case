import { CategoryFilter } from '../CategoryFilter'
import { ArticleSearchProps } from '@/lib/props' 

export function ArticleHeader({ categories, selectedCategory, onCategorySelect, searchTerm, onSearch}: ArticleSearchProps) {
    return (
        <div className="p-6 border-b border-gray-100">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div className="relative flex-1 w-full sm:max-w-xs">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <input 
                        type="search"
                        value={searchTerm}
                        onChange={(e) => onSearch(e.target.value)}
                        placeholder="Makale Ara..."
                        className="block w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors bg-white/50 backdrop-blur-sm"
                    />
                </div>
            </div>
            
            <CategoryFilter 
                categories={categories}
                selectedCategory={selectedCategory}
                onCategorySelect={onCategorySelect}
            />
        </div>
    )
}