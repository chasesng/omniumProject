

<template>
  <div class="bg">
    <br />
    <p class="p2 ft b primary">Contact Us</p>
    <p class="p3 ft l second">How may we help you?</p>
    <br />
    <router-link to="Support/FAQ" class="p4" style="color:rgb(34,168,218)">FAQ <i class="fa-solid fa-chevron-right"></i></router-link>
    <br />
    <br />
    <br />
    <div class="firstSector">
      <div class="sectionOne wt animate__animated animate__slideInUp" id="section">
        <p class="ft p3 b mt10">Email Us</p>
        <i class="fa-solid fa-envelope"></i>
        <div class="ft l">
          <p>support@omnium.com</p>
          <p>Email us for non-urgent matters and we will get back to you in 3-5 Business Days.</p>
        </div>

      </div>

      <div class="sectionTwo wt animate__animated animate__slideInUp" id="section">
        <p class="ft p3 b mt10">Call Us</p>
        <i class="fa-solid fa-phone"></i>        
        <div class="ft l">
          <p>1800 XXX XXXX</p>
          <p>Call us for support regarding a plan you may be interested in and learn more about. </p>
          <p>Operating Hours:</p>
          <p>Mondays - Fridays</p>
          <p>9am - 5pm</p>
        </div>
      </div>
      <div class="sectionThree wt animate__animated animate__slideInUp" id="section">
        <p class="ft p3 b mt10">Chat with Us</p>
        <i class="fa-solid fa-comments"></i>
        <div class="ft l">
          <p><router-link to="liveChat">Live Chat</router-link></p>
          <p>Get support from one of our support team almost immediately.</p>
          <p>Operating Hours:</p>
          <p>Mondays - Fridays</p>
          <p>9am - 5pm</p>
        </div>
      </div>
    </div>
    <br />
    <p class="p2 ft b primary">
      Consumer Guides</p>
    <br />
    <div class="secondSector">
      <div class="firstSection2 hv primarybg" id="section"
        style="border:1px solid gray; margin:auto;display:inline-block; cursor:pointer" @click="goToGuide">
        <p class="ft b p5 wt mt10">Your Guide to Insurance <i class="fa-solid fa-chevron-right"></i>
        </p>
        <p class="ft b p8 wt mt10">Provided by the Life Insurance Association of Singapore</p>
      </div>
    </div>


  </div>
</template>
  
<script>
export default {
  data() {

  },
  methods: {
    goToGuide() {
      this.$router.push({ path: '/Insurance_Guides' })
    }
  }
}
</script>

<style>
.bg {
  margin: auto;
}

.firstSector {
  width: 100%;
  display: flex;
  margin: auto;
  padding: 5px 20%;

}

.secondSector {
  width: 100%;
  margin: auto;
  padding: 5px 20%;
}

#section {
  width: 33%;
  border: 1px solid lightgray;

}

/* p {
  color:gray;
} */

.fs2Desc:hover {
  color: black;
}

.reachIcon {
  height: 84px;
  width: 84px;
  object-fit: contain;
}
</style>