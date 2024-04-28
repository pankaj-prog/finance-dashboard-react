import React from "react";
import {
  DashboardIcon,
  ReportsIcon,
  OrganisationIcon,
  DocumentsIcon,
  SalesIcon,
  PurchasesIcon,
  AccountingIcon,
  BankingIcon,
} from "../../assets";
import { NavLink } from "react-router-dom";

const GENERAL_NAV_ITEMS = [
  {
    title: "Dashboard",
    path: "/",
    imgSrc: DashboardIcon,
  },
  {
    title: "Reports",
    path: "/",
    imgSrc: ReportsIcon,
  },
  {
    title: "Organisation",
    path: "/",
    imgSrc: OrganisationIcon,
  },
  {
    title: "Documents",
    path: "/",
    imgSrc: DocumentsIcon,
  },
];

const MANAGEMENT_NAV_ITEMS = [
  {
    title: "Sales",
    path: "/",
    imgSrc: SalesIcon,
  },
  {
    title: "Purchases",
    path: "/",
    imgSrc: PurchasesIcon,
  },
  {
    title: "Accounting",
    path: "/",
    imgSrc: AccountingIcon,
  },
  {
    title: "Banking",
    path: "/",
    imgSrc: BankingIcon,
  },
];

export const Menu = () => {
  return (
    <nav className="flex flex-col grow">
      <div>
        {/* General nav items */}
        <h3 className="my-4 font-semibold text-gray-400">General</h3>
        <div className="flex flex-col gap-4">
          {GENERAL_NAV_ITEMS.map((item) => (
            <NavLink
              className={`flex gap-4 px-4 py-2 rounded-full items-center font-semibold ${
                item.title === "Dashboard" ? "bg-primary-gray" : ""
              }`}
            >
              <img src={item.imgSrc} alt="icon" />
              {item.title}
            </NavLink>
          ))}
        </div>
      </div>
      <div>
        {/* Management nav items */}
        <h3 className="my-4 font-semibold text-gray-400">Management</h3>
        <div className="flex flex-col gap-4">
          {MANAGEMENT_NAV_ITEMS.map((item) => (
            <NavLink
              className={`flex gap-6 px-4 py-2 rounded-full items-center text-sm text-gray-400 font-semibold ${
                item.title === "Dashboard" ? "bg-primary-gray" : ""
              }`}
            >
              <img src={item.imgSrc} alt="icon" />
              {item.title}
            </NavLink>
          ))}
        </div>
      </div>
      <div className="mt-auto pb-12 text-gray-400">
        {/* copy right here */}
        <p>2023 © Lucas Marques </p>
        <p>Expire in 09/2023</p>
      </div>
    </nav>
  );
};
