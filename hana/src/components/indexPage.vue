
<template>
  <br />

  <div class="fade-on-scroll cntr br10 ibn p6 ib"   :style="{ opacity: 1 - (scrollPosition / fadeThreshold) }" style="width:100vw;height:65vh;margin-bottom:10vh;margin-top:5%;overflow: hidden; background: linear-gradient(0deg, rgba(44,62,80,1) 10%, rgba(23,78,166,1) 100%);">

    <p class="wt cntr" style="font-size:80px;margin-top:2%">Omnium</p>
    <p class="wt p6" style="opacity:.5">Your friend in insurance</p>
    <p class="wt p6 cntr" style="width:40vw;opacity:.8">Everyone understands the hassle of going through insurance plans from all brands, conversing with an advisor, then hesitating every step with the worry of not getting the best option available. Even after purchasing, there's more hurdles to jump...</p>
    <p class="wt p6 cntr" style="width:40vw;opacity:.9">Omnium is here for all your insurance needs; from viewing to purchasing, clearing your doubts and giving you the best options available.</p>
    <br/>
    <div class="f cntr" style="width:28vw;justify-content: space-between;">
      <button class="brButton hv l" @click="redirectCredentials">Learn More</button>

      <button class="brButton hv l" @click="redirectSignUp">Sign Up</button>

    </div>
    <div class="custom-shape-divider-bottom-1678547880">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
    </svg>
