import React, { useState, useEffect } from 'react';
import { databases, Query } from './appwrite';
import ProfileCard from './ProfileCard';
import { FaPlus } from 'react-icons/fa'; // Plus icon for "Add Yours"

const List = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);  // Loading state

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await databases.listDocuments('seller', 'user-info', [
          Query.limit(10),  // Optional limit
        ]);
        
        console.log('Fetched users:', response.documents);  // Log the fetched data
        setUsers(response.documents);
        setLoading(false);  // Set loading to false after data is fetched
      } catch (error) {
        console.error('Error fetching users:', error);
        setLoading(false);  // Set loading to false if there's an error
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div className="text-center p-6">Loading...</div>;  // Loading indicator
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {users.length > 0 ? (
        users.map(user => (
          <ProfileCard key={user.$id} user={user} />
        ))
      ) : (
        <div className="text-center p-6">No users found</div>  // Display message if no users are found
      )}

      {/* "Add Yours" Card */}
      <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden bg-opacity-50 bg-blue-500 p-6 flex justify-center items-center flex-col hover:bg-opacity-70 transform transition duration-300 hover:scale-105">
        <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4">
          <FaPlus size={30} className="text-blue-500" />
        </div>
        <h3 className="text-white text-lg font-semibold mb-2">Add Yours</h3>
        <button className="bg-white text-blue-500 px-4 py-2 rounded-full hover:bg-blue-500 hover:text-white transition duration-300">
          Add Your Profile
        </button>
      </div>
    </div>
  );
};

export default List;
