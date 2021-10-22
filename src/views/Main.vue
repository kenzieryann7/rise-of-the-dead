<template>
  <div class="row justify-content-center">
    <div class="col"></div>
  </div>
  <GameBanner class="hi" />
  <div class="row">
    <div class="col pe-0">
      <StatWindow class="" />
      <InventoryWindow />
    </div>
    <div class="col-7">
      <GameWindow @alert-text="getAlertText($event)" />
    </div>
    <div class="col-3 ps-0">
      <ActionLog />
    </div>
  </div>
  <div class="row justify-content-center">
    <div class="col">
      <!-- <LevelProgress /> -->
    </div>
    <div class="col">
      <AlertText :sendClick="sendClick" />
    </div>
  </div>
</template>

<script>
import GameWindow from "@/components/GameWindow.vue";
import StatWindow from "@/components/StatWindow.vue";
import InventoryWindow from "@/components/InventoryWindow.vue";
// import LevelProgress from "@/components/LevelProgress.vue";
import AlertText from "@/components/AlertText.vue";
import ActionLog from "@/components/ActionLog.vue";
import GameBanner from "@/components/GameBanner.vue";

export default {
  name: "Main",
  components: {
    GameWindow,
    StatWindow,
    InventoryWindow,
    // LevelProgress,
    AlertText,
    ActionLog,
    GameBanner,
  },
  data() {
    return {
      sendClick: false,
    };
  },
  methods: {
    getAlertText(bool) {
      console.log("bool", bool);
      this.sendClick = bool;
      console.log("alertDanger", this.sendClick);
    },
  },
};
</script>

<style scoped></style>
