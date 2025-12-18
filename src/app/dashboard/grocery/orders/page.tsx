"use client";

import React from "react";
import { Search, SlidersHorizontal, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function GroceryOrdersPage() {
    const orders = [
        {
            id: "#TCK001",
            user: "Rohan Mehta",
            vendor: "Fresh Mart Supermarket",
            amount: "₹1,567.50",
        },
        {
            id: "#TCK002",
            user: "Gautam Shah",
            vendor: "City Kirana Store",
            amount: "₹890.00",
        },
        {
            id: "#TCK003",
            user: "Khyati Sharma",
            vendor: "City Kirana Store",
            amount: "₹445.50",
        },
        {
            id: "#TCK004",
            user: "Zeel Verma",
            vendor: "Metro Groceries",
            amount: "₹234.75",
        },
        {
            id: "#TCK005",
            user: "Rahul Jha",
            vendor: "Green Valley Organics",
            amount: "₹156.30",
        },
        {
            id: "#TCK006",
            user: "Ria Zara",
            vendor: "Metro Groceries",
            amount: "₹567.50",
        },
        {
            id: "#TCK007",
            user: "Beena Jha",
            vendor: "Metro Groceries",
            amount: "₹445.50",
        },
        {
            id: "#TCK008",
            user: "Veer Singh",
            vendor: "Green Valley Organics",
            amount: "₹445.50",
        },
    ];

    return (
        <div className="space-y-6 py-4">
            {/* Page Header */}
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Grocery Order</h1>
                <p className="text-sm text-gray-400 mt-1 italic">
                    Manage all Grocery Orders
                </p>
            </div>

            {/* Main Card */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                {/* Controls Section */}
                <div className="p-6 flex justify-end gap-3">
                    {/* Search */}
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

                    {/* Filters */}
                    <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors cursor-pointer">
                        <SlidersHorizontal size={16} />
                        Filters
                    </button>
                </div>

                {/* Table */}
                <div className="px-6 pb-6">
                    <table className="w-full table-fixed">
                        <thead>
                            <tr className="bg-[#F3F3F3]">
                                <th className="w-[15%] py-4 pl-8 text-left text-sm font-bold text-gray-900 rounded-l-lg">
                                    Order ID
                                </th>
                                <th className="w-[20%] py-4 text-left text-sm font-bold text-gray-900">
                                    User
                                </th>
                                <th className="w-[30%] py-4 text-left text-sm font-bold text-gray-900">
                                    Vendor
                                </th>
                                <th className="w-[20%] py-4 text-left text-sm font-bold text-gray-900">
                                    Total Amount
                                </th>
                                <th className="w-[15%] py-4 pr-8 text-center text-sm font-bold text-gray-900 rounded-r-lg">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {orders.map((order, index) => (
                                <tr key={index} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="py-6 pl-8 text-left text-sm text-gray-600">
                                        {order.id}
                                    </td>
                                    <td className="py-6 text-left text-sm text-gray-900 font-medium">
                                        {order.user}
                                    </td>
                                    <td className="py-6 text-left text-sm text-gray-600">
                                        {order.vendor}
                                    </td>
                                    <td className="py-6 text-left text-sm text-gray-600 font-medium">
                                        {order.amount}
                                    </td>
                                    <td className="py-6 pr-8 text-center">
                                        <Link href={`/dashboard/grocery/orders/${encodeURIComponent(order.id)}`}>
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
