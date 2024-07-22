import { Client, Account, ID, Avatars, Databases } from 'react-native-appwrite';


export const appwriteConfig = {
  endpoint: 'https://cloud.appwrite.io/v1',
  platform: 'com.jsm.aoracr',
  projectId: '669e5e3b00000b0df194',
  databaseId: '669e5fa80031508fa5f9',
  userCollectionId: '669e5fd3000cc1b83cbf',
  videoCollectionId: '669e5fff0016f3657794',
  storageId: '669e6149000c9785a2b0'
};


// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
    .setProject(appwriteConfig.projectId) // Your project ID
    .setPlatform(appwriteConfig.platform) // Your application ID or bundle ID.
;
const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser = async (email, password, username) => {
  try {
    const newAccount = await  account.create(
      ID.unique(),
      email,
      password,
      username
    )

    if(!newAccount) throw new Error('Account creation failed');
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
    )
    return newUser;
  } catch (error) {
    console.error(error);
    throw new Error(error);

  }
}

export async function signIn(email, password) {
  try {
    const session = await account.createEmailPasswordSession(email, password);
    console.log(session);
    return session;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
}
