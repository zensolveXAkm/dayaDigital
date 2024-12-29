import React from "react";
import { useLocation } from "react-router-dom";

function Confirmation() {
  const location = useLocation();
  const { product } = location.state || {};

  return (
    <div className="max-w-xl mx-auto text-center p-6">
      <h2 className="text-3xl font-bold mb-4">Thank You for Shopping!</h2>
      <p className="mb-4">
        Your purchase of <strong>{product?.consoleName}</strong> has been
        confirmed.
      </p>
      <p>
        The seller will contact you soon. If you have any questions, feel free
        to reach out to the seller at <strong>{product?.contactMail}</strong>.
      </p>
    </div>
  );
}

export default Confirmation;
