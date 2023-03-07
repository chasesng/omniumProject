<template>
    <br/>
    <div class="ib bs sb wtbg" style="width:30%;">
        <div class="w100" style="height:200px;overflow:hidden">
            <img id = "logo"  src="../assets/icons/OmniumLogo_Default.png" style="vertical-align: middle;max-height:100%;max-width:100% ; width:100%"/>
        </div>
  <p class="ft l p9 mt50">Forgot or changing your password? Enter the email you used to sign up to the website to reset the password.</p>
        <p class="ft l mt10 p9">We will send you a recovery email if the email exists for an account.</p>
        <form style="height:fit-content;" @submit.prevent="sendEmail">
        <div class="ib w100">
            <input class="inpClear pd5" v-model="email" type="email" style="width:60%;" placeholder="✉ Enter your email..."/> 
            <br/>
            <button type="submit" class="brButton hv mt10 primarybg mb50" style="width:60%;height:50%">Submit</button>

            <div class="w100" style="height:30%">
                {{ errMsg }}
            </div>
        </div>
        </form>
        <br/>


    </div>
</template>

<script setup>
import { ref } from 'vue';
import { getAuth, sendPasswordResetEmail } from '@firebase/auth'
const errMsg = ref('');
const email = ref('');

// Initialize Firebase
// const errorCode = "";
// const errorMessage = "";

const sendEmail = () => {
    if (!email.value) {
        errMsg.value = "Please type in a valid email address"

    }
    else {
        errMsg.value = "A link to reset your password has been sent to your email if you are registered with us."
        sendPasswordResetEmail(getAuth(),email.value);
    }



}


</script>