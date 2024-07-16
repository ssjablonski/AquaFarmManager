import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "../../components/Modal";
import EditModuleForm from "../../components/EditModuleForm";
import ModuleDetails from "../../components/ModuleDetails";
import { io } from "socket.io-client";
import axios from "axios";
import ModuleHistory from "../../components/ModuleHistory";

async function getModule(id) {
    const res = await fetch(`http://localhost:3001/modules/${id}`);
    const data = await res.json();
    return data;
}

const ModuleInfo = () => {
    const { id } = useParams();
    const [module, setModule] = useState(null);
    const [currentTemp, setCurrentTemp] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const moduleData = await getModule(id);
            setModule(moduleData);
        }

        fetchData();
    }, [id, isModalOpen]);

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

    if (!module) {
        return <div>Loading...</div>;
    }

    const handleFormSubmit = async values => {
        await axios.patch(`http://localhost:3001/modules/${id}`, values);
        setIsModalOpen(false);
    };

    return (
        <div className="container mx-auto h-full w-5/6 min-w-72 max-w-3xl pb-2">
            <ModuleDetails
                module={module}
                currentTemp={currentTemp}
                onEditClick={() => setIsModalOpen(true)}
            />
            <ModuleHistory id={id} />
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
