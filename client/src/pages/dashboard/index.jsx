import React, { useEffect, useState } from "react";
import ModuleTile from "../../components/ModuleTile";
import ModuleAvailbilityChart from "../../components/ModuleAvailabilityChart";
import Modal from "../../components/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartPie, faListUl, faTableCells } from "@fortawesome/free-solid-svg-icons";
import ModuleElement from "../../components/ModuleElement";
import ModuleList from "../../components/ModuleList";
import SearchBar from "../../components/SearchBar";

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
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        async function fetchData() {
            const modulesData = await getModules();
            setModules(modulesData);
        }

        fetchData();
    }, []);

    const filteredModules = modules.filter(module =>
        module.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    const availableModules = filteredModules.filter(module => module.available).length;
    const unavailableModules = filteredModules.length - availableModules;

    const data = [
        { name: "Available", value: availableModules },
        { name: "Not Available", value: unavailableModules },
    ];

    return (
        <div className="container mx-auto flex flex-col items-center gap-2 py-6">
            <div className="grid w-3/4 gap-2 sm:w-4/5 sm:grid-cols-3 md:w-2/3">
                <div className="hidden sm:block"></div>
                <div className="col-span-3 flex justify-center sm:col-span-1">
                    <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                </div>
                <div className="col-span-3 flex justify-end px-2 sm:col-span-1">
                    <button
                        onClick={() => {
                            setView("tiles");
                            setActiveButton("tiles");
                        }}
                        className={`${
                            activeButton === "tiles"
                                ? "bg-green-400 dark:bg-green-500"
                                : "bg-gray-300 dark:bg-black-300"
                        } rounded-l-lg p-2 px-4 text-lg md:text-2xl`}
                    >
                        <FontAwesomeIcon icon={faTableCells} />
                    </button>
                    <button
                        onClick={() => {
                            setView("list");
                            setActiveButton("list");
                        }}
                        className={`${
                            activeButton === "list"
                                ? "bg-green-400 dark:bg-green-500"
                                : "bg-gray-300 dark:bg-black-300"
                        } rounded-r-lg p-2 px-4 text-lg md:text-2xl`}
                    >
                        <FontAwesomeIcon icon={faListUl} />
                    </button>
                </div>
            </div>
            {view === "list" ? (
                <ModuleList>
                    {filteredModules.map(module => (
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
                    {filteredModules.map(module => (
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
