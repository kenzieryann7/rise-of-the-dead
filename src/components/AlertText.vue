<template>
  <div v-if="woodWarning" class="alert alert-danger" role="alert">
    You do not have enough wood.
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
  mounted() {
    window.setInterval(() => {
      console.log("sendClick", this.sendClick);
    }, 2000);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
