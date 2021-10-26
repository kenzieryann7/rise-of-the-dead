<template>
  <div class="row text-start">
    <div class="col">
      <div class="text-start fw-bold text-white">Food:</div>
      <div class="btn-group-vertical" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-purple text-white">
          Bread
        </button>
        <button type="button" class="btn btn-purple text-white">
          Meat
        </button>
        <button type="button" class="btn btn-purple text-white">
          Fish
        </button>
      </div>
    </div>
    <div class="col">
      <div class="text-start fw-bold text-white">Brew:</div>
      <div class="btn-group-vertical" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-purple text-white">
          HP Potion
        </button>
        <button type="button" class="btn btn-purple text-white">
          XP Potion
        </button>
        <button type="button" class="btn btn-purple text-white">
          Buff Potion
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "TavernView",
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
