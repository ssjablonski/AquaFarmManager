import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
    return (
        <div className="flex w-1/2 min-w-44 items-center rounded-xl bg-gray-200 p-2 px-2 dark:bg-black-400 md:w-full">
            <FontAwesomeIcon icon={faSearch} className="px-3 text-gray-500" />
            <input
                className="w-full bg-transparent outline-none"
                placeholder="Search modules"
                type="text"
                onChange={e => setSearchTerm(e.target.value)}
                value={searchTerm}
            />
        </div>
    );
};

export default SearchBar;
