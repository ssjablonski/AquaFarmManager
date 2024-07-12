import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";

const ModuleTile = ({ id, name, targetTemp, available }) => {
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
        <div
            onClick={handleClick}
            className="min-w-72 cursor-pointer rounded-lg bg-gray-200 p-4 shadow-lg dark:bg-black-400"
        >
            <h2 className="p-2 text-center text-2xl font-semibold">{name}</h2>
            <div className="mt-2 flex justify-between gap-2">
                {available ? (
                    <div
                        className={`flex flex-col items-center justify-around rounded-lg p-4 text-3xl font-bold ${tempColorClass} min-h-32 min-w-32`}
                    >
                        <p className="text-2xl">Actual:</p>
                        <p className="text-center">{currentTemp}°C</p>
                    </div>
                ) : (
                    <div className="flex min-h-32 min-w-32 flex-col items-center justify-around rounded-lg bg-gray-300 p-4 text-3xl font-bold dark:bg-black-200">
                        <p className="text-2xl">Actual:</p>
                        <p className="text-center">-°C</p>
                    </div>
                )}
                <div className="text-black flex min-h-32 min-w-32 flex-col items-center justify-around rounded-lg bg-white p-4 text-3xl font-bold dark:bg-black-300 dark:text-white">
                    <p className="text-2xl">Target:</p>
                    <p className="text-center">{targetTemp}°C</p>
                </div>
            </div>
            <p
                className={`mt-2 text-center text-2xl font-semibold ${available ? "text-green-500" : "text-red-500"}`}
            >
                {available ? "AVAILABLE" : "NOT AVAILABLE"}
            </p>
        </div>
    );
};

export default ModuleTile;
