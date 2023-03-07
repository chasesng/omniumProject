<template>
    <div id="loading cntr" style="background-color:rgba(42,48,109,255)">
      <img
        class="img"
        src="../assets/loading.gif"
        alt="loading..."
        width="200"
      />
    </div>
  </template>
  
  <script>
  export default {
    name: "LoadingScreen"
  };
  </script>

<style>
/* #loading {
  position: absolute;
  z-index: 1000;
  background-color: white;
  height: 30vh;
  width: 100vw;
  text-align: center;
  line-height: 30vh;
} */
.img {
  position: relative;
  margin: auto;
  margin-top: 20%;
}
</style>