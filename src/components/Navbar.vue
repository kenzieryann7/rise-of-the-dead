<template>
  <nav class="navbar navbar-expand-sm navbar-light bg-light border-bottom">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbar"
        aria-controls="navbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbar">
        <div class="navbar-nav">
          <router-link :to="{ name: 'Intro' }" class="nav-link"
            >Introduction</router-link
          >
          <router-link :to="{ name: 'Main' }" class="nav-link"
            >Main</router-link
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    expandSize: String,
    links: Array
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
