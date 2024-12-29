import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa'; // Import icons for social media

const ProfileCard = ({ user }) => {
  return (
    <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
      <img
        src={user.profilePicture || 'default-profile.jpg'} // Fallback image
        alt="Profile"
        className="w-full h-56 object-cover"
      />
      <div className="p-4">
        
        <h2 className="text-2xl font-semibold text-gray-800 hover:text-blue-600 transition duration-300">
          {user.email}
        </h2>
        <p className="text-gray-600 mt-1">
          <span className="font-semibold">Phone:</span> {user.phoneNumber}
        </p>
        <p className="text-gray-600 mt-1">
          <span className="font-semibold">Address:</span> {user.address}
        </p>

        <div className="mt-4">
          <h3 className="text-lg font-medium text-gray-800">Social Media</h3>
          {/* Check if socialMediaLinks is an array before mapping */}
          {Array.isArray(user.socialMediaLinks) && user.socialMediaLinks.length > 0 ? (
            <ul className="flex space-x-4 mt-2">
              {user.socialMediaLinks.map((link, index) => (
                <li key={index} className="text-blue-500 hover:text-blue-700 transition duration-300">
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    {link.includes('instagram') && <FaInstagram size={20} />}
                    {link.includes('facebook') && <FaFacebook size={20} />}
                    {link.includes('twitter') && <FaTwitter size={20} />}
                    {!link.includes('instagram') && !link.includes('facebook') && !link.includes('twitter') && (
                      <span className="text-sm">{link}</span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 mt-2">No social media links available.</p>
          )}
        </div>

        <div className="text-sm text-gray-500 mt-4">
          <p>Last Updated: {new Date(user.lastUpdated).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
