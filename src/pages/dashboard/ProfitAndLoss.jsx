import React from "react";
import { ProfitAndLossGraph } from "../../assets";
import { FaCheckCircle } from "react-icons/fa";

export const ProfitAndLoss = () => {
  return (
    <div className="bg-primary-blue px-8 pt-8 pb-0 rounded-2xl text-white">
      <div>
        <p className="text-sm">Profit and Loss</p>
        <p className="font-semibold text-3xl py-1">$682.5</p>
        <span className="flex text-primary-orange items-center gap-2">
          <FaCheckCircle /> On track
        </span>
      </div>
      <img
        className="w-full h-auto"
        src={ProfitAndLossGraph}
        alt="Profit and Loss Graph"
      />
    </div>
  );
};
