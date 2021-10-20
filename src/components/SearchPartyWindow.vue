<template>
  <div class="card text-dark shadow-lg border border-dark border-2">
    <div class="card-body">
      <span>Choose a location...</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

import store from "@/store/index.js";

export default {
  name: "SearchPartyWindow",
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
