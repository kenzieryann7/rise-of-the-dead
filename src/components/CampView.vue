<template>
  <div class="row">
    <!-- BLUEPRINTS -->
    <div class="col">
      <div class="text-start fw-bold text-white">Buildings:</div>
      <div class="btn-group-vertical" role="group" aria-label="Basic example">
        <button
          type="button"
          class="btn btn-purple text-white"
          @click="addHouse()"
        >
          Tent
        </button>
        <button type="button" class="btn btn-purple text-white">
          Cabin
        </button>
        <button
          type="button"
          class="btn btn-purple text-white"
          @click="buyBuildings('Forge')"
        >
          Forge
        </button>
        <button
          type="button"
          class="btn btn-purple text-white"
          @click="buyBuildings('Tavern')"
        >
          Tavern
        </button>
        <button
          type="button"
          class="btn btn-purple text-white"
          @click="buyBuildings('Armory')"
        >
          Armory
        </button>
      </div>
    </div>

    <!-- CRAFTABLES -->
    <div class="col">
      <div class="text-start fw-bold text-white">Craftables:</div>
      <!-- v-if="player.level >= 5" for below -->
      <div class="btn-group-vertical" role="group" aria-label="Basic example">
        <button
          type="button"
          class="btn btn-purple text-white"
          @click="addTrap()"
        >
          Animal Trap
        </button>
        <button
          type="button"
          class="btn btn-purple text-white"
          @click="addTrap()"
        >
          Javelin
        </button>
        <button type="button" class="btn btn-purple text-white">
          Torch
        </button>
      </div>
    </div>

    <div class="col"></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  name: "CampView",
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
