"use client";

import React from "react";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function GroceryPayoutDetailsPage({
    params,
}: {
    params: { id: string };
}) {
    const router = useRouter();

    // Mock data matching the design image
    const payoutData = {
        vendorName: "FreshMart Grocery", // Title in header
        info: {
            vendorName: "FreshMart Supermarket",
            contactNumber: "9082675124",
            vendorId: "M9178",
            storeAddress: "A 208 , Pandurang Wadi , F.C Road , near Laxmi Temple , Mumbai",
        },
        bankDetails: {
            bankName: "HDFC Bank",
            accountNumber: "6287111",
            ifscCode: "M988",
            status: "Verified",
        },
        summary: {
            payoutAmount: "₹5,200",
            period: "01-15 Jan",
            commissionDeducted: "₹300",
            deliveryCharges: "₹120",
            netPayout: "₹4,780",
            requestedOn: "16 Jan 2025",
        }
    };

    return (
        <div className="space-y-6 py-4 ">
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
                        {payoutData.vendorName}
                    </h1>
                </div>
                <p className="text-sm text-gray-400 italic ml-9">
                    View all the details about the Payout here
                </p>
            </div>

            {/* Vendor Info Block */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
                <h2 className="text-base font-semibold text-gray-900 mb-6 pb-4 border-b border-gray-100">
                    Vendor Info Block
                </h2>
                <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Store Address</p>
                        <p className="text-sm font-medium text-gray-900">{payoutData.info.storeAddress}</p>
                    </div>
                </div>
            </div>

            {/* Bank Details Block */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
                <h2 className="text-base font-semibold text-gray-900 mb-6 pb-4 border-b border-gray-100">
                    Bank Details Block
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
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
                </div>
                <div>
                    <p className="text-xs text-gray-400 mb-1">Status</p>
                    <p className="text-sm font-bold text-gray-900">{payoutData.bankDetails.status}</p>
                </div>
            </div>

            {/* Payout Summary */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
                <h2 className="text-base font-semibold text-gray-900 mb-6 pb-4 border-b border-gray-100">
                    Payout Summary
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 gap-y-6">
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Payout Amount</p>
                        <p className="text-sm font-medium text-gray-900">{payoutData.summary.payoutAmount}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Period</p>
                        <p className="text-sm font-medium text-gray-900">{payoutData.summary.period}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Commission Deducted</p>
                        <p className="text-sm font-medium text-gray-900">{payoutData.summary.commissionDeducted}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Delivery Charges</p>
                        <p className="text-sm font-medium text-gray-900">{payoutData.summary.deliveryCharges}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Net Payout</p>
                        <p className="text-sm font-medium text-gray-900">{payoutData.summary.netPayout}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Requested On</p>
                        <p className="text-sm font-medium text-gray-900">{payoutData.summary.requestedOn}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
