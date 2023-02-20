<template>
  <h3 class="text-xl underline">Sign In to an Account</h3>

  <label for="email">Email:</label>
  <input class="border w-4/12" type="email" name="email" v-model="email" required>

  <label for="email">Password:</label>
  <input class="border w-4/12" type="password" name="password" v-model="password" required>

  <p v-if="errMsg">{{ errMsg }}</p>
  <button class="w-max mt-4 px-4 py-2 text-center rounded-full bg-blue-500 text-white" @click="register()">Sign up</button>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import { signInWithEmailAndPassword, getAuth} from '@firebase/auth'

const email = ref('')
const password = ref('')
const router = useRouter();
const errMsg = ref();

const register = () => {
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