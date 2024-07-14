import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { io } from "socket.io-client";

const ModuleList = ({ id, name, targetTemp, available }) => {
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
            className="flex min-w-min flex-row items-center justify-between gap-2 rounded-xl bg-gray-200 p-2 hover:cursor-pointer dark:bg-black-400 sm:bg-red-200 md:bg-yellow-200 lg:bg-green-200 xl:bg-blue-200 2xl:bg-purple-200"
            key={id}
            onClick={handleClick}
        >
            <h2 className="w-1/3 text-center text-2xl font-semibold">{name}</h2>
            <div className="flex w-2/3 justify-center gap-4">
                {available ? (
                    <div
                        className={`mx-auto flex flex-col items-center rounded-lg p-2 text-3xl font-bold ${tempColorClass} w-full min-w-28`}
                    >
                        <p className="text-2xl">Actual:</p>
                        <p className="text-center">{currentTemp}°C</p>
                    </div>
                ) : (
                    <div className="mx-auto flex w-full min-w-28 flex-col items-center rounded-lg bg-gray-300 p-2 text-3xl font-bold dark:bg-black-200">
                        <p className="text-2xl">Actual:</p>
                        <p className="text-center">-°C</p>
                    </div>
                )}
                <div className="mx-auto flex w-full min-w-28 flex-col items-center rounded-lg bg-white p-2 text-3xl font-bold dark:bg-black-300 dark:text-white">
                    <p className="text-2xl">Target:</p>
                    <p className="text-center">{targetTemp}°C</p>
                </div>
            </div>
        </li>
    );
};

export default ModuleList;
