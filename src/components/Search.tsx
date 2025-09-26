import { useState, type FC, type FormEvent } from "react";

interface SearchProps {
  title: string;
  onSearch: (city: string) => void; 
}

const Search: FC<SearchProps> = ({ title, onSearch }) => {
  const [city, setCity] = useState("");

  const changeHandler = (e: FormEvent<HTMLInputElement>) => {
    setCity(e.currentTarget.value);
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (city.trim() === "") {
      onSearch(""); 
      return;
    }

    onSearch(city); 
    setCity(""); 
  };

  return (
    <div className="bg-gray-100 py-12 text-center">
      <div className="max-w-xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">{title}</h1>
        <form
          className="flex flex-col items-center gap-4"
          onSubmit={submitHandler}
        >
          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={changeHandler}
            className="w-full max-w-sm px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="w-full max-w-sm bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
