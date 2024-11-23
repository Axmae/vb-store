import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
} from "../redux/slices/CartSlice";
import toast from "react-hot-toast";

const CartCard = ({ item }) => {
  const dispatch = useDispatch();

  const remove = (itemIdx) => {
    dispatch(removeFromCart(itemIdx));
    toast.error("Removed item from cart");
  };

  const increase = (id) => {
    dispatch(increaseQty(id));
  };

  const decrease = (id) => {
    if (item.qty === 1) {
      dispatch(removeFromCart(id));
    } else dispatch(decreaseQty(id));
  };

  return (
    <div className="h-[340px] w-[320px] md:h-[300px] md:w-[600px] bg-slate-100 dark:bg-[#1f1b24] rounded-2xl hover:shadow-lg transition-shadow duration-300 ease-in-out mt-10 md:mt-5 flex p-4">
      <img
        src={item.original_picture_url}
        alt="shoe"
        width={140}
        height={140}
        className="object-contain rounded-lg mr-4"
      />
      <div className="flex flex-col justify-between w-full dark:text-white">
        <div className="text-sm font-semibold tracking-tight overflow-hidden max-h-[80px] mb-4">
          {item.story_html.split(" ").slice(0, 28).join(" ") + "..."}
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="text-lg font-bold text-gray-800 dark:text-gray-200">
            {item.retail_price_cents / 100} DH
          </div>
          <div className="flex items-center space-x-4">
            <button
              className="bg-gray-300 dark:bg-gray-700 dark:hover:bg-black p-1 w-8 h-8 rounded-md font-bold hover:bg-gray-400 transition-colors"
              onClick={() => decrease(item.id)}
            >
              -
            </button>
            <span className="text-lg font-semibold">{item.qty}</span>
            <button
              className="bg-gray-300 dark:bg-gray-700 dark:hover:bg-black p-1 w-8 h-8 rounded-md font-bold hover:bg-gray-400 transition-colors"
              onClick={() => increase(item.id)}
            >
              +
            </button>
          </div>
        </div>

        <div
          className="flex items-center justify-end text-red-600 bg-red-200 hover:bg-red-300 transition-colors cursor-pointer rounded-full p-2"
          onClick={() => remove(item.id)}
        >
          <AiFillDelete className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default CartCard;