</div>
  </div>

  <div class="cntr f w1k animate__animated animate__slideInUp mt50" style="width:70vw">
    <div class="hof bs br10">
      <img class="picsize mt10 cntr" src="../assets/planBanner/family.png" @click="redirectHelp();" />
    </div>
    <div class="txt cntr" style="margin-left:30px;">
      <p class="p3 third ft b2 mb10">Insurance Assessment</p>
      <p class="ft p6 b third ">For your assurance today, tomorrow, and more</p>
      <h4 class="ft p7 second mb50 l">Find the insurance most suited for you and your loved ones on Omnium.</h4>
      <button class="brButton hv ft l" @click="redirectHelp();">Learn More</button>

    </div>

  </div>
  <br />
  <div class="offeredProducts animate__animated animate__slideInUp" style="margin:auto;width:70vw">
    <p class="p3 mt50 third ft mb10 mt50">Let us find the plan for you</p>
    <p class="p7 second ft mb50">Our available insurance plans are greatly diversified and covers over most aspects of
      life.
    </p>

    <div class="cntr f w1k" style="width:70vw">

      <div class="txt cntr" style="margin-right:30px;">
        <p class="p3 third ft b2 mb10">Contact an advisor</p>
        <p class="ft p6 b third ">Require assistance?</p>
        <p class="ft p7 second mb50 l">Find help by contacting our dedicated team of readily available advisors to clear
          your doubts.</p>
        <button class="brButton hv ft l" @click="gotoSupport();">Get in Touch</button>
      </div>
      <div class="mb10 hof br10 bs">
        <img class="picsize mt10 cntr" src="../assets/insurance_agent.jpg" @click="gotoSupport();" />
      </div>
      <br />

    </div>
    <br />
    <br />
    <div class="ib mb50" style="width:70vw">
      <p class="ft l p3 third pd5 w100 mb50" style="text-align:left;">Insurance Products</p>

      <div class="containBanners br10 hof">
        <div v-for="(type, index) in types" :key="index" id="banner" class="ft l fourth" @click="changePreview(type[0])">
          <p class="fourth">{{ type[0] }}</p>
          <div class="icon_container" style="margin-bottom:-3%">
            <i :class="type[1]" style="font-size:60px;"></i>
          </div>
          <button id="viewPlanbtn" class="brButton hv l fourth" @click="changePreview(type[0])">View Plans</button>

        </div>


      </div>
    </div>
    <br />
    <div class="cntr f" style="width:70vw">
      <p class="ft l p3 third pd5 w50" style="text-align:left;">{{ previewType }} Plans</p>
      <router-link class="ft l p3 third pd5 w50 primary" to="/Plans" style="text-align:right;text-decoration: none">View
        All Here</router-link>
    </div>
    <div class="cntr f sbb" style="white-space:nowrap; height:300px; width:70vw;overflow-x:auto;scrollbar-gutter:stable;">
      <br />
      <div class="previewPlans lb pd5 animate__animated animate__fadeInLeft bs br10 hv wtbg"
        v-for="(plan, index) in plans.filter(plan => plan.coverageType === previewType)" :key="index"
        style="width:20%;height:90%;margin-top:auto;margin-bottom:auto;margin-left:1%;margin-right:1%;box-sizing:border-box;min-width:20%;scroll-snap-type:x mandatory">
        <p class="ft l p8 primarybg wt b" style="width:100%;min-width:100%">{{ plan.planName }}</p>

        <div class="ib">
          <div class="tripleSection">
            <p class="planDesc ft">Coverage</p>
            {{ plan.coverageType }}
            <p class="planDesc ft">Age Group:</p>
            {{ plan.ageGroup }}
            <p class="planDesc ft">Income:</p>
            {{ plan.minIncome }}
            <p class="planDesc ft mt10">Provider:</p>
            {{ plan.provider }}


          </div>
        </div>
      </div>

    </div>






    <br />
    <div class="rationaleContainer" style="margin:auto; width:70vw;height:600px;">
      <div class="rationaleImage hof br10 bs" style="float:left;">
        <img style="object-fit: cover; width:100%; height: 100%;" class="gp" src="../assets/rationaleImg.jpg"
          @click="goToPreviewPage()" />
      </div>
      <div class="rationaleText cntr" style="margin-left:20vw">
        <h4 class="ft b2 thirdbg p3 mt10 wt br10 pd5">Why Us</h4>
        <h4 class="p6 ft third l mb10">Buying insurance may not be simple, but with us, it can be.</h4>
        <h4 class="p7 ft second l">We offer major insurance options in Singapore with easy viewing and selection.</h4>
        <h4 class="p7 ft second l">Our knowledgeable team is available for any inquiries, both before and after
          purchasing.</h4>
        <h4 class="p7 ft second l mb50">Find out more about Omnium here, and guarantee a smooth and simple purchase of
          your assurance.</h4>
        <button class="brButton hv ft l" @click="goToPreviewPage()">Learn More</button>


        <div class="umbrellaIcon mt50">
        </div>
      </div>
    </div>
    <br />
    <div class="customizationContainer" style="margin:auto;width:70vw;display:flex;">
      <div class="hof bs br10">
        <img class="picsize" src="../assets/customPlanfinder.jpg" />
      </div>
      <div class="holdCustomizationText" style="padding-left:30px">
        <h4 class="ft b2 thirdbg p3 mt10 wt br10 pd5">Your Plan</h4>
        <h4 class="p7 ft second l">With our <i><b>"Glass Umbrella"</b></i> philosophy, we give our customers a sense of
          security without the worry of overpaying for things they don't need.</h4>
        <br />
        <h4 class="p7 ft second l">Our aim is to enable accessibility and ease in the path to life security. You will not
          be charged any extra fees using our platform.</h4>
        <Br />
        <h4 style="font-size:30px"><i class="fa-solid fa-umbrella wt"></i></h4>

        <br />
      </div>

    </div>


  </div>
</template>

<script>
import { getFirestore, collection, query, onSnapshot } from 'firebase/firestore';
import { ref, onUnmounted } from 'vue';
import { app } from '@/configs'


const db = getFirestore(app);

