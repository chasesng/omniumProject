<template>
    <div style="margin-bottom:9%" class="profilePage">
        <br />
        <div class="ib cntr" style="height:100vh;margin-top:100px">
            <div style="width:100vw; height:200px; overflow:hidden;z-index:2;">
                <img src="../assets/banners/banner1.jpg" style="object-position:bottom">
            </div>
            <div v-for="(user, index) in users.filter(user => String(user.userID).trim() === String(usID).trim())" style="visibility:hidden;margin-bottom:-2%"
                :key="index">
                {{ usDetails.push(user.username, user.from, user.dateOfBirth,
                    user.occupation, user.gender, user.email, user.userType, user.nric, user.assignmentArray, user.id) }}
            </div>

            <div class=" profileContainer br10 cntr lb" style="margin-left:7%">
                <img v-if="usDetails[4] === 'Male'" class="w100 h100" style="max-width: 100%;max-height: 100%;"
                    src="../assets/icons/userMale.png">
                <img v-if="usDetails[4] === 'Female'" class="w100 h100" style="max-width: 100%;max-height: 100%;"
                    src="../assets/icons/userFemale.png">

            </div>


            <div style="height:100px;background-color:whitesmoke">
                <p class="ibn l p4 second" style="padding-top:2%;opacity:.7">Omnium Profile Management</p>
            </div>
            <BR />
            <div class="f profileInfo" style=";width:1500px;">
                <div class="sideInfo" style="overflow:hidden;width:800px;height:fit-content">

                    <div v-for="(user, index) in users.filter(user => String(user.userID).trim() === String(usID).trim())"
                        :key="index">
                        <p class="pd5 ibn b wt p5" style="float:left;margin-left:1%;opacity:.6">Welcome, {{ user.username }} ({{ user.userType }}) 
                        </p>
                        <br/>
                        <div class="w100" style="height:90%;margin-top:5%;margin-left:3%">
                            <div class="f mb25" style="height:33px;">
                                <label class="wt p7 b ibn pd5" style="width:20%">NRIC</label>
                                <input class="inpClear wt ibn b p7 pd5" ref="nric" :disabled="true" :value="user.nric" />
                            </div>


                            <div class="f mb25" style="height:33px;">
                                <label class="wt p7 b ibn pd5" style="width:20%">User Name</label>
                                <input class="inpClear tbg wt ibn b p7 pd5" placeholder="Enter your user name..."
                                    type="text" ref="username" :value="user.username" />
                            </div>

                            <div class="f mb25" style="height:33px;">
                                <label class="wt p7 b ibn pd5" style="width:20%">Home City</label>
                                <input class="inpClear tbg wt ibn b p7 pd5" placeholder="Kembangan"
                                    type="text" ref="from" :value="user.from" />
                            </div>

                            <div class="f mb25" style="height:33px;">
                                <label class="wt p7 b ibn pd5" style="width:20%">Age</label>
                                <input class="inpClear wt ibn b p7 pd5" type="text" style="width:15%" ref="dob" :disabled="true"
                                    :value="Math.floor(getAge(Date.parse(user.dateOfBirth)))" />
                            </div>

                            <div class="f mb25" style="height:33px;">
                                <label class="wt p7 b ibn pd5" style="width:20%">Occupation</label>
                                <input class="inpClear tbg wt ibn b p7 pd5" placeholder="Enter your occupation..." style="width:40%"
                                    ref="occupation" :value="user.occupation" />
                            </div>


                            <div class="f mb25" style="height:33px;">
                                <label class="wt p7 b ibn pd5" style="width:20%">Gender</label>
                                <select id="gender" class="inpClear tbg wt ibn l p7" ref="gender" :value="user.gender">
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                            </div>

                            <div class="f mb25" style="height:33px;">
                                <label class="wt p7 b ibn pd5" style="width:20%">Password</label>
                                <router-link class="ibn l p7 pd5" style="height:33px;" to="/ForgotPassword">Change your password</router-link>

                            </div>

                        </div>
                        <button class="ibn l hv pd5 wt h100 updateProfButton brButton" @click="updateProf(usDetails[9])"
                            style="margin-top:1%;height:fit-content">Update Profile</button>

                    </div>


                </div>

                <div class="inform containChecklist"
                    style="margin-left:3%;overflow-y:auto;height:50vh;margin-top:3%;border-radius:1px solid white">
                    <!-- empty array length is 1, use first value once split, empty string '', if true, assessment has no questions done -->
                    <div v-if="String(usDetails[8]).split(',')[0] === ''" class="p7">
                        <p class="w100 ibn b wt" style="margin-bottom:5%">Complete your assessment to help your advisors.
                        </p>
                        <router-link to="/InsuranceAssessmentGuide" class="w100 hfc wt pd5 hv" style="margin-right:5%;border:1px solid white;text-decoration:none">Learn More</router-link>
                        
                        <router-link to="/Insurance_Assessment" class="w100 hfc wt pd5 hv" style="border:1px solid white;text-decoration:none">Assessment</router-link>

                    </div>
                    <div v-if="String(usDetails[8]).split(',')[0] != ''" style="margin-bottom:5%">
                        <p class="w100 ibn l p8" style="color:limegreen;line-height:32px">You have completed {{
                            String(usDetails[8]).split(',').length }}/20 questions.<br/>Need to change your responses?</p>
                        <router-link to="/Insurance_Assessment" class="w100 hfc wt pd5 hv" style="border:1px solid white; text-decoration:none">Assessment Page</router-link>
                    
                    
                    <p v-for="(item, index) in String(usDetails[8]).split(',')" :key="index" class="wt"><span>{{index+1}}. {{ item.split('_')[0] }}</span>
                        <br /><span style="text-decoration:underline">{{ item.split('_')[2] }}</span></p>
                    </div>
                </div>

            </div>






        </div>

    </div>
    <Br />
