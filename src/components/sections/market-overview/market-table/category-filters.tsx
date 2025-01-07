import { Category } from './types';

interface CategoryFiltersProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export function CategoryFilters({ categories, activeCategory, onCategoryChange }: CategoryFiltersProps) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
            activeCategory === category.id
              ? 'bg-gradient-primary text-white'
              : 'bg-white/5 text-gray-400 hover:bg-white/10'
          }`}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}