import React from "react";
import { useLocation } from "react-router-dom";

function ProductDetails() {
  const location = useLocation();
  const { product } = location.state || {};

  if (!product) {
    return (
      <p className="text-center mt-4 text-red-500 font-semibold text-lg">
        No product details available!
      </p>
    );
  }

  const {
    consoleName,
    yearOfPurchase,
    appsLive,
    price,
    consoleLink,
  } = product;

  const ownerDetails = {
    name: "Daya Choudhary",
    email: "dayaverma@gmail.com",
    contact: "1234567890",
    profileImage: "https://via.placeholder.com/150", // Replace with actual image URL if available
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gradient-to-b from-gray-50 to-gray-100 rounded-lg shadow-xl">
      {/* Title */}
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        Product Details
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Product Details Section */}
        <div className="col-span-2 p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-indigo-600 mb-4">{consoleName}</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              <span className="font-semibold">Year of Purchase:</span> {yearOfPurchase}
            </p>
            <p>
              <span className="font-semibold">Apps Live:</span> {appsLive}
            </p>
            <p>
              <span className="font-semibold">Price:</span>
              <span className="text-green-500 font-bold"> ${price}</span>
            </p>
            <p>
              <span className="font-semibold">Console Link:</span>{" "}
              <a
                href={consoleLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {consoleLink}
              </a>
            </p>
          </div>
        </div>

        {/* Owner Details Section */}
        <div className="p-6 bg-white rounded-lg shadow-lg flex flex-col items-center">
          <img
            src={ownerDetails.profileImage}
            alt={ownerDetails.name}
            className="w-32 h-32 rounded-full mb-4 border-4 border-indigo-500"
          />
          <h3 className="text-2xl font-semibold text-gray-800">{ownerDetails.name}</h3>
          <div className="space-y-2 text-gray-600 mt-4 text-center">
            <p>
              <span className="font-semibold">Email:</span>{" "}
              <a
                href={`mailto:${ownerDetails.email}`}
                className="text-blue-500 hover:underline"
              >
                {ownerDetails.email}
              </a>
            </p>
            <p>
              <span className="font-semibold">Contact:</span>{" "}
              <a
                href={`tel:${ownerDetails.contact}`}
                className="text-blue-500 hover:underline"
              >
                {ownerDetails.contact}
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-8 flex justify-center space-x-4">
        <a
          href={`tel:${ownerDetails.contact}`}
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg shadow-md transition"
        >
          Call Owner
        </a>
        <a
          href={`mailto:${ownerDetails.email}`}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md transition"
        >
          Email Owner
        </a>
      </div>
    </div>
  );
}

export default ProductDetails;
