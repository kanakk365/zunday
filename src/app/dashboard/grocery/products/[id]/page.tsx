"use client";

import React from "react";
import { ChevronLeft, Edit2 } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ProductDetailsPage() {
    const router = useRouter();

    const productData = {
        name: "Organic Tomatoes",
        status: "Active",
        details: {
            productName: "Tomatoes",
            category: "Fruits & Vegetables",
            vendor: "Rajshree",
            status: "Active"
        },
        pricing: {
            mrp: "₹ 400",
            sellingPrice: "₹ 900",
            stock: "12",
            unit: "Kgs"
        },
        image: "/placeholder-tomato.png" // Using placeholder logic in component
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
                        <h1 className="text-2xl font-bold text-gray-900">{productData.name}</h1>
                        <span className="px-3 py-1 bg-[#388E3C] text-white text-xs font-medium rounded-full">
                            {productData.status}
                        </span>
                    </div>
                    <p className="text-sm text-gray-400 italic mt-1">View all the details about the Product here</p>
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
                        <p className="text-xs text-gray-400 mb-1">Product Name</p>
                        <p className="text-sm font-semibold text-gray-900">{productData.details.productName}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Category</p>
                        <p className="text-sm font-semibold text-gray-900">{productData.details.category}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Vendor</p>
                        <p className="text-sm font-semibold text-gray-900">{productData.details.vendor}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Status</p>
                        <p className="text-sm font-semibold text-gray-900">{productData.details.status}</p>
                    </div>
                </div>
            </div>

            {/* Pricing & Stock */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-50">
                    <h2 className="text-base font-bold text-gray-800">Pricing & Stock</h2>
                    <button className="text-gray-400 hover:text-[#4B3DBF] transition-colors cursor-pointer">
                        <Edit2 size={18} />
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-12">
                    <div>
                        <p className="text-xs text-gray-400 mb-1">MRP (₹)</p>
                        <p className="text-sm font-semibold text-gray-900">{productData.pricing.mrp}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Selling Price (₹)</p>
                        <p className="text-sm font-semibold text-gray-900">{productData.pricing.sellingPrice}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Stock</p>
                        <p className="text-sm font-semibold text-gray-900">{productData.pricing.stock}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Unit</p>
                        <p className="text-sm font-semibold text-gray-900">{productData.pricing.unit}</p>
                    </div>
                </div>
            </div>

            {/* Product images */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-50">
                    <h2 className="text-base font-bold text-gray-800">Product images</h2>
                    <button className="text-gray-400 hover:text-[#4B3DBF] transition-colors cursor-pointer">
                        <Edit2 size={18} />
                    </button>
                </div>
                <div className="flex gap-4">
                    <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center text-4xl border border-gray-200">
                        🍅
                    </div>
                </div>
            </div>
        </div>
    );
}
