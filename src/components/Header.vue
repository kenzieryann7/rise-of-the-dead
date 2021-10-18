<template>
  <div class="navbar navbar-dark bg-dark">
    <div class="container-fluid">
      <div class="navbar-brand d-flex">
        <img
          src="@/assets/skull.svg"
          alt="Oregon State University Logo"
          height="50"
          class="d-inline-flex align-top me-3 pe-3 border-end"
        />
        <div class="title me-3 fw-bold">{{ title }}</div>
        <div class="subtitle">{{ subtitle }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: {
      type: String,
      default: process.env.VUE_APP_COURSE,
    },
    subtitle: {
      type: String,
      default: process.env.VUE_APP_TITLE,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
