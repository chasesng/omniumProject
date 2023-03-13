<template>
  
  
  <div class="w100 ib  animate__animated animate__fadeIn">
    <div class="labelTop cntr" style="display:inline-block; text-align:left;">
      <div class="sign-up-container ft l sb bs cntr" style="width:70%;background-color:white">
    <br/>
    <p class="signUpLabel ft primary l p3 pd10">Sign Up</p>

    <div class="controlForm">
    <form @submit.prevent="submitForm">

      <div class="form-group">
        <div class="label-column">
          <label for="nric" :style="{color: labelColors[3]}">NRIC *</label>
        </div>
        <div class="input-column f">
          <input id="nric" class="inpClear inp" type="text" @focus="changeLabelColor(3)" @blur="resetLabelColor(3)" placeholder="Enter your NRIC here" v-model="nric"/>
          <div v-if="checkNRIC(nric) === true" class="l p9" style="color:green;font-weight:lighter;margin-left:1%">You have entered a valid NRIC</div>

        </div>

        
      </div>

      <div class="form-group">
        <div class="label-column">
          <label for="fullname" :style="{color: labelColors[4]}">Full Name (As shown on IC) *</label>
        </div>
        <div class="input-column f">
          <input id="fullname" class="inpClear inp" type="text" @focus="changeLabelColor(4)" @blur="resetLabelColor(4)" placeholder="Full Name" v-model="username"/>
        </div>
      </div>

      <div class="form-group">
        <div class="label-column">
          <label for="email" :style="{color: labelColors[0]}">Email *</label>
        </div>
        <div class="input-column f">
          <input id="email" class="inpClear inp" type="email" @focus="changeLabelColor(0)" @blur="resetLabelColor(0)" placeholder="name@example.com" v-model="email"/>
          <div v-if="checkEmail(email)" class="l p9" style="color:green;margin-left:1%;">Email is valid</div>
          <div v-else-if="checkEmail(email) != true && email.length >=1" class="l p9" style="color:red">✖ This is not a valid email</div>

        </div>
      </div>

      <div class="form-group">
        <div class="label-column">
          <label for="dob" :style="{color: labelColors[5]}">Date of Birth *</label>
        </div>
        <div class="input-column f">
          <input id="dob" class="inpClear inp" type="date" @focus="changeLabelColor(5)" @blur="resetLabelColor(0)" placeholder="" v-model="dob"/>
          <!-- <div class="l p9" style="color:green;font-weight:lighter;margin-left:1%;">You are old enough to use Omnium</div> -->
          <!-- by singapore law, anyone above the age of 10 is allowed to own an insurance policy with parental consent, 16 without -->
          <!-- checkDOB(dob) returns age in decimals -->

          <p v-if="checkDOB(dob)" class="l p9" style="color:green;margin-left:1%">✓</p>
          
          <p v-else-if="dob != ''"  class="l p9" style="color:red;margin-left:1%s">✖ You are not old enough to purchase an insurance policy yet</p>
        </div>
      </div>

      <div class="form-group">
        <div class="label-column">
          <label for="password" :style="{color: labelColors[1]}">Password *</label>
        </div>
        <div class="passwordStatement" style="display:inline-block">
        <div class="input-column f" style="width:auto"> 
          <input id="password" class="inpClear inp" type="password" @focus="changeLabelColor(1)" @blur="resetLabelColor(1)" placeholder="Password" v-model="password"/>
          <div v-if="checkPassword(password) === true" class="l2 p9" style="color:green;margin-left:1%;">Password is valid</div>
          <div v-else-if="checkPassword(password) === false && password.length >= 8" class="l2 p9" style="color:red">✖ This is not a valid password</div>
        </div>
        <div class="l p9" style="color:gray;font-weight:lighter;margin-left:1%">Password must contain at least 8 characters, with 1 uppercase & lowercase.</div>
      </div>
      </div>
      <div class="form-group">
        <div class="label-column">
          <label for="confirmPassword" :style="{color: labelColors[2]}">Confirm Password *</label>
        </div>
        <div class="input-column f">
          <input id="confirmPassword" class="inpClear inp" type="password" @focus="changeLabelColor(2)" @blur="resetLabelColor(2)" placeholder="Confirm Password" v-model="confirmPassword"/>
          <div v-if="checkMatch(password, confirmPassword) === true && password != '' && confirmPassword != ''" class="l p9" style="color:green;font-weight:lighter;margin-left:1%;">Passwords match</div>
          <div v-if="checkMatch(password, confirmPassword) === false && password != '' && confirmPassword != ''" class="l p9" style="color:red;font-weight:lighter;margin-left:1%;">Passwords do not match</div>
        
        </div>
      </div>

      <div class="errMsg ft l" style="height:33px">{{ errMsg }}</div>


<br/>
<br/>
      <div class="haveAnaccount">
        <router-link class="ft l" style="padding-left:10px" to="/Login">Already have an account? log in here</router-link>
        <hr/>
      </div>
      <!-- <button class="brButton primarybg hv" @click="checkInput">Check Input</button> -->
      <button class="brButton primarybg hv" style="margin-bottom:50px;margin-left:1%" @click="register()" type="submit">Submit</button>
    </form>
    </div>
  </div>
</div>

</div>
</template>


<script setup>
import { ref } from 'vue'
import { createUserWithEmailAndPassword, getAuth } from '@firebase/auth'
import { useRouter } from 'vue-router';
import { getFirestore, addDoc, collection } from '@firebase/firestore';
import { app, getAge } from '@/configs'
const db = getFirestore(app);

