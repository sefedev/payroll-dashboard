"use client";

import { CalendarDays, ChevronDown } from "lucide-react";
import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Area,
} from "recharts";

const data = [
  {
    month: "Jan",
    amount: 1800,
  },
  {
    month: "Feb",
    amount: 1950,
  },
  {
    month: "Mar",
    amount: 1680,
  },
  {
    month: "Apr",
    amount: 2200,
  },
  {
    month: "May",
    amount: 1980,
  },
  {
    month: "June",
    amount: 2100,
  },
  {
    month: "July",
    amount: 1975,
  },
  {
    month: "Aug",
    amount: 2560,
  },
  {
    month: "Sep",
    amount: 2000,
  },
  {
    month: "Oct",
    amount: 2200,
  },
  {
    month: "Nov",
    amount: 1680,
  },
  {
    month: "Dec",
    amount: 2340,
  },
];

const AnalyticsChart = () => {
  return (
    <div className="flex flex-col flex-1 gap-4 bg-background px-4  py-6 rounded-xl h-72">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-lg">Analytics</h2>
        <button className="flex gap-2 items-center p-1.5 text-[0.65rem] font-semibold text-gray-600 rounded-4xl border border-gray-400">
          <span>
            <CalendarDays size={12} />
          </span>
          Select Month Range{" "}
          <span>
            <ChevronDown size={10} className="flex-1" />
          </span>
        </button>
      </div>

      {/* chart */}
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 0,
            left: -36,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#B1EF4180" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#B1EF4180" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis
            dataKey="amount"
            tickFormatter={(value) => `${value / 1000}k`}
            ticks={[1000, 2000, 3000]}
          />
          <Tooltip formatter={(value) => [`$${value.toFixed(2)}`, "Amount"]} 
             contentStyle={{ backgroundColor: "#032900", color: "#fff", borderRadius: "8px", border: "none" }}
            itemStyle={{ color: "#B1EF41" }}
            labelStyle={{ color: "#fff" }}
            />
          <Area
            type="monotone"
            dataKey="amount"
            stroke="#032900"
            fill="url(#areaGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AnalyticsChart;
