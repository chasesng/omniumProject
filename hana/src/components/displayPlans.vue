<template>
    <div>
        <br />
        <p class="ft l p6 pd5 cntr">Display Available Plans</p>
        <p class="ft l">Admin Test Page for demonstrating realtime database upload of plans.</p>
        <button class="brButton primarybg" style="width:200px;height:33px;" @click="dummyDataAdd()">Add Random Plan</button>

        <div class="ib w100 ptr" v-for="(plan, index) in plans" :key="index">
            <p>{{ plan.planName }}</p>

        </div>
    </div>
</template>

<script>
import { getFirestore, onSnapshot, collection, query, addDoc, setDoc,doc } from 'firebase/firestore';
import { initializeApp } from "firebase/app";
// import { onAuthStateChanged, getAuth } from '@firebase/auth';
import { ref, onUnmounted } from 'vue';
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
const db = getFirestore(app);

export default {
    data: () => {
        return {
            plans: ref([]),
            companies: ["Company A", "Company B", "Company C"],
            plannames: ["Secure", "Protection", "Safe", "Retire", "Auto", "Future", "Health"],
            plantype: ["Life", "Health", "Auto", "Disability", "Home", "Long-Term"],
            ages: ["18-35", "35-55", "55+", "25-45", "18-30", "20-50", "60+"],
            targets: ["Young Adults", "Retirees", "Professionals", "Adults of all Ages"],
            income: ["$30,000 - $50,000", "$50,000 - $70,000", "$70,000 - $100,000", "$100,000 - $120,000", ">$120,000"]
        }
    },
    mounted() {
        const latestQuery = query(collection(db, "plans"));
        const livePlans = onSnapshot(latestQuery, (snapshot) => {
            this.plans = snapshot.docs.map((doc) => {
                return {
                    id: doc.data().id,
                    ageGroup: doc.data().ageGroup,
                    coverageType: doc.data().coverageType,
                    minIncome: doc.data().minIncome,
                    planName: doc.data().planName,
                    planPolicy: doc.data().planPolicy,
                    provider: doc.data().provider,
                    shortDescription: doc.data().shortDescription,
                    typeID: doc.data().typeID


                }
            });
        });
        onUnmounted(livePlans)
    },
    methods: {
        dummyDataAdd: function () {
  function getRandom(array) {
    const randIndex = Math.floor(Math.random() * array.length);
    return array[randIndex];
  }

  const newDoc = {
    id: "",
    ageGroup: getRandom(this.ages),
    coverageType: getRandom(this.plantype),
    minIncome: getRandom(this.income),
    planName: getRandom(this.plannames),
    planPolicy: "",
    provider: getRandom(this.companies),
    shortDescription: "",
  };

  addDoc(collection(db, 'plans'), newDoc)
    .then((docRef) => {
      const sid = docRef.id;
      setDoc(doc(db, "plans", newDoc.id)), {
        id: this.sid
      }
      console.log(`Document with ID ${sid} created successfully.`);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });

  return newDoc;
}

    },

    computed: {

    }

}
</script>