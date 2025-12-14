"use client";

import React from "react";
import { ArrowUpRight, ArrowDownRight, Calendar } from "lucide-react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Legend,
} from "recharts";

const dataTrend = [
    { name: "Jan 1", value: 0 },
    { name: "Jan 8", value: 100 },
    { name: "Jan 15", value: 50 },
    { name: "Jan 22", value: 150 },
    { name: "Jan 24", value: 150 },
    { name: "Feb 1", value: 300 },
    { name: "Feb 5", value: 150 },
    { name: "Feb 10", value: 120 },
    { name: "Feb 15", value: 180 },
    { name: "Feb 20", value: 200 },
    { name: "Feb 28", value: 150 },
];

const dataPie = [
    { name: "Grocery", value: 400 },
    { name: "Instant Delivery", value: 300 },
    { name: "Dineout", value: 300 },
];

const COLORS = ["#5A4AD1", "#8B80F9", "#D1D5DB"];

const stats = [
    {
        title: "Total Orders",
        value: "1,250",
        change: "28.4%",
        isPositive: true,
    },
    {
        title: "Total Users",
        value: "34,420",
        change: "12.6%",
        isPositive: false,
    },
    {
        title: "Live Orders",
        value: "194k",
        change: "3.1%",
        isPositive: true,
    },
    {
        title: "Total Revenue",
        value: "142.3K",
        change: "11.3%",
        isPositive: true,
    },
];

const recentOrders = [
    {
        id: "#1021",
        user: "Vishal",
        vendor: "FreshMart",
        amount: "₹450",
    },
    {
        id: "#1022",
        user: "Kunal",
        vendor: "BlinkKart",
        amount: "₹250",
    },
    {
        id: "#1023",
        user: "Amit",
        vendor: "Bombay Eatery",
        amount: "₹150",
    },
];

export default function DashboardPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm"
                    >
                        <p className="text-sm text-gray-400 font-medium mb-2">
                            {stat.title}
                        </p>
                        <div className="flex items-center gap-3">
                            <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                            <div
                                className={`flex items-center gap-1 text-[10px] font-bold px-1.5 py-0.5 rounded-md ${stat.isPositive
                                        ? "text-emerald-500 bg-emerald-50"
                                        : "text-red-500 bg-red-50"
                                    }`}
                            >
                                {stat.change}
                                {stat.isPositive ? (
                                    <ArrowUpRight size={12} />
                                ) : (
                                    <ArrowDownRight size={12} />
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Orders Trend */}
                <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-1">
                                Orders Trend
                            </h3>
                            <div className="flex items-center gap-3">
                                <span className="text-2xl font-bold text-gray-900">257</span>
                                <span className="text-emerald-500 bg-emerald-50 text-[10px] font-bold px-1.5 py-0.5 rounded-md flex items-center">
                                    16.8% <ArrowUpRight size={12} />
                                </span>
                            </div>
                        </div>
                        <button className="flex items-center gap-2 text-xs text-gray-500 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200">
                            <Calendar size={14} />
                            Jan 2024
                        </button>
                    </div>
                    <div className="h-[250px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={dataTrend}>
                                <CartesianGrid
                                    strokeDasharray="3 3"
                                    vertical={false}
                                    stroke="#F3F4F6"
                                />
                                <XAxis
                                    dataKey="name"
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fill: "#9CA3AF", fontSize: 10 }}
                                    dy={10}
                                />
                                <YAxis
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fill: "#9CA3AF", fontSize: 10 }}
                                    dx={-10}
                                />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: "#fff",
                                        borderRadius: "8px",
                                        border: "1px solid #E5E7EB",
                                        boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                                    }}
                                    itemStyle={{ color: "#111827", fontSize: "12px" }}
                                    cursor={{ stroke: "#E5E7EB" }}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="value"
                                    stroke="#5A4AD1"
                                    strokeWidth={2}
                                    dot={false}
                                    activeDot={{ r: 6, fill: "#5A4AD1", strokeWidth: 0 }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Category Performance */}
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col">
                    <h3 className="text-lg font-bold text-gray-900 mb-6">
                        Category Performance
                    </h3>
                    <div className="flex-1 min-h-[250px] relative">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={dataPie}
                                    innerRadius={60}
                                    outerRadius={90}
                                    paddingAngle={0}
                                    dataKey="value"
                                    startAngle={90}
                                    endAngle={450}
                                    stroke="none"
                                >
                                    {dataPie.map((entry, index) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={COLORS[index % COLORS.length]}
                                        />
                                    ))}
                                </Pie>
                                <Legend
                                    verticalAlign="middle"
                                    align="right"
                                    layout="vertical"
                                    iconType="circle"
                                    iconSize={8}
                                    formatter={(value) => (
                                        <span className="text-xs text-gray-500 font-medium ml-1">
                                            {value}
                                        </span>
                                    )}
                                    wrapperStyle={{
                                        paddingLeft: "20px",
                                    }}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                        {/* Center Text (Optional, implies visual balance if needed, but not explicitly in image logic except hole) */}
                    </div>
                </div>
            </div>

            {/* Recent Orders */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wider text-sm">
                        Recent Orders
                    </h3>
                    <button className="bg-[#5A4AD1] text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-[#4839B0] transition-colors">
                        View all
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-gray-50/50 border-b border-gray-50">
                                <th className="text-left py-4 px-4 text-xs font-medium text-gray-500 first:rounded-l-lg last:rounded-r-lg">
                                    Order ID
                                </th>
                                <th className="text-left py-4 px-4 text-xs font-medium text-gray-500">
                                    User
                                </th>
                                <th className="text-left py-4 px-4 text-xs font-medium text-gray-500">
                                    Vendor
                                </th>
                                <th className="text-right py-4 px-4 text-xs font-medium text-gray-500 first:rounded-l-lg last:rounded-r-lg">
                                    Amount
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentOrders.map((order, index) => (
                                <tr
                                    key={index}
                                    className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors"
                                >
                                    <td className="py-4 px-4 text-sm text-gray-500">
                                        {order.id}
                                    </td>
                                    <td className="py-4 px-4 text-sm text-gray-500">
                                        {order.user}
                                    </td>
                                    <td className="py-4 px-4 text-sm text-gray-500">
                                        {order.vendor}
                                    </td>
                                    <td className="py-4 px-4 text-sm font-medium text-gray-900 text-right">
                                        {order.amount}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
