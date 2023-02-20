<template>
    <br/><br/>
    <br/>
<div>
            
            <ul id="authenticationNavs" class="ft df">
                <router-link class="ft p7 pd5 ntd l" v-if="!isLoggedin" to="/userLogin" >Login</router-link>                
                <router-link class="ft p7 pd5 ntd l primary" style="text-decoration:none" v-if="isLoggedin" to="/Profile/">View Profile ({{ usname }})</router-link>
                <div class="ft p7 pd5 tdn l primary" style="cursor:pointer" v-if="isLoggedin" @click="handleSignOut">Logout</div>                
                             

            </ul>
        </div>

    <nav style="height:fit-content">

        
        <ul class="mainNavs ft primarybg w100">
            
                <router-link style="padding:.5% 5%;border:1px solid white;" class="ft wt hv ntd" to="/">Home</router-link>        
                <router-link style="padding:.5% 5%;border:1px solid white;" class="ft wt hv ntd" to="/Omnium_Credentials">Why Omnium</router-link>          
                <router-link style="padding:.5% 5%;border:1px solid white;" v-if="isLoggedin" class="ft wt hv ntd" to="/Insurance_Assessment">Insurance Assessment</router-link>                     
                <router-link style="padding:.5% 5%;border:1px solid white;" class="ft wt hv ntd" to="/Plans">All Plans</router-link>
                <router-link style="padding:.5% 5%;border:1px solid white;" class="ft wt hv ntd" to="/Support">Contact Support</router-link> 
                <router-link style="padding:.5% 5%;border:1px solid white;" v-if="isLoggedin" class="ft wt hv ntd" to="/Question_Board">Advisor Requests</router-link>                     


                
        



        </ul>
    </nav>
    <router-view />
</template>




<!-- <script>
import { onMounted, ref } from 'vue';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export default {
  setup() {
    const usname = ref('');

    onMounted(() => {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          usname.value = user.email;
        }
      });
    });

    return {
      usname,
    };
  },
  computed: {
    username() {
      return this.usname;
    },
  },
};
</script> -->

<script setup>
import { onMounted, ref} from 'vue'
import { useRouter } from 'vue-router';
import { getAuth, onAuthStateChanged, signOut } from '@firebase/auth';
const isLoggedin = ref(false);
const router = useRouter();
var usname = ref('');

let auth;

onMounted(() => {
    auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // email = user.email;
            // emailVerified = user.emailVerified;
            // uid = user.uid;
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




const handleSignOut = () => {
    signOut(auth).then(() => {
        router.push('/');
    });
}

</script>


<style scoped>


#authenticationNavs {
    float: right;
    margin-right: 3%;
    margin-top: -90px;
    display: flex;
    list-style: none;
    
}



</style>
