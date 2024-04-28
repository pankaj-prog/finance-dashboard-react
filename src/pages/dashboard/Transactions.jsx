import React from "react";
import { TextButton } from "../../components";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { FaBus, FaShoppingCart } from "react-icons/fa";

const TRANSACTIONS = [
  {
    title: "Public Transport",
    date: "22 September 2020",
    icon: <FaBus style={{ color: "black" }} />,
  },
  {
    title: "Grocery Store",
    date: "18th September 2020",
    icon: <FaShoppingCart style={{ color: "green" }} />,
  },
  {
    title: "Public Transport 2",
    date: "15 September 2020",
    icon: <FaBus style={{ color: "orange" }} />,
  },
];

export const Transactions = () => {
  return (
    <div className=" bg-primary-gray-light p-8 rounded-2xl">
      <div className="font-bold text-lg mb-2">Your Transactions</div>
      <div className="flex-col flex gap-6 p-4">
        {TRANSACTIONS.map((transaction) => {
          return (
            <div className="flex gap-6 items-center">
              {transaction.icon}
              <div>
                <p className="font-semibold">{transaction.title}</p>
                <p className="text-sm">{transaction.date}</p>
              </div>
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
