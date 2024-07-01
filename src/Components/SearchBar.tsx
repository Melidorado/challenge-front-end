import React from "react";

interface Props {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

function SearchBar({ search, setSearch }: Props) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <form
      className={`flex flex-row ${search && "w-[40%] sm:w-full"}`}
      onSubmit={handleSubmit}
    >
      <button className="rounded-l-lg px-4 py-2 bg-actionButton my-4">
        <svg
          className="h-8 w-8 text-white sm:h-4 sm:w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
      <input
        className={`my-4 bg-white rounded-r-lg px-4 py-2 w-full text-[#273a57] font-Montserrat-Medium text-[18px] focus:outline-none focus:ring-2 focus:ring-[#337dc1] focus:ring-opacity-50 sm:text-[14px] ${
          search ? "border-solid border-[0.5px] border-black" : "border-none"
        }`}
        value={search}
        type="text"
        name="search"
        onChange={handleChange}
        placeholder="I'm looking for..."
      />
    </form>
  );
}

export default SearchBar;
