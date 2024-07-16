import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { io } from "socket.io-client";

const ModuleElement = ({ id, name, targetTemp, available }) => {
    const [currentTemp, setCurrentTemp] = useState(targetTemp);
    const navigate = useNavigate();

    useEffect(() => {
        const socket = io("http://localhost:3001", { transports: ["websocket"] });

        socket.on("moduleUpdate", data => {
            const moduleData = data.find(module => module.id === id);
            if (moduleData) {
                setCurrentTemp(moduleData.temperature);
            }
        });

        return () => {
            socket.disconnect();
        };
    }, [id]);

    const handleClick = () => {
        navigate(`/module/${id}`);
    };

    const isTempInRange = Math.abs(currentTemp - targetTemp) <= 0.5;
    const tempColorClass = isTempInRange
        ? "bg-green-100 text-green-500 dark:bg-green-200 dark:text-green-600"
        : "bg-red-100 text-red-500 dark:bg-red-200 dark:text-red-600";

    return (
        <li
            className="flex flex-row items-center justify-between gap-2 rounded-xl bg-gray-200 hover:cursor-pointer dark:bg-black-300 xl:p-2"
            key={id}
            onClick={handleClick}
        >
            <h2 className="sm:text-md w-full text-center text-sm font-semibold sm:w-1/4 md:text-lg lg:text-2xl">
                {name}
            </h2>
            <div className="flex w-full flex-row justify-center gap-4 p-1 sm:w-2/4">
                {available ? (
                    <div
                        className={`text-md flex flex-col items-center rounded-lg p-2 font-bold md:text-2xl lg:text-3xl ${tempColorClass} w-full min-w-16 sm:w-1/2`}
                    >
                        <p className="text-center">{currentTemp}°C</p>
                    </div>
                ) : (
                    <div className="text-md flex w-full min-w-16 flex-col items-center rounded-lg bg-gray-300 p-2 font-bold dark:bg-black-200 sm:w-1/2 md:text-2xl lg:text-3xl">
                        <p className="text-center">-°C</p>
                    </div>
                )}
                <div className="text-md flex w-full min-w-16 flex-col items-center rounded-lg bg-white p-2 font-bold dark:bg-black-400 dark:text-white sm:w-1/2 md:text-2xl lg:text-3xl">
                    <p className="text-center">{targetTemp}°C</p>
                </div>
            </div>
            <div
                className={`sm:text-md w-full text-center text-sm font-semibold sm:w-1/4 md:text-xl lg:text-2xl xl:text-3xl ${available ? "text-green-500" : "text-red-500"}`}
            >
                <p>{available ? "AVAILABLE" : "NOT AVAILABLE"}</p>
            </div>
        </li>
    );
};

export default ModuleElement;
