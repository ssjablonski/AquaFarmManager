import React, { useEffect, useState } from "react";
import ModuleTile from "../../components/ModuleTile";
import ModuleAvailbilityChart from "../../components/ModuleAvailabilityChart";
import Modal from "../../components/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartPie, faListUl, faTableCells } from "@fortawesome/free-solid-svg-icons";
import ModuleElement from "../../components/ModuleElement";
import ModuleList from "../../components/ModuleList";

async function getModules() {
    const res = await fetch("http://localhost:3001/modules");
    const data = await res.json();
    return data;
}

function Dashboard() {
    const [modules, setModules] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [view, setView] = useState("tiles");
    const [activeButton, setActiveButton] = useState("tiles");

    useEffect(() => {
        async function fetchData() {
            const modulesData = await getModules();
            setModules(modulesData);
        }

        fetchData();
    }, []);

    const availableModules = modules.filter(module => module.available).length;
    const unavailableModules = modules.length - availableModules;

    const data = [
        { name: "Available", value: availableModules },
        { name: "Not Available", value: unavailableModules },
    ];

    return (
        <div className="container mx-auto my-6 flex flex-col items-center gap-4">
            <div className="container mx-auto flex justify-end px-10">
                <div className="flex">
                    <button
                        onClick={() => {
                            setView("tiles");
                            setActiveButton("tiles");
                        }}
                        className={`${
                            activeButton === "tiles"
                                ? "bg-green-400 dark:bg-green-500"
                                : "bg-gray-300 dark:bg-black-300"
                        } rounded-l-lg p-2 px-4 text-2xl`}
                    >
                        <FontAwesomeIcon icon={faTableCells} />
                    </button>
                    <button
                        onClick={() => {
                            setView("list");
                            setActiveButton("list");
                        }}
                        className={`${activeButton === "list" ? "bg-green-400 dark:bg-green-500" : "bg-gray-300 dark:bg-black-300"} rounded-r-lg p-2 px-4 text-2xl`}
                    >
                        <FontAwesomeIcon icon={faListUl} />
                    </button>
                </div>
            </div>
            {view === "list" ? (
                <ModuleList>
                    {modules.map(module => (
                        <ModuleElement
                            key={module.id}
                            id={module.id}
                            name={module.name}
                            targetTemp={module.targetTemperature}
                            available={module.available}
                        />
                    ))}
                </ModuleList>
            ) : (
                <div className="grid grid-cols-1 justify-center gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                    {modules.map(module => (
                        <ModuleTile
                            key={module.id}
                            id={module.id}
                            name={module.name}
                            targetTemp={module.targetTemperature}
                            available={module.available}
                        />
                    ))}
                </div>
            )}
            <div>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center rounded-lg bg-green-400 p-4 hover:bg-green-300 dark:bg-green-500 dark:text-white dark:hover:bg-green-400"
                >
                    <p className="text-lg font-semibold">View Stats</p>
                    <FontAwesomeIcon icon={faChartPie} className="ml-2" />
                </button>
            </div>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <ModuleAvailbilityChart data={data} />
            </Modal>
        </div>
    );
}

export default Dashboard;
