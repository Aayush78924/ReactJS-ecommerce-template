// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getAuth ,Google} from "firebase/auth";
// import { getStorage } from "firebase/storage";
// import { collection, doc, setDoc,getDoc } from "firebase/firestore";
// import "firebase/auth"; 
// // import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';
// // import   firebase from "firebase/app"

//import as per 7.6.1
import firebase from 'firebase/app';
// import { getFirestore } from "firebase/fireStore";
import 'firebase/firestore';
import 'firebase/auth';
const config = {
	apiKey: "AIzaSyDjV_Tf0Be4VOHFAX3GvHJF9i-p4f1t_WY",
	authDomain: "e-commerce-f4064.firebaseapp.com",
	projectId: "e-commerce-f4064",

	storageBucket: "e-commerce-f4064.appspot.com",

}

const app=firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
// export const db = firestore.getFirestore(app);
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

;




export const createUserProfileDocument = async (userAuth, additionalData) => {

  if(!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()
  
  if(snapShot.exists === false){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error){
      console.log('error creating user', error.message)
    }
  }
  return userRef;

}

// firebase.initializeApp(config);

// export const auth = firebase.auth();
// export const firestore = firebase.firestore();

// const provider = GoogleAuthProvider();
// provider.setCustomParameters({prompt: 'select_account'});
// export const signInWithGoogle = () => auth.signInWithPopup(auth,provider);

// export default firebase ;