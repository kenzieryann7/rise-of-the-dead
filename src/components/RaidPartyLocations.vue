<template>
  <div class="btn-group-vertical" role="group" aria-label="Basic example">
    <button
      type="button"
      class="btn text-white"
      :class="[locations.slums.slumsClicked ? 'btn-clicked' : 'btn-purple']"
      v-tooltip="'Level 5 Requirement'"
      @click="showSlums('showSlums')"
    >
      Slums
    </button>
    <button
      type="button"
      class="btn text-white"
      :class="[
        locations.innerCity.innerCityClicked ? 'btn-clicked' : 'btn-purple',
      ]"
      v-tooltip="'Level 20 Requirement'"
      @click="showInnerCity('showInnerCity')"
    >
      Inner City
    </button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

//import store from "@/store/index.js";

export default {
  name: "RaidPartyLocations",
  props: {},
  data() {
    return {
      playerLevel: 1,
      currentXP: 0,
      xpCap: 100,
    };
  },
  computed: {
    ...mapGetters({
      player: "getPlayer",
      locations: "getLocations",
    }),
    getLevel() {
      if (this.player.xp == this.player.xpCap) {
        this.levelUp();
        return this.playerLevel;
      }
      return this.player.level;
    },
  },
  methods: {
    ...mapActions({
      showSlums: "showSlums",
      showInnerCity: "showInnerCity",
    }),
    selectLocation(location) {
      console.log(location);
    },
  },
  mounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn-clicked {
  background: indigo;
  font-weight: bold;
  text-decoration: underline;
}
</style>
