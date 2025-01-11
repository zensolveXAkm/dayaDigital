import React, { useState, useEffect } from 'react';
import { db, collection, getDocs, updateDoc, doc } from '../firebase'; // Import Firestore methods
import { saveAs } from 'file-saver';
import Papa from 'papaparse';

const MessagesPage = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        // Fetch data from the "contacts" collection
        const querySnapshot = await getDocs(collection(db, "contacts"));
        const messagesArray = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        setMessages(messagesArray); // Set the messages state
        setLoading(false);
      } catch (error) {
        console.error("Error fetching messages:", error);
        setLoading(false);
      }
    };

    fetchMessages(); // Call the function to fetch messages when the component mounts
  }, []);

  const handleCall = (mobile) => {
    window.location.href = `tel:${mobile}`; // Trigger call to the person's mobile
  };

  const handleEmail = (email) => {
    window.location.href = `mailto:${email}`; // Open email client with the person's email
  };

  const handleResponse = async (messageId) => {
    const messageRef = doc(db, "contacts", messageId);
    await updateDoc(messageRef, { responded: true }); // Update Firestore to mark as responded
    alert('Message marked as responded');
  };

  const exportToCSV = () => {
    const csv = Papa.unparse(messages.map((msg) => ({
      Name: msg.name,
      Mobile: msg.mobile,
      Email: msg.email,
      Message: msg.message,
      Date: new Date(msg.timestamp?.seconds * 1000).toLocaleString(),
      Responded: msg.responded ? "Yes" : "No"
    })));

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
    saveAs(blob, 'messages.csv');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="messages-page py-16 px-6 bg-gray-50">
      <section className="messages-container text-center max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Messages Received</h2>

        {messages.length === 0 ? (
          <p className="text-lg text-gray-500">No messages received yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 text-left">Name</th>
                  <th className="px-4 py-2 text-left">Mobile</th>
                  <th className="px-4 py-2 text-left">Email</th>
                  <th className="px-4 py-2 text-left">Message</th>
                  <th className="px-4 py-2 text-left">Date</th>
                  <th className="px-4 py-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {messages.map((message) => (
                  <tr key={message.id} className="border-b">
                    <td className="px-4 py-2">{message.name}</td>
                    <td className="px-4 py-2">{message.mobile}</td>
                    <td className="px-4 py-2">{message.email}</td>
                    <td className="px-4 py-2">{message.message}</td>
                    <td className="px-4 py-2">{new Date(message.timestamp?.seconds * 1000).toLocaleString()}</td>
                    <td className="px-4 py-2">
                      <button
                        onClick={() => handleCall(message.mobile)}
                        className="bg-green-500 text-white py-1 px-3 rounded-md hover:bg-green-400"
                      >
                        Call
                      </button>
                      <button
                        onClick={() => handleEmail(message.email)}
                        className="bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-400 mx-2"
                      >
                        Mail
                      </button>
                      <button
                        onClick={() => handleResponse(message.id)}
                        className={`${
                          message.responded ? "bg-gray-500" : "bg-orange-500"
                        } text-white py-1 px-3 rounded-md hover:bg-orange-400`}
                        disabled={message.responded}
                      >
                        {message.responded ? "Responded" : "Respond"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Export to CSV */}
        <button
          onClick={exportToCSV}
          className="mt-6 py-2 px-4 bg-purple-600 text-white rounded-md hover:bg-purple-500"
        >
          Export to CSV
        </button>
      </section>
    </div>
  );
};

export default MessagesPage;
