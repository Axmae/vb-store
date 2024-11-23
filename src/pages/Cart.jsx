import React, { useState, useEffect } from "react";
import CartCard from "../components/CartCard";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { checkoutCart } from "../redux/slices/CartSlice";

import toast from "react-hot-toast";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  // Recalculate the total when the cart changes
  useEffect(() => {
    const totalInDh = cart.reduce((acc, curr) => acc + curr.retail_price_cents * curr.qty, 0) / 100;
    setTotal(totalInDh.toFixed(2)); // Format the total to 2 decimal places
  }, [cart]);

  const checkout = () => {
    toast.success("Order Placed Successfully");
    localStorage.removeItem("localCart");
    dispatch(checkoutCart());
    navigate("/payment");
  };

  return (
    <div className="w-full min-h-screen flex flex-col gap-y-8 my-8 px-4 md:px-8 lg:px-12 overflow-x-hidden">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-start flex-1">
          {cart.map((cartItem) => (
            <CartCard key={cartItem.id} item={cartItem} />
          ))}
        </div>

        {/* Empty Cart Message */}
        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-y-4 min-h-[200px] flex-1">
            <h1 className="text-3xl dark:text-white font-semibold">
              Cart is Empty!
            </h1>
            <div>
              <button className="bg-[#2a2a2a] w-[150px] text-white p-3 rounded-md cursor-pointer hover:bg-black">
                <Link to="/explore">Shop Now</Link>
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center mt-6 p-4 w-full max-w-[400px] flex-1">
            <h1 className="text-lg md:text-3xl font-bold text-slate-300 hover:text-slate-500">
              TOTAL ITEMS: {cart.length}
            </h1>
            <h1 className="text-lg dark:text-white md:text-4xl font-bold text-slate-500">
              TOTAL PRICE: {total} dh
            </h1>

            {/* Checkout Button */}
            <div className="mt-4 w-full">
              <button
                className="bg-[#2a2a2a] w-full text-white p-2 rounded-md cursor-pointer hover:bg-black"
                onClick={checkout}
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
