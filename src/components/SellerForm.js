import React, { useState } from 'react';
import { ID } from 'appwrite';
import { storage, databases } from '../AppwriteConfig'; // Assuming you saved the Appwrite setup in appwriteConfig.js

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
    const [thankYouMessage, setThankYouMessage] = useState('');

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
        setThankYouMessage(''); // Reset thank you message on submit

        try {
            if (!formData.profilePhoto || !formData.identityProof) {
                throw new Error('Please upload both the profile photo and identity proof.');
            }

            // Upload profile photo to Appwrite storage
            const profilePhotoResponse = await storage.createFile(
                'daya-bukket',
                ID.unique(),
                formData.profilePhoto
            );

            // Upload identity proof to Appwrite storage
            const identityProofResponse = await storage.createFile(
                'daya-bukket',
                ID.unique(),
                formData.identityProof
            );

            console.log('Uploaded files:', profilePhotoResponse, identityProofResponse);

            // Construct file URLs
            const profilePhotoUrl = `https://cloud.appwrite.io/v1/storage/buckets/daya-bukket/files/${profilePhotoResponse.$id}/view?project=daya-x-akm&mode=admin`;
            const identityProofUrl = `https://cloud.appwrite.io/v1/storage/buckets/daya-bukket/files/${identityProofResponse.$id}/view?project=daya-x-akm&mode=admin`;

            // Save the form data and file URLs to the Appwrite database
            const response = await databases.createDocument(
                'dayaxakm',
                'requestseller',
                ID.unique(),
                {
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    address: formData.address,
                    profilePhoto: profilePhotoUrl,
                    identityProof: identityProofUrl,
                }
            );

            console.log('Document created:', response);
            setThankYouMessage('Thank you for registering as a seller! Your application is being reviewed.');
        } catch (error) {
            console.error('Error submitting form:', error);
            setThankYouMessage('An error occurred. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
            </label>
            <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
            </label>
            <label>
                Phone:
                <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required />
            </label>
            <label>
                Address:
                <textarea name="address" value={formData.address} onChange={handleInputChange} required></textarea>
            </label>
            <label>
                Profile Photo:
                <input type="file" name="profilePhoto" onChange={handleFileChange} required />
            </label>
            <label>
                Identity Proof:
                <input type="file" name="identityProof" onChange={handleFileChange} required />
            </label>
            <button type="submit" disabled={loading}>
                {loading ? 'Submitting...' : 'Submit'}
            </button>
            {thankYouMessage && <p>{thankYouMessage}</p>}
        </form>
    );
};

export default SellerForm;
