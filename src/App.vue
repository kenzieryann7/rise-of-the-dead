<template>
  <Header class="" />
  <div class="container-fluid">
    <router-view />
  </div>
  <Footer />
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style></style>
