import React from "react";
import { useCart } from "../CartContext";

function CartPage() {
  const { cart, dispatch } = useCart();

  const removeFromCart = (product) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product });
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    // Simulate a checkout process
    alert("Checkout successful! Thank you for your purchase.");
    dispatch({ type: "CLEAR_CART" }); // Clear the cart after checkout
  };

  return (
    <div className="container mx-auto mt-4">
      <h1 className="text-2xl font-bold">Your Cart</h1>
      {cart.length > 0 ? (
        <>
          <div className="mt-4">
            {cart.map((item) => (
              <div
                key={item.$id} // Use $id as the unique key if using Appwrite
                className="flex justify-between items-center border p-4 mb-2 rounded"
              >
                <div>
                  <h2 className="text-lg font-bold">{item.consoleName}</h2>
                  <p>Price: ${item.price}</p>
                </div>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded"
                  onClick={() => removeFromCart(item)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Checkout Button */}
          <button
            className="bg-green-500 text-white px-6 py-2 rounded mt-4 hover:bg-green-600"
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </>
      ) : (
        <p className="text-gray-500 mt-4">Your cart is empty.</p>
      )}
    </div>
  );
}

export default CartPage;
