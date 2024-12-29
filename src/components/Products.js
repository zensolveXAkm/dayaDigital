import React from "react";
import ProductList from "../components/ProductList";
import APCProductList from "../components/APCProductList";
import SellerProductList from "../Seller/SellerProductList";
import Navbar from "./Navbar";

const Product = () => {
  const backgroundImage =
    "https://raw.githubusercontent.com/dayaxakm12109/image/main/Purple%20and%20Blue%20Modern%20Tech%20Company%20Presentation.gif";

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        color: "#ffffff",
      }}
      className="bg-opacity-75"
    >
        <Navbar/>
      <div className="bg-black bg-opacity-60 min-h-full">
        <div className="container mx-auto py-16 px-4">
          {/* Page Header */}
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-yellow-400">Our Products</h1>
            <p className="text-lg mt-2">
              Explore a wide range of products from various categories.
            </p>
          </header>

          {/* All Products Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-300">
              All Products
            </h2>
            <div className=" bg-opacity-30 rounded-lg p-6 shadow-md">
              <ProductList />
            </div>
          </section>

          {/* APC Products Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-300">
              APC Products
            </h2>
            <div className="bg-opacity-30 rounded-lg p-6 shadow-md">
              <APCProductList />
            </div>
          </section>

          {/* Seller Products Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-indigo-300">
              Seller Products
            </h2>
            <div className="bg-white bg-opacity-50 rounded-lg p-6 shadow-md">
              <SellerProductList />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Product;
