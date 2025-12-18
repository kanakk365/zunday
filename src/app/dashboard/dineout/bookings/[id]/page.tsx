"use client";

import React from "react";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BookingDetailsPage({
    params,
}: {
    params: { id: string };
}) {
    const router = useRouter();

    // Mock data matching the design image 2
    const bookingData = {
        title: "Urban Tadka",
        status: "Active",
        basicDetails: {
            name: "Jeeva Shah",
            emailId: "Jeeva@yahoo.in",
            phoneNumber: "90987167627",
        },
        bookingInfo: {
            bookingId: "YSH7277",
            restaurant: "Urban Tadka",
            dateTime: "12 Mar , 8:00 PM",
            guests: "5",
            specialRequest: "None",
            seating: "5",
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
                            {bookingData.title}
                        </h1>
                        <span className="px-3 py-1 bg-[#388E3C] text-white text-xs font-medium rounded-full">
                            {bookingData.status}
                        </span>
                    </div>
                </div>
                <p className="text-sm text-gray-400 italic ml-10">
                    View all the details about the Restaurant booking here
                </p>
            </div>

            {/* Basic details */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
                <h2 className="text-base font-medium text-gray-900 mb-8 pb-4 border-b border-gray-100">
                    Basic details
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-4">
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Name</p>
                        <p className="text-sm font-medium text-gray-900">{bookingData.basicDetails.name}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Email Id</p>
                        <p className="text-sm font-medium text-gray-900">{bookingData.basicDetails.emailId}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Phone number</p>
                        <p className="text-sm font-medium text-gray-900">{bookingData.basicDetails.phoneNumber}</p>
                    </div>
                </div>
            </div>

            {/* Booking Info */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
                <h2 className="text-base font-medium text-gray-900 mb-8 pb-4 border-b border-gray-100">
                    Booking Info
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-4">
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Booking ID</p>
                        <p className="text-sm font-medium text-gray-900">{bookingData.bookingInfo.bookingId}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Restaurant</p>
                        <p className="text-sm font-medium text-gray-900">{bookingData.bookingInfo.restaurant}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Date & Time</p>
                        <p className="text-sm font-medium text-gray-900">{bookingData.bookingInfo.dateTime}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Guests</p>
                        <p className="text-sm font-medium text-gray-900">{bookingData.bookingInfo.guests}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Special Request</p>
                        <p className="text-sm font-medium text-gray-900">{bookingData.bookingInfo.specialRequest}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Seating</p>
                        <p className="text-sm font-medium text-gray-900">{bookingData.bookingInfo.seating}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
