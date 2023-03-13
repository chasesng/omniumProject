<template>
    <br/>
    <div class="overview">
        <p class="ft l mb50 p4 wt" style="margin-top:10%">Thank you for your recommendation!</p>
        <button class="brButton primarybg hv" @click="goHome();" style="height:5vh">Go Back</button>
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
