<template>
  <div class="row">
    <div class="col-2">
      <RaidPartyLocations />
    </div>
    <div class="col text-start">
      <RaidPartyWindow />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
import RaidPartyLocations from "@/components/RaidPartyLocations.vue";
import RaidPartyWindow from "@/components/RaidPartyWindow.vue";
export default {
  name: "RaidView",
  components: {
    RaidPartyLocations,
    RaidPartyWindow,
  },
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
  methods: {
    ...mapActions({
      setCampfire: "setCampfire",
      resetBurnTime: "resetBurnTime",
      increasePopulation: "increasePopulation",
      increaseHousing: "increaseHousing",
      increaseTraps: "increaseTraps",
      increaseWood: "increaseWood",
      decreaseWood: "decreaseWood",
      increaseStone: "increaseStone",
      increaseOre: "increaseOre",
      buyBuildings: "buyBuildings",
    }),
    addHouse() {
      this.increaseHousing("increaseHousing");
    },
    addTrap() {
      this.increaseTraps("increaseTraps");
    },
  },
  mounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
