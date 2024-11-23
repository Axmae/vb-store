import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Payment = () => {
const [paymentDetails, setPaymentDetails] = useState({
name: "",
cardNumber: "",
expiry: "",
cvv: "",
});

const navigate = useNavigate();

const handleInputChange = (e) => {
const { name, value } = e.target;
setPaymentDetails((prevDetails) => ({
    ...prevDetails,
    [name]: value,
}));
};

const handlePayment = () => {
if (
    paymentDetails.name &&
    paymentDetails.cardNumber &&
    paymentDetails.expiry &&
    paymentDetails.cvv
) {
    toast.success("Payment Successful!");
    navigate("/thank-you"); 
} else {
    toast.error("Please fill in all payment details.");
}
};

return (
<div className="w-full min-h-screen flex flex-col items-center justify-center gap-6 p-4 bg-gray-100">
    <h1 className="text-3xl font-bold text-slate-700">Pay With Credit Card</h1>
    <div className="bg-white p-6 rounded-md shadow-md w-full max-w-[400px]">
    <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
        Name on Card
        </label>
        <input
        type="text"
        name="name"
        className="w-full p-2 border rounded-md"
        placeholder="Enter cardholder name"
        value={paymentDetails.name}
        onChange={handleInputChange}
        />
    </div>
    <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
        Card Number
        </label>
        <input
        type="text"
        name="cardNumber"
        className="w-full p-2 border rounded-md"
        placeholder="Enter card number"
        value={paymentDetails.cardNumber}
        onChange={handleInputChange}
        />
    </div>
    <div className="flex gap-4 mb-4">
        <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700">
            Expiry Date
        </label>
        <input
            type="text"
            name="expiry"
            className="w-full p-2 border rounded-md"
            placeholder="MM/YY"
            value={paymentDetails.expiry}
            onChange={handleInputChange}
        />
        </div>
        <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700">
            CVV
        </label>
        <input
            type="text"
            name="cvv"
            className="w-full p-2 border rounded-md"
            placeholder="123"
            value={paymentDetails.cvv}
            onChange={handleInputChange}
        />
        </div>
    </div>
    <button
        onClick={handlePayment}
        className="bg-blue-600 text-white w-full p-3 rounded-md hover:bg-blue-700"
    >
        Pay Now
    </button>
    </div>
</div>
);
};

export default Payment;
