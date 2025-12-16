"use client";

import React, { useState } from "react";
import { Search, SlidersHorizontal, ChevronLeft, ChevronRight } from "lucide-react";

interface User {
    id: string;
    name: string;
    email: string;
    joinedOn: string;
}

const usersData: User[] = [
    {
        id: "#TCK001",
        name: "Rohan Mehta",
        email: "rohan@yahoo.in",
        joinedOn: "12 May 2024",
    },
    {
        id: "#TCK002",
        name: "Priya Agarwal",
        email: "priya@yahoo.in",
        joinedOn: "12 May 2024",
    },
    {
        id: "#TCK003",
        name: "Sia Sen",
        email: "sia@yahoo.in",
        joinedOn: "12 May 2024",
    },
    {
        id: "#TCK004",
        name: "Lily singh",
        email: "lily@gmail.com",
        joinedOn: "12 May 2024",
    },
    {
        id: "#TCK005",
        name: "Nia Sharma",
        email: "nia@yahoo.in",
        joinedOn: "12 May 2024",
    },
    {
        id: "#TCK006",
        name: "Sam Das",
        email: "sam@gmail.com",
        joinedOn: "12 May 2024",
    },
    {
        id: "#TCK007",
        name: "Mehak S",
        email: "mehak@gmail.com",
        joinedOn: "12 May 2024",
    },
    {
        id: "#TCK008",
        name: "Disha shah",
        email: "disha@gmail.com",
        joinedOn: "12 May 2024",
    },
];

export default function UsersPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const filteredUsers = usersData.filter(
        (user) =>
            user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.id.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentUsers = filteredUsers.slice(startIndex, endIndex);

    return (
        <div className="space-y-6 p-4">
            {/* Header with Search and Filters */}
            <div className="flex items-start justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">All Users</h1>
                    <p className="text-sm text-gray-400 mt-1">Manage all Users here</p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#4B3DBF]/20 text-gray-600 placeholder-gray-400 w-56"
                        />
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-600 hover:bg-gray-50 transition-colors">
                        <SlidersHorizontal size={16} />
                        Filters
                    </button>
                </div>
            </div>

            {/* Users Table */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-gray-100/50">
                                <th className="text-left py-4 px-6 text-sm font-bold text-gray-800 rounded-l-xl">
                                    User ID
                                </th>
                                <th className="text-left py-4 px-6 text-sm font-bold text-gray-800">
                                    User
                                </th>
                                <th className="text-left py-4 px-6 text-sm font-bold text-gray-800">
                                    Email
                                </th>
                                <th className="text-left py-4 px-6 text-sm font-bold text-gray-800">
                                    Joined On
                                </th>
                                <th className="text-center py-4 px-6 text-sm font-bold text-gray-800 rounded-r-xl">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="space-y-4">
                            {currentUsers.map((user, index) => (
                                <tr
                                    key={user.id}
                                    className="border-b border-gray-50 last:border-0 hover:bg-gray-50/30 transition-colors"
                                >
                                    <td className="py-6 px-6 text-sm text-gray-600 font-medium">
                                        {user.id}
                                    </td>
                                    <td className="py-6 px-6 text-sm text-gray-800 font-medium">
                                        {user.name}
                                    </td>
                                    <td className="py-6 px-6 text-sm text-gray-600">
                                        {user.email}
                                    </td>
                                    <td className="py-6 px-6 text-sm text-gray-600">
                                        {user.joinedOn}
                                    </td>
                                    <td className="py-6 px-6 text-center">
                                        <a href={`/dashboard/users/${user.id.replace('#', '')}`} className="inline-block">
                                            <button className="bg-[#4B3DBF] text-white text-sm font-medium px-8 py-2.5 rounded-full hover:bg-[#3D2F9F] transition-colors shadow-sm shadow-indigo-100 cursor-pointer">
                                                View
                                            </button>
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Pagination Footer */}
            <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">
                    Showing {startIndex + 1} of {filteredUsers.length}
                </p>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                        disabled={currentPage === 1}
                        className="p-2.5 bg-[#4B3DBF] text-white rounded-lg hover:bg-[#3D2F9F] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <ChevronLeft size={18} />
                    </button>
                    <button
                        onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                        disabled={currentPage === totalPages || filteredUsers.length === 0}
                        className="p-2.5 bg-[#4B3DBF] text-white rounded-lg hover:bg-[#3D2F9F] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <ChevronRight size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
}
