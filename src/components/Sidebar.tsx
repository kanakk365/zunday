"use client";

import React, { useState } from "react";
import {
  LayoutGrid,
  Users,
  UserCog,
  ShoppingCart,
  Utensils,
  Coffee,
  ChevronDown,
  ChevronRight,
  LogOut,
  ChevronLeft
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Sidebar = () => {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    {
      title: "Dashboard",
      icon: <LayoutGrid size={20} />,
      href: "/dashboard",
      active: true,
    },
    {
      title: "Users",
      icon: <Users size={20} />,
      href: "/dashboard/users",
    },
    {
      title: "Delivery Partner",
      icon: <UserCog size={20} />,
      href: "/dashboard/partners",
    },
    {
      title: "Grocery",
      icon: <ShoppingCart size={20} />,
      href: "#",
      hasSubmenu: true,
    },
    {
      title: "Order Food",
      icon: <Utensils size={20} />,
      href: "#",
      hasSubmenu: true,
    },
    {
      title: "Dineout",
      icon: <Coffee size={20} />,
      href: "#",
      hasSubmenu: true,
    },
  ];

  return (
    <aside
      className={`h-screen bg-white border-r border-gray-100 flex flex-col transition-all duration-300 relative ${collapsed ? "w-20" : "w-64"
        }`}
    >
      {/* Collapse Button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-6 bg-white border border-gray-200 rounded-full p-1 shadow-sm hover:bg-gray-50 z-50 text-gray-500"
      >
        <ChevronLeft size={16} className={`transition-transform duration-300 ${collapsed ? "rotate-180" : ""}`} />
      </button>

      {/* Logo */}
      <div className="p-6 flex items-center justify-center">
        <h1 className={`text-2xl font-bold text-[#4B3DBF] transition-opacity duration-300 ${collapsed ? "opacity-0 hidden" : "opacity-100"}`}>
          Zunday
        </h1>
        {collapsed && <span className="text-2xl font-bold text-[#4B3DBF]">Z</span>}
      </div>

      {/* Menu */}
      <nav className="flex-1 px-4 space-y-2 overflow-y-auto">
        {menuItems.map((item, index) => (
          <div key={index}>
            <Link
              href={item.href}
              className={`flex items-center justify-between px-4 py-3 rounded-xl transition-colors ${item.active
                  ? "bg-[#4B3DBF] text-white shadow-lg shadow-indigo-200"
                  : "text-gray-500 hover:bg-gray-50 hover:text-[#4B3DBF]"
                }`}
            >
              <div className="flex items-center gap-3">
                <span className={item.active ? "text-white" : "text-gray-500"}>
                  {item.icon}
                </span>
                {!collapsed && <span className="font-medium text-[15px]">{item.title}</span>}
              </div>
              {!collapsed && item.hasSubmenu && (
                <ChevronDown size={16} className={item.active ? "text-white" : "text-gray-400"} />
              )}
            </Link>
          </div>
        ))}
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-gray-100">
        <div className={`flex items-center gap-3 ${collapsed ? "justify-center" : ""}`}>
          <div className="w-10 h-10 rounded-full bg-[#4B3DBF] flex items-center justify-center text-white font-bold text-lg shrink-0">
            A
          </div>
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-xs text-gray-400">Welcome 👋</p>
              <p className="text-sm font-bold text-gray-900 truncate">Andrew</p>
            </div>
          )}
          {!collapsed && (
            <ChevronRight size={16} className="text-gray-400" />
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
