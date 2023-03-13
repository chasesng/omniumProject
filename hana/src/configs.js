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

export function checkEmail(input) {
  const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!regex.test(input) === true) {
    return false;
  }
  else {
    return true;

  }

}



export function checkNRIC(input) {
  const regex = /^[STFG]\d{7}[A-Z]$/;
  if (!regex.test(input) === true) {
    return false
  }
  else {
    return true
  }
}
export function checkPassword(input) {
  const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,31}$/;
  if (!regex.test(input) === true) {
    return false;
  }
  else {
    return true;

  }
}


export function checkMatch(input, confirmInput) {
  if (input.trim() != confirmInput.trim()) {
    return false;
  }
  else {
    return true
  }
}

export function rQuotes(input) {
  // regex will read string with the quotes, use this to remove them, works for ref const specifically... to alter for others, remove .value
  return input.value.replace(/['"]+/g, '')
}