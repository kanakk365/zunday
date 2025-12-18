"use client";

import React from "react";
import { FileEdit } from "lucide-react";

export default function ProfilePage() {
    return (
        <div className="space-y-6 py-4 max-w-[1400px] mx-auto pb-20">
            {/* Page Header */}
            <div>
                <h1 className="text-2xl font-bold text-gray-900">User Profile</h1>
                <p className="text-sm text-gray-400 mt-1 italic">
                    Manage your account information and security.
                </p>
            </div>

            {/* Profile Details Card */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8 min-h-[300px]">
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
                    <h2 className="text-base font-semibold text-gray-900">
                        Profile details
                    </h2>
                    <button className="text-gray-400 hover:text-[#4B3DBF] transition-colors cursor-pointer">
                        <FileEdit size={20} />
                    </button>
                </div>

                <div className="flex flex-col md:flex-row gap-12 items-start">
                    {/* Avatar */}
                    <div className="w-24 h-24 rounded-full bg-[#4B3DBF] flex items-center justify-center text-white text-3xl font-medium shrink-0 pt-1 shadow-lg shadow-indigo-200">
                        A
                    </div>

                    {/* Details Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-12 w-full pt-2">
                        <div className="flex gap-1">
                            <span className="text-sm font-bold text-gray-900">Name-</span>
                            <span className="text-sm text-gray-600 font-medium">Rohan Mehta</span>
                        </div>
                        <div className="flex gap-1">
                            <span className="text-sm font-bold text-gray-900">Phone number -</span>
                            <span className="text-sm text-gray-600 font-medium">+91 9654324323</span>
                        </div>
                        <div className="flex gap-1">
                            <span className="text-sm font-bold text-gray-900">Joined On -</span>
                            <span className="text-sm text-gray-600 font-medium">Oct 6</span>
                        </div>

                        <div className="flex gap-1">
                            <span className="text-sm font-bold text-gray-900">E mail ID-</span>
                            <span className="text-sm text-gray-600 font-medium">Rohan24@yahoo.in</span>
                        </div>
                        <div className="flex gap-1">
                            <span className="text-sm font-bold text-gray-900">Status-</span>
                            <span className="text-sm text-gray-600 font-medium">Active</span>
                        </div>
                        <div className="flex gap-1">
                            <span className="text-sm font-bold text-gray-900">City-</span>
                            <span className="text-sm text-gray-600 font-medium">Bangalore</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Logout Button */}
            <div className="flex justify-end pt-4">
                <button className="px-12 py-3 bg-[#D34528] text-white font-medium rounded-lg hover:bg-[#b53a20] transition-colors shadow-sm cursor-pointer text-base">
                    Logout
                </button>
            </div>
        </div>
    );
}
