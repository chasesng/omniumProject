
<template>
    <div>
        <br />
        <div class="ib mt50">
            <br/>
            <div class="fullContainer">
                <div class="leftContainer">

                    <div style="margin-left:1%">
                        <p class="ft primary l p4" style="width:40%;text-align:left;margin-left:1%">All Available Plans</p>
                        <input ref="holdUSID" style="visibility: hidden;" v-model="usID">
                        <div class="filterDropdown" style="text-align:left">
                            <select class="dropdownBox ft" v-model="selectedType" style="float:left">
                                <option value="0" style="font-weight:bold">All Plans</option>
                                <!-- <option value="8">Favorites</option> -->
                                <hr />
                                <option value="Life">Life</option>
                                <option value="Health">Health</option>
                                <option value="Home">Home</option>
                                <option value="Auto">Auto</option>
                                <option value="Disability">Disability</option>
                                <option value="Long-Term">Long-Term</option>

                            </select>
                        </div>
                    </div>

                    

                    <div class="planDisplay" style="width:100%;margin-bottom:3vh;overflow-x:hidden">
                        <div class="ib w100">
                            <br/>
                            <div v-for="(plan, index) in plans.filter(plan => filterByType.includes(plan.coverageType))" :key="index">
                            <div id="planContainer">
                                <div v-bind:class="{'selected-message':previewPlan === plan.id}" class="wtbg cntr br10 animate__animated animate__slideInDown hv" style="height:200px; width:95%">
                                <div class="vMsg ib w100" v-on:click="setPreviewPlan(plan.id)" v-bind:key="plan.id"
                                v-bind:class="{ active: previewPlan === plan.id }" style="margin-left:.5%;margin-top:.5%"> 
                                    <p class="ft b p6 w100" style="text-align:left;padding-left:10px;margin-top:5px">{{ plan.planName }}</p>
                                    <div class="f">
                                    <p class="ft l p8" style="text-align:left;padding-left:10px;">{{ plan.coverageType }} 
                                        <i class="fa-solid fa-life-ring cntr pd5" v-if="(plan.coverageType === 'Life')" style="font-size:20px;"></i>
                                        <i class="fa-solid fa-heart-pulse cntr pd5" v-if="(plan.coverageType === 'Health')" style="font-size:20px;"></i>
                                        <i class="fa-solid fa-house cntr pd5" v-if="(plan.coverageType === 'Home')" style="font-size:20px;"></i>
                                        <i class="fa-solid fa-car cntr pd5" v-if="(plan.coverageType === 'Auto')" style="font-size:20px;" ></i>
                                        <i class="fa-solid fa-wheelchair cntr" v-if="(plan.coverageType === 'Disability')" style="font-size:20px;"></i>
                                        <i class="fa-solid fa-person-cane cntr" v-if="(plan.coverageType === 'Long-Term')" style="font-size:20px;"></i>

                                    
                                    </p>
                                    
                                    </div>
                                    <p class="ft l p8 br10 wfc primarybg wt" style="text-align:left;padding-left:10px;padding-right:10px;margin-left:.3%">{{ plan.provider }}</p>
                                    <p class="ft l p8 w100">{{ plan.shortDescription }}</p>

                                </div>
                               
                            </div>
                        </div>
                            <br/>
                                
                            </div>
                        </div>
                    </div>
                </div>

                <div class="f" style="margin-top:5%;width:30vw">

                    <div id="planPreview" style="width:100%">

                        <div class="ft p4 fourth wt pd5">Plan Preview</div>
                        <button class="ft brButton od5 mt10 hv w100" style="height:3%" @click="scrollBottom">Get
                            in Touch</button>


                        <!-- <p>{{ filterByType }}</p> -->
                        <br />
                        <br />
                        <div class="previewDiv animate__animated animate__slideInLeft" style="width:100%;">
                            <div v-for="(plan, index) in plans.filter(plan => plan.id === previewPlan)" :key="index">
                                <b class="ft p6">{{ plan.planName }}</b>
                                <p class="ft p7">Age Group {{ plan.ageGroup }}</p>
                                <p class="ft p7">{{ plan.planPolicy }}</p>
                            </div>
                        </div>
                    </div>



                </div>

            </div>


        </div>

        <div class=" mt10" style="margin-top:2%;width:60%;margin-left:5%;height:fit-content;padding-bottom:5%" v-if="!isLoggedin">
            <div class="wt p6 ft b2" style="position:absolute; left:25%"><router-link to="/Login">Log In </router-link>or <router-link to="/Register">Sign Up </router-link>to contact our advisors</div>

            <div class="w100 h100 blurFrame">
            <div class="getInTouch pd5" style="margin-left: 15%;">
                <p class="ft p5 pd5 cntr wt" style="float:left;">Get in Touch</p>
                <br />
                <br />
                <div class="f p7">
                    <P class="wfc pd5 ft l wt" style="width:10%;text-align:left">Plan</P>
                    <select ref="plan" class="ft inpClear" style="height:30px" v-model="selectedPlan" :disabled="true">

                        <option v-for="(plan, index) in plans" class="ft l" :key="index">
                            {{ plan.planName }}
                        </option>
                    </select>
                    <p class="ft l p8 pd5 second">Click on a plan above to display it here</p>

                </div>
                <div class="f p7">
                    <P class="wfc pd5 ft l wt" style="width:10%;text-align:left">Name</P>
                    <input ref="name" style="width:20%;height:30px" v-model="nameInput" class="inpClear ft l pd5"
                        placeholder="Tim Berners-Lee" />
                </div>
    

                <div class="f p7">
                    <P class="wfc pd5 ft l wt" style="width:10%;text-align:left">Email</P>
                    <input ref="email" style="width:15vw;height:30px" class="inpClear ft l pd5 wt"
                        placeholder="tim@gmail.com" :value="usEmail" :disabled="true"/>

                </div>




                <div class="f p7">
                    <P class="wfc pd5 ft l wt" style="width:10%;text-align:left">Header</P>
                    <input ref="title" style="width:20%;height:30px" v-model="titleInput" class="inpClear ft l pd5"
                        placeholder="Title" />

                </div>

                <div class="f p7">
                    <P class="wfc pd5 ft l wt" style="width:10%;text-align:left">Question</P>
                    <textarea ref="newmessage" style="width:70%;height:90px" v-model="questionArea" class="ft l pd5"
                        placeholder="I'd like to get this plan, could i get in contact with an advisor?"></textarea>

                </div>
                <br />
                <div style="float:left" class="wt">Please provide your consent by ticking on the checkbox:</div>
                <br />
                <div class="f p8">


                    <label class="wfc pd5 ft l wt">
                        <input type="checkbox" name="cnst" v-model="disclosure" />
                        By providing your personal data and submitting this form, you consent to the collection, use,
                        disclosure, processing, and retention of your personal data by Omnium, for the purpose of addressing
                        your inquiry ("Purpose"), in accordance with the Omnium Personal Data Policy. You also consent to
                        being contacted by Omnium via your provided contact details for such Purpose.<br />
                        [1] "Omnium Persons" refers to Omnium Singapore Private Limited, its associated
                        persons/organisations, its and their third-party service providers and its and their
                        representatives, whether within or outside Singapore.
                        <br /><br />
                        [2] Available on Omnium Personal Data Policy (Singapore).
                        <br /><br />
                        [3] If you have provided your mobile number, we will contact you via voice call and/or text message
                        (e.g. SMS/MMS). If you have provided your email address, we will contact you via email.
                    </label>
                </div>
                <br />
                <button class="brButton pd5 hv" :disabled="!disclosureEnabled"
                    v-bind:class="{ 'disabled-button': !disclosureEnabled }" style="float:right;"
                    >Submit</button>

                <p class="errMsg ft l">{{ errMsg }}</p>


            </div>
        </div>
        </div>


        <div class=" mt10" style="margin-top:2%;width:60%;margin-left:5%;height:fit-content;padding-bottom:5%" v-if="isLoggedin">
            <div class="getInTouch pd5" style="margin-left: 15%;">
                <p class="ft p5 pd5 cntr wt" style="float:left;">Get in Touch</p>
                <br />
                <br />
                <div class="f p7">
                    <P class="wfc pd5 ft l wt" style="width:10%;text-align:left">Plan</P>
                    <select ref="plan" class="ft inpClear" style="height:30px" v-model="selectedPlan" :disabled="true">

                        <option v-for="(plan, index) in plans" class="ft l" :key="index">
                            {{ plan.planName }}
                        </option>
                    </select>
                    <p class="ft l p8 pd5 second">Click on a plan above to display it here</p>

                </div>
                <div class="f p7">
                    <P class="wfc pd5 ft l wt" style="width:10%;text-align:left">Name</P>
                    <input ref="name" style="width:20%;height:30px" v-model="nameInput" class="inpClear ft l pd5"
                        placeholder="Tim Berners-Lee" />
                </div>

                <div class="f p7">
                    <P class="wfc pd5 ft l wt" style="width:10%;text-align:left">Email</P>
                    <input ref="email" style="width:15vw;height:30px" class="inpClear ft l pd5 wt"
                        placeholder="tim@gmail.com" :value="usEmail" :disabled="true"/>

                </div>




                <div class="f p7">
                    <P class="wfc pd5 ft l wt" style="width:10%;text-align:left">Header</P>
                    <input ref="title" style="width:20%;height:30px" v-model="titleInput" class="inpClear ft l pd5"
                        placeholder="Title" />

                </div>

                <div class="f p7">
                    <P class="wfc pd5 ft l wt" style="width:10%;text-align:left">Question</P>
                    <textarea ref="newmessage" style="width:70%;height:90px" v-model="questionArea" class="ft l pd5"
                        placeholder="I'd like to get this plan, could i get in contact with an advisor?"></textarea>

                </div>
                <br />
                <div style="float:left" class="wt">Please provide your consent by ticking on the checkbox:</div>
                <br />
                <div class="f p8">


                    <label class="wfc pd5 ft l wt">
                        <input type="checkbox" name="cnst" v-model="disclosure" />
                        By providing your personal data and submitting this form, you consent to the collection, use,
                        disclosure, processing, and retention of your personal data by Omnium, for the purpose of addressing
                        your inquiry ("Purpose"), in accordance with the Omnium Personal Data Policy. You also consent to
                        being contacted by Omnium via your provided contact details for such Purpose.<br />
                        [1] "Omnium Persons" refers to Omnium Singapore Private Limited, its associated
                        persons/organisations, its and their third-party service providers and its and their
                        representatives, whether within or outside Singapore.
                        <br /><br />
                        [2] Available on Omnium Personal Data Policy (Singapore).
                        <br /><br />
                        [3] If you have provided your mobile number, we will contact you via voice call and/or text message
                        (e.g. SMS/MMS). If you have provided your email address, we will contact you via email.
                    </label>
                </div>
                <br />
                <button class="brButton pd5 hv" :disabled="!disclosureEnabled"
                    v-bind:class="{ 'disabled-button': !disclosureEnabled }" style="float:right;"
                    @click="addNewMessage">Submit</button>

                <p class="errMsg ft l">{{ errMsg }}</p>


            </div>

        </div>

    </div>
