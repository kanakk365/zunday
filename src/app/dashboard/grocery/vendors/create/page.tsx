"use client";

import React from "react";
import { ChevronLeft, Clock, CloudUpload, ChevronDown, Trash2, Check } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CreateVendorPage() {
    const router = useRouter();
    const [showModal, setShowModal] = React.useState(false);

    // Initial state matching the image
    const [formData, setFormData] = React.useState({
        storeName: "Raju Kinara Store",
        ownerName: "Raju Sharma",
        phone: "90987167827",
        email: "Raju@yahoo.in",
        storeType: "Kirana",
        operatingHours: "09:00AM to 10:00PM",
        city: "Mumbai",
        pincode: "421201",
        address: "A 208 , Pandurang Wadi , F.C Road , near Laxmi Temple , Mumbai",
        accountHolder: "Raju sharma",
        accountNumber: "MA728727",
        ifsc: "FC18918177"
    });

    const [documents, setDocuments] = React.useState<any[]>([]);

    const handleDeleteDocument = (indexToDelete: number) => {
        setDocuments(documents.filter((_, index) => index !== indexToDelete));
    };

    React.useEffect(() => {
        if (showModal) {
            const timer = setTimeout(() => {
                setShowModal(false);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [showModal]);

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
                    <h1 className="text-2xl font-bold text-gray-900">Create Vendor</h1>
                    <p className="text-sm text-gray-400 italic">Add the details about the vendor to add him</p>
                </div>
            </div>

            {/* Basic Details */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
                <h2 className="text-base font-bold text-gray-900 mb-6">Basic details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-700">Store Name</label>
                        <input
                            type="text"
                            value={formData.storeName}
                            onChange={(e) => setFormData({ ...formData, storeName: e.target.value })}
                            className="w-full px-4 py-3 bg-[#f8f8ff] border-none rounded-lg text-sm text-[#4B3DBF] focus:outline-none focus:ring-2 focus:ring-[#4B3DBF]/20 font-medium"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-700">Owner Name</label>
                        <div className="relative">
                            <input
                                type="text"
                                value={formData.ownerName}
                                onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                                className="w-full px-4 py-3 bg-[#f8f8ff] border-none rounded-lg text-sm text-[#4B3DBF] focus:outline-none focus:ring-2 focus:ring-[#4B3DBF]/20 font-medium"
                            />
                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-700">Phone Number</label>
                        <input
                            type="text"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-4 py-3 bg-[#f8f8ff] border-none rounded-lg text-sm text-[#4B3DBF] focus:outline-none focus:ring-2 focus:ring-[#4B3DBF]/20 font-medium"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-700">Email Id</label>
                        <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3 bg-[#f8f8ff] border-none rounded-lg text-sm text-[#4B3DBF] focus:outline-none focus:ring-2 focus:ring-[#4B3DBF]/20 font-medium"
                        />
                    </div>
                </div>
            </div>

            {/* Store Details */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
                <h2 className="text-base font-bold text-gray-900 mb-6">Store details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-700">Store Type</label>
                        <div className="relative">
                            <select
                                value={formData.storeType}
                                onChange={(e) => setFormData({ ...formData, storeType: e.target.value })}
                                className="w-full px-4 py-3 bg-[#f8f8ff] border-none rounded-lg text-sm text-[#4B3DBF] focus:outline-none focus:ring-2 focus:ring-[#4B3DBF]/20 font-medium appearance-none cursor-pointer"
                            >
                                <option>Kirana</option>
                                <option>Supermarket</option>
                                <option>Organics</option>
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-700">Operating Hours</label>
                        <div className="relative">
                            <input
                                type="text"
                                value={formData.operatingHours}
                                onChange={(e) => setFormData({ ...formData, operatingHours: e.target.value })}
                                className="w-full px-4 py-3 bg-[#f8f8ff] border-none rounded-lg text-sm text-[#4B3DBF] focus:outline-none focus:ring-2 focus:ring-[#4B3DBF]/20 font-medium"
                            />
                            <Clock className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-700">City</label>
                        <div className="relative">
                            <select
                                value={formData.city}
                                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                className="w-full px-4 py-3 bg-[#f8f8ff] border-none rounded-lg text-sm text-[#4B3DBF] focus:outline-none focus:ring-2 focus:ring-[#4B3DBF]/20 font-medium appearance-none cursor-pointer"
                            >
                                <option>Mumbai</option>
                                <option>Bangalore</option>
                                <option>Delhi</option>
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-700">Pincode</label>
                        <div className="relative">
                            <select
                                value={formData.pincode}
                                onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                                className="w-full px-4 py-3 bg-[#f8f8ff] border-none rounded-lg text-sm text-[#4B3DBF] focus:outline-none focus:ring-2 focus:ring-[#4B3DBF]/20 font-medium appearance-none cursor-pointer"
                            >
                                <option>421201</option>
                                <option>560001</option>
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                        </div>
                    </div>
                    <div className="col-span-1 md:col-span-2 space-y-2">
                        <label className="text-xs font-bold text-gray-700">Store Address</label>
                        <textarea
                            rows={3}
                            value={formData.address}
                            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                            className="w-full px-4 py-3 bg-[#f8f8ff] border-none rounded-lg text-sm text-[#4B3DBF] focus:outline-none focus:ring-2 focus:ring-[#4B3DBF]/20 font-medium resize-none"
                        />
                    </div>
                </div>
            </div>

            {/* Upload Documents */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
                <h2 className="text-base font-bold text-gray-900 mb-6">Upload Documents</h2>
                {documents.length > 0 ? (
                    <div className="space-y-4">
                        {documents.map((doc, index) => (
                            <div key={index} className="flex items-center justify-between p-4 bg-[#f8f8ff] rounded-lg">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 flex items-center justify-center bg-[#D32F2F] rounded-lg text-white font-bold text-[10px] shrink-0">
                                        PDF
                                    </div>
                                    <span className="text-sm font-bold text-[#4B3DBF]">{doc.name}</span>
                                </div>
                                <button
                                    onClick={() => handleDeleteDocument(index)}
                                    className="w-8 h-8 flex items-center justify-center rounded-full bg-[#4B3DBF] text-white hover:bg-[#3d31a0] transition-colors cursor-pointer"
                                >
                                    <Trash2 size={16} />
                                </button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {["GST Certificate", "Business License", "ID Proof", "Store Photos"].map((label, index) => (
                            <div key={index} className="border-2 border-dashed border-[#4B3DBF]/40 rounded-lg p-12 flex flex-col items-center justify-center gap-3 cursor-pointer hover:bg-gray-50 transition-colors bg-[#FAFAFF]">
                                <CloudUpload size={32} className="text-gray-900" />
                                <div className="text-center">
                                    <p className="text-base font-medium text-gray-900">{label}</p>
                                    <p className="text-sm font-bold text-[#4B3DBF] mt-1">Browse Files</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Bank Details */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
                <h2 className="text-base font-bold text-gray-900 mb-6">Bank details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-700">Account Holder Name</label>
                        <input
                            type="text"
                            value={formData.accountHolder}
                            onChange={(e) => setFormData({ ...formData, accountHolder: e.target.value })}
                            className="w-full px-4 py-3 bg-[#f8f8ff] border-none rounded-lg text-sm text-[#4B3DBF] focus:outline-none focus:ring-2 focus:ring-[#4B3DBF]/20 font-medium"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-700">Account Number</label>
                        <input
                            type="text"
                            value={formData.accountNumber}
                            onChange={(e) => setFormData({ ...formData, accountNumber: e.target.value })}
                            className="w-full px-4 py-3 bg-[#f8f8ff] border-none rounded-lg text-sm text-[#4B3DBF] focus:outline-none focus:ring-2 focus:ring-[#4B3DBF]/20 font-medium"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-700">IFSC Code</label>
                        <input
                            type="text"
                            value={formData.ifsc}
                            onChange={(e) => setFormData({ ...formData, ifsc: e.target.value })}
                            className="w-full px-4 py-3 bg-[#f8f8ff] border-none rounded-lg text-sm text-[#4B3DBF] focus:outline-none focus:ring-2 focus:ring-[#4B3DBF]/20 font-medium"
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
                    className="px-8 py-3 bg-[#4B3DBF] text-white text-sm font-semibold rounded-lg hover:bg-[#3d31a0] shadow-sm shadow-indigo-200 cursor-pointer"
                >
                    Save Vendor
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
                            New Vendor created sucessfully!!
                        </h3>
                    </div>
                </div>
            )}
        </div>
    );
}
