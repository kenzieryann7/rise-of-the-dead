<template>
  <div class="row text-start">
    <div class="col">
      <div class="text-start fw-bold text-white">Cloth:</div>
      <div class="btn-group-vertical" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-purple text-white">
          Hood
        </button>
        <button type="button" class="btn btn-purple text-white">
          Robe
        </button>
        <button type="button" class="btn btn-purple text-white">
          Cloth Boots
        </button>
      </div>
    </div>
    <div class="col">
      <div class="text-start fw-bold text-white">Leather:</div>
      <div class="btn-group-vertical" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-purple text-white">
          Leather Helmet
        </button>
        <button type="button" class="btn btn-purple text-white">
          Leather Chestpiece
        </button>
        <button type="button" class="btn btn-purple text-white">
          Leather Legs
        </button>
      </div>
    </div>
    <div class="col">
      <div class="text-start fw-bold text-white">Plate:</div>
      <div class="btn-group-vertical" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-purple text-white">
          Iron Helmet
        </button>
        <button type="button" class="btn btn-purple text-white">
          Iron Chestpiece
        </button>
        <button type="button" class="btn btn-purple text-white">
          Iron Boots
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ArmoryView",
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