</template>
<script>
import { getFirestore, collection, addDoc, query, onSnapshot } from 'firebase/firestore';
import { app } from '@/configs'
// import { checkEmail, checkPassword } from '@/configs';
import { ref, onUnmounted } from 'vue';


const db = getFirestore(app);
const errMsg = ref();
const isLoggedin = ref(false);

export default {

    components: {

    },

    data() {
        return {
            plans: ref([]),
            disclosure: false,
            selectedType: "All Plans",
            previewPlan: 1,
            filterByType: ["Life", "Health", "Auto", "Disability", "Home", "Long-Term"],
            holdPlanName: "",
            selectedPlan: "",
            

        }
    },
    computed: {
        disclosureEnabled() {
            return this.disclosure;
        }
    },
    watch: {
        selectedType(newValue) {
            if (newValue === "0") {
                this.filterByType = ["Life", "Health", "Auto", "Disability", "Home", "Long-Term"];
            } else {
                // this.filterByType = [newValue]
                this.filterByType = [newValue];
                this.filterByType = this.filterByType.map(val => String(val));


            }
        }
    },


    methods: {
        goRedirect() {
            this.$router.push({ path: '/Redirect' })
        },
        setPreviewPlan(id) {
            this.previewPlan = id;
            let plan = this.plans.find(plan => plan.id === id)
            if (plan) {
                this.selectedPlan = plan.planName
            }

        },

        getIcon(val) {
            if (val === "Life") {
                return

            }
        },

        scrollBottom() {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const space = 200; // set the amount of space you want to leave

            const scrollTo = documentHeight - windowHeight - space;
            window.scrollTo({
                top: scrollTo,
                behavior: 'smooth', // optional smooth scrolling
            });
        },

        addNewMessage: function () {
            if (this.$refs.name.value.trim() && this.$refs.plan.value.trim() && this.$refs.email.value.trim() && this.$refs.newmessage.value.trim() && this.$refs.title.value.trim()) {
                addDoc(collection(db, 'messages'), {
                    title: this.$refs.title.value,
                    text: this.$refs.newmessage.value, //textarea question
                    // phone: this.$refs.phone.value, // phone number
                    email: this.$refs.email.value, // email
                    name: this.$refs.name.value, // name
                    plan: this.$refs.plan.value, //plan name && id
                    visibleTo: "Advisors",
                    date: Date.now(),
                    replies: [],
                    senderID: this.$refs.holdUSID.value
                })

                this.goRedirect();
            }
            else {
                errMsg.value = "One or more fields is incomplete."

            }
        }



    },
    mounted() {
        const latestQuery = query(collection(db, "plans"));
        const livePlans = onSnapshot(latestQuery, (snapshot) => {
            this.plans = snapshot.docs.map((doc) => {
                return {
                    ageGroup: doc.data().ageGroup,
                    coverageType: doc.data().coverageType,
                    minIncome: doc.data().minIncome,
                    planName: doc.data().planName,
                    planPolicy: doc.data().planPolicy,
                    provider: doc.data().provider,
                    shortDescription: doc.data().shortDescription,
                    id: doc.data().id,


                }
            });
        });
        onUnmounted(livePlans)
    }
}

