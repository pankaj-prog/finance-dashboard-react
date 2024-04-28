import React from "react";
import { AvatarIcon, TotalSavesGraph } from "../../assets";

export const TotalSaves = () => {
  return (
    <div className="bg-primary-gray-light p-8 rounded-2xl">
      <div className="flex justify-between items-start">
        <div>
          <p className="font-semibold text-sm text-gray-400">Total Saves</p>
          <p className="font-semibold text-2xl py-1">$6.682</p>
        </div>
        <img src={AvatarIcon} alt="avatar" />
      </div>
      <img
        className="w-full h-auto"
        src={TotalSavesGraph}
        alt="Total saves graph"
      />
    </div>
  );
};
