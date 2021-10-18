<template>
  <div class="row">
    <div class="col">
      <LevelProgress />
    </div>
    <div class="col">
      <AlertText :sendClick="sendClick" />
    </div>
  </div>
  <div class="row">
    <div class="col">
      <StatWindow class="mb-3" />
      <InventoryWindow />
    </div>
    <div class="col-8">
      <GameWindow @alert-text="getAlertText($event)" />
    </div>
  </div>
</template>

<script>
import GameWindow from "@/components/GameWindow.vue";
import StatWindow from "@/components/StatWindow.vue";
import InventoryWindow from "@/components/InventoryWindow.vue";
import LevelProgress from "@/components/LevelProgress.vue";
import AlertText from "@/components/AlertText.vue";

export default {
  name: "Main",
  components: {
    GameWindow,
    StatWindow,
    InventoryWindow,
    LevelProgress,
    AlertText,
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
