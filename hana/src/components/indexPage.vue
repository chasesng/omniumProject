
<template>
  <br />
  <div class="cntr f w1k animate__animated animate__slideInUp">
    <div class="hof bs br10">
      <img class="picsize mt10 cntr" src="../assets/planBanner/family.png" @click="redirectHelp();" />
    </div>
    <div class="txt cntr" style="margin-left:30px;">
      <p class="p3 third ft b2 mb10">Insurance Assessment</p>
      <p class="ft p6 b third ">For your assurance today, tomorrow, and more</p>
      <h4 class="ft p6 second mb50 l`">Find the insurance most suited for you and your loved ones on Omnium.</h4>
      <!-- <button class="brButton primarybg hv ft l" @click="goToGeneralAssessment();">Learn More</button> -->
      <button class="brButton primarybg hv ft l" @click="redirectHelp();">Learn More</button>

    </div>

  </div>
  <br/>
  <div class="offeredProducts animate__animated animate__slideInUp" style="margin:auto;">
    <p class="p3 mt50 third ft mb10">Let us find the plan for you</p>
    <p class="p7 second ft mb50">Our available insurance plans are greatly diversified and covers over most aspects of life.
    </p>

    <div class="cntr f w1k">

      <div class="txt cntr" style="margin-right:30px">
        <p class="p3 third ft b2 mb10">Contact an advisor</p>
        <p class="ft p6 b third ">Require assistance?</p>
        <p class="ft p7 second mb50 l">Find help by contacting our dedicated team of readily available advisors to clear
          your doubts.</p>
        <button class="brButton primarybg hv ft l" @click="gotoSupport();">Get in Touch</button>
      </div>
      <div class="mb10 hof br10 bs">
        <img class="picsize mt10 cntr" src="../assets/insurance_agent.jpg" @click="gotoSupport();"/>
      </div>
      <br />

    </div>
    <br />
    <br />
    <div class="ib mb50">
      <p class="ft l p3 third pd5 w100" style="text-align:left;">Insurance Products</p>
      <div class="containBanners br10 hof">

        <div class="life_Banner ft l fourth" @click="changePreview('Life')" id="banner">
          <p class="fourth">Life</p>
          <div class="icon_container" style="margin-bottom:-5%">
            <i class="fa-solid fa-life-ring cntr" style="font-size:60px;"></i>
          </div>
          <button id="viewPlanbtn" class="brButton primarybg hv ft l" @click="changePreview('Life')">View Plans</button>
        </div>

        <div class="health_Banner ft l fourth" @click="changePreview('Health')" id="banner">
          <p class="fourth">Health</p>
          <div class="icon_container trimB5">
            <i class="fa-solid fa-heart-pulse cntr" style="font-size:60px;"></i>
          </div>
          <button id="viewPlanbtn" class="brButton primarybg hv ft l" @click="changePreview('Health')">View Plans</button>
        </div>

        <div class="home_Banner ft l fourth"  @click="changePreview('Home')" id="banner">
          <p class="fourth">Home</p>
          <div class="icon_container trimB5">
            <i class="fa-solid fa-house cntr" style="font-size:60px;"></i>
          </div>
          <button id="viewPlanbtn" class="brButton primarybg hv ft l" @click="changePreview('Home')">View Plans</button>
        </div>

        <div class="auto_Banner ft l fourth" @click="changePreview('Auto')" id="banner">
          <p class="fourth">Auto</p>
          <div class="icon_container trimB5">
            <i class="fa-solid fa-car cntr" style="font-size:60px;" ></i>
          </div>
          <button id="viewPlanbtn" class="brButton primarybg hv ft l" @click="changePreview('Auto')">View Plans</button>
        </div>

        <div class="disability_Banner ft l fourth" @click="changePreview('Disability')" id="banner">
          <p class="fourth">Disability</p>
          <div class="icon_container trimB5">
            <i class="fa-solid fa-wheelchair cntr" style="font-size:60px;"></i>
          </div>
          <button id="viewPlanbtn" class="brButton primarybg hv ft l" @click="changePreview('Disability')">View
            Plans</button>
        </div>

        <div class="longtermcare_Banner ft l fourth" @click="changePreview('Long-Term')" id="banner">
          <p class="fourth">Long Term</p>
          <div class="icon_container trimB5">
            <i class="fa-solid fa-person-cane cntr" style="font-size:60px;"></i>
          </div>
          <button id="viewPlanbtn" class="brButton primarybg hv ft l" @click="changePreview('Long-Term')">View
            Plans</button>
        </div>

      </div>
    </div>
    <br />
    <div class="cntr f" style="width:55%">
      <p class="ft l p3 third pd5 w50" style="text-align:left;">{{ previewType }} Plans</p>
      <router-link class="ft l p3 third pd5 w50 primary" to="/Plans" style="text-align:right;text-decoration: none">View All Here</router-link>
    </div>
    <div class="cntr f sbb" style="white-space:nowrap; height:300px; width:60vw;overflow-x:auto;scrollbar-gutter:stable;">
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
    <div class="rationaleContainer" style="margin:auto; width:1050px;height:600px;">
      <div class="rationaleImage hof br10 bs" style="float:left;">
        <img style="object-fit: cover; width:100%; height: 100%;" class="gp" src="../assets/rationaleImg.jpg" @click="goToPreviewPage()"/>
      </div>
      <div class="rationaleText cntr">
        <h4 class="ft b2 thirdbg p3 mt10 wt br10 pd5">Why Us</h4>
        <h4 class="p6 ft third l mb10">Buying insurance may not be simple, but with us, it can be.</h4>
        <h4 class="p7 ft second l">We offer major insurance options in Singapore with easy viewing and selection.</h4>
        <h4 class="p7 ft second l">Our knowledgeable team is available for any inquiries, both before and after
          purchasing.</h4>
        <h4 class="p7 ft second l mb50">Find out more about Omnium here, and guarantee a smooth and simple purchase of
          your assurance.</h4>
        <button class="brButton primarybg hv ft l" @click="goToPreviewPage()">Learn More</button>


        <div class="umbrellaIcon mt50">
        </div>
      </div>
    </div>
    <br />
    <div class="customizationContainer" style="margin:auto;width:1050px;display:flex;">
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
          <Br/>
        <h4 style="font-size:30px"><i class="fa-solid fa-umbrella wt"></i></h4>

        <br />
      </div>

    </div>


  </div>
</template>

<script>
import { getFirestore, collection, query, onSnapshot } from 'firebase/firestore';
import { app } from '@/configs'
import { ref, onUnmounted } from 'vue';


const db = getFirestore(app);

export default {


  data() {


    return {
      plans: ref([]),
      tooltipText: '',
      previewType: 'Life',

      currentDate: new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      })
    }
  }, methods: {
    changePreview(id) {
      this.previewType = id;
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
  width: 175px;
  font-size: 20px;
  text-align: center;
  border: 1px solid grey;
  color: white;
  cursor: pointer;

  border-radius: 0px;
}


#banner {
  height: 100%;
  width: 16.67%;
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
  width: 1050px;
  height: 230px;
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
