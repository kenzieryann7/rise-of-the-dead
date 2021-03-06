<template>
  <div class="card border border-dark border-2 shadow">
    <div class="card-header text-start bg-dark border-bottom border-secondary">
      <ul class="nav nav-pills" id="pills-tab" role="tablist">
        <li class="nav-item" role="presentation">
          <!-- CAMP -->
          <button
            class="nav-link active"
            id="camp-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-camp"
            type="button"
            role="tab"
            aria-controls="pills-camp"
            aria-selected="true"
            @click="setGameBackground('camp')"
          >
            Camp
          </button>
        </li>
        <!-- WILDERNESS -->
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="wilderness-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-wilderness"
            type="button"
            role="tab"
            aria-controls="pills-wilderness"
            aria-selected="false"
            @click="setGameBackground('wilderness')"
          >
            Wilderness
          </button>
        </li>
        <!-- SEARCH PARTY -->
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="search-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-search"
            type="button"
            role="tab"
            aria-controls="pills-search"
            aria-selected="false"
            @click="setGameBackground('searchParty')"
          >
            Raid Party
          </button>
        </li>
      </ul>
    </div>

    <div class="card-body game-bg">
      <div class="tab-content" id="pills-tabContent">
        <!-- CAMP -->
        <div
          class="tab-pane fade show active"
          id="pills-camp"
          role="tabpanel"
          aria-labelledby="camp-tab"
        >
          <div class="row">
            <div class="col-3">
              <CampStats />
            </div>

            <div v-show="camp.buildings.showBuilding" class="col">
              <BuildingView />
            </div>
            <div v-show="!camp.buildings.showBuilding" class="col text-start">
              <div class="row mb-3">
                <div class="col">
                  <button
                    v-if="!camp.campfire.isLit"
                    type="button"
                    class="btn btn-purple text-white"
                    v-tooltip="'Costs 1 Wood'"
                    @click="campfireAction(), countDownTimer(), resetBurnTime()"
                  >
                    Light Campfire
                  </button>
                  <span v-if="camp.campfire.isLit">
                    <button
                      type="button"
                      class="btn btn-purple text-white"
                      data-bs-toggle="tooltip"
                      data-bs-placement="right"
                      data-bs-html="true"
                      :title="campfireTooltip"
                      disabled
                    >
                      Campfire is lit
                    </button>
                    <span class="ms-2 text-white">
                      <small>{{ camp.campfire.burnTime }}</small>
                    </span></span
                  >
                </div>
              </div>
              <CampView />
            </div>
          </div>
        </div>

        <!-- WILDERNESS -->
        <div
          class="tab-pane fade"
          id="pills-wilderness"
          role="tabpanel"
          aria-labelledby="wilderness-tab"
        >
          <WildernessView />
        </div>

        <!-- RAID PARTY -->
        <div
          class="tab-pane fade text-white"
          id="pills-search"
          role="tabpanel"
          aria-labelledby="search-tab"
        >
          <RaidView />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
import CampStats from "@/components/CampStats.vue";
import CampView from "@/components/CampView.vue";
import WildernessView from "@/components/WildernessView.vue";
import RaidView from "@/components/RaidView.vue";
import BuildingView from "@/components/BuildingView.vue";
import store from "@/store/index.js";

import { Tooltip } from "bootstrap/dist/js/bootstrap.esm.min.js";
import {
  campfireTooltip,
  tentTooltip,
  trapTooltip,
  javelinTooltip,
} from "@/helpers/tooltips.js";

export default {
  name: "GameWindow",
  props: {},
  components: {
    CampStats,
    CampView,
    WildernessView,
    RaidView,
    BuildingView,
  },
  data() {
    return {
      cardBackground: require("@/assets/card-background.jpg"),
      showBlackMarket: false,
      campfire: false,
      countDown: 5,
      eventTimer: 5,
      resTimer: 2,
      gameView: "", // camp | wilderness
    };
  },
  computed: {
    ...mapGetters({
      player: "getPlayer",
      camp: "getCamp",
      res: "getRes",
      actionLog: "getActionLog",
    }),
    campfireTooltip,
    tentTooltip,
    trapTooltip,
    javelinTooltip,
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
    initTooltip() {
      Array.from(document.querySelectorAll('[data-bs-html="true"]')).forEach(
        (tooltipNode) => {
          new Tooltip(tooltipNode);
        }
      );
    },
    setGameBackground(type) {
      this.gameView = type;
    },
    randomCitizens() {
      let citizensRNG = 100;
      let x = Math.floor(Math.random() * citizensRNG); // rng out of 100
      console.log("rng #", x);
    },
    campfireAction() {
      this.setCampfire("setCampfire");
      this.resetBurnTime("resetBurnTime");
    },
    countDownTimer() {
      if (this.camp.campfire.burnTime == 3) {
        this.actionLog.unshift("It's warm and cozy.");
      }
      if (this.camp.campfire.burnTime == 1) {
        this.actionLog.unshift("The campfire is flickering.");
      }
      if (this.camp.campfire.burnTime == 0) {
        this.actionLog.unshift("It's dark and cold.");
      }
      if (this.camp.campfire.burnTime > 0 && this.camp.campfire.isLit == true) {
        setTimeout(() => {
          this.camp.campfire.burnTime--;
          this.checkTimer();
          this.countDownTimer();
        }, 1000);
      }
    },
    checkTimer() {
      if (this.camp.campfire.burnTime == 0) {
        this.camp.campfire.isLit = false;
      }
    },
    incrementResource() {
      //this.increaseWood("increaseWood", 1);
      store.commit("increaseWood", 1);
    },
  },
  mounted() {
    this.actionLog.unshift("It's dark and cold.");
    this.initTooltip();
    // Increment res
    window.setInterval(() => {
      this.incrementResource();
    }, 2000);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn:hover {
  transform: scale(1.05, 1.05);
}
</style>
