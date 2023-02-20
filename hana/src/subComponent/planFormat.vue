<template>
    <div v-for="(plan, index) in plans" :key="index">
      <div class="plan">
        <p>Plan Name: {{ plan.name }}</p>
        <p>Age Group: {{ plan.agegroup }}</p>
        <p>Target: {{ plan.target }}</p>
        <p>Income: {{ plan.income }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      plans: {
        type: Array,
        required: true
      }
    }
  }
  </script>