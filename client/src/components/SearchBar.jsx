import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
    return (
        <div className="flex w-1/3 min-w-52 items-center rounded-xl bg-gray-200 p-2 px-2 dark:bg-black-400">
            <FontAwesomeIcon icon={faSearch} className="mr-2 text-gray-500" />
            <input
                className="w-full bg-transparent outline-none"
                placeholder="Search for modules"
                type="text"
                onChange={e => setSearchTerm(e.target.value)}
                value={searchTerm}
            />
        </div>
    );
};

export default SearchBar;
