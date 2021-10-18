<template>
  <div class="alert alert-warning text-dark mb-3">
    {{ title }}
    <br />
    {{ instructions }}
  </div>
</template>

<script>
export default {
  name: "Instructions",
  props: {
    title: {
      type: String,
      default: "Instructions",
    },
    instructions: {
      type: String,
      required: true,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
