import React, { useEffect, useState } from "react";
import ModuleTile from "../../components/ModuleTile";
import ModuleAvailbilityChart from "../../components/ModuleAvailabilityChart";
import Modal from "../../components/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartPie } from "@fortawesome/free-solid-svg-icons";

async function getModules() {
    const res = await fetch("http://localhost:3001/modules");
    const data = await res.json();
    return data;
}

function Dashboard() {
    const [modules, setModules] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

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
            <div>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="rounded-lg bg-green-400 p-4 hover:bg-green-300 dark:bg-green-500 dark:text-white dark:hover:bg-green-400"
                >
                    View Stats
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
