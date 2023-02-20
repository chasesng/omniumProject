
<template>
    <div>
        <br />
        <div class="ib">
        <div class="fullContainer">
            <div class="leftContainer">

                <div class="display:flex">
                    <p class="ft primary l p4" style="width:40%">All Available Plans</p>

                    <div class="filterDropdown" style="width:40%">
                        <select class="dropdownBox ft" v-model="selectedType">
                            <option value="0" style="font-weight:bold">All Plans</option>
                            <option value="8">Favorites</option>
                            <hr />
                            <option value="1">Life</option>
                            <option value="2">Health</option>
                            <option value="3">Home</option>
                            <option value="4">Auto</option>
                            <option value="5">Disability</option>
                            <option value="6">Long-Term</option>

                        </select>
                    </div>
                </div>
                <p class="ft p8 l second">For legal reasons, these are only based on real-life
                    plans offered by major insurance
                    companies.</p>
                <Br />
                
                <div class="planDisplay" style="width:800px">
                <div v-for="(plan, index) in plans.filter(plan => filterByType.includes(plan.typeID))" :key="index" style="height:fit-content">
                    <div class="planEa ft l" v-on:click="setPreviewPlan(plan.id)" v-bind:key="plan.id"
                        v-bind:class="{ active: previewPlan === plan.id }"
                        >
                        <p class="w100 pd5 wt b primarybg">
                            Plan Name: {{ plan.name }}</p>
                        <div class="tripleSection">
                            <p class="planDesc">Coverage</p>
                            {{ plan.type }}
                            <p class="planDesc">Age Group:</p>
                            {{ plan.agegroup }}
                            <p class="planDesc">Target:</p>
                            {{ plan.target }}
                            <p class="planDesc">Income:</p>
                            {{ plan.income }}
                            <p class="planDesc">Provider:</p>
                            {{ plan.company }}
                            
                        </div>
                    </div>
                </div>
                </div>
            </div>

            <div class="f" style="margin-top:9%;width:40%">
                <div id="planPreview" class="bs" style="width:60%">
                    <div class="ft p4 primarybg wt pd5">Plan Preview</div>
                    <!-- <p>{{ filterByType }}</p> -->
                    <br />
                    <div class="previewDiv" style="width:100%;">
                        <div v-for="(plan, index) in plans" :key="index">
                            <b class="previewPlanName ft" v-if="previewPlan === index + 1">{{ plan.name }}</b>
                            <p class="previewPlanDesc ft" v-if="previewPlan === index + 1">{{ plan.details }}</p>
                            
                        </div>
                        <hr/>
                    </div> 
                </div>
                <div id="sendReq" class="bs" style="margin-left:5%;width:40%">
                    <div class="ft p4 primarybg wt pd5">Additional Support</div>
                    <Br/>
                    <div class="previewDiv" style="width:100%;">
                        <div v-for="(plan, index) in plans" :key="index">
                            <b class="previewPlanName ft" v-if="previewPlan === index + 1">{{ plan.name }}</b>
                        </div>
                        <br/>
                    </div> 
                    <button class="ft brButton primarybg od5 mb10" @click="scrollBottom">Get in Touch</button>
                    <br/>

                    <p class="ft p8 l">You might consider this plan if you...</p>
                    
                </div>
            

            </div>
            
        </div>


    </div>
        <div class="bs mt10 cntr" style="margin-top:2%;width:60%;height:fit-content;padding-bottom:5%;border:1px solid black">
            <form class="getInTouch pd5">  
                                    <p class="ft p5 pd5 cntr">Get in Touch:</p>
                                    <div class="f p7">
                                        <p class="ft l pd5">Salutation</p>
                                    <label class="wfc pd5 ft l">      
                                        <input type="radio" name="q1" v-model="salutation"/>
                                        Mr
                                    </label>
                                    <label class="wfc pd5 ft l">      
                                        <input type="radio" name="q1" v-model="salutation"/>
                                        Mrs
                                    </label>
                                    <label class="wfc pd5 ft l">      
                                        <input type="radio" name="q1" v-model="salutation"/>
                                        Mdm
                                    </label>
                                    </div>
                                    <div class="f p7">
                                        <P class="wfc pd5 ft l" style="width:10%;text-align:left">Name</P>
                                        <input ref="name" style="width:20%" v-model="nameInput" class="inp ft l pd5" placeholder="Tim Berners-Lee"/>
                                        <!-- creator of html -->
                                    </div>
                                    <div class="f p7">
                                        <P class="wfc pd5 ft l" style="width:10%;text-align:left">Phone #</P>
                                        <input ref="phone" style="width:20%" v-model="phoneInput" class="inp ft l pd5" placeholder="91111111" />

                                    </div>

                                    <div class="f p7">
                                        <P class="wfc pd5 ft l" style="width:10%;text-align:left">Email</P>
                                        <input ref="email" style="width:20%" v-model="emailInput" class="inp ft l pd5" placeholder="tim@gmail.com" />

                                    </div>

                                    <div class="f p7">
                                        <P class="wfc pd5 ft l" style="width:10%;text-align:left">Plan</P>
                                        <select ref="plan" class="ft inp" style="height:30px" v-model="selectedPlan">

                                            <option v-for="(plan, index) in plans" class="ft l" :key="index">
                                                    {{ plan.name }}                                                   
                                            </option>
                                        </select>
                                        <p class="ft l p8 pd5 second">Click on a plan above to display it here</p>

                                    </div>

                                    
                                    <div class="f p7">
                                        <P class="wfc pd5 ft l" style="width:10%;text-align:left">Header</P>
                                        <input ref="title" style="width:20%" v-model="titleInput" class="inp ft l pd5" placeholder="Title" />

                                    </div>

                                    <div class="f p7">
                                        <P class="wfc pd5 ft l" style="width:10%;text-align:left">Question</P>
                                        <textarea ref="newmessage" style="width:70%;height:90px" v-model="questionArea" class="inp ft l pd5" placeholder="I'd like to get this plan, could i get in contact with an advisor?"></textarea>

                                    </div>
                                    <br/>
                                    <div style="float:left">Please provide your consent by ticking on the checkbox:</div>
                                    <br/>
                                    <div class="f p8">

                                        
                                        <label class="wfc pd5 ft l">      
                                        <input type="checkbox" name="cnst" v-model="disclosure"/>
                                        By providing your personal data and submitting this form, you consent to the collection, use, disclosure, processing, and retention of your personal data by Omnium, for the purpose of addressing your inquiry ("Purpose"), in accordance with the Omnium Personal Data Policy. You also consent to being contacted by Omnium via your provided contact details for such Purpose.<br/>
                                        [1] "Omnium Persons" refers to Omnium Singapore Private Limited, its associated persons/organisations, its and their third-party service providers and its and their representatives, whether within or outside Singapore.
                                            <br/><br/>
                                        [2] Available on Omnium Personal Data Policy (Singapore).
                                            <br/><br/>
                                        [3] If you have provided your mobile number, we will contact you via voice call and/or text message (e.g. SMS/MMS). If you have provided your email address, we will contact you via email.
                                    </label>
                                    </div>
                                    <br/>
                                    <button class="brButton primarybg pd5" :disabled="!disclosureEnabled"  v-bind:class="{ 'disabled-button': !disclosureEnabled }" style="float:right;" @click="addNewMessage();goRedirect()">Submit</button>

                                    

                        </form>

        </div>

    </div>
