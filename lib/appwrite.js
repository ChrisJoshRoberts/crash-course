import { Client, Account, ID, Avatars, Databases } from 'react-native-appwrite';

export const appwriteConfig = {
  endpoint: 'https://cloud.appwrite.io/v1',
  platform: 'com.jsm.aura',
  projectId: '6697ddad0028c9a716df',
  databaseId: '6697df63002d3a2900e9',
  userCollectionId: '6697df9f00166e3a9b22',
  videoCollectionId: '6697dff20000eff0b7f1',
  storageId: '6697e365000213a55988'
}

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
  .setProject(appwriteConfig.projectId) // Your project ID
  .setPlatform(appwriteConfig.platform); // Your application ID or bundle ID.

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser = async (email, password, username) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );
    if (!newAccount) throw new Error('Account not created');
    const avatarUrl = avatars.getInitials(username);
    await signIn(email, password);
    const newUser = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email,
        username,
        avatar: avatarUrl
      }
    );
    return newUser;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
}

export async function signIn(email, password) {
  try {
    const session = await account.createSession(email, password);
    return session;
  } catch (error) {
    throw new Error(error);
  }
}
