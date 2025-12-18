"use client";

import React from "react";
import { ChevronLeft, FileEdit, FileText, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function RestaurantDetailsPage({
    params,
}: {
    params: { id: string };
}) {
    const router = useRouter();

    // Mock data matching the design image
    const restaurantData = {
        name: "Urban Tadka",
        status: "Active",
        basicDetails: {
            name: "Urban Tadka",
            cuisineTypes: "North Indian",
            phoneNumber: "90987167627",
            emailId: "Urbanj@yahoo.in",
        },
        storeDetails: {
            type: "Dhaba",
            operatingHours: "09:00AM to 10:00PM",
            city: "Mumbai",
            pincode: "421201",
            totalTables: "22",
            seating: "2/4/6",
            address: "A 208, Pandurang Wadi , F.C Road , Laxmi Temple , Mumbai",
        },
        uploadedFiles: [
            { name: "Images.PDF", type: "pdf" }
        ],
        bankDetails: {
            accountHolderName: "Rajesh Kumar",
            accountNumber: "AD1445",
            ifscCode: "AS324521",
        }
    };

    return (
        <div className="space-y-6 py-4 max-w-[1400px] mx-auto pb-20">
            {/* Header */}
            <div className="flex flex-col gap-1">
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => router.back()}
                        className="p-1 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
                    >
                        <ChevronLeft size={24} className="text-gray-900" />
                    </button>
                    <div className="flex items-center gap-3">
                        <h1 className="text-2xl font-bold text-gray-900">
                            {restaurantData.name}
                        </h1>
                        <span className="px-3 py-1 bg-[#388E3C] text-white text-xs font-medium rounded-full">
                            {restaurantData.status}
                        </span>
                    </div>
                </div>
                <p className="text-sm text-gray-400 italic ml-10">
                    View all the details about the Restaurant here
                </p>
            </div>

            {/* Basic details */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
                    <h2 className="text-base font-medium text-gray-900">
                        Basic details
                    </h2>
                    <button className="text-gray-400 hover:text-[#4B3DBF] cursor-pointer">
                        <FileEdit size={18} />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-4">
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Restaurant name</p>
                        <p className="text-sm font-medium text-gray-900">{restaurantData.basicDetails.name}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Cuisine Types</p>
                        <p className="text-sm font-medium text-gray-900">{restaurantData.basicDetails.cuisineTypes}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Phone number</p>
                        <p className="text-sm font-medium text-gray-900">{restaurantData.basicDetails.phoneNumber}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Email Id</p>
                        <p className="text-sm font-medium text-gray-900">{restaurantData.basicDetails.emailId}</p>
                    </div>
                </div>
            </div>

            {/* Store details */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
                    <h2 className="text-base font-medium text-gray-900">
                        Store details
                    </h2>
                    <button className="text-gray-400 hover:text-[#4B3DBF] cursor-pointer">
                        <FileEdit size={18} />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-4">
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Restaurant Type</p>
                        <p className="text-sm font-medium text-gray-900">{restaurantData.storeDetails.type}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Operating Hours</p>
                        <p className="text-sm font-medium text-gray-900">{restaurantData.storeDetails.operatingHours}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 mb-1">City</p>
                        <p className="text-sm font-medium text-gray-900">{restaurantData.storeDetails.city}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Pincode</p>
                        <p className="text-sm font-medium text-gray-900">{restaurantData.storeDetails.pincode}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Total Tables</p>
                        <p className="text-sm font-medium text-gray-900">{restaurantData.storeDetails.totalTables}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Seating</p>
                        <p className="text-sm font-medium text-gray-900">{restaurantData.storeDetails.seating}</p>
                    </div>
                    <div className="md:col-span-3">
                        <p className="text-xs text-gray-400 mb-1">Store Address</p>
                        <p className="text-sm font-medium text-gray-900">{restaurantData.storeDetails.address}</p>
                    </div>
                </div>
            </div>

            {/* Upload Photos */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                <h2 className="text-base font-medium text-gray-900 mb-6 pb-4 border-b border-gray-100">
                    Upload Photos
                </h2>
                <div className="space-y-3">
                    {restaurantData.uploadedFiles.map((file, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-[#F8F8FF] rounded-lg border border-dashed border-[#4B3DBF]/30">
                            <div className="flex items-center gap-3">
                                <FileText className="text-red-500" size={24} />
                                <span className="text-sm font-medium text-[#4B3DBF]">{file.name}</span>
                            </div>
                            <button className="p-2 bg-[#4B3DBF] hover:bg-[#3d31a5] rounded-full text-white transition-colors cursor-pointer">
                                <Trash2 size={16} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bank details */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
                    <h2 className="text-base font-medium text-gray-900">
                        Bank details
                    </h2>
                    <button className="text-gray-400 hover:text-[#4B3DBF] cursor-pointer">
                        <FileEdit size={18} />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-4">
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Account Holder Name</p>
                        <p className="text-sm font-medium text-gray-900">{restaurantData.bankDetails.accountHolderName}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Account Number</p>
                        <p className="text-sm font-medium text-gray-900">{restaurantData.bankDetails.accountNumber}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 mb-1">IFSC Code</p>
                        <p className="text-sm font-medium text-gray-900">{restaurantData.bankDetails.ifscCode}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
