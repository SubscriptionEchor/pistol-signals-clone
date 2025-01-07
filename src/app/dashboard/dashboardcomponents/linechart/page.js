'use client'
import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';

const data = Array(30).fill({}).map((_, ind) => ({ name: ind + 1, value: Math.floor(Math.random() * 10000) + 1 }))

const StylishLineChart = () => {
    return (
        <ResponsiveContainer width="100%" height={50}>
            <LineChart data={data} margin={{ top: 5, right: 1, bottom: 1, left: 1 }}>
                <Tooltip contentStyle={{ backgroundColor: 'rgba(0,0,0,0.7)', border: 'none' }} />
                <Line type="monotone" dataKey="value" stroke="#FFD700" strokeWidth={2} dot={false} />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default StylishLineChart;