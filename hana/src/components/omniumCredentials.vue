<template>
    <br/>
  <div class="mt50 cntr">
    <div class="animate__animated animate__slideInDown">
    <h4 class="omniumHeader p5 ibn wt">Omnium, Made For You</h4>
    <p class="omniumDesc ibn mb50 wt p6 l" style="line-height:36px">View, purchase, and keep updated on policies from major insurance brands in Singapore.</p>


      
    </div>
   
</div>
      <div class="f ibn l p3 cntr wt mt50" style="justify-content:center">
        <p>The </p> 
        <p style="height:5vh;width:11vw;margin-left:.5vw;margin-right:.5vw;" class="primary hover" @mouseover="clearInterval(intervalId)">{{ textArray[index] }}</p>
        <p>way to handle your insurance...</p>
        
      </div>





    <br/>
    

    <Br/>
    <br/>
    <br/>
    <div class="cntr w50 mt50" style="height:40vh">
        <p class="ibn l p5 wt">Omnium's Partners & Credentials</p>
        
        
    </div>

    <div class="cntr w50 mt50" style="height:30vh">
      <p class="ibn l p5 wt">Testimonials</p>


    </div>
</template>

<script>


export default {

  data() {
    return {
      textArray: ['Fastest', 'Most Convenient', 'Best', 'Hassle-Free','Simplest'],
    index: 0,
    intervalId: null
  }
  },
  
  methods: {
    changeText() {
      this.index = (this.index + 1) % this.textArray.length;
    }
  },

  mounted() {
    this.intervalId = setInterval(this.changeText, 1500);
  }


}

</script>



<style>





</style>
