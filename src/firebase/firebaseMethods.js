import { db as firestore } from './firebase';

//call function to generate user document and biniding additional data
export const generateUserDocument = async (user, additionalData) => {
    if (!user) return;
    const userRef = firestore.doc(`users/${user.uid}`);
    const snapshot = await userRef.get();
    if (!snapshot.exists) {
    const { email, displayName } = user;
    try {
        await userRef.set({
            displayName,
            email,
            ...additionalData
        });
    } catch (error) {
        console.error("Error creating user document", error);
    }
    }
    return getUserDocument(user.uid);
};

//call this function to get user document on basis of UID
const getUserDocument = async uid => {
    if (!uid) return null;
    try {
      const userDocument = await firestore.doc(`users/${uid}`).get();
      return {
        uid,
        ...userDocument.data()
      };
    } catch (error) {
      console.error("Error fetching user", error);
    }
};
  