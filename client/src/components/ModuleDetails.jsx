import React from "react";

const ModuleDetails = ({ module, currentTemp, onEditClick }) => {
    const isTempInRange = Math.abs(currentTemp - module.targetTemperature) <= 0.5;
    const tempColorClass = isTempInRange
        ? "bg-green-100 text-green-500 dark:bg-green-200 dark:text-green-600"
        : "bg-red-100 text-red-500 dark:bg-red-200 dark:text-red-600";

    return (
        <div className="container mx-auto my-6 flex flex-col items-center justify-center gap-4 rounded-lg bg-gray-200 p-4 dark:bg-black-400 dark:text-white xl:max-w-5xl">
            <h1 className="mb-4 text-center text-4xl font-semibold">{module.name}</h1>
            <div className="container mx-auto flex w-full min-w-60 flex-col gap-2 rounded-xl bg-gray-100 p-4 dark:bg-black-300 lg:flex-row">
                {module.available ? (
                    <div
                        className={`mx-auto flex min-h-52 flex-col items-center justify-around rounded-lg p-12 text-3xl font-bold ${tempColorClass} w-full lg:w-1/2`}
                    >
                        <p className="text-5xl">Actual:</p>
                        <p className="text-center text-5xl">{currentTemp}°C</p>
                    </div>
                ) : (
                    <div className="mx-auto flex min-h-52 w-full min-w-5 flex-col items-center justify-around rounded-lg bg-gray-300 p-12 text-3xl font-bold dark:bg-black-200 lg:w-1/2">
                        <p className="text-5xl">Actual:</p>
                        <p className="text-center text-5xl">-°C</p>
                    </div>
                )}
                <div className="text-black mx-auto flex min-h-52 w-full min-w-5 flex-col items-center justify-around rounded-lg bg-white p-12 text-3xl font-bold dark:bg-black-200 dark:text-white lg:w-1/2">
                    <p className="text-5xl">Target:</p>
                    <p className="text-center text-5xl">{module.targetTemperature}°C</p>
                </div>
            </div>
            <div className="container mx-auto flex w-full justify-center rounded-lg bg-gray-100 p-4 text-xl dark:bg-black-300 lg:text-2xl">
                <p>{module.description}</p>
            </div>
            <p
                className={`text-center text-4xl font-semibold ${module.available ? "text-green-500" : "text-red-500"}`}
            >
                {module.available ? "AVAILABLE" : "NOT AVAILABLE"}
            </p>
            <div className="flex items-center justify-center">
                <button
                    disabled={!module.available}
                    className={`mt-2 justify-center rounded-lg p-2 px-8 text-xl ${
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
