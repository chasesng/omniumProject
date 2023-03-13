
<template style="width:100vw">
  <br />

  <div class="fade-on-scroll cntr br10 ibn p6 ib"   :style="{ opacity: 1 - (scrollPosition / fadeThreshold) }" style="width:100vw;margin-bottom:10vh;margin-top:5%;overflow: hidden;background: linear-gradient(0deg, rgba(0,0,0,1) 18%, rgba(181,181,181,1) 89%);" >

    <p class="wt ft cntr" style="font-size:80px;height:1vh;margin-top:15%;color:black">Food <span style="color:whitesmoke;font-size:60px">Here</span></p>
 

    <div class="custom-shape-divider-bottom-1678547880">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
    </svg>
  </div>
    
<p class="wt p6" style="opacity:.5;margin-top:3%"> - Chase</p>
    <a href="https://github.com/chasesng">My github</a>
    <p class="wt p8 mt10">This is part of my 'app a day for a week' personal project. Contact me for features you want added to this site if any.</p>
  </div>

  <div class="cntr ib w1k animate__animated animate__slideInUp mt50" style="width:100vw">
    <p class="wt l p6 cntr" style="width:90vw">
      I wrote this mobile site to showcase a list of Singapore's food places I've found over time.
    </p>
    <br/>
    <p class="wt l p6 cntr" style="width:90vw">
      Take my reviews with a grain of salt.  </p>    
    

  </div>
  <div class="wtbg f cntr redirectToAddButton" style="width:20vw;height:10vh;position: fixed;bottom:3%;opacity:.9;left:40vw;border-radius:50px;z-index:200" @click="redirectToAdd">
    <i class="fa-solid fa-square-plus" style="font-size:60px;margin:auto;"></i>
    </div>

  <div class="cntr ib mt50" style="width:100vw;margin-top:6%;margin-bottom:10%">
    <p class="wt l p6 cntr">This list consists of places from many different cultures.</p>
    <p class="wt l p6 cntr" style="opacity:.6">Send in your food recommendations to expand the list</p>
  </div>
  <div class="cntr f" style="width:100vw;justify-content:center">
    <label class="wt" for="foodCategory">Category</label>
    <select id="foodCategory" class="inpClear ft l wt" ref="foodcategory" v-model="selectedCulture" style="width:50vw">
      <option v-for="(type,index) in optionsList" :key="index" style="color:black" :value="type">
        {{ type }}
      </option>
                             
    </select>
  </div>


  <p class="wt p6 mt25">{{ selectedCulture }}</p>

  <!-- <div v-for="(place , index) in places.filter(places => foodTypes.includes(place.culture))" :key="index">
  {{ place.locationName }}
  </div> -->

  <div v-for="(place, index) in places.filter(place => foodTypes.includes(place.culture) && place.published === true)" :key="index" style="overflow:hidden">
  <div @click="showDetails(index)" id="placeEa" :class="{ 'selected': selectedIndex === index }" style="width:95vw;height:fit-content;border:1px solid white;justify-content: space-between;margin-bottom:2%;overflow:hidden;" class="cntr br10 p6 pd5 f eaPlace animate__animated animate__slideInLeft">
    <div class="ib" style="width:50%">
      <p style="text-align:left;margin-left:3%" class="p8 wt">{{ place.culture }}</p>
    <p style="text-align:left;margin-left:3%" class="p6 wt">{{ place.locationName }}</p>
    <p style="text-align:left;margin-left:3%" class="p8 wt">{{ ratingStars(place.rating) }} ({{ place.rating }})</p>
    <p style="text-align:left;opacity:.6;margin-left:3%" class="p8 wt" >{{ place.location }}</p>
    </div>
    <div style="width:35vw;height:20vh;float:right;overflow:hidden">
      <img :src="place.imgPath" :alt="place.locationName" class="br10" style="height:100%;width:100%;max-height:100%;object-fit:fill">
    </div>
  </div>
  
  <div v-if="selectedIndex === index" style="width:95vw;height:fit-content;border:.5px solid blue;border-top:none;margin-bottom:2%;animation-duration:.3s;overflow:hidden" class="cntr br10 p6 pd5 f eaPlace animate__animated animate__slideInLeft">
    <div class="ib">
      <p class="wt p8 b w100 mt10" style="text-align:left;margin-left:3%">Description</p>
      <p style="text-align:left;margin-left:3%" class="p8 wt">{{ place.description }}</p>
      <p class="wt p8 b w100 mt10" style="text-align:left;margin-left:3%">Price Scale</p>
      <div class="f">
      <p style="text-align:left;margin-left:3%" class="p8 wt"> {{ ("$").repeat(place.priceScale) }}</p>
        <p style="text-align:left;margin-left:1vw" class="p8 wt">{{ returnPriceReview(place.priceScale) }}</p>
      </div>
      <p class="wt p8 b w100 mt10" style="text-align:left;margin-left:3%">Review</p>
      <p style="text-align:left;margin-left:3%" class="p8 wt">{{ place.review }}</p>

      <p class="wt p8 b w100 mt10" style="text-align:left;margin-left:3%">Recommendations</p>
      <div class="wt p8" style="text-align:left;margin-left:3%" v-for="(item, index) in String(place.recommendations).split(',')" :key="index">
      <p>- {{ item }}</p>
      </div>
    </div>
  </div>



  </div>

  <br />
  
 
