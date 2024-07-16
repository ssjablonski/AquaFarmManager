import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ModuleDetails = ({ module, currentTemp, onEditClick }) => {
    const isTempInRange = Math.abs(currentTemp - module.targetTemperature) <= 0.5;
    const tempColorClass = isTempInRange
        ? "bg-green-100 text-green-500 dark:bg-green-200 dark:text-green-600"
        : "bg-red-100 text-red-500 dark:bg-red-200 dark:text-red-600";

    return (
        <div className="container mx-auto my-6 flex flex-col items-center justify-center gap-4 rounded-lg bg-gray-200 p-4 dark:bg-black-400 dark:text-white">
            <h1 className="text-center text-2xl font-semibold sm:text-3xl">{module.name}</h1>
            <div className="container flex w-full flex-row justify-evenly gap-2 rounded-xl bg-gray-100 p-2 dark:bg-black-300 lg:p-6">
                {module.available ? (
                    <div
                        className={`flex w-1/3 flex-col items-center justify-around rounded-lg p-4 text-2xl font-bold sm:py-12 md:text-5xl lg:w-2/3 ${tempColorClass}`}
                    >
                        <p>Actual:</p>
                        <p>{currentTemp}°C</p>
                    </div>
                ) : (
                    <div className="flex w-1/3 flex-col items-center justify-around rounded-lg bg-gray-300 p-4 text-2xl font-bold dark:bg-black-200 sm:py-12 md:text-5xl lg:w-2/3">
                        <p>Actual:</p>
                        <p>-°C</p>
                    </div>
                )}
                <div className="text-black flex w-1/3 flex-col items-center justify-around rounded-lg bg-white p-4 text-2xl font-bold dark:bg-black-100 dark:text-white sm:py-12 md:text-5xl lg:w-2/3">
                    <p>Target:</p>
                    <p>{module.targetTemperature}°C</p>
                </div>
            </div>
            <div className="flex w-full justify-center rounded-lg bg-gray-100 p-4 text-xl dark:bg-black-300 lg:text-2xl">
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
                            : "cursor-not-allowed bg-gray-100 text-gray-500 dark:bg-black-100"
                    }`}
                    onClick={onEditClick}
                >
                    Edit
                </button>
            </div>
            {!module.available ? (
                <div className="flex w-full items-center rounded-xl bg-gray-300 p-2 dark:bg-black-300 sm:w-1/2">
                    <FontAwesomeIcon
                        icon={faCircleInfo}
                        className="pr-2 text-3xl text-gray-600 dark:text-white"
                    />
                    <p className="text-center text-gray-600 dark:text-white">
                        You cannot edit this module. Click the logo to return to the main page.
                    </p>
                </div>
            ) : null}
        </div>
    );
};

export default ModuleDetails;
