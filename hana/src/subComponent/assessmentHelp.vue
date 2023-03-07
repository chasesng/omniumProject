<template>
    <br/>
    <div>

        <div class="cntr f w1k">
        <div class="txt" style="margin:auto; margin-right:30px">
        <p class="p3 third ft b2 mb10">For your time</p>
        <p class="ft p6 b third ">Skip the introductions...</p>
        <h4 class="ft p6 second mb50">Your assessment results are only visible to advisors connected to you, and they can use its results to provide you better service</h4>
        
        <button v-if="!isLoggedin" class="brButton primarybg hv ft l" @click="toRegister();">Sign Up</button>
        <button v-if="isLoggedin" class="brButton primarybg hv ft l" @click="toAssessment();">Update Profile</button>
        </div>
        <div class="mb50 br10 hof bs">
        <img class="picsize mt10 cntr" src="../assets/insuranceguide1.jpg"/>
        </div>
        

        
        <br/>

        </div>
        <p class="ft l p5 wt">What is the Insurance Assessment?</p>
        <p class="ft l p7 wt">The assessment is a series of 20 questions to let advisors you contact understand more about yourself before talking to you.</p>
        <!-- <router-link class="ft p7 pd5 ntd l primary" style="text-decoration:none" v-if="isLoggedin" to="/Profile/">View Profile ({{ usname }})</router-link> -->
        <div v-if="!isLoggedin">
        <p class="ft l p6 wt">Interested? Sign up for an account <router-link to="/Register"> here</router-link> </p>
        </div>
        <div v-if="isLoggedin === true">
        <p class="ft l p6 wt">You are logged in as {{ usname }}, update your profile<router-link to="/Insurance_Assessment"> here</router-link> </p>
        </div>
    </div>
</template>

<script setup>


import { onMounted, ref} from 'vue'
import { getAuth, onAuthStateChanged } from '@firebase/auth';
const isLoggedin = ref(false);
var usname = ref('');

let auth;

onMounted(() => {
    auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            isLoggedin.value = true;
            usname = user.email;
        }
        else {
            isLoggedin.value = false;
        }
        return {
            usname
        }
    })
})

</script>


<script>
export default {
    data() {

    },
    methods: {
        toRegister() {
      this.$router.push({path:'/Register'})
    },
    toAssessment() {
      this.$router.push({path:'/Insurance_Assessment'})
    },
    }

}
</script>
