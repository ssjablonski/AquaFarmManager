import React, { useState, useEffect } from "react";
import {
    LineChart,
    Line,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    XAxis,
    YAxis,
} from "recharts";
import axios from "axios";
import { endOfToday, format, formatISO, startOfToday } from "date-fns";

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip rounded-lg bg-white p-4 dark:bg-black-300">
                <p className="label">{`Time: ${label}`}</p>
                <p className="intro">{`Temperature: ${payload[0].value}°C`}</p>
            </div>
        );
    }

    return null;
};

const ModuleHistory = ({ id }) => {
    const [historyData, setHistoryData] = useState([]);
    const [start, setStart] = useState(formatISO(startOfToday()));
    const [stop, setStop] = useState(formatISO(endOfToday()));
    const [mode, setMode] = useState("hourly");

    useEffect(() => {
        const fetchData = async () => {
            if (start && stop && mode) {
                const formattedStart = formatISO(new Date(start));
                const formattedStop = formatISO(new Date(stop));
                console.log(formattedStart, formattedStop, mode);
                const response = await axios.get(`http://localhost:3001/modules/${id}/history`, {
                    params: { start: formattedStart, stop: formattedStop, mode },
                });
                setHistoryData(response.data);
            }
        };
        fetchData();
    }, [id, start, stop, mode]);

    const handleStartChange = e => setStart(formatISO(new Date(e.target.value)));
    const handleStopChange = e => setStop(formatISO(new Date(e.target.value)));
    const handleModeChange = e => setMode(e.target.value);

    const formatDate = timestamp => {
        const date = new Date(timestamp);
        if (mode === "daily") {
            return format(date, "dd-MM");
        } else {
            return format(date, "HH:mm");
        }
    };

    return (
        <div className="container mx-auto my-12 min-w-72 rounded-xl bg-gray-200 dark:bg-black-400 dark:text-white">
            <div className="mb-4 flex justify-evenly p-4">
                <input
                    type="datetime-local"
                    value={start.substring(0, 16)}
                    onChange={handleStartChange}
                    className="mr-2 rounded-lg border p-2 dark:bg-black-300"
                />
                <input
                    type="datetime-local"
                    value={stop.substring(0, 16)}
                    onChange={handleStopChange}
                    className="mr-2 rounded-lg border p-2 dark:bg-black-300"
                />
                <select
                    value={mode}
                    onChange={handleModeChange}
                    className="rounded-lg border p-2 dark:bg-black-300"
                >
                    <option value="hourly">Hourly</option>
                    <option value="daily">Daily</option>
                </select>
            </div>
            <ResponsiveContainer width="100%" height={400} className={"p-2 dark:text-white"}>
                <LineChart data={historyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="timestamp" tickFormatter={formatDate} />
                    <YAxis />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="temperature"
                        stroke="#08cc55"
                        activeDot={{ r: 8 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ModuleHistory;
