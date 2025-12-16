"use client";

import React from "react";
import { Search, SlidersHorizontal, Plus, ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function GroceryProductsPage() {
    const router = useRouter();

    const products = [
        { name: "Organic Tomatoes", category: "Fruits & Vegetables", vendor: "Green Valley...", image: "/placeholder-tomato.png" },
        { name: "Fresh Milk", category: "Dairy & Eggs", vendor: "Fresh Mart Sup..", image: "/placeholder-milk.png" },
        { name: "Whole Wheat Bread", category: "Bakery & Snacks", vendor: "Fresh Mart Sup..", image: "/placeholder-bread.png" },
        { name: "Orange Juice", category: "Beverages", vendor: "Metro Groceri..", image: "/placeholder-juice.png" },
        { name: "Basmati Rice", category: "Staples", vendor: "City Kirana St..", image: "/placeholder-rice.png" },
        { name: "Organic Apples", category: "Fruits & Vegetables", vendor: "Green Valley..", image: "/placeholder-apple.png" },
        { name: "Fresh Eggs", category: "Dairy & Eggs", vendor: "Fresh Mart Su..", image: "/placeholder-eggs.png" },
        { name: "Potato Chips", category: "Bakery & Snacks", vendor: "Metro Groce..", image: "/placeholder-chips.png" },
    ];

    // Helper to render a placeholder visible image since we don't have the real assets
    const ProductImage = ({ index }: { index: number }) => {
        // Just using different colored squares or a placeholder service would be better, 
        // but for a clean UI without external network calls, a simple styled div with an icon or simple text is safer.
        // However, the user wants it to look "exactly like the image". 
        // I will use a simple grey div with a small emoji which is a good approximation without external assets.
        const emojis = ["🍅", "🥛", "🍞", "🧃", "🍚", "🍎", "🥚", "🥔"];
        return (
            <div className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center text-xl">
                {emojis[index % emojis.length]}
            </div>
        );
    };

    return (
        <div className="space-y-8 p-4">
            {/* Header Section */}
            <div className="flex items-start justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Grocery Products</h1>
                    <p className="text-sm text-gray-400 mt-2 italic">Manage all grocery Products</p>
                </div>

                <div className="flex items-center gap-4">
                    <button
                        onClick={() => router.push("/dashboard/grocery/products/create")}
                        className="flex items-center gap-2 px-4 py-2 bg-[#4B3DBF] text-white rounded-lg text-sm font-medium hover:bg-[#3d31a0] transition-colors shadow-sm shadow-indigo-200 cursor-pointer"
                    >
                        <Plus size={16} />
                        Add Grocery Product
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
                            <th className="py-4 pl-8 text-sm font-bold text-gray-900 rounded-l-lg w-[15%]">Product Image</th>
                            <th className="py-4 text-sm font-bold text-gray-900 w-[25%]">Product Name</th>
                            <th className="py-4 text-sm font-bold text-gray-900 w-[20%]">Category</th>
                            <th className="py-4 text-sm font-bold text-gray-900 w-[20%]">Vendor</th>
                            <th className="py-4 pr-8 text-center text-sm font-bold text-gray-900 rounded-r-lg w-[20%]">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {products.map((product, index) => (
                            <tr key={index} className="hover:bg-gray-50/50 transition-colors">
                                <td className="py-4 pl-8">
                                    <ProductImage index={index} />
                                </td>
                                <td className="py-6 text-sm text-gray-600 font-medium">{product.name}</td>
                                <td className="py-6 text-sm text-gray-600">{product.category}</td>
                                <td className="py-6 text-sm text-gray-600">{product.vendor}</td>
                                <td className="py-4 pl-4 pr-8 text-right rounded-r-lg">
                                    <button
                                        onClick={() => router.push(`/dashboard/grocery/products/${index + 1}`)}
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