export default {


  data() {


    return {
      scrollPosition: -300,
      fadeThreshold: 700,
      plans: ref([]),
      tooltipText: '',
      previewType: 'Life',
      // types: ["Life", "Health", "Auto", "Disability", "Home", "Long-Term"],
      types: [
        ['Life', 'fa-solid fa-life-ring cntr'],
        ['Health', 'fa-solid fa-heart-pulse cntr'],
        ['Auto', 'fa-solid fa-car cntr'],
        ['Home', 'fa-solid fa-house cntr'],
        ['Disability', 'fa-solid fa-wheelchair cntr'],
        ['Long-Term', 'fa-solid fa-person-cane cntr']


      ],
      currentDate: new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      })
    }
  }, methods: {

    handleScroll() {
      this.scrollPosition = window.scrollY;
      const div = document.querySelector('.fade-on-scroll');
      if (div) {
        if (this.scrollPosition > this.fadeThreshold) {
          div.classList.add('fade-out');
        } else {
          div.classList.remove('fade-out');
        }
      
      }
    },

    changePreview(id) {
      this.previewType = id;
    },
    redirectCredentials() {
      this.$router.push({ path: '/Omnium_Credentials' })

    },
    redirectSignUp() {
      this.$router.push({ path: '/Register' })

    },
    redirectHelp() {
      this.$router.push({ path: '/InsuranceAssessmentGuide' })
    },
   
    goToGeneralAssessment() {
      this.$router.push({ path: '/Insurance_Assessment' })
    },
    gotoAllPlans() {
      this.$router.push({ path: '/Plans' })
    },
    gotoSupport() {
      this.$router.push({ path: '/Support' })
    },
    goToPreviewPage() {
      this.$router.push({ path: '/Omnium_Credentials' })
    },


  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);

    const latestQuery = query(collection(db, "plans"));
    const livePlans = onSnapshot(latestQuery, (snapshot) => {
      this.plans = snapshot.docs.map((doc) => {
        return {
          ageGroup: doc.data().ageGroup,
          coverageType: doc.data().coverageType,
          minIncome: doc.data().minIncome,
          planName: doc.data().planName,
          planPolicy: doc.data().planPolicy,
          provider: doc.data().provider,
          shortDescription: doc.data().shortDescription,
          id: doc.data().id,


        }
      });
    });
    onUnmounted(livePlans)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}



.custom-shape-divider-bottom-1678547880 {
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
}

.custom-shape-divider-bottom-1678547880 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 100px;
    transform: rotateY(180deg);
}

.custom-shape-divider-bottom-1678547880 .shape-fill {
    fill: #FFFFFF;
}


.fade-on-scroll {
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
}
.fade-on-scroll.fade-out {
  opacity: 0;
}

#displayTitle {
  text-align: center;
  color: grey;
  margin-left: 45px;
}


.box {
  border: 1px solid #ccc;
}


.crsImg {
  width: 550px;
  height: 350px;
  margin: auto;
  margin-left: 130px;
}

.txt {
  float: right;
  width: 50%;
  padding-left: 20px;
}


.rdrButton:hover {
  background-color: gray;
}

#viewPlanbtn {
  height: 50px;
  width: 100%;
  font-size: 20px;
  text-align: center;
  /* border: 1px solid grey; */
  cursor: pointer;

  border-radius: 0px;
}


#banner {
  height: 100%;
  font-size: 26px;
  text-align: center;
  vertical-align: middle;
  line-height: 50px;
  border-right: 1px solid gray;
  flex: 1;
  display: inline-block;
  background-color: whitesmoke;

}

.previewPlans {
  -webkit-overflow-scrolling: touch;
}



.containBanners {
  height: 210px;
  display: flex;
  border: 1px solid gray;
  margin: auto;
  overflow: hidden;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
}

.hovertoolTip {
  color: darkgray;
  font-size: 15px;
}

.rationaleImage {
  width: 330px;
  height: 550px;
  border-radius: 20px;
  border: 1px solid grey;
  overflow: hidden;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
}

.rationaleText {
  float: left;
  margin: auto;
  width: 500px;
  margin-left: 80px;
  padding-top: 5px;
}

.icon_container {
  position: relative;
  display: inline-block;
  width: 100px;
  height: 100px;
  line-height: 50px;
  text-align: center;
}


.icon {
  position: relative;
  font-size: 30px;
  color: #fff;
  vertical-align: middle;
  margin-top: 40px;
}

.box:hover {
  background: lightgray
}

.customizationImg {
  width: auto;
  height: 200px;
  border-radius: 20px;
  border: 1px solid grey;
  overflow: hidden;
}

.holdCustomizationText {
  float: left;
  margin: auto;
  width: 50%;
  margin-left: 5%;
  padding-top: 5px;
}

.loader {
  --height-of-loader: 4px;
  --loader-color: #0071e2;
  width: 60%;
  height: var(--height-of-loader);
  border-radius: 30px;
  background-color: rgba(0, 0, 0, 0.2);
  position: relative;
}

.loader::before {
  content: "";
  position: absolute;
  background: var(--loader-color);
  top: 0;
  left: 0;
  width: 0%;
  height: 100%;
  border-radius: 30px;
  animation: moving 1s ease-in-out infinite;
  ;
}

@keyframes moving {
  50% {
    width: 100%;
  }

  100% {
    width: 0;
    right: 0;
    left: unset;
  }
}</style>
