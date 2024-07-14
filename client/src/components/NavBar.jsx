import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
    const { toggleTheme } = useContext(ThemeContext);
    const navigate = useNavigate();
    const theme = useContext(ThemeContext);
    console.log(theme.theme);

    const handleClick = () => {
        navigate("/");
    };

    return (
        <div className="flex cursor-pointer items-center justify-between bg-white p-2 px-10 shadow-md dark:bg-black-600">
            <h1
                onClick={handleClick}
                className="text-black rounded-lg p-2 text-xl font-semibold hover:bg-gray-200 dark:text-white dark:hover:bg-black-400"
            >
                AquaFarm
            </h1>
            {theme.theme === "dark" ? (
                <button
                    onClick={toggleTheme}
                    className="min-w-12 rounded-lg bg-green-400 p-3 px-4 hover:bg-green-300 dark:bg-green-500 dark:hover:bg-green-400"
                >
                    <FontAwesomeIcon icon={faSun} />
                </button>
            ) : (
                <button
                    onClick={toggleTheme}
                    className="min-w-12 rounded-lg bg-green-400 p-3 px-4 hover:bg-green-300 dark:bg-green-500 dark:text-white dark:hover:bg-green-400"
                >
                    <FontAwesomeIcon icon={faMoon} />
                </button>
            )}
        </div>
    );
};

export default NavBar;
