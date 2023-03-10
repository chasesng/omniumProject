<template>
    <br/><br/>
    <div class="loginContainer cntr bs sb  animate__animated animate__fadeIn" style="width:30%;">
        <div class="holdLoginSections pdt">
            <div class="inputCredentials" style="width:100%; background-color:white; justify-content: center;">
            <div class="w100" style="overflow:hidden">
                <img id = "logo"  src="../assets/icons/OmniumLogo_Default.png" style="vertical-align: middle;max-height:70%;max-width:70% ; width:100%;height:100%"/>
            </div>
            <br/>
            <div style="display:inline-block; height:100%">
                <br/>
            
            
            <div class="ft p4 l mb25 primary" style="float:left"> Welcome Back, </div>
            <Br/>
            <Br/>
           
            <div class="holdInput" style="margin:auto;  width:100%;height:fit-content;" >

            <form style="height:fit-content;" @submit.prevent="login">
            <div class="username w100">   
            <div class="signInFlex">

                <input 
                type="text" class="inpClear ft l"
                    style="width:100%; 
                    padding-left:10px;background:transparent" 
                    placeholder="Email"
                    name="email"
                    v-model="email"/>
            </div>
        </div> 
            <br/>
            <div class="password w100">
                <div class="signInFlex">
                <input type="password" class="inpClear ft l"
                    style="width:100%;
                    padding-left:10px;background:transparent"
                    placeholder="Password"
                    name="password"
                    v-model="password"/>
                </div>
            </div>
            
            </form>
           
            </div> 
            
            <div style="margin:auto; width:300px">
            <div style="height:30px;">
                <p class="errMsg ft l" v-if="errMsg">{{ errMsg }}</p>
            </div>
            <br/>
            <button type="submit" v-on:click="login()" class="primarybg brButton hv" style="width:50%;height:30%; float:right;">Submit</button>

            <br/><br/><br/>
            <div class="ib">
                <router-link style="float:right" class="ft l" to="/ForgotPassword?">Forgot your password?</router-link> 
                <br/>
                <hr/>
                <p class="ft l">Don't have an account? Sign up<router-link to="/Register"> here</router-link></p>
            </div>
            </div>
            </div>
            
        </div>
            

        </div>
            
        </div>
        
    
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import { signInWithEmailAndPassword, getAuth } from '@firebase/auth'


const email = ref('')
const password = ref('')
const router = useRouter();
const errMsg = ref();

const login = () => {
  const auth = getAuth()
   signInWithEmailAndPassword(auth, email.value, password.value)
   .then(() => {
    console.log("Successfully signed in");
    console.log(auth.currentUser);
    router.push('/');
   })
   .catch((error) => {
    console.log(error.code);
    switch(error.code) {
      case "auth/invalid-email":
        errMsg.value = "Invalid Email";
        break;
      case "auth/user-not-found":
        errMsg.value = "No account with that email was found";
        break;
      case "auth/wrong-password":
        errMsg.value = "Invalid Password";
        break;
      default:
        errMsg.value = "Email / Password was incorrect";
        break;
    }

  })
  };  

  


</script>

<style>


.woBorder {
    border:0px;
}


.loginContainer {
    width:50%;
}

.holdLoginSections {
    display:flex;
    margin:auto;
    overflow:hidden;

}


.loginButton:hover {
    background-color:gray;
}

.loginButton:active {
    background-color:black;
}

.signInFlex {
    height:30px;
    display:flex;
    border-radius:30px;
}

.minimized {
    width:50%;
    height:30%;
}

.errMsg {
    padding: 5px;
    color:crimson;
    text-shadow:white;
}

</style>