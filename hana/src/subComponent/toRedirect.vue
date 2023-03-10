<template>
    <br/>
    <div class="overview">
        <p class="ft l mb50 p4 wt" style="margin-top:10%">Thank you for choosing Omnium.</p>
        <p class="ft l mb50 p6 wt">We have received your message!</p>
        <button class="brButton primarybg hv" @click="goHome();">Go to Home</button>
    </div>
</template>

    <script>
        export default {
            data() {





            },
            
            methods: {  
    goHome() {
      this.$router.push({ path: '/'})
    },
        }
    }


    </script>

<style>

.overview {
    height:50vh
}

</style>
