<template>
    <div class="assessmentSectionOne_QnsContainer" id="holdQnContainer">
      <p class="questionLabel">{{ question.qn }}</p>
      <div class="inlineBlockQn">
        <label v-for="(option, index) in question.options" :key="index" class="qnContainer">      
          <input type="radio" class="qnRadio" :name="'Q' + question.id" :value="option.value" :QnandOption=" 'Q' + question.id + 'Option' + index" @change="updateSelectedOptions"/>

          {{ option }}
        </label>
      </div>
      <hr/>
    </div>
  </template>
  
<script>

  export default {
    props: ['question'],
  };
</script>