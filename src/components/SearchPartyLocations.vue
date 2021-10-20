<template>
  <div class="btn-group-vertical" role="group" aria-label="Basic example">
    <button
      type="button"
      class="btn btn-purple text-white"
      v-tooltip="'Level 5 Requirement'"
    >
      Slums
    </button>
    <button
      type="button"
      class="btn btn-purple text-white"
      v-tooltip="'Level 20 Requirement'"
    >
      Inner City
    </button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

import store from "@/store/index.js";

export default {
  name: "SearchPartyLocations",
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
  mounted() {
    // alert show for 4 secs
    window.setInterval(() => {
      store.commit("increaseXP", 5);
    }, 10000);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
