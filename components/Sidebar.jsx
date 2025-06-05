"use client";
import { useSidebar } from "@/context/SideBarContext";
import {
  Menu,
  Grid2X2,
  Wallet,
  FileText,
  UsersRound,
  Check,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";


// SIDEBAR LINK COMPONENT
const SidebarLink = ({ href, icon: Icon, label, isCollapsed }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href}>
      <div
        className={`cursor-pointer flex items-center ${
          isCollapsed ? "justify-center py-4" : "justify-start px-8 py-4"
        }  hover:bg-green-200 hover:text-primary transition-colors gap-3 group ${
          isActive ? "bg-green-400 text-primary" : ""
        }`}
      >
        <Icon
          className={`${
            isActive ? "text-primary" : "!text-gray-200"
          } group-hover:!text-primary`}
          size={20}
        />
        <span
          className={`${isCollapsed ? "hidden" : "block"} font-medium ${
            isActive ? "text-primary" : "text-gray-200"
          } group-hover:text-primary`}
        >
          {label}
        </span>
      </div>
    </Link>
  );
};



const Sidebar = () => {
  const {isSideBarCollapsed, toggleSideBar} = useSidebar()

  return (
    <aside
      className={`fixed flex flex-col ${
        isSideBarCollapsed ? "w-0 md:w-16" : "md:w-72"
      } transition-all duration-300 bg-primary text-white overflow h-full shadow-md z-40`}
    >
      {/* FLOATING COLLAPSABLE TOGGLE BUTTON */}
      <button
        onClick={toggleSideBar}
        className={`absolute  grid place-items-center ${isSideBarCollapsed ? "size-8 left-[90%]" : "size-10 left-[92%]"} inset-2 rounded-full bg-green-100 text-primary transition-all duration-200`}
      >
        <ChevronRight className={`${isSideBarCollapsed ? "size-4.5" : "size-6"}`} />
      </button>
      
      {/* PROFILE DETAILS */}
      <div
        className={`flex gap-3 justify-between md:justify-normal items-center pt-8 ${
          isSideBarCollapsed ? "px-4" : "px-6"
        }`}
      >
        <div className="flex items-center gap-2">
          <div className="rounded-full overflow-hidden">
            <Image
              src="/images/avatar.png"
              width={48}
              height={48}
              alt="avatar"
            />
          </div>

          <div className={`${isSideBarCollapsed ? "hidden" : "block"}`}>
            <h1 className="flex gap-1 items-center font-semibold text-base">
              PiggyCanvas Inc
              <span>
                <Check className="text-green-400" size={12} />
              </span>
            </h1>
            <h3 className="text-xs text-gray-300">Sophia Williamson</h3>
          </div>
        </div>
      </div>

      {/* SIDEBAR LINKS */}
      <div className="flex flex-col gap-1 flex-grow mt-12">
        <SidebarLink
          href="/"
          icon={Grid2X2}
          label="Dashboard"
          isCollapsed={isSideBarCollapsed}
        />

        <SidebarLink
          href="/payments"
          icon={Wallet}
          label="Payments"
          isCollapsed={isSideBarCollapsed}
        />

        <SidebarLink
          href="/businesses"
          icon={FileText}
          label="Businesses"
          isCollapsed={isSideBarCollapsed}
        />

        <SidebarLink
          href="/employees"
          icon={UsersRound}
          label="Employees"
          isCollapsed={isSideBarCollapsed}
        />
      </div>

    </aside>
  );
};

export default Sidebar;
