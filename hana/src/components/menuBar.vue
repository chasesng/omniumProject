<template>
<div id="menu" style="margin-bottom:3%;">
  <div id="menu-items" class="animate__animated animate__fadeInDown">
    <!-- I made these divs instead of links so you can click on mobile to view the effect -->
    <div class="menu-item" ><p @click="go('/')">Home</p></div>
    <div class="menu-item"><p @click="go('/Omnium_Credentials')">What is Omnium</p></div>
    <div class="menu-item"><p @click="go('/Insurance_Assessment')">Insurance Assessment</p></div>
    <div class="menu-item"><p @click="go('/Plans')">View Plans</p></div>
    <div class="menu-item"><p @click="go('/Support')">Contact Us</p></div>
    <!-- <div class="menu-item"><p @click="go('/Question_Board')">Advisor Board</p></div> -->
    <div class="menu-item" v-if="usDetailsType === 'Admin'">TEST</div>
  </div>
  <div id="menu-background-pattern"></div>
  <div id="menu-background-image"></div>
</div>




</template>


<script>
// import { onSnapshot, collection, query} from 'firebase/firestore';
// import { onAuthStateChanged, getAuth } from '@firebase/auth';
import { ref, } from 'vue';
// import { initializeApp } from '@firebase/app'
// import { app } from '@/configs.js'

// const db = initializeApp(app)

export default {
    data: () => {
        return {
          users: ref([])

        }
    },
    methods: {
        go(val) {
            this.$router.push({ path: val})
        }
    },
}
</script>



<style>

body {
  background-color: rgb(20, 20, 20);
  margin: 0px;
}

#menu {  
  align-items: center;
  display: flex;
  height: 70vh;
  width: 90vw;
}

#menu-items {
  margin-left: clamp(4rem, 20vw, 48rem);
  position: relative;
  z-index: 2;
  margin:auto;
}

#menu[data-active-index="0"] > #menu-background-pattern {
  background-position: 0% -25%;
}

#menu[data-active-index="1"] > #menu-background-pattern {
  background-position: 0% -50%;
}

#menu[data-active-index="2"] > #menu-background-pattern {
  background-position: 0% -75%;
}

#menu[data-active-index="3"] > #menu-background-pattern {
  background-position: 0% -100%;
}

#menu[data-active-index="0"] > #menu-background-image {
  background-position: center 45%;
}

#menu[data-active-index="1"] > #menu-background-image {
  background-position: center 50%;
}

#menu[data-active-index="2"] > #menu-background-image {
  background-position: center 55%;
}

#menu[data-active-index="3"] > #menu-background-image {
  background-position: center 60%;
}

#menu-background-pattern {
  background-image: radial-gradient(
    rgba(255, 255, 255, 0.1) 9%, 
    transparent 9%
  );
  background-position: 0% 0%;
  background-size: 12vmin 12vmin;
  height: 100vh;
  left: 0px;
  position: absolute;
  top: 0px;
  transition: opacity 800ms ease, 
    background-size 800ms ease,
    background-position 800ms ease;
  width: 100vw;
  z-index: 1;
}

#menu-background-image {
  background-image: url(../assets/banners/sgMenu.jpg);
  background-position: center 40%;
  background-size: 110vmax;
  height: 100%;
  left: 0px;  
  opacity: 0.15;
  position: absolute;
  top: 0px;
  transition: opacity 800ms ease,
    background-size 800ms ease,
    background-position 800ms ease;
  width: 100%;
  z-index: 0;
}

#menu-items:hover ~ #menu-background-pattern {
  background-size: 11vmin 11vmin;
  opacity: 0.5;
}

#menu-items:hover ~ #menu-background-image {
  background-size: 100vmax;
  opacity: 0.1;
}

#menu-items:hover > .menu-item {
  opacity: 0.3;
}

#menu-items:hover > .menu-item:hover {
  opacity: 1; 
}

.menu-item {
  color: white;
  cursor: pointer;
  display: block;
  font-family: 'Ibarra Real Nova', serif;
  font-size: clamp(1rem, 3vw, 3rem);
  padding: clamp(0.25rem, 0.5vw, 1rem) 0rem;
  text-decoration: none;
  transition: opacity 400ms ease;
}


body.menu-toggled > .meta-link > span {
  color: rgb(30, 30, 30);
}
</style>