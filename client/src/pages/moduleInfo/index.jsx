import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "../../components/Modal";
import EditModuleForm from "../../components/EditModuleForm";

async function getModule(id) {
    const res = await fetch(`http://localhost:3001/modules/${id}`);
    const data = await res.json();
    return data;
}

const ModuleInfo = () => {
    const { id } = useParams();
    const [module, setModule] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const moduleData = await getModule(id);
            setModule(moduleData);
        }

        fetchData();
    }, [id]);

    if (!module) {
        return <div>Loading...</div>;
    }

    const handleFormSubmit = values => {
        // Handle form submission
        console.log(values);
        setIsModalOpen(false);
    };

    return (
        <div
            className={`container mx-auto my-6 flex max-w-4xl flex-col rounded-lg p-10 text-gray-800 ${
                module.available
                    ? "bg-gradient-to-r from-green-100 to-green-500 dark:bg-gradient-to-r dark:from-green-300 dark:to-green-700"
                    : "bg-gradient-to-r from-red-100 to-red-600 dark:bg-gradient-to-r dark:from-red-300 dark:to-red-600"
            }`}
        >
            <h1 className="mb-6 text-center text-4xl font-semibold">{module.name}</h1>
            <div className="flex flex-col justify-between space-y-6 py-6 md:flex-row md:space-x-6 md:space-y-0">
                <div
                    className={`space-y-4 rounded-lg p-6 md:w-1/2 ${
                        module.available
                            ? "bg-green-100 dark:bg-green-200"
                            : "bg-red-100 dark:bg-red-200"
                    }`}
                >
                    <p className="text-lg">{module.description}</p>
                </div>
                <div
                    className={`flex flex-col items-center justify-center rounded-lg md:w-1/2 ${
                        module.available
                            ? "bg-green-100 dark:bg-green-200"
                            : "bg-red-100 dark:bg-red-200"
                    }`}
                >
                    <p className="text-2xl font-bold">TARGET TEMPERATURE:</p>
                    <p className="text-8xl font-semibold">{module.targetTemperature}</p>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <button
                    disabled={!module.available}
                    className={`w-1/4 justify-center rounded-lg p-2 px-8 text-xl ${
                        module.available
                            ? "bg-black-400 hover:bg-black-300 text-gray-300"
                            : "cursor-not-allowed bg-gray-200 text-gray-500"
                    }`}
                    onClick={() => setIsModalOpen(true)}
                >
                    Edit
                </button>
            </div>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <EditModuleForm
                    initialValues={{
                        name: module.name,
                        description: module.description,
                        targetTemperature: module.targetTemperature,
                    }}
                    onSubmit={handleFormSubmit}
                    onClose={() => setIsModalOpen(false)}
                />
            </Modal>
        </div>
    );
};

export default ModuleInfo;
