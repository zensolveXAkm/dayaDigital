import React, { useEffect, useState } from "react";
import { account, databases } from "../AppwriteConfig";

function UserProfile() {
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const [newPassword, setNewPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordSuccess, setPasswordSuccess] = useState("");

  useEffect(() => {
    // Fetch user details from Appwrite Auth
    const fetchUser = async () => {
      try {
        const userDetails = await account.get(); // Get authenticated user
        setUser(userDetails);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    // Fetch user orders (Optional, depending on your app)
    const fetchOrders = async () => {
      try {
        const response = await databases.listDocuments(
          "YOUR_DATABASE_ID", // Replace with your database ID
          "YOUR_COLLECTION_ID" // Replace with your collection ID
        );
        setOrders(response.documents);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchUser();
    fetchOrders();
  }, []);

  const handlePasswordUpdate = async (e) => {
    e.preventDefault();
    if (newPassword.length < 6) {
      setPasswordError("Password must be at least 6 characters.");
      return;
    }

    try {
      await account.updatePassword(newPassword); // Update the password
      setPasswordSuccess("Password updated successfully!");
      setPasswordError(""); // Clear any previous errors
    } catch (error) {
      setPasswordError("Error updating password. Please try again.");
      setPasswordSuccess(""); // Clear any success messages
    }
  };

  return (
    <div className="container mx-auto mt-4">
      <h1 className="text-2xl font-bold">User Profile</h1>
      {user ? (
        <div className="mt-4">
          <h2 className="text-lg">Name: {user.name}</h2>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>Loading user details...</p>
      )}

      {/* Password Update Form */}
      <div className="mt-8">
        <h2 className="text-xl font-bold">Update Password</h2>
        <form onSubmit={handlePasswordUpdate}>
          <div className="mb-4">
            <label htmlFor="new-password" className="block text-sm font-medium">
              New Password
            </label>
            <input
              type="password"
              id="new-password"
              className="border p-2 rounded w-full mt-2"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>

          {passwordError && <p className="text-red-500">{passwordError}</p>}
          {passwordSuccess && <p className="text-green-500">{passwordSuccess}</p>}

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Update Password
          </button>
        </form>
      </div>

      {/* Order History */}
      <div className="mt-8">
        <h2 className="text-xl font-bold">Order History</h2>
        {orders.length > 0 ? (
          <ul className="mt-4">
            {orders.map((order) => (
              <li key={order.$id} className="border p-4 mb-2 rounded shadow">
                <p>
                  <strong>Order ID:</strong> {order.$id}
                </p>
                <p>
                  <strong>Total Items:</strong> {order.items.length}
                </p>
                <p>
                  <strong>Total Price:</strong> ${order.total}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No orders found.</p>
        )}
      </div>
    </div>
  );
}

export default UserProfile;