const email = ref('')
const nric = ref('')
const password = ref('')
const router = useRouter();
const dob = ref('')
const confirmPassword = ref('')
var errMsg = ref('');
const username = ref();


    function checkNRIC(input) {
      const regex = /^[STFG]\d{7}[A-Z]$/;
        if (!regex.test(input) === true) {
          return false
        }
        else {
          return true
        }
    }
    function checkPassword(input) {
      const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,31}$/;
      if (!regex.test(input) === true) {
        return false;
      }
      else {
        return true;

      }
    }

    function checkEmail(input) {
      const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
      if (!regex.test(input) === true) {
        return false;
      }
      else {
        return true;

      }
    }

    function checkMatch(input, confirmInput) {
      if (input.trim() != confirmInput.trim()) {
        return false;
      }
      else {
        return true;
      }
    }
    function rQuotes(input) {
      // regex will read string with the quotes, use this to remove them, works for ref const specifically... to alter for others, remove .value
      return input.value.replace(/['"]+/g, '')
    }

    
    function checkDOB(input) { //parameter is to be the v-model="dob"
      var curAge = getAge(Date.parse(input));
      if (curAge >= 10) {
        return true;
      }
      else {
        return false;
      }

    }

const checkInput = () => {
  const nricPass = checkNRIC(rQuotes(nric))
  const emailPass = checkEmail(rQuotes(email))
  const passwordPass = checkPassword(rQuotes(password))
  const passwordMatch = checkMatch(rQuotes(password), rQuotes(confirmPassword))
  const agePass = checkDOB(rQuotes(dob))


  return nricPass + emailPass + passwordPass + passwordMatch + agePass
}

// const inputCheckResponse = () => {
//   var msg = "";
//   if ( checkNRIC(rQuotes(nric)) != true) {
//     msg += "NRIC is invalid\n"
//   }
//   if ( checkEmail(rQuotes(email)) != true) {
//     msg += "Email is invalid\n"
//   }
//   if ( checkPassword(rQuotes(password)) != true) {
//     msg += "Password is invalid"
//   }
//   if ( checkMatch(rQuotes(password), rQuotes(confirmPassword)) != true) {
//     msg += "Both passwords do not match\n"
//   }
//   if ( checkDOB(rQuotes(dob)) != true) {
//     msg += "DOB is invalid\n"
//   }

//   errMsg.value += msg;
// }
const register = () => {


  if (checkInput() === 5 && username.value.trim()) {
     createUserWithEmailAndPassword(getAuth(), email.value.trim(), password.value.trim())
        .then((userCredentials) => {
          const user = userCredentials.user;
          const userID = user.uid;
          addDoc(collection(db, 'users'), {
            username: username.value,
            dateOfBirth: dob.value,
            assignmentArray: [],
            emailRef: email.value,
            from: "NA",
            gender: "NA",
            occupation: "NA",
            userID: userID,
            userType: "User",
            nric: nric.value,

          });
          console.log("Successful");
          router.push('/');

        })
     .catch((error) => {
      console.log(error.code);
      switch(error.code) {
        case "auth/email-already-exists":
          errMsg.value = "The provided email is already in use by an existing user.";
          break;
        case "auth/invalid-email":
          errMsg.value = "The provided email is invalid";
          break;
         case "auth/missing-email":
          errMsg.value = "You have not entered an email";
          break;
          case "auth/email-already-in-use":
          errMsg.value = "The provided email is already in use by an existing user.";
          break;
        default:
          // errMsg.value = "One or more fields is entered incorrectly";
          errMsg.value = error.code;

          break;
    }
     })
    }
    else {
      errMsg.value = "One or more fields have been entered incorrectly, please confirm again";
    }     
    };  
    

    
  

</script>

<script>

  
export default {
  data() {

  
    return {
      nricValid: 'False',
      nric: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      identityTypeLabel: "NRIC",
      labelColors: ["gray", "gray"],

    }
  },

  methods: {


    changeLabelColor(index) {
      this.labelColors[index] = "black";
    },
    resetLabelColor(index) {
      this.labelColors[index] = "gray";
    },

    submitForm() {
      this.isSubmitted = true;
                this.$v.$touch();
                if (this.$v.$invalid) {
                    return;
                }
                alert("Success" + JSON.stringify(this.userForm));
    },

  }
};


</script>

<style>

.signUpLabel {

  text-transform: uppercase;

}


.labelTop {
    width:60%
  }

.firstlastFlex {
  display:flex;
}

label {
  width:150px;
  float:left;
  font-weight: lighter;
  text-align:left;

}

.dispFlex {
  display:flex;
  align-items:center;
  width:100%;
  height:45px;
}

::placeholder {
  font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}


/* .form-group {
  
} */

.label-column {
  width: fit-content;
  padding:10px;
}

.input-column {
  width: 70%;
  padding:10px
}


input {

  font-size: 10px;
}

.assistSide {
  width:40%;
  height:fit-content;
  padding-bottom:1%;
  margin-top:5%;
  border-radius:10px;
  margin-left:1%;
}

ul {
  list-style:none;
}
li {
  padding:10px;
  border: 1px solid lightgray;
  color:gray;
  font-family:Arial, Helvetica, sans-serif;
}

li:hover {
  color:rgb(25,17,11);
}
</style>
