import React, { useState } from 'react';
import { ID, Query } from 'appwrite';
import { storage, databases } from '../AppwriteConfig';
import { FaUser, FaEnvelope, FaPhoneAlt, FaHome, FaCamera, FaFileAlt, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SellerForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        profilePhoto: null,
        identityProof: null,
    });
    const [loading, setLoading] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [refId, setRefId] = useState('');
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormData((prev) => ({ ...prev, [name]: files[0] }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const emailExists = await databases.listDocuments(
                'dayaxakm',
                'requestseller',
                [Query.equal('email', formData.email)]
            );

            if (emailExists.total > 0) {
                setError('This email has already been used for registration.');
                setLoading(false);
                return;
            }

            if (!formData.profilePhoto || !formData.identityProof) {
                throw new Error('Please upload both the profile photo and identity proof.');
            }

            const profilePhotoResponse = await storage.createFile(
                'daya-bukket',
                ID.unique(),
                formData.profilePhoto
            );

            const identityProofResponse = await storage.createFile(
                'daya-bukket',
                ID.unique(),
                formData.identityProof
            );

            const profilePhotoUrl = `https://cloud.appwrite.io/v1/storage/buckets/daya-bukket/files/${profilePhotoResponse.$id}/view?project=daya-x-akm&mode=admin`;
            const identityProofUrl = `https://cloud.appwrite.io/v1/storage/buckets/daya-bukket/files/${identityProofResponse.$id}/view?project=daya-x-akm&mode=admin`;

            const documentId = ID.unique();
            const response = await databases.createDocument(
                'dayaxakm',
                'requestseller',
                documentId,
                {
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    address: formData.address,
                    profilePhoto: profilePhotoUrl,
                    identityProof: identityProofUrl,
                }
            );

            setRefId(documentId);
            setShowPopup(true);
        } catch (error) {
            console.error('Error submitting form:', error);
            setError('An error occurred while submitting the form. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center"
            style={{
                backgroundImage: "url('/Yellow Modern Gaming Channel Blog Banner.png')",
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full max-w-5xl bg-white/70 backdrop-blur-md p-8 rounded-md shadow-lg">
                {/* Right side (Form) */}
                <div className="flex flex-col justify-center space-y-6 text-gray-800">
                    <h2 className="text-4xl font-extrabold text-center mb-6">Seller Registration</h2>
                    {error && <p className="text-red-500 text-center">{error}</p>}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="flex items-center space-x-4">
                            <FaUser className="text-indigo-500 text-2xl" />
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Enter your name"
                                className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-400"
                                required
                            />
                        </div>

                        <div className="flex items-center space-x-4">
                            <FaEnvelope className="text-indigo-500 text-2xl" />
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Enter your email"
                                className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-400"
                                required
                            />
                        </div>

                        <div className="flex items-center space-x-4">
                            <FaPhoneAlt className="text-indigo-500 text-2xl" />
                            <input
                                type="tel"
                                name="phone"
                                id="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                placeholder="Enter your phone number"
                                className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-400"
                                required
                            />
                        </div>

                        <div className="flex items-center space-x-4">
                            <FaHome className="text-indigo-500 text-2xl" />
                            <textarea
                                name="address"
                                id="address"
                                value={formData.address}
                                onChange={handleInputChange}
                                placeholder="Enter your address"
                                className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-400"
                                required
                            />
                        </div>

                        <div className="flex items-center space-x-4">
                            <FaCamera className="text-indigo-500 text-2xl" />
                            <input
                                type="file"
                                name="profilePhoto"
                                id="profilePhoto"
                                onChange={handleFileChange}
                                className="file:py-3 file:px-6 file:border file:border-gray-300 file:bg-gray-100 file:text-gray-800 file:rounded-md focus:outline-none"
                                required
                            />
                        </div>

                        <div className="flex items-center space-x-4">
                            <FaFileAlt className="text-indigo-500 text-2xl" />
                            <input
                                type="file"
                                name="identityProof"
                                id="identityProof"
                                onChange={handleFileChange}
                                className="file:py-3 file:px-6 file:border file:border-gray-300 file:bg-gray-100 file:text-gray-800 file:rounded-md focus:outline-none"
                                required
                            />
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-3 bg-indigo-500 text-white font-semibold rounded-md hover:bg-indigo-600 focus:ring-2 focus:ring-indigo-400"
                            >
                                {loading ? 'Submitting...' : 'Submit'}
                            </button>
                        </div>
                    </form>
                </div>

                {/* Left side (Image) */}
                <div className="hidden lg:block">
                    <img
                        src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7892.jpg"
                        alt="Side Illustration"
                        className="w-full h-full object-cover rounded-md shadow-lg"
                    />
                </div>
            </div>

            {/* Popup Modal */}
            {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
                    <div className="bg-white p-8 rounded-lg shadow-xl text-center space-y-4 w-96 relative">
                        <button
                            onClick={() => setShowPopup(false)}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                        >
                            <FaTimes className="text-2xl" />
                        </button>
                        <h2 className="text-2xl font-bold text-indigo-500">Thank You, {formData.name}!</h2>
                        <p>Your profile has been sent to our team.</p>
                        <p>Our team will contact you soon.</p>
                        <p>
                            <strong>Your REF ID:</strong> {refId}
                        </p>
                        <p>
                            If our team doesn't contact you within 24 hours, please{' '}
                            <Link to="/contact" className="text-indigo-500 underline">
                                contact us
                            </Link>.
                        </p>
                        <button
                            onClick={() => setShowPopup(false)}
                            className="px-6 py-3 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition"
                        >
                           
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SellerForm;
