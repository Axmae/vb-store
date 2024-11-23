import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/slices/CartSlice";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Card = ({ shoe }) => {
  const cart = useSelector((state) => state.cart);
  const img = shoe.original_picture_url;
  const price = (shoe.retail_price_cents / 100).toFixed(2); // Assuming price is in cents, converting to dollars
  const desc = shoe.story_html;
  const id = shoe.id;

  const dispatch = useDispatch();

  const add = () => {
    dispatch(addToCart(shoe));
    toast.success("Added to cart");
  };

  const remove = (itemIdx) => {
    dispatch(removeFromCart(itemIdx));
    toast.error("Removed item from cart");
  };

  return (
    <div className="w-[320px] h-[460px] shadow-md rounded-lg p-4 bg-white dark:bg-[#1f1b24] border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow duration-300 ease-in-out relative flex flex-col">
      <div className="flex flex-col gap-4 h-full">
        {/* Image and Preview Button */}
        <div className="relative flex justify-center items-center">
          <img
            src={img}
            width={240}
            height={240}
            alt="shoe"
            className="object-contain"
          />
          <Link to={`/preview/${id}`}>
            <button className="absolute bg-slate-600 dark:bg-slate-800 dark:font-semibold text-white text-xs p-1 top-2 right-2 rounded-md hover:bg-slate-700 dark:hover:bg-slate-700 transition-colors">
              Preview
            </button>
          </Link>
        </div>

        {/* Description */}
        <p className="text-sm font-medium text-gray-700 dark:text-gray-300 max-h-[90px] overflow-hidden">
          {desc.split(" ").slice(0, 20).join(" ") + "..."}
        </p>

        {/* Actions and Price */}
        <div className="flex items-center justify-between mt-auto">
          {/* Add or Remove from Cart Button */}
          {cart.some((item) => item.id === shoe.id) ? (
            <button
              onClick={() => remove(shoe.id)}
              className="bg-red-500 text-white px-3 py-1.5 rounded-md text-sm hover:bg-red-600 transition-colors"
            >
              Remove
            </button>
          ) : (
            <button
              onClick={add}
              className="bg-black dark:bg-slate-800 dark:hover:bg-black text-white px-3 py-1.5 rounded-md text-sm hover:bg-gray-800 transition-colors"
            >
              Add to Cart
            </button>
          )}
          {/* Price */}
          <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            {price} DH
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
