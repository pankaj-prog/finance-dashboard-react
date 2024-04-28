import React from "react";
import {
  MdOutlineNotificationsActive,
  MdOutlineSearch,
  MdDownloading,
} from "react-icons/md";

import { AvatarIcon, ClientsIcon, EarningsIcon } from "../../assets";
import { Button } from "../../components";
import { Promotion } from "./Promotion";
import { Transactions } from "./Transactions";
import { TotalSaves } from "./TotalSaves";
import { Transfers } from "./Transfers";
import { ProfitAndLoss } from "./ProfitAndLoss";

const BUSINESS_DETAILS = [
  { title: "Earnings", description: "$350.40", icon: EarningsIcon },
  { title: "New Clients", description: "321", icon: ClientsIcon },
];

export const Dashboard = () => {
  return (
    <main className="py-4 px-8 bg-primary-gray h-full overflow-auto">
      {/* dashboard header */}
      <header className="flex justify-between items-center px-4 py-2 ">
        <div className="font-bold text-3xl">
          Dashboard
          <p className="text-sm font-semibold text-gray-500 mt-2">
            Dashboard / Overview
          </p>
        </div>
        <div className="relative mx-4">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center rounded-full">
            <MdOutlineSearch className="h-5 w-5" />
          </div>
          <input
            type="text"
            placeholder="Search Dashboard"
            className="pl-10 pr-3 py-2 border bg-primary-gray-light border-gray-300 rounded-full focus:outline-none"
          />
        </div>
        <div className="flex items-center gap-6">
          {/* Notification */}
          <button className="">
            <MdOutlineNotificationsActive fontSize={24} />
          </button>
          {/* Export */}
          <Button>
            Import <MdDownloading fontSize={18} />
          </Button>
          <button>
            <img src={AvatarIcon} alt="avatar" />
          </button>
        </div>
      </header>
      {/* dashboard content */}
      <div className="mt-4 gap-16 flex flex-wrap lg:flex-nowrap">
        <div className="flex grow flex-col gap-12">
          {/* left side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
            <ProfitAndLoss />
            <Transfers />
            {BUSINESS_DETAILS.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 p-4 bg-primary-gray-light rounded-2xl"
              >
                <img src={item.icon} alt="icon" />
                <div>
                  <p className="text-sm">{item.title}</p>
                  <p className="font-bold text-2xl">{item.description}</p>
                </div>
              </div>
            ))}
            <div className="col-span-2">
              <Promotion />
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 flex flex-col gap-12">
          {/* right side */}
          <TotalSaves />
          <Transactions />
        </div>
      </div>
    </main>
  );
};
