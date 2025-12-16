"use client";

import React, { useState } from "react";
import { Search, SlidersHorizontal, ShoppingCart, Utensils, Coffee, DollarSign } from "lucide-react";

export default function UserProfilePage({ params }: { params: { id: string } }) {
    const [activeTab, setActiveTab] = useState("Overview");

    // Mock User Data (In a real app, fetch based on params.id)
    const user = {
        name: "Rohan Mehta",
        phone: "+91 9654324323",
        joinedOn: "Oct 6",
        city: "Bangalore",
        email: "Rohan24@yahoo.in",
        status: "Active",
        initial: "R"
    };

    const stats = [
        { label: "Total Grocery Orders", value: "32 orders" },
        { label: "Total Food Orders", value: "12 orders" },
        { label: "Total Dineout Bookings", value: "22 orders" },
        { label: "Total Revenue", value: "1.3K" },
    ];

    const activities = [
        {
            type: "grocery",
            title: "Grocery Order #4411",
            date: "10-12-2024",
            amount: "₹230",
            status: "Delivered",
            icon: <ShoppingCart size={20} className="text-green-600" />,
            iconBg: "bg-green-100"
        },
        {
            type: "food",
            title: "Food Order #4231",
            date: "08-10-2024",
            amount: "₹230",
            status: "Delivered",
            icon: <Utensils size={20} className="text-orange-600" />,
            iconBg: "bg-orange-100"
        },
        {
            type: "dineout",
            title: "The Garden Bistro",
            date: "24-09-2024 at 7:00 PM",
            amount: "₹230",
            status: "Confirmed",
            icon: <Coffee size={20} className="text-purple-600" />,
            iconBg: "bg-purple-100"
        },
        {
            type: "food",
            title: "Food Order #4232",
            date: "20-06-2024",
            amount: "₹230",
            status: "Delivered",
            icon: <Utensils size={20} className="text-orange-600" />,
            iconBg: "bg-orange-100"
        },
    ];

    return (
        <div className="space-y-8 p-4 ">
            <div className="flex items-start justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">User Profile</h1>
                    <p className="text-sm text-gray-400 mt-2 italic">View all the details about the user here</p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search"
                            className="pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#4B3DBF]/20 text-gray-600 placeholder-gray-400 w-64"
                        />
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
                        <SlidersHorizontal size={16} />
                        Filters
                    </button>
                </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm flex items-center gap-8">
                <div className="w-20 h-20 rounded-full bg-[#4B3DBF] flex items-center justify-center text-white text-3xl font-normal shrink-0">
                    {user.initial}
                </div>
                <div className="flex-1 space-y-4">
                    <div className="flex flex-wrap gap-x-12 gap-y-4">
                        <div className="flex items-center gap-1">
                            <span className="text-sm font-bold text-gray-900">Name-</span>
                            <span className="text-sm text-gray-600">{user.name}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="text-sm font-bold text-gray-900">Phone number -</span>
                            <span className="text-sm text-gray-600">{user.phone}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="text-sm font-bold text-gray-900">Joined On -</span>
                            <span className="text-sm text-gray-600">{user.joinedOn}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="text-sm font-bold text-gray-900">City-</span>
                            <span className="text-sm text-gray-600">{user.city}</span>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-x-16 gap-y-4">
                        <div className="flex items-center gap-1">
                            <span className="text-sm font-bold text-gray-900">E mail ID-</span>
                            <span className="text-sm text-gray-600">{user.email}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="text-sm font-bold text-gray-900">Status-</span>
                            <span className="text-sm text-gray-600">{user.status}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-b-2 border-gray-100">
                <nav className="flex items-center w-full">
                    {["Overview", "Grocery Order", "Food Order", "Dine out Booking"].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`flex-1 pb-4 text-[15px] font-medium transition-colors relative px-4 text-center ${activeTab === tab
                                ? "text-[#4B3DBF]"
                                : "text-gray-500 hover:text-gray-700"
                                }`}
                        >
                            {tab}
                            {activeTab === tab && (
                                <span className="absolute bottom-[-2px] left-0 w-full h-[3px] bg-[#4B3DBF] rounded-t-full" />
                            )}
                        </button>
                    ))}
                </nav>
            </div>

            {activeTab === "Overview" && (
                <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm h-32 flex flex-col justify-center">
                                <p className="text-[11px] text-gray-400 font-medium mb-3">{stat.label}</p>
                                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
                        <h2 className="text-base font-bold text-gray-900 mb-8">Recent Activity</h2>
                        <div className="space-y-8">
                            {activities.map((activity, index) => (
                                <div key={index} className="flex items-center justify-between pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                                    <div className="flex items-center gap-5">
                                        <div className={`w-12 h-12 rounded-full ${activity.iconBg} flex items-center justify-center shrink-0`}>
                                            {activity.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-medium text-gray-900">{activity.title}</h3>
                                            <p className="text-[11px] text-gray-400 mt-1">{activity.date}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm font-bold text-gray-900 mb-1">{activity.amount}</p>
                                        <span className="inline-flex items-center justify-center px-4 py-1 rounded-full text-[11px] font-medium bg-[#1A7F1C] text-white min-w-[80px]">
                                            {activity.status}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}

            {activeTab === "Grocery Order" && (
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden p-6">
                    <table className="w-full table-fixed">
                        <thead>
                            <tr className="bg-[#F3F3F3] text-left">
                                <th className="w-[20%] py-4 pl-8 text-left text-sm font-bold text-gray-900 rounded-l-lg">Order ID</th>
                                <th className="w-[20%] py-4 text-center text-sm font-bold text-gray-900">Date</th>
                                <th className="w-[20%] py-4 text-center text-sm font-bold text-gray-900">Items</th>
                                <th className="w-[20%] py-4 text-center text-sm font-bold text-gray-900">Total</th>
                                <th className="w-[20%] py-4 pr-8 text-center text-sm font-bold text-gray-900 rounded-r-lg">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {[
                                { id: "G001", date: "10-12-2024", items: "12", total: "₹930", status: "Delivered" },
                                { id: "G002", date: "09-12-2024", items: "09", total: "₹760", status: "Delivered" },
                                { id: "G003", date: "08-12-2024", items: "08", total: "₹610", status: "Delivered" },
                                { id: "G004", date: "01-09-2024", items: "03", total: "₹180", status: "Delivered" },
                                { id: "G005", date: "10-08-2024", items: "03", total: "₹90", status: "Delivered" },
                            ].map((order, index) => (
                                <tr key={index}>
                                    <td className="py-6 pl-8 text-left text-sm text-gray-600">{order.id}</td>
                                    <td className="py-6 text-center text-sm text-gray-600">{order.date}</td>
                                    <td className="py-6 text-center text-sm text-gray-600">{order.items}</td>
                                    <td className="py-6 text-center text-sm text-gray-600">{order.total}</td>
                                    <td className="py-6 pr-8 text-center">
                                        <span className="inline-flex items-center justify-center px-6 py-2 rounded-full text-xs font-medium bg-[#1A7F1C] text-white min-w-[100px]">
                                            {order.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {activeTab === "Food Order" && (
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden p-6">
                    <table className="w-full table-fixed">
                        <thead>
                            <tr className="bg-[#F3F3F3] text-left">
                                <th className="w-[20%] py-4 pl-8 text-left text-sm font-bold text-gray-900 rounded-l-lg">Order ID</th>
                                <th className="w-[20%] py-4 text-center text-sm font-bold text-gray-900">Date</th>
                                <th className="w-[20%] py-4 text-center text-sm font-bold text-gray-900">Items</th>
                                <th className="w-[20%] py-4 text-center text-sm font-bold text-gray-900">Total</th>
                                <th className="w-[20%] py-4 pr-8 text-center text-sm font-bold text-gray-900 rounded-r-lg">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {[
                                { id: "F001", date: "10-12-2024", items: "02", total: "₹1230", status: "Delivered" },
                                { id: "F002", date: "09-12-2024", items: "07", total: "₹860", status: "Delivered" },
                                { id: "F003", date: "08-12-2024", items: "06", total: "₹1210", status: "Delivered" },
                                { id: "F004", date: "01-09-2024", items: "03", total: "₹380", status: "Delivered" },
                                { id: "F005", date: "10-08-2024", items: "01", total: "₹90", status: "Delivered" },
                            ].map((order, index) => (
                                <tr key={index}>
                                    <td className="py-6 pl-8 text-left text-sm text-gray-600">{order.id}</td>
                                    <td className="py-6 text-center text-sm text-gray-600">{order.date}</td>
                                    <td className="py-6 text-center text-sm text-gray-600">{order.items}</td>
                                    <td className="py-6 text-center text-sm text-gray-600">{order.total}</td>
                                    <td className="py-6 pr-8 text-center">
                                        <span className="inline-flex items-center justify-center px-6 py-2 rounded-full text-xs font-medium bg-[#1A7F1C] text-white min-w-[100px]">
                                            {order.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {activeTab === "Dine out Booking" && (
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden p-6">
                    <table className="w-full table-fixed">
                        <thead>
                            <tr className="bg-[#F3F3F3] text-left">
                                <th className="w-[15%] py-4 pl-8 text-left text-sm font-bold text-gray-900 rounded-l-lg">Booking ID</th>
                                <th className="w-[25%] py-4 text-left text-sm font-bold text-gray-900">Restaurant</th>
                                <th className="w-[15%] py-4 text-center text-sm font-bold text-gray-900">Date</th>
                                <th className="w-[15%] py-4 text-center text-sm font-bold text-gray-900">Time</th>
                                <th className="w-[10%] py-4 text-center text-sm font-bold text-gray-900">Guests</th>
                                <th className="w-[20%] py-4 pr-8 text-center text-sm font-bold text-gray-900 rounded-r-lg">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {[
                                { id: "B001", restaurant: "The Garden Bistro", date: "09-12-2024", time: "07:00PM", guests: "07", status: "Confirmed" },
                                { id: "B002", restaurant: "Sunset Grill", date: "12-11-2024", time: "12:00PM", guests: "03", status: "Confirmed" },
                                { id: "B003", restaurant: "Ocean View Restaurant", date: "23-10-2024", time: "08:00PM", guests: "03", status: "Confirmed" },
                                { id: "B004", restaurant: "Bastain Restaurant", date: "12-09-2024", time: "09:00PM", guests: "01", status: "Confirmed" },
                            ].map((booking, index) => (
                                <tr key={index}>
                                    <td className="py-6 pl-8 text-left text-sm text-gray-600">{booking.id}</td>
                                    <td className="py-6 text-left text-sm text-gray-600">{booking.restaurant}</td>
                                    <td className="py-6 text-center text-sm text-gray-600">{booking.date}</td>
                                    <td className="py-6 text-center text-sm text-gray-600">{booking.time}</td>
                                    <td className="py-6 text-center text-sm text-gray-600">{booking.guests}</td>
                                    <td className="py-6 pr-8 text-center">
                                        <span className="inline-flex items-center justify-center px-6 py-2 rounded-full text-xs font-medium bg-[#1A7F1C] text-white min-w-[100px]">
                                            {booking.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
