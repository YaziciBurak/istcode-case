import { CategoryFilterProps } from "@/lib/props";

export function CategoryFilter({ categories, selectedCategory, onCategorySelect }: CategoryFilterProps) {
    return (
        <div className="flex gap-2 flex-wrap">
            <button
                onClick={() => onCategorySelect(null)}
                className={`px-4 py-2 text-sm rounded-full transition-all duration-200 ${
                    selectedCategory === null
                    ? 'bg-primary-100 text-primary-800 shadow-sm'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
            >
                Tümü
            </button>
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => onCategorySelect(selectedCategory === category ? null : category)}
                    className={`px-4 py-2 text-sm rounded-full transition-all duration-200 ${
                        selectedCategory === category
                        ? 'bg-primary-100 text-primary-800 shadow-sm'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                >
                    {category}
                </button>
            ))}
        </div>
    )
}