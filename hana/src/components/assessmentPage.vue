<template>
    <hr />

    <div class="assessmentHeader wt cntr hfc pd5" style="margin-top:7%">
        <p class="ibn l p4 cntr mb50">Policy Assessment</p>
        <p class="ibn l p6 cntr" style="margin-bottom:5%">Completing more questions gives advisors a better understanding of
            you.</p>
        <p class="ibn l p6 cntr mb50">You can come back to change your answers anytime.</p>

    </div>

    <br />

    <div class="f cntr" style="width:88vw">
        <div class="ib cntr">
            <div class="holdQns" v-for="(question, index) in qnsControl" :key="index" style="margin-bottom:3%;">
                <div class="question br10 animate__animated animate__fadeIn" style="width:30vw;height:fit-content">
                    <div class="f">
                        <div class="ibn b p7 pd5 w100 wtbg br10 tooltipChevron" @click="showTooltips(index)">{{ index + 1
                        }}. {{ question.qn }} <i class="fa-solid fa-chevron-down" style="margin-right:3%;float:right"
                                :id="index + 1"></i></div>
                    </div>
                    <div :id="'showTooltip' + index" style="display:none">
                        <p class="wt animate__animated animate__fadeIn">{{ tooltips[index].tooltip }}</p>
                    </div>
                    <div class="pd5">
                        <div v-for="(option, index) in qnsControl" :key="index" class="ibn l p8 "
                            style="height:fit-content;text-align: leibn;">
                            <label :id="'Q' + question.id + '_Option_' + question.options[index]" class="cntr br10 optEa wt"
                                v-if="question.options[index] != null"
                                style="text-align:center;height:33px;width:50%;margin-bottom:2%;border:1px solid white">{{
                                    question.options[index] }}<input type="radio" :name="'Q' + question.id" style="float:right;"
                                    :value="question.qn + '_Option_' + question.options[index]"
                                    @click="updateColor(question.qn + '_Option_' + question.options[index])" /></label>
                        </div>
                        <div style="margin-bottom:90px;"></div>




                    </div>
                </div>


            </div>
            <div v-for="(user, index) in users.filter(user => user.userID === usID)" :key="index">
                <input v-model="user.id" ref="usUserID" style="visibility:hidden">
                <button class="brButton primarybg hv" style="float:right"
                    @click="updateResponseArray(user.id); showUpdate()">Update Array</button>
                    
            </div>
            
            <p style="color:green;margin-top:10%">{{ alertMsg }}</p>
            <router-link v-if="alertMsg" to="/Profile">Go to profile</router-link>
            
        </div>
    </div>
</template>

<script>
//todo: import user profile values to view logged in user's id to be used as parameter for updating user's assessmentArray value in firestore
import { ref, onMounted, onUnmounted } from 'vue';
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { updateDoc, getFirestore, doc, collection, onSnapshot, query } from '@firebase/firestore';
import { app } from '@/configs';

const db = getFirestore(app);
const alertMsg = ref('');

