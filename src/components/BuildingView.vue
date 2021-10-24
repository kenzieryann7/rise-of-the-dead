<template>
  <div class="card bg-dark text-white shadow">
    <div class="card-header text-start p-1">
      <i
        class="bi bi-arrow-left-circle-fill building-pointer h4 me-4"
        @click="camp.buildings.showBuilding = false"
      ></i
      ><span class="fw-bold h5">{{ camp.buildings.buildingType }}</span>
    </div>
    <div class="card-body">
      ...
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "BuildingView",
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
<style scoped>
.building-pointer {
  cursor: pointer;
}

.building-pointer:hover {
  color: rgb(136, 2, 231);
}
</style>
