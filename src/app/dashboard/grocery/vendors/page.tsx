"use client";

import React from "react";
import { Search, SlidersHorizontal, Plus, ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function GroceryVendorsPage() {
    const router = useRouter();
    const vendors = Array(7).fill({
        name: "Fresh Mart Supermarket",
        owner: "Rajesh Kumar",
        phone: "+91 98765 43210",
        city: "Bangalore"
    });

    return (
        <div className="space-y-8 p-4">
            {/* Header Section */}
            <div className="flex items-start justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Grocery Vendors</h1>
                    <p className="text-sm text-gray-400 mt-2 italic">Manage all grocery vendors and their stores</p>
                </div>

                <div className="flex items-center gap-4">
                    <button
                        onClick={() => router.push("/dashboard/grocery/vendors/create")}
                        className="flex items-center gap-2 px-4 py-2 bg-[#4B3DBF] text-white rounded-lg text-sm font-medium hover:bg-[#3d31a0] transition-colors shadow-sm shadow-indigo-200 cursor-pointer"
                    >
                        <Plus size={16} />
                        Add Grocery Vendor
                    </button>

                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
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

            {/* Table Section */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden p-6 pb-2">
                <table className="w-full">
                    <thead>
                        <tr className="bg-[#F3F3F3] text-left">
                            <th className="py-4 pl-8 text-sm font-bold text-gray-900 rounded-l-lg w-[25%]">Vendor Name</th>
                            <th className="py-4 text-sm font-bold text-gray-900 w-[20%]">Owner Name</th>
                            <th className="py-4 text-sm font-bold text-gray-900 w-[20%]">Phone</th>
                            <th className="py-4 text-sm font-bold text-gray-900 w-[20%]">City</th>
                            <th className="py-4 pr-8 text-center text-sm font-bold text-gray-900 rounded-r-lg w-[15%]">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {vendors.map((vendor, index) => (
                            <tr key={index} className="hover:bg-gray-50/50 transition-colors">
                                <td className="py-6 pl-8 text-sm text-gray-600 font-medium">{vendor.name}</td>
                                <td className="py-6 text-sm text-gray-600">{vendor.owner}</td>
                                <td className="py-6 text-sm text-gray-600">{vendor.phone}</td>
                                <td className="py-6 text-sm text-gray-600">{vendor.city}</td>
                                <td className="py-4 pl-4 pr-8 text-right rounded-r-lg">
                                    <button
                                        onClick={() => router.push(`/dashboard/grocery/vendors/${index + 1}`)}
                                        className="px-6 py-2 bg-[#4B3DBF] text-white text-xs font-semibold rounded-full hover:bg-[#3d31a0] transition-colors shadow-sm shadow-indigo-100 cursor-pointer"
                                    >
                                        View
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between pt-2">
                <p className="text-sm text-gray-500 font-medium">Showing 01 of 10</p>
                <div className="flex items-center gap-2">
                    <button className="w-8 h-8 flex items-center justify-center bg-[#4B3DBF] text-white rounded-lg hover:bg-[#3d31a0] transition-colors shadow-sm shadow-indigo-200 cursor-pointer">
                        <ChevronLeft size={16} />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center bg-[#4B3DBF] text-white rounded-lg hover:bg-[#3d31a0] transition-colors shadow-sm shadow-indigo-200 cursor-pointer">
                        <ChevronRight size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
}
