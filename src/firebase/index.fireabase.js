import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY_FIREABSE,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROYECT_ID_FIREBASE,
  storageBucket: process.env.REACT_APP_STORAGE,
  messagingSenderId: process.env.REACT_APP_MESSAGE,
  appId: process.env.REACT_APP_APP_ID_FIREABSE,
  measurementId: process.env.REACT_APP_MEASURMET_FIREBASE
};

const app = initializeApp(firebaseConfig);
let analytics = null;
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

isSupported().then((yes) => {
    if (yes) {
        analytics = getAnalytics(app);
    }
});

export { auth, provider, analytics };
