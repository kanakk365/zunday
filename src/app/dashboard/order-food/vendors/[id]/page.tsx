"use client";

import React from "react";
import { ChevronLeft, Pencil, FileText } from "lucide-react";
import { useRouter } from "next/navigation";

export default function FoodVendorDetailsPage() {
    const router = useRouter();

    const vendor_data = {
        name: "Urban Tadka Kitchen",
        status: "Active",
        basic: {
            vendorName: "Urban Tadka Kitchen",
            cuisine: "North Indian",
            phone: "90987167627",
            email: "Raj@yahoo.in",
            city: "Chennai"
        },
        restaurant: {
            type: "Hotel",
            operatingHours: "09:00AM to 10:00PM",
            city: "Chennai",
            pincode: "421201",
            deliveryTime: "30 Minutes",
            prepTime: "30 Minutes",
            address: "A 208, Pandurang Wadi , F.C Road , Laxmi Temple , Mumbai"
        },
        payment: {
            accountHolder: "Rajesh Kumar",
            accountNumber: "AD1445",
            ifsc: "AS324521"
        },
        documents: [
            { name: "GST Certificate.PDF" },
            { name: "Business License.PDF" },
            { name: "FSSAI.PDF" },
            { name: "Images.PDF" }
        ]
    };

    return (
        <div className="space-y-6 py-4 max-w-[1400px] mx-auto pb-20">
            {/* Header */}
            <div className="flex items-center gap-3">
                <button
                    onClick={() => router.back()}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
                >
                    <ChevronLeft size={24} className="text-gray-900" />
                </button>
                <div>
                    <div className="flex items-center gap-3">
                        <h1 className="text-2xl font-bold text-gray-900">{vendor_data.name}</h1>
                        <span className="px-3 py-1 bg-[#1A9F1A] text-white text-xs font-medium rounded-full">
                            {vendor_data.status}
                        </span>
                    </div>
                    <p className="text-sm text-gray-400 mt-1 italic">
                        View all the details about the vendor here
                    </p>
                </div>
            </div>

            {/* Basic Details */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                <div className="flex justify-between items-start mb-6 pb-4 border-b border-gray-100">
                    <h2 className="text-base font-bold text-gray-900">Basic details</h2>
                    <button className="text-gray-400 hover:text-[#4B3DBF] transition-colors cursor-pointer">
                        <Pencil size={18} />
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-1">
                        <label className="text-xs text-gray-500">Vendor Name</label>
                        <p className="text-sm font-medium text-gray-900">{vendor_data.basic.vendorName}</p>
                    </div>
                    <div className="space-y-1">
                        <label className="text-xs text-gray-500">Cuisine</label>
                        <p className="text-sm font-medium text-gray-900">{vendor_data.basic.cuisine}</p>
                    </div>
                    <div className="space-y-1">
                        <label className="text-xs text-gray-500">Phone number</label>
                        <p className="text-sm font-medium text-gray-900">{vendor_data.basic.phone}</p>
                    </div>
                    <div className="space-y-1">
                        <label className="text-xs text-gray-500">Email Id</label>
                        <p className="text-sm font-medium text-gray-900">{vendor_data.basic.email}</p>
                    </div>
                    <div className="space-y-1">
                        <label className="text-xs text-gray-500">City</label>
                        <p className="text-sm font-medium text-gray-900">{vendor_data.basic.city}</p>
                    </div>
                </div>
            </div>

            {/* Restaurant Details */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                <div className="flex justify-between items-start mb-6 pb-4 border-b border-gray-100">
                    <h2 className="text-base font-bold text-gray-900">Restaurant details</h2>
                    <button className="text-gray-400 hover:text-[#4B3DBF] transition-colors cursor-pointer">
                        <Pencil size={18} />
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
                    <div className="space-y-1">
                        <label className="text-xs text-gray-500">Restaurant type</label>
                        <p className="text-sm font-medium text-gray-900">{vendor_data.restaurant.type}</p>
                    </div>
                    <div className="space-y-1">
                        <label className="text-xs text-gray-500">Operating Hours</label>
                        <p className="text-sm font-medium text-gray-900">{vendor_data.restaurant.operatingHours}</p>
                    </div>
                    <div className="space-y-1">
                        <label className="text-xs text-gray-500">City</label>
                        <p className="text-sm font-medium text-gray-900">{vendor_data.restaurant.city}</p>
                    </div>
                    <div className="space-y-1">
                        <label className="text-xs text-gray-500">Pincode</label>
                        <p className="text-sm font-medium text-gray-900">{vendor_data.restaurant.pincode}</p>
                    </div>
                    <div className="space-y-1">
                        <label className="text-xs text-gray-500">Delivery Time</label>
                        <p className="text-sm font-medium text-gray-900">{vendor_data.restaurant.deliveryTime}</p>
                    </div>
                    <div className="space-y-1">
                        <label className="text-xs text-gray-500">Estimated Avg Prep Time</label>
                        <p className="text-sm font-medium text-gray-900">{vendor_data.restaurant.prepTime}</p>
                    </div>
                </div>
                <div className="space-y-1">
                    <label className="text-xs text-gray-500">Store Address</label>
                    <p className="text-sm font-medium text-gray-900">{vendor_data.restaurant.address}</p>
                </div>
            </div>

            {/* Documents Uploaded */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                <div className="flex justify-between items-start mb-6 pb-4 border-b border-gray-100">
                    <h2 className="text-base font-bold text-gray-900">Documents Uploaded</h2>
                    <button className="text-gray-400 hover:text-[#4B3DBF] transition-colors cursor-pointer">
                        <Pencil size={18} />
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {vendor_data.documents.map((doc, index) => (
                        <div key={index} className="flex items-center gap-4 p-4 bg-[#F8F8FF] rounded-lg">
                            <div className="w-10 h-10 rounded-lg bg-[#FFE5E5] flex items-center justify-center shrink-0">
                                <FileText className="text-[#FF0000]" size={20} />
                            </div>
                            <span className="text-sm font-semibold text-[#4B3DBF]">{doc.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bank details */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                <div className="flex justify-between items-start mb-6 pb-4 border-b border-gray-100">
                    <h2 className="text-base font-bold text-gray-900">Bank details</h2>
                    <button className="text-gray-400 hover:text-[#4B3DBF] transition-colors cursor-pointer">
                        <Pencil size={18} />
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-1">
                        <label className="text-xs text-gray-500">Account Holder Name</label>
                        <p className="text-sm font-medium text-gray-900">{vendor_data.payment.accountHolder}</p>
                    </div>
                    <div className="space-y-1">
                        <label className="text-xs text-gray-500">Account Number</label>
                        <p className="text-sm font-medium text-gray-900">{vendor_data.payment.accountNumber}</p>
                    </div>
                    <div className="space-y-1">
                        <label className="text-xs text-gray-500">IFSC Code</label>
                        <p className="text-sm font-medium text-gray-900">{vendor_data.payment.ifsc}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