</template>

<script>
import { getFirestore, collection, query, onSnapshot } from 'firebase/firestore';
import { ref, onUnmounted } from 'vue';
import { app } from '@/configs'

const db = getFirestore(app);

export default {


  data() {


    return {
      foodTypes: ['All','Chinese', 'European', 'Italian', 'French', 'Japanese', 'Korean', 'Mexican'],
      optionsList: ['All','Chinese', 'European', 'Italian', 'French', 'Japanese', 'Korean', 'Mexican'],
      selectedIndex: -1,
      scrollPosition: -300,
      fadeThreshold: 700,
      places: ref([]),
      tooltipText: '',
      previewType: 'Life',
      previewCulture: 'All',
      selectedCulture: 'All',
      // types: ["Life", "Health", "Auto", "Disability", "Home", "Long-Term"],
      
      currentDate: new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      })
    }
  }, methods: {
    
    redirectToAdd() {
      this.$router.push({ path: '/Add_Recommendation' })
    },
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
    showDetails(index) {
    if (this.selectedIndex === index) {
      this.selectedIndex = -1;
    } else {
      this.selectedIndex = index;
    }
  },
    ratingStars(num) {
      if (num === 'untried') {
        return "NA"
      }
      else {
      if (num < 0 || num > 5) {
        return "Invalid"
      }
      let fullStars = "★".repeat(Math.floor(num));
      let emptyStars = "☆".repeat(5 - Math.floor(num));
      return fullStars + emptyStars;
    }
    },

    returnPriceReview(val) {
      if (val === '5') {
        return "est. $80 & up"
      }
      else if (val === '4') {
        return "est. $50 & up"
      }
      else if (val === '3') {
        return "est. $30 & up"
      }
      else if (val === '2') {
        return "est. $15 - $25"
      }
      else if (val === '1') {
        return "est. < $10"
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

    const latestQuery = query(collection(db, "places"));
    const livePlaces = onSnapshot(latestQuery, (snapshot) => {
      this.places = snapshot.docs.map((doc) => {
        return {
          id: doc.data().id,
          culture: doc.data().culture,
          description: doc.data().description,
          location: doc.data().location,
          locationName: doc.data().locationName,
          priceScale: doc.data().priceScale,
          rating: doc.data().rating,
          recommendations: doc.data().recommendations,
          review: doc.data().review,
          imgPath: doc.data().imgPath,
          published: doc.data().published


        }
      });
    });
    onUnmounted(livePlaces)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  watch: {
    selectedCulture(newValue) {
            if (newValue === "All") {
                this.foodTypes =['All','Chinese', 'Italian', 'French', 'Japanese',  'Italian', 'Korean', 'Japanese','Fusion'];
            } else {
                this.foodTypes = [newValue];
                this.foodTypes = this.foodTypes.map(val => String(val));


            }
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

.eaPlace:active {
  background-color:gray;
  transition:background-color .2s
}

.redirectToAddButton:active {
  background-color:gray;
  transition:background-color .2s
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

.selected {
    background-color: gray;
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
