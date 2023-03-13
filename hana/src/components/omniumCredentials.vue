<template>
  <br />
  <div class="mt50 cntr">
    <div class="animate__animated animate__slideInDown">
      <h4 class="omniumHeader p5 ibn wt">Omnium, Made For You</h4>
      <p class="omniumDesc ibn mb50 wt p6 l" style="line-height:36px;opacity:.6">View, purchase, and keep updated on
        policies from major insurance brands in Singapore.</p>



    </div>

  </div>
  <div class="f ibn l p3 cntr wt mt50" style="justify-content:center;margin-bottom:10%">
    <p>The </p>
    <p style="height:5vh;width:12vw;margin-left:.6vw;margin-right:.6vw;" class="primary hover"
      @mouseover="clearInterval(intervalId)">{{ textArray[index] }}</p>
    <p>way to handle your insurance...</p>

  </div>


  <div class="cntr mt50" style="width:50vw;height:30vh;margin-bottom:10%">
    <p class="ibn l p5 wt">Omnium's Partners & Credentials</p>
    <div class="w100 ibn l p6 wt" style="opacity:.6;margin-bottom:2%">View all the plans offered by these major insurance brands right here
      on Omnium</div>
  

  </div>
</template>

<script>


export default {

  data() {
    return {
      textArray: ['Fastest', 'Most Convenient', 'Best', 'Hassle-Free', 'Simplest'],
      companies: ['Company A', 'Company B', 'Company C','Company D','Company E'],
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
.company:hover {
  transform: scale(1.2);
  transition: transform .2s
}
</style>
