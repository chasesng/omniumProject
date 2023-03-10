<template>
    <br/>
    <div class="ib bs sb wtbg animate__animated animate__fadeIn" style="width:25%;">
        <div class="w100" style="overflow:hidden">
            <img id = "logo"  src="../assets/icons/OmniumLogo_Default.png" style="vertical-align: middle;max-height:100%;max-width:100% ; width:100%;height:100%"/>
        </div>
  <p class="ft l p9 mt50">Forgot or changing your password? Enter the email you used to sign up to the website to reset the password.</p>
        <p class="ft l mt10 p9">We will send you a recovery email if the email exists for an account.</p>
        <form style="height:fit-content;" @submit.prevent="sendEmail">
        <div class="ib w100">
            <input class="inpClear pd5" v-model="recoveryemail" type="email" style="width:60%;" placeholder="✉ Enter your email..."/> 
            <br/>
            <button type="submit" class="brButton hv mt10 primarybg mb50" style="width:60%;height:50%">Submit</button>
            <div><router-link to="/Login">Go back to login page</router-link></div>

            <div class="w100" style="height:30%">
                <p style="color:red">{{ errMsg }}</p>
            </div>
        </div>
        </form>
        <br/>


    </div>
    <br/>
</template>

<script setup>
import { ref } from 'vue';
import { getAuth, sendPasswordResetEmail } from '@firebase/auth'
import { checkEmail, rQuotes } from '@/configs';
const errMsg = ref('');
const recoveryemail = ref('');

const sendEmail = () => {
    if (!checkEmail(rQuotes(recoveryemail))) { //if the input email is formatted like one
        errMsg.value = "Please type in a valid email address"

    }
    else {
        sendPasswordResetEmail(getAuth(),recoveryemail.value);
        errMsg.value = "A link to reset your password has been sent to your email if you are registered with us."
    
    }



}


</script>