</template>
<script>
  import {getFirestore,collection,addDoc} from 'firebase/firestore';
  
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";


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

    components: {

    },

    data() {
        return {
            disclosure: false,
            plans: [
                { id: 1, company: "Company A", name: "A-Secure", type: "Life", typeID: 1, agegroup: "18-35", target: "Young adults starting their careers", income: "$30,000 - $50,000", details: "A-Secure's description: For young adults, life insurance is crucial to building a strong foundation with which you and your children may stand on 50 years from now. With A-Secure, safety and security will be out of your hands and into the hands of trusted professionals ready to catch you when you fall." },
                { id: 2, company: "Company B", name: "B-Protection", type: "Health", typeID: 2, agegroup: "35-55", target: "Mid-career professionals and families", income: "$50,000 - $80,000", details: "B-Protection's description: Lorem Ipsum" },
                { id: 3, company: "Company C", name: "C-Safe", type: "Disability", typeID: 5, agegroup: "55+", target: "Retirees and seniors", income: "$30,000+", details: "C-Safe's description: Lorem Ipsum" },
                { id: 4, company: "Company A", name: "A-Care", type: "Home", typeID: 3, agegroup: "25-45", target: "Parents and families with young children", income: "$60,000 - $100,000", details: "A-Care's description: Lorem Ipsum" },
                { id: 5, company: "Company B", name: "B-Auto", type: "Auto", typeID: 4, agegroup: "25-45", target: "Young professionals and families", income: "$40,000 - $70,000", details: "B-Auto's description: Lorem Ipsum" },
                { id: 6, company: "Company C", name: "C-Retire", type: "Long-Term", typeID: 6, agegroup: "55+", target: "Retirees and seniors", income: "$50,000+", details: "C-Retire's description: Lorem Ipsum" },
                { id: 7, company: "Company A",  name: "A-Future", type: "Life", typeID: 1, agegroup: "30-50", target: "Professionals planning for retirement", income: "$70,000 - $120,000", details: "A-Future's description: Lorem Ipsum" },
                { id: 8, company: "Company B", name: "B-Health", type: "Health", typeID: 2, agegroup: "N/A", target: "Adults of all ages looking for comprehensive health insurance coverage", income: "No specific income requirement", details: "B-Health's description: Lorem Ipsum" },
                { id: 9, company: "Company C", name: "C-Ease", type: "Life", typeID: 1, agegroup: "N/A", target: "Adults of all ages looking for affordable and flexible insurance coverage", income: "No specific income requirement", details: "C-Ease's description: Lorem Ipsum" },
                { id: 10, company: "Company D", name: "D-Auto", type: "Auto", typeID: 4, agegroup: "18-30", target: "Young adults starting their careers", income: "Low to medium income", details: "D-Auto's description: Lorem Ipsum" },
                { id: 11, company: "Company D", name: "D-Secure", type: "Life", typeID: 1, agegroup: "18-30", target: "Young adults starting their careers", income: "Low to medium income", details: "D-Secure's description: Lorem Ipsum" },
                { id: 12, company: "Company D", name: "D-Health", type: "Health", typeID: 2, agegroup: "18-30", target: "Young adults starting their careers", income: "Low to medium income", details: "D-Health's description: Lorem Ipsum" },
                { id: 13, company: "Company E", name: "E-Ease", type: "Life", typeID: 1, agegroup: "18-30", target: "Young adults starting their careers", income: "Low to medium income", details: "E-Ease's description: Lorem Ipsum" },
                { id: 14, company: "Company E", name: "E-Auto", type: "Auto", typeID: 4, agegroup: "18-30", target: "Young adults starting their careers", income: "Low to medium income", details: "E-Auto's description: Lorem Ipsum" },
                { id: 15, company: "Company E", name: "E-Life", type: "Life", typeID: 1, agegroup: "18-30", target: "Young adults starting their careers", income: "Low to medium income", details: "E-Life's description: Lorem Ipsum" },

            
            ],
            selectedType: "All Plans",
            previewPlan: 2,
            favorites: [1, 5, 6, 8, 9],
            filterByType: [1, 2, 3, 4, 5, 6],
            holdPlanName: "",

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
                this.filterByType = [1, 2, 3, 4, 5, 6];
            } else {
                // this.filterByType = [newValue]
                this.filterByType = [newValue];
                this.filterByType = this.filterByType.map(val => parseInt(val));

                
            }
        }
    },


    methods: {

        goRedirect() {
      this.$router.push({ path: '/Redirect'})
    },
        setPreviewPlan(id) {
            this.previewPlan = id;
            let plan = this.plans.find(plan => plan.id === id)
            if (plan) {
                this.selectedPlan = plan.name
            }
            
        },
        setPlanName(name) {
            this.holdPlanName = name;
        },
        scrollBottom() {
      let currentPosition = window.pageYOffset
      let targetPosition = document.body.scrollHeight

      let animationId = setInterval(function() {
        if (currentPosition >= targetPosition) {
          clearInterval(animationId)
          return
        }

        currentPosition += 50
        window.scrollTo(0, currentPosition)
      }, 10)
        },

        addNewMessage:function() {
            addDoc(collection(db,'messages'),{
            title:this.$refs.title.value,
            text:this.$refs.newmessage.value, //textarea question
            phone:this.$refs.phone.value, // phone number
            email:this.$refs.email.value, // email
            name:this.$refs.name.value, // name
            plan:this.$refs.plan.value, //plan name || id
            visibleTo:"All",
            date:Date.now(),
            // replies: [{header: "", email: "", date: "", text: ""}]
            replies: []
            });
            }
    //     addNewMessage:function() {
    //     addDoc(collection(db,'messages'),{
    //       title:this.$refs.title.value,
    //       text:this.$refs.newmessage.value, //textarea question
    //       phone:this.$refs.phone.value, // phone number
    //       email:this.$refs.email.value, // email 
    //       name:this.$refs.name.value, // name
    //       plan:this.$refs.plan.value, //plan name || id
    //       visibleTo:"All",
    //       date:Date.now(),
    //       replies: []
    //     });      
    //   },


    }
}

