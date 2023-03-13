<template>

    <div style="width:100vw;height:120vh">
        <img class="br10 blurFrame" style="width:90vw;height:30vh;max-width:100%;max-height:100%" src="../assets/places/restaurant.jpg"/>
      
        <p class="ibn b2 p2 wt cntr" style="margin-top:6%;opacity:.8">Your Recommendation</p>
       <p class="wt l p8 cntr" style="width:90vw;opacity:.8">
        Complete the following form then press on the "Submit" button to send in a recommendation!
        </p>
        <hr style="background-color:white;width:100vw"/>
        
        <div class="f cntr" style="width:90vw;justify-content: center; margin-bottom:25px;margin-top:5vh;">
            <label class="wt">Cuisine</label>
            <input type="text" class="wt" style="background:transparent;width:50vw;border-bottom:1px solid white" placeholder="Korean, Chinese, etc." ref="culture">

        </div>
        <div class="f cntr" style="width:90vw;justify-content: center; margin-bottom:25px">
            <label class="wt">Location Name</label>
            <input type="text" class="wt" style="background:transparent;width:50vw;border-bottom:1px solid white" placeholder="Restaurant/Eatery Name" ref="locationName">
        </div>
        <div class="f cntr" style="width:90vw;justify-content: center; margin-bottom:25px">
            <label class="wt">Your Menu Picks</label>
            <input type="text" class="wt" style="background:transparent;width:50vw;border-bottom:1px solid white" ref="recommendations">
        </div>

        <div class="f cntr" style="width:90vw;justify-content: center; margin-bottom:25px">
            <label class="wt">Your Name (optional)</label>
            <input type="text" class="wt" style="background:transparent;width:50vw;border-bottom:1px solid white" placeholder="Anonymous" ref="rec">
        </div>

        <div class="f cntr" style="width:90vw;justify-content: center; margin-bottom:25px">
            <label class="wt">Your Review</label>
            <textarea type="text" class="wt" style="background:transparent;width:50vw;border-bottom:1px solid white" ref="review"></textarea>
        </div>
        <br/>
        <button class="brButton hv" style="float:center;width:50vw;height:5vh" @click="addRecommendation()">Submit</button>
        <br/>
        <div class="mt10" style="height:5vh">
        <p class="w100 pd5 cntr errMsg" v-if="errMsg">{{ errMsg }}</p>
        </div>

        <router-link to="/" class="p7 cntr">Back</router-link>


        
    
    
    </div>
</template>

<script>
import { ref } from 'vue';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { app } from '@/configs'

const db = getFirestore(app);
var errMsg = ref('');
var count = ref();



export default {
    data() {
        return {
            selectedRate: null,

        }
    },
    methods: {
        
      addRecommendation() {
        if (this.$refs.culture.value && this.$refs.locationName.value && this.$refs.recommendations.value && this.$refs.review.value && this.$refs.rec.value) {
            addDoc(collection(db, 'places'), {
            culture: this.$refs.culture.value,
            description: "",
            imgPath: "",
            location: "",
            locationName: this.$refs.locationName.value,
            priceScale: "",
            rating: "",
            recommendations: this.$refs.recommendations.value,
            review: this.$refs.review.value,
            rec: this.$refs.rec.value,
            published: false,
        })
        this.$router.push({ path: '/Redirect' })

        }
        else {
            errMsg.value = "You have not completed all fields."
            
        }
      
    },

    checkInput() {
        count.value = 0;
        if (this.$refs.culture.value) {
            count.value+= 1;
        }
        if (this.$refs.locationName.value) {
            count.value+= 1;
        }
        if (this.$refs.rec.value) {
            count.value+= 1;
        }
        if (this.$refs.recommendations.value) {
            count.value+= 1;
        }
        if (this.$refs.review.value) {
            count.value+= 1;
        }
        return count;
    }
    }
}
</script>

<script setup>
const culture = ref('');
const locationName = ref('');
const recommendations = ref('');
const review = ref('');


</script>
<style>

</style>