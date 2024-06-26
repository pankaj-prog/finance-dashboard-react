import React from "react";
import { TextButton } from "../../components";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { AvatarIcon } from "../../assets";

const TRANSFERS = [
  {
    name: "Alex Manda",
    time: "Today, 16:36",
    type: "credit", // Incoming money
    amount: "$50",
  },
  {
    name: "Laura Santos",
    time: "Today, 08:49",
    type: "debit", // Outgoing money
    amount: "$27",
  },
];

export const Transfers = () => {
  return (
    <div className="p-8 rounded-2xl">
      <div className="font-bold text-lg mb-2">Your Transfers</div>
      <div className="flex-col flex gap-6 p-4">
        {TRANSFERS.map((transfer) => {
          return (
            <div className="flex gap-4 items-center text-primary-blue">
              <img src={AvatarIcon} alt="Avatar" />
              <div>
                <p className="font-semibold">
                  {transfer.type === "credit"
                    ? "From"
                    : transfer.type === "debit"
                    ? "To"
                    : ""}{" "}
                  {transfer.name}
                </p>
                <p className="text-sm">{transfer.time}</p>
              </div>
              <span className="ml-auto bg-orange-500/20 py-1 px-2 font-semibold rounded-lg text-primary-orange">
                {transfer.type === "credit"
                  ? "+"
                  : transfer.type === "debit"
                  ? "-"
                  : ""}
                {transfer.amount}
              </span>
            </div>
          );
        })}
      </div>
      <div className="flex justify-end">
        <TextButton>
          View All <MdOutlineArrowRightAlt />
        </TextButton>
      </div>
    </div>
  );
};
