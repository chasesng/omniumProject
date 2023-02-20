import { getAuth } from 'firebase/auth'

import { initializeApp } from "firebase/app";
//firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8kn26Sj-wvYhB6h-vALgxWoZ2UyujHyI",
  authDomain: "hana-firebase-auth.firebaseapp.com",
  projectId: "hana-firebase-auth",
  storageBucket: "hana-firebase-auth.appspot.com",
  messagingSenderId: "257456893215",
  appId: "1:257456893215:web:7da412256ffcbfeb62142a",
  measurementId: "G-VNEDYMGDTL"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth()


export { app, auth };