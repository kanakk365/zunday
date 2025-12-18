"use client";

import React from "react";
import { Search, SlidersHorizontal, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function FoodOrdersPage() {
    const orders = [
        {
            id: "F12345",
            user: "Raja",
            vendor: "Urban Tadka",
            amount: "₹449",
        },
        {
            id: "F12344",
            user: "Ravi",
            vendor: "PizzaFuel",
            amount: "₹345",
        },
        {
            id: "F12343",
            user: "Rishi",
            vendor: "Wok & Roll",
            amount: "₹789",
        },
        {
            id: "F12342",
            user: "Rahul",
            vendor: "Dominos Pizza",
            amount: "₹345",
        },
        {
            id: "F12341",
            user: "Ramesh",
            vendor: "Pizza Hut",
            amount: "₹123",
        },
        {
            id: "F12340",
            user: "Rakesh",
            vendor: "Kinni Cafe",
            amount: "₹445",
        },
        {
            id: "F12339",
            user: "Rajeev",
            vendor: "Mokai Cafe",
            amount: "₹478",
        },
        {
            id: "F12338",
            user: "Ramu",
            vendor: "Urban Tadka",
            amount: "₹649",
        },
    ];

    return (
        <div className="space-y-6 py-4">
            {/* Page Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Food Orders List</h1>
                    <p className="text-sm text-gray-400 mt-1 italic">
                        Manage all Food orders
                    </p>
                </div>
                {/* Search & Actions */}
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <Search
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                            size={18}
                        />
                        <input
                            type="text"
                            placeholder="Search"
                            className="pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#4B3DBF]/20 text-gray-600 placeholder-gray-400 w-64"
                        />
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors cursor-pointer">
                        <SlidersHorizontal size={16} />
                        Filters
                    </button>
                </div>
            </div>

            {/* Main Card */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                {/* Table */}
                <div className="p-6">
                    <table className="w-full table-fixed">
                        <thead>
                            <tr className="bg-[#F3F3F3]">
                                <th className="w-[15%] py-4 pl-8 text-left text-sm font-bold text-gray-900 rounded-l-lg">
                                    Order ID
                                </th>
                                <th className="w-[20%] py-4 text-left text-sm font-bold text-gray-900">
                                    User
                                </th>
                                <th className="w-[25%] py-4 text-left text-sm font-bold text-gray-900">
                                    Vendor
                                </th>
                                <th className="w-[15%] py-4 text-left text-sm font-bold text-gray-900">
                                    Amount
                                </th>
                                <th className="w-[15%] py-4 pr-8 text-center text-sm font-bold text-gray-900 rounded-r-lg">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 bg-white">
                            {orders.map((order, index) => (
                                <tr
                                    key={index}
                                    className="hover:bg-gray-50/50 transition-colors"
                                >
                                    <td className="py-6 pl-8 text-left text-sm text-gray-600">
                                        {order.id}
                                    </td>
                                    <td className="py-6 text-left text-sm text-gray-600">
                                        {order.user}
                                    </td>
                                    <td className="py-6 text-left text-sm text-gray-600">
                                        {order.vendor}
                                    </td>
                                    <td className="py-6 text-left text-sm text-gray-600 font-medium">
                                        {order.amount}
                                    </td>
                                    <td className="py-6 pr-8 text-center">
                                        <Link href={`/dashboard/order-food/orders/${order.id}`}>
                                            <button className="px-6 py-2 bg-[#4B3DBF] hover:bg-[#3d31a5] text-white text-xs font-medium rounded-full transition-colors min-w-[80px] cursor-pointer">
                                                View
                                            </button>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between pt-2">
                <p className="text-sm text-gray-500">Showing 01 of 10</p>
                <div className="flex items-center gap-2">
                    <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#4B3DBF] text-white hover:bg-[#3d31a5] transition-colors cursor-pointer">
                        <ChevronLeft size={18} />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#4B3DBF] text-white hover:bg-[#3d31a5] transition-colors cursor-pointer">
                        <ChevronRight size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
}
