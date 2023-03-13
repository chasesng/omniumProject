<template>
    <footer class="footer">
      <div class="container">
        <div style="display:inline-block">
        <div style="font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; text-transform:uppercase;font-weight:bold;font-size:16px;">a mini project by chase</div>

        </div>
        <div class="content has-text-centered">
          <p style="font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif">
            <strong>Food Here</strong> {{ year }} {{ companyName }}
          </p>
          <p style="font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif">
          </p>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    data() {
      return {
        year: new Date().getFullYear(),
        companyName: "Food Here: A list of places to go"
      };
    }
  };
  </script>

<style scoped>
footer {
  background-color: #333;
  color: #fff;
}
</style>