import React from "react";
import { Post } from "../../assets";
import { Button, TextButton } from "../../components";

export const Promotion = () => {
  return (
    <div className="bg-white p-8 rounded-2xl gap-4 grid grid-cols-2 w-full">
      <div className="flex flex-col justify-between gap-4">
        <h1 className="text-4xl font-bold text-primary-blue">
          Try Aurora Plus now!
        </h1>
        <p>
          Enter in this creative world. Aurora Plus is the best product for your
          business.
        </p>
        <div className="flex gap-4">
          <Button>Try for free</Button>
          <TextButton>Skip</TextButton>
        </div>
      </div>
      <img className="h-auto" src={Post} alt="Post" />
    </div>
  );
};
