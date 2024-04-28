import {
  Client,
  Account,
  ID,
  Avatars,
  Databases,
  Query,
} from 'react-native-appwrite/src';

export const config = {
  endpoint: 'https://cloud.appwrite.io/v1',
  platform: 'com.noflex.sidy',
  projectId: '6626a2f62539ff11da42',
  databaseId: '6626a4b5a864510e88db',
  userCollectionId: '6626a4d168fdf889153d',
  videoCollectionId: '6626a4fd3e7064343e8e',
  storageId: '6626a7fa9d6002028215',
};

export const client = new Client();

client
  .setEndpoint(config.endpoint)
  .setProject(config.projectId)
  .setPlatform(config.platform);

const accounts = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export const signIn = async (email, password) => {
  try {
    const session = await accounts.createEmailSession(email, password);

    return session;
  } catch (error) {
    throw new Error(error);
  }
};

export const createUser = async (email, password, username) => {
  try {
    const account = await accounts.create(
      ID.unique(),
      email,
      password,
      username,
    );

    if (!account) {
      throw Error;
    }

    const avatarUrl = avatars.getInitials(username);

    await signIn(email, password);

    const newUser = await databases.createDocument(
      config.databaseId,
      config.userCollectionId,
      ID.unique(),
      {
        username,
        email,
        avatar: avatarUrl,
        accountId: account.$id,
      },
    );

    return newUser;
  } catch (error) {
    throw new Error(error);
  }
};

export const getCurrentUser = async () => {
  try {
    const currentAccount = await accounts.get();

    if (!currentAccount) {
      throw Error;
    }

    const currentUser = await databases.listDocuments(
      config.databaseId,
      config.userCollectionId,
      [Query.equal('accountId', currentAccount.$id)],
    );

    if (!currentUser) {
      throw Error;
    }

    return currentUser.documents[0];
  } catch (error) {
    // console.log(error);
    throw new Error(error);
  }
};

export const getAllVideos = async () => {
  try {
    const videos = await databases.listDocuments(
      config.databaseId,
      config.videoCollectionId,
    );

    return videos.documents;
  } catch (error) {
    throw new Error(error);
  }
};

export const getLatestPosts = async () => {
  try {
    const posts = await databases.listDocuments(
      config.databaseId,
      config.videoCollectionId,
      [Query.orderDesc('$createdAt'), Query.limit(7)],
    );

    return posts.documents;
  } catch (error) {
    throw new Error(error);
  }
};
