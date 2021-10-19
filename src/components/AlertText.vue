<template>
  <div v-if="bools.alertBool" class="alert alert-danger" role="alert">
    You do not have enough wood.
  </div>
  <div v-if="bools.attributeBoolSpent" class="alert alert-danger" role="alert">
    You do not have enough attribute points.
  </div>
  <div v-if="bools.attributeBoolMax" class="alert alert-danger" role="alert">
    You've reached the max of attribute points.
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "AlertText",
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
