// src/components/ModuleDetails.js
import React from "react";

const ModuleDetails = ({ module, currentTemp, onEditClick }) => {
    const isTempInRange = Math.abs(currentTemp - module.targetTemperature) <= 0.5;
    const tempColorClass = isTempInRange
        ? "bg-green-100 text-green-500 dark:bg-green-200 dark:text-green-600"
        : "bg-red-100 text-red-500 dark:bg-red-200 dark:text-red-600";

    return (
        <div
            className={`container mx-auto my-6 flex max-w-5xl flex-col items-center justify-center gap-4 rounded-lg bg-gray-200 p-4 dark:bg-black-400 dark:text-white`}
        >
            <h1 className="mb-4 text-center text-4xl font-semibold">{module.name}</h1>
            <div className="container mx-auto flex w-2/3 flex-col justify-between gap-2 rounded-xl bg-gray-100 p-4 dark:bg-black-300 md:flex-row">
                {module.available ? (
                    <div
                        className={`container mx-auto flex flex-col items-center justify-around rounded-lg p-12 text-3xl font-bold md:max-w-56 ${tempColorClass}`}
                    >
                        <p className="text-5xl">Actual:</p>
                        <p className="text-center text-5xl">{currentTemp}°C</p>
                    </div>
                ) : (
                    <div className="container mx-auto flex flex-col items-center justify-around rounded-lg bg-gray-300 p-12 text-3xl font-bold dark:bg-black-200 md:max-w-56">
                        <p className="text-5xl">Actual:</p>
                        <p className="text-center text-5xl">{currentTemp}°C</p>
                    </div>
                )}
                <div className="text-black container mx-auto flex flex-col items-center justify-around rounded-lg bg-white p-12 text-3xl font-bold dark:bg-black-200 dark:text-white md:max-w-56">
                    <p className="text-5xl">Target:</p>
                    <p className="text-center text-5xl">{module.targetTemperature}°C</p>
                </div>
            </div>
            <div className="container mx-auto flex w-2/3 justify-center rounded-lg bg-red-200 p-4 text-3xl dark:bg-black-300">
                <p>{module.description}</p>
            </div>
            <div className="flex items-center justify-center">
                <button
                    disabled={!module.available}
                    className={`mt-4 justify-center rounded-lg p-2 px-8 text-xl ${
                        module.available
                            ? "bg-green-500 text-white hover:bg-green-300"
                            : "cursor-not-allowed bg-gray-300 text-gray-500"
                    }`}
                    onClick={onEditClick}
                >
                    Edit
                </button>
            </div>
        </div>
    );
};

export default ModuleDetails;
