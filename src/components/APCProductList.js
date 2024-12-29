import React, { useEffect, useState } from "react";
import { databases } from "../AppwriteConfig";
import APCProductCard from "./APCProductCard";

function APCProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await databases.listDocuments(
          "dayaxakm", // Database ID
          "apc_collection" // Collection ID
        );
        setProducts(response.documents); // Documents contain the product data
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p className="text-center mt-4">Loading products...</p>;
  }

  if (products.length === 0) {
    return <p className="text-center mt-4">No products found.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
      {products.map((product) => (
        <APCProductCard key={product.$id} product={product} />
      ))}
    </div>
  );
}

export default APCProductList;
