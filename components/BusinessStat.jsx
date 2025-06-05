import { COUNTRY_STAT } from "@/utils/constant";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const BusinessStat = ({ title }) => {
  return (
    <div className="flex flex-col flex-1 gap-4 bg-background px-4 py-6 rounded-xl max-w-xl">
      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-lg">{title}</h2>
        <button className="flex items-center justify-center p-1.5 text-[0.65rem] font-semibold text-gray-600 rounded-4xl border border-gray-400">
          VIEW ALL{" "}
          <span>
            <ChevronRight size={10} />
          </span>
        </button>
      </div>

      {/* COUNTRY LIST */}
      <ul className="flex flex-col gap-4">
        {COUNTRY_STAT.map(({ country, image, stat }, id) => (
          <li key={id} className="flex justify-start">
            <div className="flex w-36 gap-2">
              <span>
                <Image src={image} alt={country} width={16} height={16} />
              </span>
              <span>{country}</span>
            </div>

            <div className="flex gap-2 items-center flex-1">
                {/* Progress Bar */}
              <div
                style={{ width: `${((stat / 16) * 100).toString()}%` }}
                className="h-2.5 rounded-full bg-green-800/20 transition-transform ease-in-out duration-300"
              />
              <span>{stat}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BusinessStat;
