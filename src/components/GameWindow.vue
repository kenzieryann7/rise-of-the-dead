<template>
  <div class="card shadow">
    <div class="card-header text-start">
      <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-home"
            type="button"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            Camp
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-profile"
            type="button"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
          >
            Wilderness
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="pills-contact-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-contact"
            type="button"
            role="tab"
            aria-controls="pills-contact"
            aria-selected="false"
            v-if="showBlackMarket"
          >
            Black Market
          </button>
        </li>
      </ul>
    </div>
    <div class="card-body">
      <div class="tab-content" id="pills-tabContent">
        <div
          class="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <div class="row">
            <div class="col">
              <CampStats />
            </div>
            <div class="col text-start">
              <button
                v-if="!camp.campfire.isLit"
                type="button"
                class="btn btn-purple text-white"
                title="Costs 1 Wood"
                @click="campfireAction(), countDownTimer()"
              >
                Light Campfire
              </button>
              <button
                v-if="camp.campfire.isLit"
                type="button"
                class="btn btn-purple text-white"
                title="Costs 1 Wood"
                disabled
              >
                Campfire is lit
              </button>
              <span v-if="camp.campfire.isLit" class="ms-2">
                <small>{{ camp.campfire.burnTime }}</small>
              </span>
              <br />
              <div class="text-start mt-2 fw-bold">Blueprints:</div>
              <button
                type="button"
                class="btn btn-purple text-white"
                @click="addHouse()"
              >
                Tent
              </button>
              <br />
              <button
                type="button"
                class="btn btn-purple text-white mt-2"
                @click="addTrap()"
              >
                Animal Trap
              </button>
            </div>
            <div class="col">
              <ActionLog />
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          <div class="row">
            <div class="col">
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
              <button
                type="button"
                class="btn btn-purple text-white"
                @click="checkTrap()"
              >
                Check Animal Traps
              </button>
            </div>
            <div class="col">
              <ActionLog v-if="logLength >= 1" :actionLog="actionLog" />
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="pills-contact"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
          >
            ...
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
import ActionLog from "@/components/ActionLog.vue";
import CampStats from "@/components/CampStats.vue";
import WildStats from "@/components/WildStats.vue";

import store from "@/store/index.js";

export default {
  name: "GameWindow",
  props: {},
  components: {
    ActionLog,
    CampStats,
    WildStats,
  },
  data() {
    return {
      showBlackMarket: false,
      campfire: false,
      countDown: 5,
      eventTimer: 5,
      resTimer: 2,
      actionLog: [],
      logLength: "",
      clicks: 0,
      warning: false,
    };
  },
  computed: {
    ...mapGetters({
      camp: "getCamp",
      res: "getRes",
      log: "getActionLog",
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
    }),
    clickLevel() {
      this.clicks++;

      if (this.clicks == 5) {
        this.showForest = true;
      }
    },
    scavenge() {
      console.log("You started scavenging for supplies.");
    },
    checkTrap() {
      console.log("Traps are empty.");
    },
    addHouse() {
      this.increaseHousing("increaseHousing");
    },
    addTrap() {
      if (this.res.wood == 10 || this.res.wood > 10) {
        this.increaseTraps("increaseTraps");
        console.log("trap placed");
        store.commit("decreaseWood", 10);
        this.warning = false;
        this.$emit("alert-text", this.warning);

        this.actionLog.unshift("You built an animal trap.");
        this.logLength = this.actionLog.length;
        console.log("log length", this.logLength);
      }

      if (this.res.wood < 9) {
        this.warning = true;
        this.$emit("alert-text", this.warning);
        console.log("Not enough wood.");
      }
    },
    randomEvent() {
      let rng = 100;
      let x = Math.floor(Math.random() * rng); // rng out of 100
      console.log("rng #", x);
    },
    resetCampfire() {
      this.resetCampfire("resetCampfire");
    },
    campfireAction() {
      this.setCampfire("setCampfire");
      // console.log(bool);
      // this.campfire = bool;
      // if (this.campfire == true) {
      //   store.commit("decreaseWood", 1);
      //   this.countDown = 5;
      //   this.actionLog.unshift("You lit the campfire.");
      //   this.logLength = this.actionLog.length;
      //   console.log("log length", this.logLength);
      // }
      // if (this.campfire == false) {
      //   this.actionLog.unshift("You put out the campfire.");
      //   this.logLength = this.actionLog.length;
      //   console.log("log length", this.logLength);
      // }
    },
    countDownTimer() {
      if (this.camp.campfire.burnTime == 3) {
        this.log.unshift("It's warm and cozy.");
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
        this.resetBurnTime("resetBurnTime");
        this.camp.campfire.isLit = false;
      }
    },
    incrementResource() {
      //this.increaseWood("increaseWood", 1);
      store.commit("increaseWood", 1);
      console.log("wood", this.res.wood);
    },
  },
  mounted() {
    // Increment res
    window.setInterval(() => {
      this.incrementResource();
    }, 3000);

    // alert show for 4 secs
    if (this.sen)
      window.setInterval(() => {
        this.warning = false;
        this.$emit("alert-text", this.warning);
      }, 4000);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
