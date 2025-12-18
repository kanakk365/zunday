"use client";

import React from "react";
import { Search, SlidersHorizontal, ChevronLeft, ChevronRight, Plus } from "lucide-react";
import Link from "next/link";

export default function FoodItemsMenuPage() {
    const vendors = [
        {
            vendorName: "Urban Tadka Kitchen",
            cuisine: "North Indian",
            phone: "+91 98765 43210",
            city: "Chennai",
        },
        {
            vendorName: "Wok & Roll Asian Co.",
            cuisine: "Chinese / Thai",
            phone: "+91 98765 0987",
            city: "Mangalore",
        },
        {
            vendorName: "PizzaFuel Express",
            cuisine: "Fast Food",
            phone: "+91 97654 43210",
            city: "Bangalore",
        },
        {
            vendorName: "Dhaba Shaba",
            cuisine: "North Indian",
            phone: "+91 98515 5678",
            city: "Mumbai",
        },
        {
            vendorName: "Kinni Cafe",
            cuisine: "Italian Food",
            phone: "+91 98765 93209",
            city: "Bangalore",
        },
        {
            vendorName: "Mokai Cafe",
            cuisine: "Italian Food",
            phone: "+91 98765 45610",
            city: "Mumbai",
        },
        {
            vendorName: "Dominos Pizza",
            cuisine: "Fast Food",
            phone: "+91 998727 7373",
            city: "Gujrat",
        },
        {
            vendorName: "Pizza Hut",
            cuisine: "Fast Food",
            phone: "+91 990986 7878",
            city: "Bangalore",
        },
    ];

    return (
        <div className="space-y-6 py-4">
            {/* Page Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Food Items Menu</h1>
                    <p className="text-sm text-gray-400 mt-1 italic">
                        Manage all Food Items Menu
                    </p>
                </div>
                {/* Search & Actions */}
                <div className="flex items-center gap-3">
                    <Link href="/dashboard/order-food/items/create">
                        <button className="flex items-center gap-2 px-4 py-2 bg-[#4B3DBF] hover:bg-[#3d31a5] text-white rounded-lg text-sm font-medium transition-colors cursor-pointer shadow-sm">
                            <Plus size={18} />
                            Add Food Item
                        </button>
                    </Link>
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
                                <th className="w-[25%] py-4 pl-8 text-left text-sm font-bold text-gray-900 rounded-l-lg">
                                    Vendor Name
                                </th>
                                <th className="w-[20%] py-4 text-left text-sm font-bold text-gray-900">
                                    Cuisine
                                </th>
                                <th className="w-[20%] py-4 text-left text-sm font-bold text-gray-900">
                                    Phone
                                </th>
                                <th className="w-[20%] py-4 text-left text-sm font-bold text-gray-900">
                                    City
                                </th>
                                <th className="w-[15%] py-4 pr-8 text-center text-sm font-bold text-gray-900 rounded-r-lg">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 bg-white">
                            {vendors.map((vendor, index) => (
                                <tr
                                    key={index}
                                    className="hover:bg-gray-50/50 transition-colors"
                                >
                                    <td className="py-6 pl-8 text-left text-sm text-gray-600">
                                        {vendor.vendorName}
                                    </td>
                                    <td className="py-6 text-left text-sm text-gray-600">
                                        {vendor.cuisine}
                                    </td>
                                    <td className="py-6 text-left text-sm text-gray-600">
                                        {vendor.phone}
                                    </td>
                                    <td className="py-6 text-left text-sm text-gray-600">
                                        {vendor.city}
                                    </td>
                                    <td className="py-6 pr-8 text-center">
                                        <Link href={`/dashboard/order-food/items/${index}`}>
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
