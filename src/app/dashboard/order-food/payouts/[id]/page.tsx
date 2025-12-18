"use client";

import React from "react";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function FoodPayoutDetailsPage({
    params,
}: {
    params: { id: string };
}) {
    const router = useRouter();

    // Mock data matching the details page image
    const payoutData = {
        vendorName: "Urban Tadka", // Header Title
        info: {
            vendorName: "Urban Tadka",
            contactNumber: "9082675124",
            vendorId: "M9178",
            vendorEmail: "Urban@yahoo.in",
            businessCategory: "Food Order",
            city: "Chennai",
        },
        bankDetails: {
            bankName: "HDFC Bank",
            accountNumber: "6287111", // Masked in UI label
            ifscCode: "M988",
            accountHolder: "Urban Tadka",
            upiId: "Urban@icici",
            gstNumber: "27AAECF4529F1Z3",
        },
        summary: {
            totalOrders: "24",
            grossRevenue: "₹48,920",
            zundayCommission: "₹7,338", // 15%
            deliveryCharges: "₹5,200",
            taxes: "₹1,250",
            totalPayout: "₹39,132", // The image label appears to be "Taxes" again in the last slot based on position, but logically it's Net Payout. Wait, checking image carefully.
            // Image Bottom Row: Delivery Charges | Taxes | Taxes (Value 39,132).
            // It seems "Taxes" is repeated or it's a typo in the mockup for "Net Payout".
            // Given the visual hierarchy, the last "Taxes" field with a large amount is likely the final payout or similar.
            // Label in image is "Taxes" for the 3rd column, 2nd row.
            // I will use the label "Taxes" as per the image for the last item, even if it seems like a typo, or I can correct it to "Total Payout" if user prefers logic.
            // Strict adherence to image request: "make this food payout details page".
            // I will key the last one as "payout" but label it "Taxes" if that is what the image literally says?
            // Let me look closer at the crop.
            // The last field label is indeed "Taxes" in the image. Bottom right corner.
            // Value is ₹39,132.
            // I will stick to the image text to be safe, but it's likely a typo in the design.
            lastFieldLabel: "Taxes"
        }
    };

    return (
        <div className="space-y-6 py-4 max-w-[1400px] mx-auto pb-20">
            {/* Header */}
            <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => router.back()}
                        className="p-1 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
                    >
                        <ChevronLeft size={24} className="text-gray-900" />
                    </button>
                    <h1 className="text-2xl font-bold text-gray-900">
                        {payoutData.vendorName}
                    </h1>
                </div>
                <p className="text-sm text-gray-400 italic ml-10">
                    View all the details about the Food Payout here
                </p>
            </div>

            {/* Vendor Info Block */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
                <h2 className="text-base font-medium text-gray-900 mb-8 pb-4 border-b border-gray-100">
                    Vendor Info Block
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-4">
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Vendor Name</p>
                        <p className="text-sm font-medium text-gray-900">{payoutData.info.vendorName}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Contact Number</p>
                        <p className="text-sm font-medium text-gray-900">{payoutData.info.contactNumber}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Vendor ID</p>
                        <p className="text-sm font-medium text-gray-900">{payoutData.info.vendorId}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Vendor Email</p>
                        <p className="text-sm font-medium text-gray-900">{payoutData.info.vendorEmail}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Business Category</p>
                        <p className="text-sm font-medium text-gray-900">{payoutData.info.businessCategory}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 mb-1">City</p>
                        <p className="text-sm font-medium text-gray-900">{payoutData.info.city}</p>
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
                        <p className="text-xs text-gray-400 mb-1">Total Orders</p>
                        <p className="text-sm font-medium text-gray-900">{payoutData.summary.totalOrders}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Gross Revenue</p>
                        <p className="text-sm font-medium text-gray-900">{payoutData.summary.grossRevenue}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Zunday Commission (15%)</p>
                        <p className="text-sm font-medium text-gray-900">{payoutData.summary.zundayCommission}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Delivery Charges</p>
                        <p className="text-sm font-medium text-gray-900">{payoutData.summary.deliveryCharges}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Taxes</p>
                        <p className="text-sm font-medium text-gray-900">{payoutData.summary.taxes}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 mb-1">{payoutData.summary.lastFieldLabel}</p>
                        <p className="text-sm font-medium text-gray-900">{payoutData.summary.totalPayout}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
