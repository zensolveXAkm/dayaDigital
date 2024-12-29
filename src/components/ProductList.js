import React, { useEffect, useState } from "react";
import { databases } from "../AppwriteConfig";
import ProductCard from "./ProductCard";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await databases.listDocuments(
          "dayaxakm", // Database ID
          "gpc_collection" // Collection ID
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
    return (
      <div className="flex justify-center items-center h-32">
        <p className="text-xl font-semibold animate-pulse">Loading products...</p>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="flex justify-center items-center h-32">
        <p className="text-lg font-medium">No products found. Please check back later.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-6">
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.$id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
