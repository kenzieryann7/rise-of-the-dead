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
      <ForgeView v-if="camp.buildings.buildingType == 'Forge'" />
      <TavernView v-if="camp.buildings.buildingType == 'Tavern'" />
      <ArmoryView v-if="camp.buildings.buildingType == 'Armory'" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import ForgeView from "@/components/ForgeView.vue";
import TavernView from "@/components/TavernView.vue";
import ArmoryView from "@/components/ArmoryView.vue";

export default {
  name: "BuildingView",
  components: { ForgeView, TavernView, ArmoryView },
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
<style scoped>
.building-pointer {
  cursor: pointer;
}

.building-pointer:hover {
  color: rgb(136, 2, 231);
}
</style>
