import { Client, Account  } from 'react-native-appwrite';


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

export const createUser = () => {
  account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
    .then(function (response) {
        console.log(response);
    }, function (error) {
        console.log(error);
    });

}
