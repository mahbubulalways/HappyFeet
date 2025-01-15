"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";

const SearchOption = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleClickToSearch = () => {
    if (searchQuery.trim() === "") {
      return;
    }
    const params = new URLSearchParams(searchParams as any);
    const query = searchQuery.trim().split(" ").join("-");
    params.set("value", query);
    // Navigate to the search route with the query param
    router.replace(`/search?${params.toString()}`);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleClickToSearch();
    }
  };

  return (
    <div className="relative flex items-center">
      <input
        type="search"
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={handleKeyPress}
        className="bg-[#333333] focus:outline-none py-2 w-[300px] px-5 pr-10 rounded-full text-white"
        placeholder="Search"
      />
      <div className="absolute right-3 cursor-pointer flex items-center justify-center">
        <IoIosSearch
          onClick={handleClickToSearch}
          className="h-6 w-6 text-white"
        />
      </div>
    </div>
  );
};

export default SearchOption;
