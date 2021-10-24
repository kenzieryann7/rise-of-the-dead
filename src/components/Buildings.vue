<template>
  <div class="text-start text-white fw-bold">Buildings:</div>
  <div class="btn-group-vertical" role="group" aria-label="Basic example">
    <button type="button" class="btn btn-purple text-white">
      Forge
    </button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Buildings",
  props: {
    sendClick: Boolean,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      bools: "getBools",
      camp: "getCamp",
      res: "getRes",
    }),
    woodWarning() {
      if (this.sendClick && this.res.wood < 4) {
        console.log("insufficent amount");
        return true;
      } else {
        console.log("available amount");
        return false;
      }
    },
  },
  methods: {},
  mounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
