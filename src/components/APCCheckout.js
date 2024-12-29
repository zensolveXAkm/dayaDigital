import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function APCCheckout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {};

  if (!product) {
    return <p>No product selected for checkout!</p>;
  }

  const handleConfirm = () => {
    navigate("/apc-confirmation", { state: { product } });
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <div className="border p-4 rounded mb-4">
        <h3 className="text-xl font-bold">{product.consoleName}</h3>
        <p>
          <strong>Year of Purchase:</strong> {product.yearOfPurchase}
        </p>
        <p>
          <strong>Apps Live:</strong> {product.appsLive}
        </p>
        <p>
          <strong>Price:</strong> ${product.price}
        </p>
        <p>
          <strong>Seller Name:</strong> {product.sellerName}
        </p>
      </div>
      <form className="grid gap-4">
        <input
          type="text"
          placeholder="Name"
          className="border p-2 rounded w-full"
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded w-full"
          required
        />
        <input
          type="tel"
          placeholder="Phone"
          className="border p-2 rounded w-full"
          required
        />
        <textarea
          placeholder="Address"
          className="border p-2 rounded w-full"
          rows="4"
          required
        ></textarea>
        <button
          type="button"
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleConfirm}
        >
          Confirm Purchase
        </button>
      </form>
    </div>
  );
}

export default APCCheckout;
