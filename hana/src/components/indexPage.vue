const sql = require('mssql');

const pool = new sql.ConnectionPool({
  user
})
<template>
<br/>
  <div class="cntr f w1k">
    <div>
      <img class="picsize br10 mt10 cntr bs" src="../assets/planBanner/family.jpg"/>
    </div>
    <div class="txt" style="margin:auto">
      <p class="p3 primary ft b2 mb10">Insurance Assessment</p>
      <p class="ft p6 b primary ">For your assurance today, tomorrow, and more</p>
      <h4 class="ft p6 second mb50 l`">Find the insurance most suited for you and your loved ones on Omnium.</h4>
      <!-- <button class="brButton primarybg hv ft l" @click="goToGeneralAssessment();">Learn More</button> -->
            <button class="brButton primarybg hv ft l" @click="redirectHelp();">Learn More</button>

    </div>

  </div>
  <div class="offeredProducts" style="margin:auto;">
    <p class="p3 mt50 primary ft mb10" >Let us find the plan for you</p>
    <p class="p7 second ft">Our available insurance plans are greatly diversified and covers over most aspects of life.</p>
    <hr/>

  <div class="cntr f w1k">
    
    <div class="txt" style="margin:auto; margin-right:30px">
      <p class="p3 primary ft b2 mb10">Contact an advisor</p>
      <p class="ft p6 b primary ">Require assistance?</p>
      <h4 class="ft p6 second mb50">Find help by contacting our dedicated team of readily available advisors to clear your doubts.</h4>
      <button class="brButton primarybg hv ft l" @click="gotoSupport();">Get in Touch</button>
    </div>
    <div class="mb10">
      <img class="picsize br10 mt10 cntr bs" src="../assets/insurance_agent.jpg"/>
    </div>
    <br/>

  </div>
<hr/>
<br/>

    <div class="ib mb10">
    <p class="ft l p3 primary pd5 w100" style="text-align:left;">Insurance Products</p>
    <div class="containBanners">
      
      <div class="life_Banner ft l primary" id="banner">
        Life
        <span class="hovertoolTip" v-bind:title="tooltipText" @mouseover="tooltip('Safeguard your loved ones\'s futurgbre from life\'s uncertainties.\n\nFind out more by clicking on the banner below.')" @mouseout="tooltipHealth('')">
          ⓘ
        </span>
        <br/>
        <div class="icon_container">
        <img class="icon" src="../assets/planBanner/lifeBanner.png"/>
        </div>
        <button id="viewPlanbtn" class="brButton primarybg hv ft l" @click="gotoAllPlans()">View Plans</button>
      </div>
      
      <div class="health_Banner ft l primary" id="banner">
        Health
        <span class="hovertoolTip" v-bind:title="tooltipText" @mouseover="tooltip('Cover your costs in the event of an illness or accident.\n\nFind out more by clicking on the banner below.')" @mouseout="tooltipHealth('')">
          ⓘ
        </span>
        <br/>
        <div class="icon_container">
        <img class="icon" src="../assets/planBanner/healthBanner.png"/>
        </div>
        <button id="viewPlanbtn" class="brButton primarybg hv ft l" @click="gotoAllPlans()">View Plans</button>
      </div> 
      
      <div class="home_Banner ft l primary" id="banner">
        Home
        <span class="hovertoolTip" v-bind:title="tooltipText" @mouseover="tooltip('Protect your residence and your precious belongings.\n\nFind out more by clicking on the banner below.')" @mouseout="tooltipHealth('')">
          ⓘ
        </span>
        <div class="icon_container">
        <img class="icon" src="../assets/planBanner/homeBanner.png"/>
        </div>
        <button id="viewPlanbtn" class="brButton primarybg hv ft l" @click="gotoAllPlans()">View Plans</button>
      </div>
      
      <div class="auto_Banner ft l primary" id="banner">
        Auto
        <span class="hovertoolTip" v-bind:title="tooltipText" @mouseover="tooltip('Safeguard your vehicle from accidents and theft.\n\nFind out more by clicking on the banner below.')" @mouseout="tooltipHealth('')">
          ⓘ
        </span>
        <div class="icon_container">
        <img class="icon" src="../assets/planBanner/autoBanner.png"/>
        </div>
        <button id="viewPlanbtn" class="brButton primarybg hv ft l" @click="gotoAllPlans()">View Plans</button>
      </div>
      
      <div class="disability_Banner ft l primary" id="banner">
        Disability
        <span class="hovertoolTip" v-bind:title="tooltipText" @mouseover="tooltip('We help to replace your income when a disability prevents you from working.\n\nFind out more by clicking on the banner below.')" @mouseout="tooltipHealth('')">
          ⓘ
        </span>
        <div class="icon_container">
        <img class="icon" src="../assets/planBanner/disabilityBanner.png"/>
        </div>
        <button id="viewPlanbtn" class="brButton primarybg hv ft l" @click="gotoAllPlans()">View Plans</button>
      </div>

      <div class="longtermcare_Banner ft l primary" id="banner">
        Long Term
        <span class="hovertoolTip" v-bind:title="tooltipText" @mouseover="tooltip('We offer coverage that provides nursing-home care, personal or adult daycare needs for seniors.\n\nFind out more by clicking on the banner below.')" @mouseout="tooltipHealth('')">
          ⓘ
        </span>
        <div class="icon_container">
        <img class="icon" src="../assets/planBanner/longtermBanner.png"/>
        </div>
        <button id="viewPlanbtn" class="brButton primarybg hv ft l" @click="gotoAllPlans()">View Plans</button>
      </div>
      
    </div>
  </div>
  <hr/>
    <br/>
    <div class="rationaleContainer" style="margin:auto; width:1050px;height:600px;">
      <div class="rationaleImage" style="float:left;">
        <img style="object-fit: cover; width:100%; height: 100%;" class="bs" src="../assets/rationaleImg.jpg"/>
      </div>
      <div class="rationaleText">
        <h4 class="ft b2 primarybg p3 mt10 wt br10 pd5">Why Us</h4>
      <h4 class="p6 ft primary l mb10">Buying insurance may not be simple, but with us, it can be.</h4>
      <h4 class="p7 ft second l">We offer major insurance options in Singapore with easy viewing and selection.</h4>
      <h4 class="p7 ft second l mb50">Our knowledgeable team is available for any inquiries, both before and after purchasing.</h4>
        <div class="umbrellaIcon">
        <h4 style="font-size:50px">☂</h4>
      </div>
      </div>
    </div>
    <br/>
    <div class="customizationContainer" style="margin:auto;width:1050px;display:flex;">
      <div class="picsize">
        <img class="picHold br10 bs" src="../assets/customPlanfinder.jpg"/>
      </div>
      <div class="holdCustomizationText">
        <h4 class="ft b2 primarybg p3 mt10 wt br10 pd5">Your Plan</h4>
      <h4 class="p7 ft second l">With our <i><b>"Glass Umbrella"</b></i> philosophy, we give our customers a sense of security without the worry of overpaying for things they don't need.</h4>
      <br/>
      <h4 class="p7 ft second l">Our aim is to enable accessibility and ease in the path to life security. You will not be charged any extra fees using our platform.</h4>
      <br/>
      </div>

    </div>


  </div>
  
  





  <router-view/>
