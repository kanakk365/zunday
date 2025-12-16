"use client";

import React from "react";
import { ChevronLeft, Edit2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function VendorDetailsPage() {
    const router = useRouter();

    const vendorData = {
        name: "Fresh Mart Supermarket",
        status: "Active",
        owner: "Rajesh Kumar",
        phone: "90987167627",
        email: "Raj@yahoo.in",
        storeType: "Kirana",
        operatingHours: "09:00AM to 10:00PM",
        city: "Mumbai",
        pincode: "421201",
        address: "A 208, Pandurang Wadi , F.C Road , Laxmi Temple , Mumbai",
        accountHolder: "Rajesh Kumar",
        accountNumber: "AD1445",
        ifsc: "AS324521",
        documents: [
            { name: "GST Certificate.PDF", type: "pdf" },
            { name: "Business License.PDF", type: "pdf" },
            { name: "Aadhar.PDF", type: "pdf" },
            { name: "Images.PDF", type: "pdf" },
        ]
    };

    return (
        <div className="space-y-6 p-4 max-w-[1400px] mx-auto pb-20">
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
                        <h1 className="text-2xl font-bold text-gray-900">{vendorData.name}</h1>
                        <span className="px-3 py-1 bg-[#388E3C] text-white text-xs font-medium rounded-full">
                            {vendorData.status}
                        </span>
                    </div>
                    <p className="text-sm text-gray-400 italic mt-1">View all the details about the vendor here</p>
                </div>
            </div>

            {/* Basic Details */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-50">
                    <h2 className="text-base font-bold text-gray-800">Basic details</h2>
                    <button className="text-gray-400 hover:text-[#4B3DBF] transition-colors cursor-pointer">
                        <Edit2 size={18} />
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-12">
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Vendor Name</p>
                        <p className="text-sm font-semibold text-gray-900">{vendorData.name}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Owner Name</p>
                        <p className="text-sm font-semibold text-gray-900">{vendorData.owner}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Phone number</p>
                        <p className="text-sm font-semibold text-gray-900">{vendorData.phone}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Email Id</p>
                        <p className="text-sm font-semibold text-gray-900">{vendorData.email}</p>
                    </div>
                </div>
            </div>

            {/* Store Details */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-50">
                    <h2 className="text-base font-bold text-gray-800">Store details</h2>
                    <button className="text-gray-400 hover:text-[#4B3DBF] transition-colors">
                        <Edit2 size={18} />
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-12">
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Store type</p>
                        <p className="text-sm font-semibold text-gray-900">{vendorData.storeType}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Operating Hours</p>
                        <p className="text-sm font-semibold text-gray-900">{vendorData.operatingHours}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 mb-1">City</p>
                        <p className="text-sm font-semibold text-gray-900">{vendorData.city}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Pincode</p>
                        <p className="text-sm font-semibold text-gray-900">{vendorData.pincode}</p>
                    </div>
                    <div className="md:col-span-2">
                        <p className="text-xs text-gray-400 mb-1">Store Address</p>
                        <p className="text-sm font-semibold text-gray-900">{vendorData.address}</p>
                    </div>
                </div>
            </div>

            {/* Documents Uploaded */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-50">
                    <h2 className="text-base font-bold text-gray-800">Documents Uploaded</h2>
                    <button className="text-gray-400 hover:text-[#4B3DBF] transition-colors">
                        <Edit2 size={18} />
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {vendorData.documents.map((doc, index) => (
                        <div key={index} className="flex items-center gap-4 p-4 bg-[#F8F9FF] rounded-lg">
                            <div className="w-10 h-10 flex items-center justify-center bg-[#D32F2F] rounded-lg text-white font-bold text-[10px] shrink-0">
                                PDF
                            </div>
                            <span className="text-sm font-bold text-[#4B3DBF]">{doc.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bank Details */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-50">
                    <h2 className="text-base font-bold text-gray-800">Bank details</h2>
                    <button className="text-gray-400 hover:text-[#4B3DBF] transition-colors">
                        <Edit2 size={18} />
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-12">
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Account Holder Name</p>
                        <p className="text-sm font-semibold text-gray-900">{vendorData.accountHolder}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Account Number</p>
                        <p className="text-sm font-semibold text-gray-900">{vendorData.accountNumber}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 mb-1">IFSC Code</p>
                        <p className="text-sm font-semibold text-gray-900">{vendorData.ifsc}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
