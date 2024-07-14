import React from "react";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

const ModuleAvailbilityChart = ({ data }) => {
    const COLORS = ["#08cc55", "#d40303"];

    return (
        <div>
            <div className="text-center text-2xl font-semibold">Availability Chart</div>
            <div className="flex justify-center">
                <PieChart width={400} height={400}>
                    <Pie data={data} cx={200} cy={200} labelLine={false} dataKey="value">
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </div>
        </div>
    );
};

export default ModuleAvailbilityChart;
