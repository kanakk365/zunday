"use client";

import React from "react";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function PayoutDetailsPage({
    params,
}: {
    params: { id: string };
}) {
    const router = useRouter();

    // Mock data matching the design image 2
    const payoutData = {
        name: "Urban Tadka",
        restaurantInfo: {
            vendorName: "Urban Tadka",
            contactNumber: "9082675124",
            vendorEmail: "Urban@yahoo.in",
            city: "Chennai"
        },
        bankDetails: {
            bankName: "HDFC Bank",
            accountNumber: "6287111",
            ifscCode: "M988",
            accountHolder: "Urban Tadka",
            upiId: "Urban@icici",
            gstNumber: "27AAECF4529F1Z3"
        },
        summary: {
            totalBookings: "244",
            grossAmount: "₹48,920",
            commission: "₹7,338",
            netPayout: "₹15,200",
            taxes: "₹1,250"
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
                    <h1 className="text-2xl font-bold text-gray-900">
                        {payoutData.name}
                    </h1>
                </div>
                <p className="text-sm text-gray-400 italic ml-10">
                    View all the details about the Restaurant Payout here
                </p>
            </div>

            {/* Restaurant Info */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
                <h2 className="text-base font-medium text-gray-900 mb-8 pb-4 border-b border-gray-100">
                    Restaurant Info
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-4">
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Vendor Name</p>
                        <p className="text-sm font-medium text-gray-900">{payoutData.restaurantInfo.vendorName}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Contact Number</p>
                        <p className="text-sm font-medium text-gray-900">{payoutData.restaurantInfo.contactNumber}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Vendor Email</p>
                        <p className="text-sm font-medium text-gray-900">{payoutData.restaurantInfo.vendorEmail}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 mb-1">City</p>
                        <p className="text-sm font-medium text-gray-900">{payoutData.restaurantInfo.city}</p>
                    </div>
                </div>
            </div>

            {/* Bank Details Block */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
                <h2 className="text-base font-medium text-gray-900 mb-8 pb-4 border-b border-gray-100">
                    Bank Details Block
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-4">
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Bank Name</p>
                        <p className="text-sm font-medium text-gray-900">{payoutData.bankDetails.bankName}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Account Number (masked)</p>
                        <p className="text-sm font-medium text-gray-900">{payoutData.bankDetails.accountNumber}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 mb-1">IFSC Code</p>
                        <p className="text-sm font-medium text-gray-900">{payoutData.bankDetails.ifscCode}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Account Holder</p>
                        <p className="text-sm font-medium text-gray-900">{payoutData.bankDetails.accountHolder}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 mb-1">UPI ID</p>
                        <p className="text-sm font-medium text-gray-900">{payoutData.bankDetails.upiId}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 mb-1">GST Number</p>
                        <p className="text-sm font-medium text-gray-900">{payoutData.bankDetails.gstNumber}</p>
                    </div>
                </div>
            </div>

            {/* Payout Summary */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
                <h2 className="text-base font-medium text-gray-900 mb-8 pb-4 border-b border-gray-100">
                    Payout Summary
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-4">
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Total Bookings</p>
                        <p className="text-sm font-medium text-gray-900">{payoutData.summary.totalBookings}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Gross Amount</p>
                        <p className="text-sm font-medium text-gray-900">{payoutData.summary.grossAmount}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Zunday Commission (15%)</p>
                        <p className="text-sm font-medium text-gray-900">{payoutData.summary.commission}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Net Payout</p>
                        <p className="text-sm font-medium text-gray-900">{payoutData.summary.netPayout}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Taxes</p>
                        <p className="text-sm font-medium text-gray-900">{payoutData.summary.taxes}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
