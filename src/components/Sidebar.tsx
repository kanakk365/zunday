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
  const [expandedMenu, setExpandedMenu] = useState<string | null>("Grocery"); // Default expanded for demo

  const menuItems = [
    {
      title: "Dashboard",
      icon: <LayoutGrid size={20} />,
      href: "/dashboard",
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
      submenu: [
        { title: "Grocery Vendors", href: "/dashboard/grocery/vendors" },
        { title: "Grocery Products", href: "/dashboard/grocery/products" },
        { title: "Grocery Orders", href: "/dashboard/grocery/orders" },
        { title: "Grocery Payouts", href: "/dashboard/grocery/payouts" },
      ]
    },
    {
      title: "Order Food",
      icon: <Utensils size={20} />,
      href: "#",
      hasSubmenu: true,
      submenu: [
        { title: "Food Vendors", href: "/dashboard/order-food/vendors" },
        { title: "Food Items Menu", href: "/dashboard/order-food/items" },
        { title: "Food Orders", href: "/dashboard/order-food/orders" },
        { title: "Food Payouts", href: "/dashboard/order-food/payouts" },
      ]
    },
    {
      title: "Dineout",
      icon: <Coffee size={20} />,
      href: "#",
      hasSubmenu: true,
      submenu: [
        { title: "Restaurant List", href: "/dashboard/dineout/restaurants" },
        { title: "Booking List", href: "/dashboard/dineout/bookings" },
        { title: "Payouts", href: "/dashboard/dineout/payouts" },
      ]
    },
  ];

  const toggleSubmenu = (title: string) => {
    setExpandedMenu(expandedMenu === title ? null : title);
  };

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
        {menuItems.map((item, index) => {
          const isSubmenuActive = item.submenu?.some(subItem => pathname === subItem.href);
          const isActive = item.href === "/dashboard"
            ? pathname === "/dashboard"
            : pathname === item.href || isSubmenuActive;

          return (
            <div key={index}>
              <div
                onClick={() => item.hasSubmenu ? toggleSubmenu(item.title) : null}
                className={`flex items-center justify-between px-4 py-3 rounded-xl transition-colors cursor-pointer ${isActive && !isSubmenuActive
                  ? "bg-[#4B3DBF] text-white shadow-lg shadow-indigo-200"
                  : isActive && isSubmenuActive ? "bg-[#4B3DBF] text-white shadow-lg shadow-indigo-200" : "text-gray-500 hover:bg-gray-50 hover:text-[#4B3DBF]"
                  }`}
              >
                {item.hasSubmenu ? (
                  <div className="w-full flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className={isActive ? "text-white" : "text-gray-500"}>
                        {item.icon}
                      </span>
                      {!collapsed && <span className="font-medium text-[15px]">{item.title}</span>}
                    </div>
                    {!collapsed && (
                      <ChevronDown size={16} className={`transition-transform duration-200 ${expandedMenu === item.title ? "rotate-180" : ""} ${isActive ? "text-white" : "text-gray-400"}`} />
                    )}
                  </div>
                ) : (
                  <Link href={item.href} className="w-full flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className={isActive ? "text-white" : "text-gray-500"}>
                        {item.icon}
                      </span>
                      {!collapsed && <span className="font-medium text-[15px]">{item.title}</span>}
                    </div>
                  </Link>
                )}
              </div>

              {/* Submenu */}
              {!collapsed && item.hasSubmenu && expandedMenu === item.title && (
                <div className="mt-1 ml-4 space-y-1">
                  {item.submenu?.map((subItem, subIndex) => {
                    const isSubItemActive = pathname === subItem.href;
                    return (
                      <Link
                        key={subIndex}
                        href={subItem.href}
                        className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${isSubItemActive
                          ? "bg-[#F3F0FF] text-[#4B3DBF]"
                          : "text-gray-400 hover:text-[#4B3DBF] hover:bg-gray-50"
                          }`}
                      >
                        {/* Icon placeholder if needed, or just text */}
                        {isSubItemActive && <div className="w-1.5 h-1.5 rounded-full bg-[#4B3DBF]" />}
                        {!isSubItemActive && <Users size={14} className="opacity-0" />} {/* Spacer */}
                        {subItem.title}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-gray-100">
        <Link href="/dashboard/profile">
          <div className={`flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors ${collapsed ? "justify-center" : ""}`}>
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
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
