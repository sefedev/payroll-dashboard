"use client";
import Sidebar from "@/components/Sidebar";
import { SidebarProvider, useSidebar } from "@/context/SideBarContext";
import React from "react";

const DashboardLayout = ({ children }) => {
  const { isSideBarCollapsed, toggleSideBar } = useSidebar();
  
  return (
    <>
      <Sidebar />
      <main
        className={`relative flex flex-col w-full h-full py-8 pr-4 md:pr-8 ${
          isSideBarCollapsed ? "pl-4 md:pl-28" : "pl-4 md:pl-84"
        }`}
      >
        {children}
      </main>
    </>
  );
};

const DashboardWrapper = ({ children }) => (
  <SidebarProvider>
    <DashboardLayout>{children}</DashboardLayout>
  </SidebarProvider>
);

export default DashboardWrapper;
