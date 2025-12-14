"use client";

import React from "react";
import { Search, Bell } from "lucide-react";

const Navbar = () => {
    return (
        <header className="flex items-center justify-end px-8 py-5 bg-white/50 backdrop-blur-sm sticky top-0 z-10 w-full">
            <div className="flex items-center gap-6">
                {/* Search */}
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search"
                        className="pl-10 pr-4 py-2.5 bg-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#5A4AD1]/20 w-64 text-gray-600 placeholder-gray-400"
                    />
                </div>

                {/* Notifications */}
                <button className="relative p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
                    <Bell size={20} />
                    <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-red-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white">
                        3
                    </span>
                </button>

                {/* Avatar */}
                <div className="w-10 h-10 rounded-full bg-[#5A4AD1] flex items-center justify-center text-white font-bold text-lg cursor-pointer hover:opacity-90 transition-opacity">
                    A
                </div>
            </div>
        </header>
    );
};

export default Navbar;
