<template>
    <br/>
    <div>
        <p class="ft l mb50 p4 wt">Thank you for choosing Omnium.</p>
        <p class="ft l mb50 p6 wt">We have received your message!</p>
        <button class="brButton primarybg" @click="goHome();">Go to Home</button>
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
