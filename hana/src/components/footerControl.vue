<template>
    <footer class="footer">
      <div class="container">
        <div style="display:inline-block">
        <div style="font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; text-transform:uppercase;font-weight:bold;font-size:16px;">1800 XXX XXXX</div>

        </div>
        <div class="content has-text-centered">
          <p style="font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif">
            <strong>Copyright</strong> {{ year }} {{ companyName }}
          </p>
          <p style="font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif">
            <a href="#">Terms of Use</a> | <a href="#">Privacy Policy</a>
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
        companyName: "Omnium: Insurance in Confidence"
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