export default {
    components: {
        // question,
    },

    data() {
        return {
            users: ref([]),
            responseArray: [],
            tooltips:
                [
                    { id: 1, tooltip: "We use this answer to determine whether the individual has a spouse who would be financially impacted in the event of their passing or disability, and therefore whether joint life insurance or additional coverage is necessary." },
                    { id: 2, tooltip: "The presence of dependents, such as children or elderly parents, may indicate a need for additional life insurance coverage to ensure that their financial needs are met if the insured person were to pass away." },
                    { id: 3, tooltip: "This helps us to determine the appropriate amount of coverage needed to protect the individual and their loved ones in the event of a life-altering event, such as a serious illness, disability, or death." },
                    { id: 4, tooltip: "Certain occupations may be considered higher risk, such as those involving heavy machinery or dangerous chemicals, which may require additional coverage or higher premiums." },
                    { id: 5, tooltip: "This information helps us to determine the appropriate level of coverage needed to protect the individual's income in the event of an unexpected illness or disability." },
                    { id: 6, tooltip: "Smoking is a risk factor for many health conditions and can lead to higher premiums or exclusions from coverage." },
                    { id: 7, tooltip: "Pre-existing medical conditions can impact the individual's ability to get coverage or lead to higher premiums or exclusions." },
                    { id: 8, tooltip: "Engaging in high-risk activities may increase the likelihood of injury or death, which can impact coverage and premiums." },
                    { id: 9, tooltip: "This helps us to determine the amount of coverage the individual wants to purchase and may impact the type of policy recommended." },
                    { id: 10, tooltip: "This helps us to determine the length of coverage needed and may impact the type of policy recommended." },
                    { id: 11, tooltip: "Some policies have a fixed premium while others may increase over time." },
                    { id: 12, tooltip: "This lets us know if the individual prefers a policy that has a fixed premium or one that may change over time." },
                    { id: 13, tooltip: "This helps us to determine the individual's preference for a policy that has a fixed death benefit or one that may be adjusted based on certain circumstances." },
                    { id: 14, tooltip: "This helps us to determine the individual's preference for a policy that has a fixed cash value or one that may change over time." },
                    { id: 15, tooltip: "This helps us to determine the individual's preference for a policy that may be converted to a permanent policy at a later time." },
                    { id: 16, tooltip: "This helps us to determine the individual's preference for a policy that may be renewed at a later time." },
                    { id: 17, tooltip: "This helps us to determine the appropriate amount of coverage needed to protect the individual and their loved ones in the event of a life-altering event, such as a serious illness, disability, or death." },
                    { id: 18, tooltip: "This helps us to determine the individual's preference for a policy that provides coverage for a specific term or a policy that lasts for the individual's lifetime." },
                    { id: 19, tooltip: "This helps us to determine the individual's preference for a policy that has a cash value component." },
                    { id: 20, tooltip: "This helps us to determine the individual's preference for a policy that requires a medical underwriting process or one that is guaranteed issue." }
                ],
            qnsControl: [
                {
                    id: 1,
                    qn: 'Are you married?',
                    options: ['Yes', 'No', 'Planning to in the near future', 'Separated'],
                },
                {
                    id: 2,
                    qn: 'Do you have dependents?',
                    options: ['Yes', 'No'],
                },
                {
                    id: 3,
                    qn: 'How much insurance coverage do you need for any given insurance?',
                    options: ['Varies', 'At least 30%', 'At least 60%', 'Completely'],
                },
                {
                    id: 4,
                    qn: 'What is your current occupation status?',
                    options: ['Employed', 'Unemployed', 'Retired', 'Self-Employed'],
                },
                {
                    id: 5,
                    qn: 'What is your annual income?',
                    options: ['Less than $30000', '$30000-$49999', '$50000-$74999', '$75000 or more'],
                },
                {
                    id: 6,
                    qn: 'Do you smoke?',
                    options: ['Yes', 'No'],
                },
                {
                    id: 7,
                    qn: 'Do you have any pre-existing medical conditions?',
                    options: ['Yes', 'No'],
                },
                {
                    id: 8,
                    qn: 'Do you engage in high-risk activities such as skydiving or racing?',
                    options: ['Yes', 'No'],
                },
                {
                    id: 9,
                    qn: 'What is the coverage amount you are seeking?',
                    options: ['$100,000 or less', '$100000-$249999', '$250000-$499999', '$500000 or more'],
                },
                {
                    id: 10,
                    qn: 'What is the coverage length you are seeking?',
                    options: ['1 year', '5 years', '10 years', 'Lifetime'],
                },
                {
                    id: 11,
                    qn: 'Do you want your premium to remain level or change over time?',
                    options: ['Remain level', 'Change over time'],
                },
                {
                    id: 12,
                    qn: 'Do you want a guaranteed premium or flexible premium?',
                    options: ['Guaranteed', 'Flexible'],
                },
                {
                    id: 13,
                    qn: 'Do you want a guaranteed death benefit or flexible death benefit?',
                    options: ['Guaranteed', 'Flexible'],
                },
                {
                    id: 14,
                    qn: 'Do you want a guaranteed cash value or flexible cash value?',
                    options: ['Guaranteed', 'Flexible'],
                },
                {
                    id: 15,
                    qn: 'Do you want the option to convert to a permanent policy later?',
                    options: ['Yes', 'No'],
                },
                {
                    id: 16,
                    qn: 'Do you want the option to renew your policy later?',
                    options: ['Yes', 'No'],
                },
                {
                    id: 17,
                    qn: 'How much coverage do you need?',
                    options: ['$100000-$250000', '$250000-$500000', '$500000-$1,000000', 'More than $1000000'],
                },
                {
                    id: 18,
                    qn: 'Do you prefer a term or permanent policy?',
                    options: ['Term', 'Permanent'],
                },
                {
                    id: 19,
                    qn: 'Do you want your policy to have a cash value component?',
                    options: ['Yes', 'No'],
                },
                {
                    id: 20,
                    qn: 'Do you want your policy to be medically underwritten or guaranteed issue?',
                    options: ['Medically underwritten', 'Guaranteed issue'],
                }
            ],
        }



    },
    props: ['choices', 'questionsarray'],


    methods: {
        updateResponseArray(id) {
            this.responseArray = [];
            const radiobuttons = document.querySelectorAll('input[type="radio"]:checked');
            radiobuttons.forEach((button) => {
                this.responseArray.push(button.value);
            });
            updateDoc(doc(db, 'users', id),
                {
                    assignmentArray: this.responseArray
                })



        },
        showUpdate() {
            alertMsg.value = "You have successfully updated your assessment."
        },
        showTooltips(id) {
            var tooltipDiv = document.getElementById('showTooltip' + id);
            if (tooltipDiv.style.display === 'none') {
                tooltipDiv.style.display = 'block';
            }
            else {
                tooltipDiv.style.display = 'none';
            }
        }


    },
    mounted() {
        const userQuery = query(collection(db, "users"));
        const liveUsers = onSnapshot(userQuery, (snapshot) => {
            this.users = snapshot.docs.map((doc) => {
                return {
                    id: doc.id,
                    userID: doc.data().userID,
                    username: doc.data().username,
                    gender: doc.data().gender,
                    age: doc.data().age,
                    assignmentArray: doc.data().assignmentArray,
                    from: doc.data().from,
                    occupation: doc.data().occupation,
                    email: doc.data().emailRef,
                    userType: doc.data().userType


                }
            });
        }); onUnmounted(liveUsers)
    }
}
</script>

<script setup>

var usID = ref('');
var usEmail = ref('');
// var usUserID = ref('')
let auth;
const isLoggedin = ref(false);

onMounted(() => {
    auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            isLoggedin.value = true;
            usEmail.value = user.email;
            usID = user.uid;
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
.assessmentHeader {
    width: 88vw;
}

.optEa:hover {
    transform: scale(1.05);
    transition: transform .2s, background-color .6s;
    background-color: #174ea6;
    color: white;
    cursor: pointer;
}

.tooltipChevron:hover {
    cursor: pointer;
}</style>