import React from "react";

const ModuleList = ({ children }) => {
    return (
        <ul className="flex flex-col gap-2 rounded-xl bg-gray-100 p-2 dark:bg-black-400 sm:w-2/3">
            <div className="flex gap-2">
                <p className="w-1/4 rounded-lg bg-gray-200 text-center font-semibold dark:bg-black-300 sm:px-1 sm:py-2 md:text-2xl">
                    Name:
                </p>
                <p className="w-1/4 rounded-lg bg-gray-200 text-center font-semibold dark:bg-black-300 sm:px-1 sm:py-2 md:text-2xl">
                    Actual °C
                </p>
                <p className="w-1/4 rounded-lg bg-gray-200 text-center font-semibold dark:bg-black-300 sm:px-1 sm:py-2 md:text-2xl">
                    Target °C
                </p>
                <p className="w-1/4 rounded-lg bg-gray-200 text-center font-semibold dark:bg-black-300 sm:px-1 sm:py-2 md:text-2xl">
                    Status
                </p>
            </div>
            {children}
        </ul>
    );
};

export default ModuleList;
