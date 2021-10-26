<template>
  <div class="row">
    <div class="col-3">
      <WildStats />
    </div>
    <div class="col text-start">
      <button
        type="button"
        class="btn btn-purple text-white mb-2"
        @click="scavenge()"
      >
        Scavenge
      </button>
      <!-- v-if="player.level >= 5" for below -->
      <button
        type="button"
        class="btn btn-purple text-white"
        @click="checkTrap()"
      >
        Check Animal Traps
      </button>
    </div>
    <div class="col-5">
      hi
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
import WildStats from "@/components/WildStats.vue";
export default {
  name: "WildernessView",
  components: { WildStats },
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
    scavenge() {
      this.actionLog.unshift(
        "You started scavenging for supplies. You found 10 wood."
      );
      this.increaseWood(10);
    },
    checkTrap() {
      console.log("Traps are empty.");
    },
  },
  mounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
