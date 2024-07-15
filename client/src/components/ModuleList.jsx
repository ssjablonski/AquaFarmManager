import React from "react";

const ModuleList = ({ children }) => {
    return (
        <ul className="container mx-auto flex flex-col justify-center gap-4 rounded-xl bg-gray-100 p-3 dark:bg-black-400 sm:w-4/5">
            <div className="*:text-md flex justify-between gap-2 *:w-1/4 *:rounded-lg *:bg-gray-200 *:text-center *:font-semibold *:dark:bg-black-300 *:md:text-2xl">
                <p>Name:</p>
                <p>Actual temp:</p>
                <p>Target temp:</p>
                <p>Status:</p>
            </div>
            {children}
        </ul>
    );
};

export default ModuleList;
