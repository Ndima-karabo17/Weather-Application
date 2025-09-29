import { type FC } from 'react';

interface SearchHistoryProps {
  history: string[];
  onSearch: (city: string) => void;
}

const SearchHistory: FC<SearchHistoryProps> = ({ history, onSearch }) => {
  if (history.length === 0) return null;

  return (
    <div className="my-4">
      <h3 className="text-lg font-semibold mb-2 dark:text-gray-300">Search History</h3>
      <ul className="flex flex-wrap gap-2">
        {history.map((city) => (
          <li key={city}>
            <button
              onClick={() => onSearch(city)}
              className="px-3 py-1 rounded bg-blue-200 dark:bg-blue-700 text-blue-900 dark:text-blue-100 hover:bg-blue-300 dark:hover:bg-blue-600 transition"
              aria-label={`Search for ${city}`}
            >
              {city}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchHistory;
