<template>
    <div>
        <br />
        <div class="ib cntr wtbg" style="height:100vh;margin-top:100px">
            <div style="width:90vw; height:200px; overflow:hidden;z-index:2;">
                <img src="../assets/banners/banner1.jpg">
            </div>

            <div class=" profileContainer br10 cntr sb" style="visibility:hidden">

                <img v-if="gender === 'Male'" class="w100 h100" style="max-width: 100%;max-height: 100%;"
                    src="../assets/icons/userMale.png">
                <img v-if="gender === 'Female'" class="w100 h100" style="max-width: 100%;max-height: 100%;"
                    src="../assets/icons/userFemale.png">

            </div>
            <div style="height:100px;background-color:whitesmoke">
                <p class="ft l p4 second" style="padding-top:2%;opacity:.6">Omnium Profile Management</p>
            </div>
            <BR />
            <div class="f profileInfo" style=";width:1500px;">
                <div style="width:10%">
                    <div class="ib animate__animated animate__fadeInLeft">
                        <div v-for="(user, index) in users.filter(user => String(user.userID).trim() === String(usID).trim())" :key="index">
                            <p class="fourth ft b2 mt10 p7">From</p>
                            <p class="ft">{{ user.from }}</p>

                            <p class="fourth ft b p7">Age</p>
                            <p class="ft">{{ user.age }}</p>

                            <p class="fourth ft b p7">Occupation</p>
                            <p class="ft">{{ user.occupation }}</p>

                            <p class="fourth ft b p7">Gender</p>
                            <p ref="gender" class="ft">{{ user.gender }}</p>
                            

                            <div style="visibility:hidden">{{ usDetails.push(user.username, user.from, user.age,
                                user.occupation, user.gender, user.email,user.userType,user.nric) }}

                            </div>

                        </div>

                    </div>
                </div>

                <div class="sideInfo" style="overflow:hidden;width:800px;height:fit-content;">
                   
                    <div v-for="(user, index) in users.filter(user => String(user.userID).trim() === String(usID).trim())" :key="index">

                        <p class="pd5 ft b fourth p7" style="float:left;margin-left:1%;opacity:.6">Welcome, {{ user.username}}
                        <br/>
                    
                    
                    </p>
                    <br />
                    <br />
                        <div class="w100" style="height:90%;margin-top:5%;margin-left:3%">
                        <div class="f mb10 animate__animated animate__fadeInLeft" style="height:33px;">
                            <label class="fourth p8 b ft pd5" style="width:20%">NRIC</label>
                            <input class="inpClear ft b p8 pd5" ref="nric" :disabled="true"
                                 :value="user.nric"/>
                        </div>


                        <div class="f mb10 animate__animated animate__fadeInLeft" style="height:33px;">
                            <label class="fourth p8 b ft pd5" style="width:20%">User Name</label>
                            <input class="inpClear ft b p8 pd5" placeholder="Enter your user name..." ref="username"
                                :value="user.username" />
                        </div>

                        <div class="f mb10 animate__animated animate__fadeInLeft" style="height:33px;">
                            <label class="fourth p8 b ft pd5" style="width:20%">From</label>
                            <input class="inpClear ft b p8 pd5" placeholder="Enter your city..." ref="from"
                            :value="user.from" />
                        </div>

                        <div class="f mb10 animate__animated animate__fadeInLeft" style="height:33px;">
                            <label class="fourth p8 b ft pd5" style="width:20%">Age</label>
                            <input class="inpClear ft b p8 pd5" type="number" style="width:10%" ref="age"
                                :value="user.age" />
                        </div>

                        <div class="f mb10 animate__animated animate__fadeInLeft" style="height:33px;">
                            <label class="fourth p8 b ft pd5" style="width:20%">Occupation</label>
                            <input class="inpClear ft b p8 pd5" placeholder="Enter your occupation..." ref="occupation"
                                :value="user.occupation" />
                        </div>


                        <div class="f mb10 animate__animated animate__fadeInLeft" style="height:33px;">
                            <label class="fourth p8 b ft pd5" style="width:20%">Gender</label>
                            <select id="gender" class="inpClear ft l" ref="gender">
                                <option v-if="user.gender = 'NA'" value="male">Male</option>
                                <option v-if="user.gender = 'NA'" value="female">Female</option>

                                <option v-if="user.gender === 'Male'" selected="selected" value="male">Male</option>
                                <option v-if="user.gender === 'Male'" value="female">Female</option>

                                <option v-if="user.gender === 'Female'" selected="selected" value="female">Female</option>
                                <option v-if="user.gender === 'Female'" value="male">Male</option>

                            </select>
                        </div>

                        <div class="f mb10" style="height:33px;">
                            <label class="fourth p8 b ft pd5" style="width:20%">Password</label>
                            <router-link class="ft l p8 pd5" style="height:33px;" to="/ForgotPassword">Change your
                                password</router-link>

                        </div>
                        <button class="ft l hv pd5 fourth h100 updateProfButton brButton primarybg" v-on:click="updateProfile(user)" style="height:fit-content;">Update Profile</button>
                        
                        <hr/>
                        <br/>
                        {{ totalArray }}
                         
                    </div>
                    
                    </div>


                </div>

                <div class="inform containChecklist lb2 br10 h100" style="margin-left:3%">

                </div>

            </div>






        </div>

    </div>
    <Br />
</template>


<script setup>



// var usName = ref('');
var usName = ref('');
var usEmail = ref('');
var occupation = ref('');
var usID = ref('');
var usDetails = [];
var gender = ref('');
// var usPhone = ref('');
let auth;

onMounted(() => {
    auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            isLoggedin.value = true;
            // usPhone = user.phoneNumber;
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


<script type="module">
import { getFirestore, onSnapshot, collection, query, doc, setDoc } from 'firebase/firestore';
import { onAuthStateChanged, getAuth } from '@firebase/auth';
import { ref, onUnmounted, onMounted } from 'vue';
import { app } from '@/configs.js'
// import {firebaseConfig} from '../main.js'



const isLoggedin = ref(false);
const db = getFirestore(app);

// const errMsg = ref();
export default {
    data: () => {
        return {
            users: ref([])
        }
    },
    mounted() {
        const latestQuery = query(collection(db, "users"));
        const liveUsers = onSnapshot(latestQuery, (snapshot) => {
            this.users = snapshot.docs.map((doc) => {
                return {
                    userID: doc.data().userID,
                    username: doc.data().username,
                    gender: doc.data().gender,
                    age: doc.data().age,
                    assignmentArray: doc.data().assignmentArray,
                    from: doc.data().from,
                    occupation: doc.data().occupation,
                    email: doc.data().emailRef,
                    userType: doc.data().userType,
                    nric: doc.data().nric


                }
            });
        });
        onUnmounted(liveUsers)
    }
    ,
    methods: {

        updateProfile: function (user) {
            setDoc(doc(db, 'users', user.id), {
                username: this.$refs.username.value,




            })
        },
        
    },

}
</script>

<style>
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
    background-color:gray;
    transition: background-color .2s
}
</style>
