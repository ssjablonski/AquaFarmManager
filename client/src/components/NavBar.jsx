import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const NavBar = () => {
    const { toggleTheme } = useContext(ThemeContext);

    return (
        <div className="dark:bg-black-600 flex items-center justify-between bg-white p-4 px-6 shadow-md">
            <h1 className="text-xl font-semibold text-black dark:text-white">AquaFarm</h1>
            <button
                onClick={toggleTheme}
                className="rounded-lg bg-green-300 p-4 px-2 dark:bg-green-500 dark:text-white"
            >
                Dark Mode
            </button>
        </div>
    );
};

export default NavBar;
