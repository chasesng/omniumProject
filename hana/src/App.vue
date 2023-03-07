
<template>

<!-- <div id="app" class="bgControl" :style="{ backgroundImage: `url(${require('./assets/whitebg.jpg')})`}"> -->
  <!-- <div id="app" class="bgControl" style="background-color:rgba(243,246,251,255)"> -->
      <div id="app" class="bgControl" style="background-color:rgba(33,33,45,255)">


  <LoadingScreen v-if="isLoading"></LoadingScreen>
  <MainHome msg = "Welcome"/>
  <!-- <img id = "logo" src="./assets/icons/OmniumLogo_Default.png"/> -->
  <br/>

  <headerControl/>
  <br/>
  <br/>
  <footerControl/>

</div>



</template>

<script>
import LoadingScreen from "@/subComponent/loadingScreen";
import headerControl from '@/components/headerControl.vue'
import footerControl from '@/components/footerControl.vue'

export default {

  name: "App",
  state: {
  user: {
    loggedIn: false,
    data: null
  },

  getters: {
    user(state){
      return state.user
    }
  },
  mutations: {
  SET_LOGGED_IN(state, value) {
    state.user.loggedIn = value;
  },
  SET_USER(state, data) {
    state.user.data = data;
  }
}

},
  data() {
    return {
      isLoading: true
    }
  },
  methods: {
    
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  },
  //   mounted() {
  //   if(!this.authenticated) {
  //     this.$router.replace({name:"userLogin"});
  //   }
  // },
  // methods: {
  //   setAuthenticated(status) {
  //     this.authenticated = status;
  //   },
  //   logout() {
  //     this.authenticated = false;
  //   }
  // },
  

  components: {     
    headerControl,
    footerControl,
    LoadingScreen
    
   },

 
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
