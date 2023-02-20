<template>
  
  
  <div class="w100 ib">
    <div class="labelTop cntr" style="display:inline-block; text-align:left;">
      <div class="sign-up-container ft l sb bs cntr" style="width:70%;background-color:white">
    <br/>
    <p class="signUpLabel ft primary l p3 pd10">Sign Up</p>

    <div class="controlForm">
    <form @submit.prevent="submitForm">

      

      <div class="form-group">
        <div class="label-column">
          <label for="email" :style="{color: labelColors[0]}">Email *</label>
        </div>
        <div class="input-column">
          <input id="email" class="inpClear inp" type="email" @focus="changeLabelColor(0)" @blur="resetLabelColor(0)" placeholder=" name@example.com" v-model="email"/>
        </div>
      </div>
      <div class="form-group">
        <div class="label-column">
          <label for="password" :style="{color: labelColors[1]}">Password *</label>
        </div>
        <div class="passwordStatement" style="display:inline-block">
        <div class="input-column"> 
          <input id="password" class="inpClear inp" style="margin-left:-3%;" type="password" @focus="changeLabelColor(1)" @blur="resetLabelColor(1)" placeholder=" Password" v-model="password"/>
        </div>
        <div class="l p9" style="color:gray;font-weight:lighter;margin-left:1%">Password must contain at least 8 characters, with 1 uppercase & lowercase.</div>
      </div>
      </div>
      <div class="form-group">
        <div class="label-column">
          <label for="confirmPassword" :style="{color: labelColors[2]}">Confirm Password *</label>
        </div>
        <div class="input-column">
          <input id="confirmPassword" class="inpClear inp" type="password" @focus="changeLabelColor(2)" @blur="resetLabelColor(2)" placeholder=" Confirm Password" v-model="confirmPassword"/>
        </div>
      </div>
      <p class="errMsg ft l" v-if="errMsg">{{ errMsg }}</p>


<br/>
<br/>
      <div class="haveAnaccount">
        <router-link class="ft l" style="padding-left:10px" to="/Login">Already have an account? log in here</router-link>
        <hr/>
      </div>
      <!-- HERE -->
      <button class="brButton primarybg hv" style="margin-bottom:50px;margin-left:1%" @click="register()" type="submit">Submit</button>
    </form>
    </div>
  </div>
</div>
  
<!-- <div class="assistSide cntr">
    <p class="ft l primary" style="padding-top:10px;font-size:18px;">By creating an Omnium account, you can</p>
    <ul>
      <div class="dispFlex">
        <div style="border:1px solid lightgrey; height:100%; font-size:30px; width:10%; overflow:hidden">♡</div>
      <li class="ft l" style="width:90%">Favorite plans for your later viewing.</li>
      </div>

      <div class="dispFlex">
      <div style="border:1px solid lightgrey; height:100%; font-size:30px; width:10%; overflow:hidden">☎</div>
      <li class="ft l" style="width:90%">Be connected to an agent for your assistance.</li>
    </div>

    <div class="dispFlex">
      <div style="border:1px solid lightgrey; height:100%; font-size:30px; width:10%; overflow:hidden">🗎</div>
      <li class="ft l" style="width:90%">Check through past purchases and request follow ups.</li>
    </div>

    <div class="dispFlex">
      <div style="border:1px solid lightgrey; height:100%; font-size:30px; width:10%; overflow:hidden">☺</div>
      <li class="ft l" style="width:90%">Have access to an insurance assessment for your profile.</li>
    </div>

    <div class="dispFlex">
      <div style="border:1px solid lightgrey; height:100%; font-size:30px; width:10%; overflow:hidden">‼</div>
      <li class="ft l" style="width:90%">Receive emails on newer plans that match your priorities.</li>
    </div>


    </ul>
  </div> -->
</div>
</template>


<script setup>
import { ref } from 'vue'
import { createUserWithEmailAndPassword, getAuth } from '@firebase/auth'
import { useRouter } from 'vue-router';
const email = ref('')
const password = ref('')
const router = useRouter();
const confirmPassword = ref('')
const errMsg = ref();


const register = () => {

  if (password.value.trim() === confirmPassword.value.trim()) {
     createUserWithEmailAndPassword(getAuth(), email.value, password.value)
     .then(() => {
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
        default:
          errMsg.value = "One or more fields is entered incorrectly";
          break;
    }
     })
    }
    else {
      errMsg.value = "Passwords do not match";
    }     
    };  
    

    
  

</script>

<script>

  
export default {
  data() {

  
    return {


  
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      identityTypeLabel: "NRIC",
      labelColors: ["gray", "gray"],

    }
  },

  //   validations: {
  //   email: {
  //     required,
  //     email
  //   },

  //   password: {
  //     required,
  //     minLength: minLength (8)
  //   },
  //   confirmPassword: {
  //     sameAsPassword: sameAs('password')
  //   },
    
  // },
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