</script>



<script setup>
import { onMounted } from 'vue';
import { getAuth,onAuthStateChanged } from '@firebase/auth';

var usID = ref('');
var usEmail = ref('');
let auth;

onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {

      isLoggedin.value = true;
      usID.value = user.uid;
      usEmail.value = user.email;
    }
    else {
      isLoggedin.value = false;
    }
    return {
      usID
    }
  })
})


</script>
<style>
.fullContainer {
    width: 98vw;
    height: 70%;
    display: flex;
}

.dropdownBox {
    position: relative;
    display: inline-block;
    width: 300px;
    height: 30px;
    margin: 10px;
    border: 1px solid #999;
    border-radius: 4px;
    overflow: hidden;
}



.leftContainer {
    width: 60vw;
    height: 100%;
    margin-left: 1%;
    margin-right: 2%;

}

.planDisplay {
    display: flex;
    flex-wrap: wrap;
    height: 1000px;
    width: 100%;
    overflow: scroll;
}


.planDesc {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: -5px;
    height: 25%;
    width: 100%;
    min-height: 25%;
}

.tripleSection {
    width: 100%;
}

#planPreview {
    padding: 10px;
    border: 1px solid black;
    background-color: whitesmoke;

}

#sendReq {
    padding: 10px;
    border: 1px solid black;
    background-color: whitesmoke;
    
}

.blurFrame {
    filter: blur(3px);
    pointer-events: none;
}
#planContainer {
    transition: background-color .2s
}
#planContainer:active {
    background-color:darkgray;
}
#planContainer:hover {
    transform: scale(1.05);
    transition: transform .2s

}


</style>