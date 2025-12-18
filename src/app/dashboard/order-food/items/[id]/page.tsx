"use client";

import React from "react";
import { Search, SlidersHorizontal, ChevronLeft, ChevronRight, Plus } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function VendorMenuPage({ params }: { params: { id: string } }) {
    const router = useRouter();
    // In a real app, fetch vendor name based on params.id
    const vendorName = "Urban Tadka Kitchen";

    const foodItems = [
        {
            itemName: "Paneer Tikka Roll",
            category: "North Indian",
            price: "₹199",
            vegNonVeg: "Veg",
        },
        {
            itemName: "Chicken Hakka Noodles",
            category: "North Indian",
            price: "₹345",
            vegNonVeg: "Non Veg",
        },
        {
            itemName: "Margherita Pizza",
            category: "North Indian",
            price: "₹679",
            vegNonVeg: "Veg",
        },
        {
            itemName: "Paneer Lababdar",
            category: "North Indian",
            price: "₹199",
            vegNonVeg: "Veg",
        },
        {
            itemName: "Chapati",
            category: "North Indian",
            price: "₹99",
            vegNonVeg: "Veg",
        },
        {
            itemName: "Naan",
            category: "North Indian",
            price: "₹109",
            vegNonVeg: "Veg",
        },
        {
            itemName: "Roti",
            category: "North Indian",
            price: "₹99",
            vegNonVeg: "Veg",
        },
        {
            itemName: "Masala Aloo",
            category: "North Indian",
            price: "₹123",
            vegNonVeg: "Veg",
        },
    ];

    return (
        <div className="space-y-6 py-4">
            {/* Page Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => router.back()}
                        className="p-1 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
                    >
                        <ChevronLeft size={24} className="text-gray-900" />
                    </button>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">{vendorName}</h1>
                        <p className="text-sm text-gray-400 mt-1 italic">
                            View list of items ( Menu ) for particular Restaurant
                        </p>
                    </div>
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
                                <th className="w-[30%] py-4 pl-8 text-left text-sm font-bold text-gray-900 rounded-l-lg">
                                    Item Name
                                </th>
                                <th className="w-[20%] py-4 text-left text-sm font-bold text-gray-900">
                                    Category
                                </th>
                                <th className="w-[15%] py-4 text-left text-sm font-bold text-gray-900">
                                    Price
                                </th>
                                <th className="w-[15%] py-4 text-left text-sm font-bold text-gray-900">
                                    Veg/Non-Veg
                                </th>
                                <th className="w-[20%] py-4 pr-8 text-center text-sm font-bold text-gray-900 rounded-r-lg">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 bg-white">
                            {foodItems.map((item, index) => (
                                <tr
                                    key={index}
                                    className="hover:bg-gray-50/50 transition-colors"
                                >
                                    <td className="py-6 pl-8 text-left text-sm text-gray-600">
                                        {item.itemName}
                                    </td>
                                    <td className="py-6 text-left text-sm text-gray-600">
                                        {item.category}
                                    </td>
                                    <td className="py-6 text-left text-sm text-gray-600">
                                        {item.price}
                                    </td>
                                    <td className="py-6 text-left text-sm text-gray-600">
                                        {item.vegNonVeg}
                                    </td>
                                    <td className="py-6 pr-8 text-center">
                                        <button className="px-6 py-2 bg-[#D34528] hover:bg-[#b53a20] text-white text-xs font-medium rounded-full transition-colors min-w-[80px] cursor-pointer">
                                            Delete
                                        </button>
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
