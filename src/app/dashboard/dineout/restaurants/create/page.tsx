"use client";

import React from "react";
import { ChevronLeft, CloudUpload, ChevronDown, Check, Clock } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CreateRestaurantPage() {
    const router = useRouter();
    const [showModal, setShowModal] = React.useState(false);

    React.useEffect(() => {
        if (showModal) {
            const timer = setTimeout(() => {
                setShowModal(false);
                router.push('/dashboard/dineout/restaurants');
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [showModal, router]);

    return (
        <div className="space-y-6 p-4 max-w-[1400px] mx-auto pb-20 relative">
            {/* Header */}
            <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => router.back()}
                        className="p-1 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
                    >
                        <ChevronLeft size={24} className="text-gray-900" />
                    </button>
                    <h1 className="text-xl font-bold text-gray-900">Create New Restaurant</h1>
                </div>
                <p className="text-sm text-gray-400 italic ml-9">Add the details about the Restaurant to add</p>
            </div>

            {/* Basic Details */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
                <h2 className="text-base font-semibold text-gray-900 mb-6 border-b border-gray-100 pb-4">Basic details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    <div className="space-y-2">
                        <label className="text-xs font-semibold text-gray-700">Name of Restaurant</label>
                        <input
                            type="text"
                            placeholder="Enter Restaurant Name"
                            className="w-full px-4 py-3 bg-[#f8f8ff] border-none rounded-lg text-xs text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#4B3DBF]/20 placeholder-gray-400"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-semibold text-gray-700">Cuisine types</label>
                        <div className="relative">
                            <select className="w-full px-4 py-3 bg-[#f8f8ff] border-none rounded-lg text-xs text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#4B3DBF]/20 appearance-none cursor-pointer">
                                <option>Enter Cuisine types</option>
                                <option>North Indian</option>
                                <option>Chinese</option>
                                <option>Italian</option>
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-semibold text-gray-700">Phone Number</label>
                        <input
                            type="text"
                            placeholder="Enter Phone Number"
                            className="w-full px-4 py-3 bg-[#f8f8ff] border-none rounded-lg text-xs text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#4B3DBF]/20 placeholder-gray-400"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-semibold text-gray-700">Email Id</label>
                        <input
                            type="text"
                            placeholder="Enter Email Id"
                            className="w-full px-4 py-3 bg-[#f8f8ff] border-none rounded-lg text-xs text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#4B3DBF]/20 placeholder-gray-400"
                        />
                    </div>
                </div>
            </div>

            {/* Restaurant details */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
                <h2 className="text-base font-semibold text-gray-900 mb-6 border-b border-gray-100 pb-4">Restaurant details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    <div className="space-y-2">
                        <label className="text-xs font-semibold text-gray-700">Restaurant Type</label>
                        <div className="relative">
                            <select className="w-full px-4 py-3 bg-[#f8f8ff] border-none rounded-lg text-xs text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#4B3DBF]/20 appearance-none cursor-pointer">
                                <option>Fine Dine / Cafe / Dhaba</option>
                                <option>Fine Dine</option>
                                <option>Cafe</option>
                                <option>Dhaba</option>
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-semibold text-gray-700">Operating Hours</label>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="09:00AM to 10:00PM"
                                className="w-full px-4 py-3 bg-[#f8f8ff] border-none rounded-lg text-xs text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#4B3DBF]/20 placeholder-gray-400"
                            />
                            <Clock className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none" size={16} />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-semibold text-gray-700">City</label>
                        <div className="relative">
                            <select className="w-full px-4 py-3 bg-[#f8f8ff] border-none rounded-lg text-xs text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#4B3DBF]/20 appearance-none cursor-pointer">
                                <option>Choose City</option>
                                <option>Chennai</option>
                                <option>Mumbai</option>
                                <option>Delhi</option>
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-semibold text-gray-700">Pincode</label>
                        <div className="relative">
                            <select className="w-full px-4 py-3 bg-[#f8f8ff] border-none rounded-lg text-xs text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#4B3DBF]/20 appearance-none cursor-pointer">
                                <option>Choose Pincode</option>
                                <option>600001</option>
                                <option>600002</option>
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-semibold text-gray-700">Total Tables</label>
                        <div className="relative">
                            <select className="w-full px-4 py-3 bg-[#f8f8ff] border-none rounded-lg text-xs text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#4B3DBF]/20 appearance-none cursor-pointer">
                                <option>Add the tables here</option>
                                <option>10</option>
                                <option>20</option>
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-semibold text-gray-700">Seating (2/4/6)</label>
                        <div className="relative">
                            <select className="w-full px-4 py-3 bg-[#f8f8ff] border-none rounded-lg text-xs text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#4B3DBF]/20 appearance-none cursor-pointer">
                                <option>Add Seatings</option>
                                <option>2 Seater</option>
                                <option>4 Seater</option>
                                <option>6 Seater</option>
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                        </div>
                    </div>
                    <div className="md:col-span-2 space-y-2">
                        <label className="text-xs font-semibold text-gray-700">Restaurant Address</label>
                        <textarea
                            placeholder="Main content here"
                            rows={3}
                            className="w-full px-4 py-3 bg-[#f8f8ff] border-none rounded-lg text-xs text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#4B3DBF]/20 placeholder-gray-400 resize-none"
                        />
                    </div>
                </div>
            </div>

            {/* Upload Photos */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
                <h2 className="text-base font-semibold text-gray-900 mb-6 border-b border-gray-100 pb-4">Upload Photos</h2>
                <div className="border-2 border-dashed border-[#4B3DBF]/30 rounded-lg p-12 flex flex-col items-center justify-center gap-3 cursor-pointer hover:bg-gray-50 transition-colors bg-[#FAFAFF] w-full">
                    <CloudUpload size={32} className="text-gray-900" />
                    <div className="text-center">
                        <p className="text-sm font-semibold text-gray-900">Upload Photos</p>
                        <p className="text-xs font-bold text-[#4B3DBF] mt-1">Browse Files</p>
                    </div>
                </div>
            </div>

            {/* Bank details */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
                <h2 className="text-base font-semibold text-gray-900 mb-6 border-b border-gray-100 pb-4">Bank details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    <div className="space-y-2">
                        <label className="text-xs font-semibold text-gray-700">Account Holder Name</label>
                        <input
                            type="text"
                            placeholder="Enter Account Holder Name"
                            className="w-full px-4 py-3 bg-[#f8f8ff] border-none rounded-lg text-xs text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#4B3DBF]/20 placeholder-gray-400"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-semibold text-gray-700">Account Number</label>
                        <input
                            type="text"
                            placeholder="Enter Account Number"
                            className="w-full px-4 py-3 bg-[#f8f8ff] border-none rounded-lg text-xs text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#4B3DBF]/20 placeholder-gray-400"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-semibold text-gray-700">IFSC Code</label>
                        <input
                            type="text"
                            placeholder="Enter IFSC Code"
                            className="w-full px-4 py-3 bg-[#f8f8ff] border-none rounded-lg text-xs text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#4B3DBF]/20 placeholder-gray-400"
                        />
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
                    className="px-8 py-3 bg-[#9E9E9E] text-white text-sm font-semibold rounded-lg hover:bg-gray-500 shadow-sm cursor-pointer"
                >
                    Add Restaurant
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
                            New Restaurant created sucessfully!!
                        </h3>
                    </div>
                </div>
            )}
        </div>
    );
}
