<template>
  <div class="alert alert-dark" role="alert">
    Build weaponary and base defense items here!
  </div>
  <div class="row text-start">
    <div class="col">
      <div class="text-start fw-bold text-white">Weapons:</div>
      <div class="btn-group-vertical" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-purple text-white">
          Rusty Sword
        </button>
        <button type="button" class="btn btn-purple text-white">
          Bow
        </button>
        <button type="button" class="btn btn-purple text-white">
          Pistol
        </button>
      </div>
    </div>
    <div class="col">
      <div class="text-start fw-bold text-white">Base Defense:</div>
      <div class="btn-group-vertical" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-purple text-white">
          Walls
        </button>
        <button type="button" class="btn btn-purple text-white">
          Spike Barrier
        </button>
        <button type="button" class="btn btn-purple text-white">
          Sentry
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ForgeView",
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      bools: "getBools",
      camp: "getCamp",
      res: "getRes",
    }),
  },
  methods: {},
  mounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
