import React, { useEffect, useState } from "react";
import SellerProductCard from "./SellerProductCards";
import { databases } from "./appwrite";

const SellerProductList = ({ selectedEmail, user }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await databases.listDocuments("seller", "sellerconsole");
        let filteredProducts = response.documents;

        if (selectedEmail) {
          filteredProducts = filteredProducts.filter(
            (product) => product.contactMail === selectedEmail
          );
        } else if (user?.email) {
          const userProducts = filteredProducts.filter(
            (product) => product.contactMail === user.email
          );
          filteredProducts = userProducts.length > 0 ? userProducts : filteredProducts;
        }

        setProducts(filteredProducts);
      } catch (error) {
        console.error("Error fetching products:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedEmail, user]);

  if (loading) {
    return (
      <main className="flex-grow py-12 px-6 bg-gradient-to-r from-gray-900 via-black to-gray-900 rounded-tl-3xl rounded-bl-3xl shadow-xl">
        <h2 className="text-3xl font-semibold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
          Loading Seller Products...
        </h2>
        <p className="text-center text-lg text-gray-300 animate-pulse">
          Please wait while we fetch the latest information for you.
        </p>
      </main>
    );
  }

  if (products.length === 0) {
    return (
      <main className="flex-grow py-12 px-6 bg-gradient-to-r from-gray-900 via-black to-gray-900 rounded-tl-3xl rounded-bl-3xl shadow-xl">
        <h2 className="text-3xl font-semibold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">
          No Products Found
        </h2>
        <p className="text-center text-lg text-gray-300">
          {selectedEmail || user?.email
            ? `No products available for ${selectedEmail || user.email}.`
            : "No products available at the moment. Please check back later."}
        </p>
      </main>
    );
  }

  return (
    <main className="flex-grow py-12 px-6 bg-gradient-to-r from-gray-900 via-black to-gray-900 rounded-tl-3xl rounded-bl-3xl shadow-xl">
      <h2 className="text-3xl font-semibold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
        Explore Products from Our Trusted Sellers
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products
          .filter((product) => product && product.consoleName) // Ensure valid product data
          .map((product) => (
            <SellerProductCard
              key={product.$id}
              consoleName={product.consoleName || "Unknown"}
              yearOfPurchase={product.yearOfPurchase || "N/A"}
              appsLive={product.appsLive || "N/A"}
              sellerName={product.sellerName || "N/A"}
              consoleLink={product.consoleLink || "#"}
              contactName={product.contactName || "N/A"}
              contactMail={product.contactMail || "N/A"}
              contactPhone={product.contactPhone || "N/A"}
              contactAddress={product.contactAddress || "N/A"}
              contactMapLink={product.contactMapLink || "#"}
              price={product.price || "N/A"}
            />
          ))}
      </div>
    </main>
  );
};

export default SellerProductList;