</template>

<script>

export default {
  

  data() {
    
   
     return{
      tooltipText:'',
      filterByLife() {
        this.$emit('filterByLife');
      },

      currentDate: new Date().toLocaleDateString('en-US', {
          weekday: 'long',
          month: 'long',
          day: 'numeric',
          year: 'numeric'
              })
    }
  }, methods: {  
    redirectHelp() {
      this.$router.push({path:'/InsuranceAssessmentGuide'})
    },
    goToGeneralAssessment() {
      this.$router.push({ path: '/Insurance_Assessment'})
    },
    gotoAllPlans() {
      this.$router.push({ path: '/Plans'})
    },
    gotoSupport() {
      this.$router.push({ path: '/Support'})
    }
  
    
           
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
  text-align:center;
  color:grey;
  margin-left:45px;
}


.box {
  border: 1px solid #ccc;
}


.crsImg {
  width:550px;
  height:350px;
  margin:auto;
  margin-left:130px;
}

.txt {
  float:right;
  width:50%;
  padding-left:20px;
}


.rdrButton:hover {
  background-color:gray;
}

#viewPlanbtn {
  height:50px;
  width:175px;
  font-size:20px;
  text-align:center;
  border:1px solid grey;
  color:white;
  cursor:pointer;
  margin-top:95px;
  border-radius:0px;
}


#banner {
  height:100%;
  width:16.67%;
  font-size:26px;
  text-align:center;
  vertical-align:middle;
  line-height:50px;
  border-right:1px solid gray;
  flex:1;
  display:inline-block;
  background-color:whitesmoke;

}



.containBanners {
  width:1050px;
  height:300px;
  display:flex;
  border:1px solid gray;
  margin:auto;
  overflow:hidden;
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
-webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
}

.hovertoolTip {
  color:darkgray;
  font-size:15px;
}

.rationaleImage {
  width:330px;
  height:550px;
  border-radius:20px;
  border:1px solid grey;
  overflow:hidden;
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
}

.rationaleText {
  float:left;
  margin:auto;
  width:500px;
  margin-left:80px;
  padding-top:5px;
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
  margin-top:40px;
}

.box:hover{
  background:lightgray
}

.customizationImg {
  width:auto;
  height:200px;
  border-radius:20px;
  border:1px solid grey;
  overflow:hidden;
}

.holdCustomizationText {
  float:left;
  margin:auto;
  width:50%;
  margin-left:5%;
  padding-top:5px;
}

.loader {
 --height-of-loader: 4px;
 --loader-color: #0071e2;
 width: 60%;
 height: var(--height-of-loader);
 border-radius: 30px;
 background-color: rgba(0,0,0,0.2);
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
}

</style>
