<template>
    <br/><br/>
    <br/>
<div>
            
            <ul id="authenticationNavs" class="ft">
                <div class="redirectButton ibn p5 pd5 ntd l wt cursPoint" v-if="isLoggedin" @click="go('/Question_Board')">Messages |</div>
                <div class="redirectButton ibn p5 pd5 ntd l wt cursPoint" v-if="!isLoggedin" @click="go('/userLogin')">Login</div>                
                <div class="redirectButton ibn p5 pd5 ntd l wt cursPoint" v-if="isLoggedin" @click="go('/Profile')">View Profile |</div>
                <div class="redirectButton ibn p5 pd5 tdn l wt cursPoint" v-if="isLoggedin" @click="handleSignOut">Logout |</div>                
                             

            </ul>
        </div>

    <nav style="height:fit-content" class="onMenuHidden">

      <div class="ib w100" style="height:50px; position:absolute;left:-43%;top:13%;z-index:1">

        <router-link to="/" class="ibn l wt sideNav" style="text-decoration: none;">Omnium <i class="fa-solid fa-diamond"></i></router-link>
        <br/>
        <router-link to="/Menu" class="ibn l wt sideNav" style="text-decoration: none;" >Menu <i class="fa-solid fa-bars" style="margin-left:2%;"></i></router-link>
      </div>
        
        <!-- <ul id="header" class="mainNavs ft primarybg w100">
            
                <router-link class="ft wt hv headNavs" to="/">Home</router-link>        
                <router-link class="ft wt hv headNavs" to="/Omnium_Credentials">What is Omnium</router-link>          
                <router-link v-if="isLoggedin" class="ft wt hv headNavs" to="/Insurance_Assessment">Insurance Assessment</router-link>                     
                <router-link class="ft wt hv headNavs" to="/Plans">All Plans</router-link>
                <router-link class="ft wt hv headNavs" to="/Support">Contact Support</router-link> 
                <router-link v-if="isLoggedin" class="ft wt hv headNavs" to="/Question_Board">Advisor Requests</router-link>                     


                
        



        </ul> -->
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

<script>
export default {
  methods: {
  go(val) {
            this.$router.push({ path: val})
        }
      }
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
.headNavs {
  padding:.5% 5%;
  text-decoration: none;
}

.sideNav {
  font-size:26pt;
  transition: font-size .2s;

}

.sideNav:hover {
  font-size:2.5em;
}

</style>
