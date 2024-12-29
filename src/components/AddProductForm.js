import React, { useState } from "react";
import { databases } from "../AppwriteConfig";

function AddProductForm() {
  const [formData, setFormData] = useState({
    consoleName: "",
    yearOfPurchase: "",
    appsLive: "",
    price: "",
    sellerName: "",
    consoleLink: "",
    contactName: "",
    contactMail: "",
    contactPhone: "",
    contactAddress: "",
    contactMapLink: "",
    thumbnail: "",
  });

  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Parse only numerical fields, keep price and yearOfPurchase as strings
    const newValue =
      name === "appsLive"
        ? parseInt(value) || "" // Convert to number or keep as empty string
        : value;

    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Adding product...");

    try {
      const response = await databases.createDocument(
        "dayaxakm", // Replace with your Database ID
        "gpc_collection", // Replace with your Collection ID
        "unique()", // Auto-generate a unique document ID
        formData
      );
      setMessage("Product added successfully!");
      setFormData({
        consoleName: "",
        yearOfPurchase: "",
        appsLive: "",
        price: "",
        sellerName: "",
        consoleLink: "",
        contactName: "",
        contactMail: "",
        contactPhone: "",
        contactAddress: "",
        contactMapLink: "",
        thumbnail: "",
      });
    } catch (error) {
      console.error("Error adding product:", error);
      setMessage("Error adding product. Please try again.");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 border rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Add Console Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-medium mb-1">Console Name</label>
          <input
            type="text"
            name="consoleName"
            value={formData.consoleName}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Year of Purchase</label>
          <input
            type="text"
            name="yearOfPurchase"
            value={formData.yearOfPurchase}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Apps Live</label>
          <input
            type="number"
            name="appsLive"
            value={formData.appsLive}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Price</label>
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Seller Name</label>
          <input
            type="text"
            name="sellerName"
            value={formData.sellerName}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Console Link</label>
          <input
            type="url"
            name="consoleLink"
            value={formData.consoleLink}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Contact Name</label>
          <input
            type="text"
            name="contactName"
            value={formData.contactName}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Contact Email</label>
          <input
            type="email"
            name="contactMail"
            value={formData.contactMail}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Contact Phone</label>
          <input
            type="text"
            name="contactPhone"
            value={formData.contactPhone}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Contact Address</label>
          <input
            type="text"
            name="contactAddress"
            value={formData.contactAddress}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Map Link</label>
          <input
            type="url"
            name="contactMapLink"
            value={formData.contactMapLink}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Thumbnail URL</label>
          <input
            type="url"
            name="thumbnail"
            value={formData.thumbnail}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Product
        </button>
      </form>

      {message && <p className="mt-4 text-center">{message}</p>}
    </div>
  );
}

export default AddProductForm;
