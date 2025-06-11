"use client";

import AnalyticsChart from "@/components/AnalyticsChart";
import BusinessStat from "@/components/BusinessStat";
import DisplayCard from "@/components/DisplayCard";
import { useSidebar } from "@/context/SideBarContext";
import { PAYROLL_STAT } from "@/utils/constant";
import { Bell } from "lucide-react";

export default function Home() {
  const { isSideBarCollapsed } = useSidebar();
  return (
    <section className="text-primary">
      {/* GREETINGS */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Good morning, Sophia</h1>
        <div className="size-10 border border-gray-400 grid place-items-center rounded-full">
          <Bell className="text-primary" size={20} />
        </div>
      </div>

      {/* PAYROLL STAT */}
      <div className="flex flex-wrap gap-2 md:gap-4mt-8 my-8">
        {PAYROLL_STAT.map(({ title, stat }, id) => (
          <DisplayCard key={id} title={title} stat={stat} />
        ))}
      </div>

      {/* COUNTRIES STAT */}
      <div
        className={`flex ${isSideBarCollapsed ? "flex-col md:flex-row" : "md:flex-col lg:flex-row"} flex-wrap gap-4 my-8`}
      >
        <BusinessStat title="Business Countries" />
        <BusinessStat title="Employee Countries" />
      </div>

      {/* ANALYTICS CHART */}
      <AnalyticsChart />
    </section>
  );
}
