import React, { useEffect, useState } from "react";
import ModuleTile from "../../components/ModuleTile";

async function getModules() {
    const res = await fetch("http://localhost:3001/modules");
    const data = await res.json();
    return data;
}

function Dashboard() {
    const [modules, setModules] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const modulesData = await getModules();
            setModules(modulesData);
        }

        fetchData();
    }, []);

    return (
        <div className="container mx-auto my-6 flex flex-wrap justify-center gap-2">
            {modules.map((module, index) => (
                <ModuleTile
                    key={module.id}
                    name={module.name}
                    targetTemp={module.targetTemperature}
                    available={module.available}
                />
            ))}
        </div>
    );
}

export default Dashboard;
