import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function APCProductCard({ product }) {
  const [showDetails, setShowDetails] = useState(false);
  const navigate = useNavigate();

  const {
    consoleName,
    yearOfPurchase,
    appsLive,
    price,
    sellerName,
    consoleLink,
    contactName,
    contactMail,
    contactPhone,
    contactAddress,
    contactMapLink,
  } = product;

  // Static thumbnail image URL
  const thumbnail = "https://raw.githubusercontent.com/dayaxakm12109/image/main/Accounts.png";

  const handleBuyNow = () => {
    navigate("/apc-checkout", { state: { product } }); // Navigate to the APC Checkout Page
  };

  return (
    <div>
      {/* Card View */}
      <div className="border p-4 rounded shadow cursor-pointer hover:shadow-lg">
        <img
          src={thumbnail} // Use static image from raw.githubusercontent.com
          alt={consoleName}
          className="w-full h-48 object-cover rounded mb-2"
        />
        <h2 className="text-lg font-bold">{consoleName}</h2>
        <p>Year of Purchase: {yearOfPurchase}</p>
        <p>Apps Live: {appsLive}</p>
        <p className="text-green-600 font-bold">Price: ${price}</p>
        <button
          className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
          onClick={() => setShowDetails(true)}
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

      {/* Detailed View Modal */}
      {showDetails && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-lg w-3/4 md:w-1/2">
            <h2 className="text-xl font-bold mb-4">{consoleName}</h2>
            <p>
              <strong>Year of Purchase:</strong> {yearOfPurchase}
            </p>
            <p>
              <strong>Apps Live:</strong> {appsLive}
            </p>
            <p>
              <strong>Price:</strong> ${price}
            </p>
            <p>
              <strong>Seller Name:</strong> {sellerName}
            </p>
            <p>
              <strong>Console Link:</strong>{" "}
              <a href={consoleLink} target="_blank" rel="noopener noreferrer">
                {consoleLink}
              </a>
            </p>
            <h3 className="text-lg font-bold mt-4">Contact Details</h3>
            <p>
              <strong>Name:</strong> {contactName}
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${contactMail}`}>{contactMail}</a>
            </p>
            <p>
              <strong>Phone:</strong>{" "}
              <a href={`tel:${contactPhone}`}>{contactPhone}</a>
            </p>
            <p>
              <strong>Address:</strong> {contactAddress}
            </p>
            <p>
              <strong>Map Link:</strong>{" "}
              <a href={contactMapLink} target="_blank" rel="noopener noreferrer">
                View on Map
              </a>
            </p>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded mt-4"
              onClick={() => setShowDetails(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default APCProductCard;
