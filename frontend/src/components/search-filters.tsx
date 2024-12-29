interface SearchFiltersProps {
  search: string;
  onSearchChange: (value: string) => void;
}

export default function SearchFilters({
  search,
  onSearchChange,
}: SearchFiltersProps) {
  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4 sticky top-4 z-10">
      <div className="relative">
        <input
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search users..."
          className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4989a7] focus:border-transparent"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          <svg
            className="h-5 w-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
