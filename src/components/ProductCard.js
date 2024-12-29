import React from "react";
import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const navigate = useNavigate();

  const {
    consoleName,
    yearOfPurchase,
    appsLive,
    price,
  } = product;

  // Static thumbnail image URL
  const thumbnail = "https://raw.githubusercontent.com/dayaxakm12109/image/main/Untitled%20design.jpg";

  const handleViewDetails = () => {
    navigate("/product-details", { state: { product } }); // Pass product details to the details page
  };

  const handleBuyNow = () => {
    navigate("/checkout", { state: { product } }); // Pass product details to the checkout page
  };

  return (
    <div>
      {/* Card View */}
      <div className="border p-4 rounded shadow cursor-pointer hover:shadow-lg">
        <img
          src={thumbnail} // Use static image
          alt={consoleName}
          className="w-full h-48 object-cover rounded mb-2"
        />
        <h2 className="text-lg font-bold">{consoleName}</h2>
        <p>Year of Purchase: {yearOfPurchase}</p>
        <p>Apps Live: {appsLive}</p>
        <p className="text-green-600 font-bold">Price: ${price}</p>
        <button
          className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
          onClick={handleViewDetails}
        >
          View Details
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 mt-2 rounded ml-2"
          onClick={handleBuyNow}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
