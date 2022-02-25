import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD0m6aX8v9ykZOxTZmFTdTpKrCRxAUVFKM",
  authDomain: "react-firebase-auth-b30f5.firebaseapp.com",
  projectId: "react-firebase-auth-b30f5",
  storageBucket: "react-firebase-auth-b30f5.appspot.com",
  messagingSenderId: "936067695748",
  appId: "1:936067695748:web:804b25e6f076ef1d8c6ed1",
  measurementId: "G-QSEKGM3MWS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((res) => {
      const name = res.user.displayName;
      const email = res.user.email;
      const profilePicture = res.user.photoURL;
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePicture);
    })
    .catch((err) => {
      console.log(err);
    });
};
