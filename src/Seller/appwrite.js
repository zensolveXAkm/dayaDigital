import { Client, Account, Databases, Teams, Storage, Query } from 'appwrite';

// Initialize Appwrite Client
const client = new Client();
client
  .setEndpoint('https://cloud.appwrite.io/v1') // Your Appwrite endpoint
  .setProject('seller');    // Your project ID

// Initialize Appwrite Services
const account = new Account(client);
const databases = new Databases(client);
const teams = new Teams(client);  // Initialize teams
const storage = new Storage(client); // Initialize storage

export { client, account, databases, teams, storage, Query };  // Export storage
