<template>
  <!-- If no location is selected -->
  <span v-if="!locations.isLocationSelected">Choose a location...</span>

  <!-- If location selected -->
  <div
    v-if="locations.isLocationSelected"
    class="card bg-color text-white shadow-lg border border-dark border-2"
  >
    <div class="card-header bg-dark fw-bold text-white border-bottom">
      <span v-if="locations.slums.slumsClicked">{{
        locations.slums.label
      }}</span>
      <span v-if="locations.innerCity.innerCityClicked">{{
        locations.innerCity.label
      }}</span>
    </div>
    <div class="card-body">
      <div class="row mb-5">
        <!-- DETAILS -->
        <div class="col-5">
          <span class="fw-bold">Details</span>
          <table
            class="table table-sm table-secondary table-striped border border-dark border-2 shadow"
          >
            <tbody>
              <tr>
                <td class="text-start"><small>Level Requirement</small></td>
                <td class="text-start"><small>5</small></td>
              </tr>
              <tr>
                <td class="text-start"><small>hi</small></td>
                <td class="text-start"><small>hi</small></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col"></div>
        <!-- POTENTIAL LOOT -->
        <div class="col-4">
          <span class="fw-bold">Potential Loot</span>
          <table
            class="table table-sm table-secondary table-striped border border-dark border-2 shadow"
          >
            <tbody>
              <tr>
                <td class="text-start"><small>Wood</small></td>
                <td class="text-start"><small>20% Drop</small></td>
              </tr>
              <tr>
                <td class="text-start"><small>hi</small></td>
                <td class="text-start"><small>hi</small></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="row">
        <div class="col text-center">
          <button type="button" class="btn btn-purple text-white">Enter</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

import store from "@/store/index.js";

export default {
  name: "RaidPartyWindow",
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
      increaseLevel: "increaseLevel",
      increaseXP: "increaseXP",
      increaseXPCap: "increaseXPCap",
    }),
    levelUp() {
      this.increaseLevel("increaseLevel");
      this.playerLevel = this.player.level;
      this.player.xp = 0;
      store.commit("increaseXPCap", 2);
    },
  },
  mounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg-color {
  background: rgb(104, 104, 104);
}
</style>
