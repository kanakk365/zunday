"use client";

import React from "react";
import { ChevronLeft, FileEdit } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function GroceryOrderDetailsPage({
    params,
}: {
    params: { id: string };
}) {
    const router = useRouter();

    // Mock data - in a real app, use params.id to fetch
    const orderData = {
        id: "#TCK001",
        customerName: "Rohan Mehta",
        vendor: "Fresh Mart Supermarket",
        totalAmount: "₹1,567.50",
        status: "Delivered",
        items: [
            {
                name: "Fresh Milk",
                quantity: "1 ltr",
                price: "₹55.00",
                total: "₹100.50",
            },
            {
                name: "Breads",
                quantity: "1 packate",
                price: "₹90.00",
                total: "₹90.00",
            },
            {
                name: "Eggs",
                quantity: "3 eggs",
                price: "₹80.00",
                total: "₹445.50",
            },
            {
                name: "Avocado",
                quantity: "2 pieces",
                price: "₹190.00",
                total: "₹190.00",
            },
            {
                name: "Tomatoes",
                quantity: "500 grams",
                price: "₹90.00",
                total: "₹90.00",
            },
            {
                name: "Capsicum",
                quantity: "1 Kilograms",
                price: "₹170.00",
                total: "₹170.00",
            },
            {
                name: "Vinegar",
                quantity: "1 bottle - 500 ml",
                price: "₹90.00",
                total: "₹90.00",
            },
            {
                name: "Red Capsicum",
                quantity: "1 Kilogram",
                price: "₹190.00",
                total: "₹190.00",
            },
        ],
    };

    return (
        <div className="space-y-6 py-4">
            {/* Header */}
            <div>
                <div className="flex items-center gap-2 mb-2">
                    <button
                        onClick={() => router.back()}
                        className="p-1 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
                    >
                        <ChevronLeft size={24} className="text-gray-600" />
                    </button>
                    <h1 className="text-2xl font-bold text-gray-900">
                        {orderData.id}-{orderData.customerName}
                    </h1>
                </div>
                <p className="text-sm text-gray-400 italic ml-9">
                    View all the details about the order here
                </p>
            </div>

            {/* Order Details Card */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-base font-semibold text-gray-900">
                        Order details
                    </h2>
                    <button className="text-gray-400 hover:text-[#4B3DBF] cursor-pointer">
                        <FileEdit size={18} />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Customer</p>
                        <p className="text-sm font-medium text-gray-900">
                            {orderData.customerName}
                        </p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Vendor</p>
                        <p className="text-sm font-medium text-gray-900">
                            {orderData.vendor}
                        </p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Total Amoint</p>
                        <p className="text-sm font-medium text-gray-900">
                            {orderData.totalAmount}
                        </p>
                    </div>
                </div>

                <div>
                    <p className="text-xs text-gray-400 mb-1">Status</p>
                    <p className="text-sm font-medium text-[#1A1A1A]">
                        {orderData.status}
                    </p>
                </div>
            </div>

            {/* Order Items Card */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-6 flex items-center justify-between border-b border-gray-50">
                    <h2 className="text-base font-semibold text-gray-900">
                        Order Items ({orderData.items.length})
                    </h2>
                    <button className="text-gray-400 hover:text-[#4B3DBF] cursor-pointer">
                        <FileEdit size={18} />
                    </button>
                </div>

                <div className="px-6">
                    {orderData.items.map((item, index) => (
                        <div
                            key={index}
                            className="grid grid-cols-4 py-6 border-b border-gray-50 last:border-0 items-center"
                        >
                            <div className="text-sm text-gray-600 font-medium">{item.name}</div>
                            <div className="text-sm text-gray-500">{item.quantity}</div>
                            <div className="text-sm text-gray-500">{item.price}</div>
                            <div className="text-sm text-gray-500 text-right">{item.total}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