</template>


<script setup>


var usName = ref('');
var usEmail = ref('');
const username = ref('')
const occupation = ref('');
const usID = ref('');
var usDetails = [];
const gender = ref('');
// var usPhone = ref('');
let auth;

onMounted(() => {
    auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            isLoggedin.value = true;
            usID.value = user.uid;

        }
        else {
            isLoggedin.value = false;
            usEmail.value = "User is not logged in!"
        }
        return {
            usName,
            usID
        }
    })
})

</script>


<script>
import { getFirestore, onSnapshot, collection, query, doc, updateDoc } from 'firebase/firestore';
import { onAuthStateChanged, getAuth } from '@firebase/auth';
import { ref, onUnmounted, onMounted } from 'vue';
import { app, getAge } from '@/configs.js'


const isLoggedin = ref(false);
const db = getFirestore(app);

// const errMsg = ref();
export default {
    data: () => {
        return {
            users: ref([]),
        }
    },
    mounted() {
        const latestQuery = query(collection(db, "users"));
        const liveUsers = onSnapshot(latestQuery, (snapshot) => {
            this.users = snapshot.docs.map((doc) => {
                return {
                    id: doc.id,
                    userID: doc.data().userID,
                    username: doc.data().username,
                    gender: doc.data().gender,
                    dateOfBirth: doc.data().dateOfBirth,
                    assignmentArray: doc.data().assignmentArray,
                    from: doc.data().from,
                    occupation: doc.data().occupation,
                    emailRef: doc.data().emailRef,
                    userType: doc.data().userType,
                    nric: doc.data().nric


                }
            });
        });
        onUnmounted(liveUsers)
    }
    ,

    methods: {

        updateProf: function (id) {

            updateDoc(doc(db, 'users', id), {
                username: this.$refs.username.value,
                // gender:this.$refs.gender.value,
                // from: this.$refs.from.value,
                // occupation: this.$refs.occupation.value
            })
        }

    },

}
</script>

<style>

.profilePage .hv {
    transition: background-color .2s
}
.profileContainer {
    width: 160px;
    height: 160px;
    position: absolute;
    margin-top: -5%;
    margin-left: 2%;
    background-color: whitesmoke;

}

.profileInfo {
    width: 160px;
    height: 370px;
    margin-left: 3%;

}

.sideInfo {
    width: 700px;
    height: 370px;
    margin-left: 10%;

}

.containChecklist {
    width: 300px;
}

.updateProfButton {
    position: absolute;
}

.updateProfButton:hover {
    cursor: pointer;
    font-weight: bolder;
}

.updateProfButton:active {
    background-color: gray;
    transition: background-color .2s
}

select option {
    color: black
}</style>
