<template>
  <Header class="" />
  <!-- <GameBanner class="hi" /> -->
  <div class="container-fluid">
    <router-view />
  </div>
  <Footer />
</template>

<script>
// @ is an alias to /src
// import GameBanner from "@/components/GameBanner.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer,
    // GameBanner,
  },
};
</script>

<style></style>