</script>
<style>
.fullContainer {
    width: 1900px;
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
    width: fit-content;
    height: 100%;
    margin-left: 1%;
    margin-right:2%;

}

.planDisplay {
    display:flex; 
    flex-wrap:wrap; 
    height:1000px;
    width:100%;
    overflow:scroll;
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


.allPlanstitle {

    font-size: 26px;
    font-weight: 500;

}

.planDesc {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: -5px;
    height: 30%;
    width: 100%
}

.planEa {
    /* box-shadow: 9px 7px 0px 0px rgba(0,0,0,0.32);
    -webkit-box-shadow: 9px 7px 0px 0px rgba(0,0,0,0.32);
    -moz-box-shadow: 9px 7px 0px 0px rgba(0,0,0,0.32); */
    width: 230px;
    height: 350px;
    padding: 10px;
    border: 1px solid black;
    margin: 10px;
    border-radius: 10px;
    cursor: pointer;
    background-color:whitesmoke;
    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    transition:all .5s;
}


.planEa:hover {
    background-color: lightgray;
}

.planEa:active {
    background-color: gainsboro;
}

.previewPlanName {
    font-size: 22px;
    font-weight: 500;
}

.favoritedText {
    font-size: 16px;
    font-weight: 400;
    margin-left: 5px;
    margin-top: 3%;

}

.previewPlanDesc {
    font-size: 16px;

}

.tripleSection {
    width: 100%;
}

.favoritesIcon {
    display: flex;
    align-items: center;
    height: 32px;
}
</style>