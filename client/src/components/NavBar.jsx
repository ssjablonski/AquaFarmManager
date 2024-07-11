import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { useNavigate } from "react-router";

const NavBar = () => {
    const { toggleTheme } = useContext(ThemeContext);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    };

    return (
        <div className="dark:bg-black-600 flex cursor-pointer items-center justify-between bg-white p-2 px-10 shadow-md">
            <h1
                onClick={handleClick}
                className="dark:hover:bg-black-400 rounded-lg p-2 text-xl font-semibold text-black hover:bg-gray-200 dark:text-white"
            >
                AquaFarm
            </h1>
            <button
                onClick={toggleTheme}
                className="rounded-lg bg-green-300 p-3 px-2 hover:bg-green-200 dark:bg-green-500 dark:text-white dark:hover:bg-green-400"
            >
                Dark Mode
            </button>
        </div>
    );
};

export default NavBar;
