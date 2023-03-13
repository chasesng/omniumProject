
import { createApp } from "vue";
import { createRouter,createWebHistory } from "vue-router";
import './allcss/cssFormats.vue';

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyD8kn26Sj-wvYhB6h-vALgxWoZ2UyujHyI",
  authDomain: "hana-firebase-auth.firebaseapp.com",
  projectId: "hana-firebase-auth",
  storageBucket: "hana-firebase-auth.appspot.com",
  messagingSenderId: "257456893215",
  appId: "1:257456893215:web:7da412256ffcbfeb62142a",
  measurementId: "G-VNEDYMGDTL"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


import App from './App'
import indexPage from './components/indexPage'
import signUp from './components/signUp.vue'
import assessmentPage from './components/assessmentPage'
import loginPage from './components/loginPage'
import omniumCredentials from './components/omniumCredentials'
import support from './components/supportPage'
import insuranceGuideBook from './subComponent/insuranceGuidelist'
import FAQ from './subComponent/supportFaq'
import login from './components/loginPage'
import plans from './components/allPlans'
import register from './components/registerAccount.vue'
import questionBoard from './components/questionBoard.vue'
import toRedirect from './subComponent/toRedirect.vue'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import profilePage from './subComponent/profilePage';
import reclaimPassword from './subComponent/reclaimPassword.vue'
import insuanceAssessmentGuide from './subComponent/assessmentHelp.vue'
import displayPlans from './components/displayPlans'
import menuBar from './components/menuBar'
import addReco from './components/addRecommendation'




const router = createRouter({
    scrollBehavior() {
        // always scroll to top
        return { top: 0 }
      },
    history: createWebHistory(),
    routes : [
    {path: '/', name: "Index", component: indexPage},
    {path: "/Register", name: "signUp", component: signUp},
    {path: "/Insurance_Assessment", name: "IA", component: assessmentPage
    ,
    meta: {
      requiresAuth: true
    }
  
  
  
    },


    {path: "/Login", name: "Login", component: loginPage},
    {path: "/Omnium_Credentials", name: "WhatisOmnium", component: omniumCredentials},
    {path: "/Support", name: "Support", component: support},
    {path: "/Insurance_Guides", name: "IGL", component: insuranceGuideBook},
    {path: "/Support/Faq", name: "supportfaq", component: FAQ},
    {path: "/userLogin", name: "login", component: login},
    {path: "/Plans", name: "plans", component: plans},
    {path: "/reg", name: "register2", component: register},
    {path: "/Question_Board", name: "qnReply", component: questionBoard,meta: { requiresAuth:true}},
    {path: "/Redirect", name: "redirectOnly", component: toRedirect},
    {path: "/Profile", name: "userProfile", component: profilePage, meta: { requiresAuth: true}},
    {path: "/ForgotPassword", name: "reclaimPW", component: reclaimPassword},
    {path: "/InsuranceAssessmentGuide", name: "insuranceGuide", component: insuanceAssessmentGuide},
    {path: "/DisplayPlans", component: displayPlans},
    {path: "/Menu", component: menuBar},
    {path: "/Add_Recommendation", component: addReco},

    
















],

})

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject 
    );
  }
  )}

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      alert ("Please create an account first");
      next("/register");
    }
  } else {
    next();
  }
})
createApp(App).use(router).mount("#app");
export { app };
