"use client";

import React from "react";
import { ChevronLeft, CloudUpload, ChevronDown, Check } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CreateFoodItemPage() {
    const router = useRouter();
    const [showModal, setShowModal] = React.useState(false);

    React.useEffect(() => {
        if (showModal) {
            const timer = setTimeout(() => {
                setShowModal(false);
                router.push('/dashboard/order-food/items');
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [showModal, router]);

    return (
        <div className="space-y-6 p-4 max-w-[1400px] mx-auto pb-20 relative">
            {/* Header */}
            <div className="flex items-center gap-3">
                <button
                    onClick={() => router.back()}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
                >
                    <ChevronLeft size={24} className="text-gray-900" />
                </button>
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Add Food Item</h1>
                    <p className="text-sm text-gray-400 italic">Add the details about the Food Item</p>
                </div>
            </div>

            {/* Basic Details */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
                <h2 className="text-base font-bold text-gray-900 mb-6">Basic details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-700">Item Name</label>
                        <input
                            type="text"
                            placeholder="Enter Item Name"
                            className="w-full px-4 py-3 bg-[#f8f8ff] border-none rounded-lg text-sm text-[#4B3DBF] focus:outline-none focus:ring-2 focus:ring-[#4B3DBF]/20 font-medium placeholder-gray-400"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-700">Category</label>
                        <div className="relative">
                            <select className="w-full px-4 py-3 bg-[#f8f8ff] border-none rounded-lg text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4B3DBF]/20 font-medium appearance-none cursor-pointer">
                                <option>Select Category</option>
                                <option>North Indian</option>
                                <option>Chinese</option>
                                <option>Italian</option>
                                <option>Fast Food</option>
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-700">Vendor</label>
                        <div className="relative">
                            <select className="w-full px-4 py-3 bg-[#f8f8ff] border-none rounded-lg text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4B3DBF]/20 font-medium appearance-none cursor-pointer">
                                <option>Select Vendor</option>
                                <option>Urban Tadka Kitchen</option>
                                <option>Wok & Roll Asian Co.</option>
                                <option>PizzaFuel Express</option>
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-700">Type</label>
                        <div className="relative">
                            <select className="w-full px-4 py-3 bg-[#f8f8ff] border-none rounded-lg text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4B3DBF]/20 font-medium appearance-none cursor-pointer">
                                <option>Select Type</option>
                                <option>Veg</option>
                                <option>Non-Veg</option>
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                        </div>
                    </div>
                    <div className="space-y-2 md:col-span-2">
                        <label className="text-xs font-bold text-gray-700">Description</label>
                        <textarea
                            rows={3}
                            placeholder="Enter item description..."
                            className="w-full px-4 py-3 bg-[#f8f8ff] border-none rounded-lg text-sm text-[#4B3DBF] focus:outline-none focus:ring-2 focus:ring-[#4B3DBF]/20 font-medium placeholder-gray-400 resize-none"
                        />
                    </div>
                </div>
            </div>

            {/* Pricing */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
                <h2 className="text-base font-bold text-gray-900 mb-6">Pricing</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-700">Price (₹)</label>
                        <input
                            type="text"
                            placeholder="Enter Price"
                            className="w-full px-4 py-3 bg-[#f8f8ff] border-none rounded-lg text-sm text-[#4B3DBF] focus:outline-none focus:ring-2 focus:ring-[#4B3DBF]/20 font-medium placeholder-gray-400"
                        />
                    </div>
                </div>
            </div>

            {/* Food Item Images */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
                <h2 className="text-base font-bold text-gray-900 mb-6">Item Images</h2>
                <div className="border-2 border-dashed border-[#4B3DBF]/40 rounded-lg p-16 flex flex-col items-center justify-center gap-3 cursor-pointer hover:bg-gray-50 transition-colors bg-[#FAFAFF] w-full">
                    <CloudUpload size={40} className="text-gray-900" />
                    <div className="text-center">
                        <p className="text-lg font-medium text-gray-900">Upload Images</p>
                        <p className="text-sm font-bold text-[#4B3DBF] mt-1">Browse Files</p>
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-4 pt-4">
                <button
                    onClick={() => router.back()}
                    className="px-8 py-3 bg-[#D34528] text-white text-sm font-semibold rounded-lg hover:bg-[#b53a20] transition-colors shadow-sm cursor-pointer"
                >
                    Cancel
                </button>
                <button
                    onClick={() => setShowModal(true)}
                    className="px-8 py-3 bg-[#4B3DBF] text-white text-sm font-semibold rounded-lg hover:bg-[#3d31a0] shadow-sm shadow-indigo-200 cursor-pointer"
                >
                    Save Food Item
                </button>
            </div>

            {/* Success Modal */}
            {showModal && (
                <div
                    className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center"
                    onClick={() => setShowModal(false)}
                >
                    <div
                        className="bg-white rounded-2xl p-12 flex flex-col items-center justify-center max-w-sm w-full mx-4 shadow-2xl animate-in fade-in zoom-in duration-300"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="w-20 h-20 rounded-full bg-[#4B3DBF] flex items-center justify-center mb-6 shadow-lg shadow-indigo-200">
                            <Check size={40} className="text-white" strokeWidth={3} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 text-center">
                            New Food Item created sucessfully!!
                        </h3>
                    </div>
                </div>
            )}
        </div>
    );
}
