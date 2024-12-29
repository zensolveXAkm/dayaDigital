import React, { useEffect, useState } from "react";
import {
  FaUserAlt,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { databases, Query } from "./appwrite"; // Import Appwrite

const SellerProductCard = ({
  consoleName = "Unknown",
  yearOfPurchase = "N/A",
  appsLive = "N/A",
  sellerName = "N/A",
  consoleLink = "#",
  contactName = "N/A",
  contactMail = "N/A",
  contactPhone = "N/A",
  contactAddress = "N/A",
  contactMapLink = "#",
  price = "N/A",
}) => {
  const [sellerInfo, setSellerInfo] = useState(null);

  useEffect(() => {
    const fetchSellerInfo = async () => {
      try {
        const response = await databases.listDocuments(
          "seller",
          "user-info",
          [Query.equal("email", contactMail)] // Correct query syntax
        );
        if (response.documents.length > 0) {
          setSellerInfo(response.documents[0]);
        }
      } catch (error) {
        console.error("Error fetching seller info:", error.message);
      }
    };

    if (contactMail) fetchSellerInfo();
  }, [contactMail]);

  return (
    <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105">
      {/* Product Image */}
      <div
        className="w-full h-56 bg-cover bg-center rounded-lg mb-4"
        style={{
          backgroundImage: `url('https://www.wisitech.com/wp-content/uploads/2020/05/google-play-console.jpg')`,
        }}
      ></div>

      {/* Product Details */}
      <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
        {consoleName}
      </h2>
      <p className="text-sm text-gray-400 mt-2">Year of Purchase: {yearOfPurchase}</p>
      <p className="text-sm text-gray-400">Apps Live: {appsLive}</p>
      <p className="text-sm text-gray-400">Seller: {sellerName}</p>

      <a
        href={consoleLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:underline mt-2 inline-block"
      >
        View Console
      </a>

      {/* Seller Profile Picture */}
      {sellerInfo?.profilePicture ? (
        <div className="mt-6 flex justify-center">
          <img
            src={sellerInfo.profilePicture}
            alt="Seller Profile"
            className="w-20 h-20 rounded-full border-4 border-gray-700 shadow-md"
          />
        </div>
      ) : (
        <p className="text-gray-500 mt-4 text-center">
          No profile picture available.
        </p>
      )}

      {/* Contact Details */}
      <div className="mt-6 space-y-4">
        <h3 className="text-lg font-semibold text-gray-300">Contact Details</h3>
        <div className="flex items-center space-x-2 text-gray-400">
          <FaUserAlt className="text-green-400" />
          <p>{contactName}</p>
        </div>
        <div className="flex items-center space-x-2 text-gray-400">
          <FaEnvelope className="text-blue-400" />
          <p>{contactMail}</p>
        </div>
        <div className="flex items-center space-x-2 text-gray-400">
          <FaPhone className="text-yellow-400" />
          <p>{contactPhone}</p>
        </div>
        <div className="flex items-center space-x-2 text-gray-400">
          <FaMapMarkerAlt className="text-red-400" />
          <p>{contactAddress}</p>
        </div>
        <a
          href={contactMapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          View on Map
        </a>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex justify-around">
        <a
          href={`tel:${contactPhone}`}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md shadow-md transition-all"
        >
          Call Now
        </a>
        <a
          href={`mailto:${contactMail}`}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md shadow-md transition-all"
        >
          Mail Now
        </a>
      </div>

      {/* Price */}
      <div className="mt-6 text-center">
        <p className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
          Price: ${price}
        </p>
      </div>
    </div>
  );
};

export default SellerProductCard;
