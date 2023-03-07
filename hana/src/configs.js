import { initializeApp } from "firebase/app";
// import { onAuthStateChanged,getAuth } from "firebase/auth";
// import { onSnapshot, collection, query, getFirestore } from 'firebase/firestore';
// import { onMounted, onUnmounted, ref} from 'vue';


export const firebaseConfig = {
    apiKey: "AIzaSyD8kn26Sj-wvYhB6h-vALgxWoZ2UyujHyI",
    authDomain: "hana-firebase-auth.firebaseapp.com",
    projectId: "hana-firebase-auth",
    storageBucket: "hana-firebase-auth.appspot.com",
    messagingSenderId: "257456893215",
    appId: "1:257456893215:web:7da412256ffcbfeb62142a",
    measurementId: "G-VNEDYMGDTL"
}

export const app = initializeApp(firebaseConfig);