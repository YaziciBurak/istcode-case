import { CategoryFilterProps } from "@/lib/props";

export function CategoryFilter({ categories, selectedCategory, onCategorySelect }: CategoryFilterProps) {
    return (
        <div className="mt-4 flex gap-2 flex-wrap">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => onCategorySelect(selectedCategory === category ? null : category)}
                    className={`px-3 py-1 text-sm rounded-full transition-colors ${
                        selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-600 bg-gray-100 hover:bg-gray-200'
                    }`}
                >
                    {category}
                </button>
            ))}
        </div>
    )
}