"use client";

import React from "react";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function FoodOrderDetailsPage({
    params,
}: {
    params: { id: string };
}) {
    const router = useRouter();

    // Mock data matching the image
    const orderData = {
        id: "F12345",
        userName: "Raja",
        status: "Active",
        orderDate: "12 Nov , 5:34 PM",
        phone: "9083676456",
        vendorName: "Urban Tadka",
        deliveryPartner: "Ramesh",
        deliveryPartnerPhone: "9087676514",
        paymentMode: "UPI",
        totalBill: "₹449",
        deliveryCharges: "₹90",
        items: [
            {
                name: "Paneer Tikka Roll",
                quantity: "2",
                price: "₹55.00",
                total: "₹100.50",
            },
            {
                name: "Mint Lemonade",
                quantity: "1 Glass",
                price: "₹90.00",
                total: "₹90.00",
            },
            {
                name: "Roti",
                quantity: "3",
                price: "₹80.00",
                total: "₹240.00", // Corrected math from image visualization
            },
        ],
        timeline: [
            { step: "New", completed: true },
            { step: "Accepted", completed: true },
            { step: "Preparing", completed: true },
            { step: "Packed", completed: true },
            { step: "Delivered", completed: true },
        ],
        deliveryInfo: {
            partnerName: "Ramesh",
            partnerPhone: "9087676514",
            startTime: "5:34 PM",
            endTime: "6:34 PM",
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
                            {orderData.id}- {orderData.userName}
                        </h1>
                        <span className="px-3 py-1 bg-[#388E3C] text-white text-xs font-medium rounded-full">
                            {orderData.status}
                        </span>
                    </div>
                </div>
                <p className="text-sm text-gray-400 italic ml-10">
                    View all the details about the Food order here
                </p>
            </div>

            {/* Order Summary Card */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
                <h2 className="text-base font-medium text-gray-900 mb-6 pb-4 border-b border-gray-100">
                    Order Summary
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-4">
                    <div>
                        <p className="text-xs text-gray-500 mb-1">Order ID</p>
                        <p className="text-sm font-semibold text-gray-900">{orderData.id}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 mb-1">Order Date & Time</p>
                        <p className="text-sm font-semibold text-gray-900">{orderData.orderDate}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 mb-1">User Name</p>
                        <p className="text-sm font-semibold text-gray-900">{orderData.userName}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 mb-1">Phone</p>
                        <p className="text-sm font-semibold text-gray-900">{orderData.phone}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 mb-1">Vendor Name</p>
                        <p className="text-sm font-semibold text-gray-900">{orderData.vendorName}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 mb-1">Delivery Partner Name</p>
                        <p className="text-sm font-semibold text-gray-900">{orderData.deliveryPartner}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 mb-1">Payment Mode</p>
                        <p className="text-sm font-semibold text-gray-900">{orderData.paymentMode}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 mb-1">Total Bill</p>
                        <p className="text-sm font-semibold text-gray-900">{orderData.totalBill}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 mb-1">Delivery Charges</p>
                        <p className="text-sm font-semibold text-gray-900">{orderData.deliveryCharges}</p>
                    </div>
                </div>
            </div>

            {/* Order Items Card */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
                <h2 className="text-base font-medium text-gray-900 mb-6 pb-4 border-b border-gray-100">
                    Order Items ({orderData.items.length})
                </h2>
                <div className="space-y-6">
                    {orderData.items.map((item, index) => (
                        <div
                            key={index}
                            className="grid grid-cols-4 items-center border-b border-gray-50 last:border-0 pb-6 last:pb-0 text-sm"
                        >
                            <div className="text-gray-600 pl-4">{item.name}</div>
                            <div className="text-gray-900 font-medium">{item.quantity}</div>
                            <div className="text-gray-900 font-medium text-left">{item.price}</div>
                            <div className="text-gray-900 font-medium text-left">{item.total}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Status Timeline Card */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
                <h2 className="text-base font-medium text-gray-900 mb-8 pb-4 border-b border-gray-100">
                    Status Timeline
                </h2>
                <div className="relative px-8">
                    {/* Progress Bar Background */}
                    <div className="absolute top-3 left-8 right-8 h-2 bg-gray-100 rounded-full z-0"></div>
                    {/* Active Progress Bar - Full green for this example as all are completed */}
                    <div className="absolute top-3 left-8 right-8 h-2 bg-[#388E3C] rounded-full z-0"></div>

                    <div className="relative z-10 flex justify-between w-full">
                        {orderData.timeline.map((step, index) => (
                            <div key={index} className="flex flex-col items-center gap-4">
                                <div className="w-8 h-8 rounded-full bg-[#388E3C] border-4 border-white shadow-sm flex items-center justify-center">
                                </div>
                                <span className="text-sm font-medium text-gray-900">{step.step}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Delivery Info Card */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
                <h2 className="text-base font-medium text-gray-900 mb-6 pb-4 border-b border-gray-100">
                    Delivery Info
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-4">
                    <div>
                        <p className="text-xs text-gray-500 mb-1">Delivery Partner Name</p>
                        <p className="text-sm font-semibold text-gray-900">{orderData.deliveryInfo.partnerName}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 mb-1">Partner Phone</p>
                        <p className="text-sm font-semibold text-gray-900">{orderData.deliveryInfo.partnerPhone}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 mb-1">Start Time</p>
                        <p className="text-sm font-semibold text-gray-900">{orderData.deliveryInfo.startTime}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 mb-1">End Time</p>
                        <p className="text-sm font-semibold text-gray-900">{orderData.deliveryInfo.endTime}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
