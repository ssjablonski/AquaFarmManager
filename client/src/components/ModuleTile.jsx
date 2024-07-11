import React from "react";

const ModuleTile = ({ name, targetTemp, available }) => {
    return (
        <div
            // sm:text-blue-200 md:text-yellow-400 lg:text-pink-400 xl:text-purple-400
            className={`flex min-h-32 w-full min-w-80 max-w-80 rounded-lg p-2 dark:text-white ${
                available
                    ? "bg-gradient-to-r from-green-100 to-green-500 dark:bg-gradient-to-r dark:from-green-300 dark:to-green-700"
                    : "bg-gradient-to-r from-red-100 to-red-600 dark:bg-gradient-to-r dark:from-red-300 dark:to-red-600"
            }`}
        >
            <div className="flex w-3/5 flex-col px-4">
                <h1 className="py-2 text-2xl font-semibold">{name}</h1>
                {available ? (
                    <p className="text-xl font-semibold">AVAILABLE</p>
                ) : (
                    <p className="text-xl font-semibold">NOT AVAILABLE</p>
                )}
            </div>
            <div
                className={`flex w-2/5 flex-col items-center justify-center rounded-lg p-6 md:w-2/5 ${
                    available ? "bg-green-100 dark:bg-green-200" : "bg-red-100 dark:bg-red-200"
                }`}
            >
                <p className="text-5xl font-semibold">{targetTemp}</p>
            </div>
        </div>
    );
};

export default ModuleTile;
