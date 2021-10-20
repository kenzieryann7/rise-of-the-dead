import { createStore } from "vuex";

// STATE is the data.
// MUTATIONS change state, and are uppercase.
// ACTIONS `commit` mutations, and invoked by `dispatch`
// GETTERS is how state is read.

export default createStore({
  state: {
    actionLog: [],
    logTimestamp: "",
    bools: {
      alertBool: false,
      attributeBoolMax: false,
      attributeBoolSpent: false,
    },
    resources: {
      wood: 0,
      stone: 0,
      ore: 0,
      meat: 0,
      leather: 0,
    },
    player: {
      level: 1,
      xp: 0,
      xpCap: 5,
      stats: {
        adjustAttributePoints: false,
        attributePoints: 0,
        strength: 0,
        health: 0,
        defense: 0,
        agility: 0,
        damage: 0,
      },
    },
    camp: {
      campfire: {
        isLit: false,
        reset: false,
        burnTime: 5,
      },
      population: 0,
      housing: 0,
      houseClicked: 0,
      houseConstant: 5,
      traps: 0,
      trapsConstant: 8,
    },
    locations: {
      isLocationSelected: false,
      slums: {
        label: "Slums",
        slumsClicked: false,
        levelReq: 5,
        room1: "",
      },
      innerCity: {
        label: "Inner City",
        innerCityClicked: false,
        levelReq: 20,
        room1: "",
      },
    },
  },
  mutations: {
    postActionLog(state) {
      state.logTimestamp;
    },
    // PLAYER STATS
    increaseLevel(state) {
      state.player.level++;
    },
    increaseXP(state, n) {
      state.player.xp += n;
    },
    increaseXPCap(state, n) {
      state.player.xpCap = n * (state.player.xpCap * 3);
    },
    adjustAttributePoints(state) {
      state.player.stats.adjustAttributePoints = true;
    },
    increaseAttributePoints(state) {
      state.player.stats.attributePoints += 2;
    },
    spendAttributePoints(state, n) {
      state.player.stats.attributePoints -= 1;
      console.log("ADD " + n);
    },
    removeAttributePoints(state, n) {
      state.player.stats.attributePoints += 1;
      console.log("SUB " + n);
    },
    // CAMP STATS
    setCampfire(state) {
      state.camp.campfire.isLit = true;
    },
    resetBurnTime(state) {
      state.camp.campfire.burnTime = 5;
    },
    increasePopulation(state) {
      state.camp.population += 2;
    },
    increaseHousing(state) {
      state.camp.housing++;
    },
    increaseTraps(state) {
      state.camp.traps++;
    },
    // RESOURCES
    increaseWood(state, n) {
      state.resources.wood += n;
    },
    decreaseWood(state, n) {
      state.resources.wood -= n;
    },
    increaseStone(state) {
      state.resources.stone++;
    },
    increaseOre(state) {
      state.resources.ore++;
    },
    increaseMeat(state) {
      state.resources.meat++;
    },
    increaseLeather(state) {
      state.resources.leather++;
    },
    // LOCATIONS
    showSlums(state) {
      state.locations.slums.slumsClicked = true;
      state.locations.isLocationSelected = true;
      state.locations.innerCity.innerCityClicked = false;
    },
    showInnerCity(state) {
      state.locations.innerCity.innerCityClicked = true;
      state.locations.isLocationSelected = true;
      state.locations.slums.slumsClicked = false;
    },
  },
  actions: {
    postActionLog(context) {
      context.commit("postActionLog");
    },
    // PLAYER STATS
    increaseLevel(context) {
      context.commit("increaseLevel");
      if (this.state.player.level == 2) {
        context.commit("adjustAttributePoints");
        context.commit("increaseAttributePoints");
      }
    },
    increaseXP(context, n) {
      context.commit("increaseXP", n);
    },
    increaseXPCap(context, n) {
      context.commit("increaseXPCap", n);
    },
    resetBurnTime(context) {
      context.commit("resetBurnTime");
    },
    adjustAttributePoints(context) {
      context.commit("adjustAttributePoints");
    },
    increaseAttributePoints(context) {
      context.commit("increaseAttributePoints");
    },
    spendAttributePoints(context, n) {
      if (
        this.state.player.stats.attributePoints > 0 ||
        this.state.player.stats.attributePoints != 0
      ) {
        if (n == "Strength") {
          context.commit("spendAttributePoints", n);
          this.state.player.stats.strength += 1;
        }
        if (n == "Health") {
          context.commit("spendAttributePoints", n);
          this.state.player.stats.health += 1;
        }
        if (n == "Defense") {
          context.commit("spendAttributePoints", n);
          this.state.player.stats.defense += 1;
        }
        if (n == "Agility") {
          context.commit("spendAttributePoints", n);
          this.state.player.stats.agility += 1;
        }
        if (n == "Damage") {
          context.commit("spendAttributePoints", n);
          this.state.player.stats.damage += 1;
        }
      } else {
        this.state.bools.attributeBoolSpent = true;
        setTimeout(() => {
          this.state.bools.attributeBoolSpent = false;
        }, 4000);
      }
    },
    removeAttributePoints(context, n) {
      if (
        this.state.player.stats.attributePoints < 2 &&
        this.state.player.stats.attributePoints != 0
      ) {
        if (n == "Strength") {
          context.commit("removeAttributePoints", n);
          this.state.player.stats.strength -= 1;
        }
        if (n == "Health") {
          context.commit("removeAttributePoints", n);
          this.state.player.stats.health -= 1;
        }
        if (n == "Defense") {
          context.commit("removeAttributePoints", n);
          this.state.player.stats.defense -= 1;
        }
        if (n == "Agility") {
          context.commit("removeAttributePoints", n);
          this.state.player.stats.agility -= 1;
        }
        if (n == "Damage") {
          context.commit("removeAttributePoints", n);
          this.state.player.stats.damage -= 1;
        }
      } else {
        this.state.bools.attributeBoolMax = true;
        setTimeout(() => {
          this.state.bools.attributeBoolMax = false;
        }, 4000);
      }
    },
    // CAMP STATS
    setCampfire(context) {
      if (this.state.resources.wood >= 1) {
        this.state.bools.alertBool = false;
        context.commit("setCampfire");
        context.commit("decreaseWood", 1);
        this.state.actionLog.unshift("You lit the campfire.");
      } else {
        this.state.bools.alertBool = true;
        setTimeout(() => {
          this.state.bools.alertBool = false;
        }, 4000);
      }
    },
    increasePopulation(context) {
      if (this.state.camp.housing == 1) {
        let rng = 50;
        let x = Math.floor(Math.random() * rng);
        console.log("visitors?", x);
        if (x > 40) {
          context.commit("increasePopulation");
        }
      }
    },
    increaseHousing(context) {
      if (this.state.resources.wood >= this.state.camp.houseConstant) {
        this.state.camp.houseClicked += 1;
        console.log("constant before", this.state.camp.houseConstant);
        let x = this.state.camp.houseConstant;

        // doubles house constant
        this.state.camp.houseConstant *= 2;
        console.log("constant after", this.state.camp.houseConstant);
        console.log(this.state.camp.houseClicked);
        this.state.bools.alertBool = false;
        context.commit("increaseHousing");
        context.commit("decreaseWood", x);
        console.log("house cost " + x);
        this.state.actionLog.unshift("You built a tent.");
      } else {
        this.state.bools.alertBool = true;
        setTimeout(() => {
          this.state.bools.alertBool = false;
        }, 4000);
      }
    },
    increaseTraps(context) {
      if (this.state.resources.wood >= this.state.camp.trapsConstant) {
        console.log("constant before", this.state.camp.trapsConstant);
        let x = this.state.camp.trapsConstant;
        this.state.camp.trapsConstant *= 2;
        console.log("constant after", this.state.camp.trapsConstant);
        this.state.bools.alertBool = false;
        context.commit("increaseTraps");
        context.commit("decreaseWood", x);
        console.log("trap cost " + x);

        this.state.actionLog.unshift("You built an animal trap.");
      } else {
        this.state.bools.alertBool = true;
        setTimeout(() => {
          this.state.bools.alertBool = false;
        }, 4000);
      }
    },
    // RESOURCES
    increaseWood(context, n) {
      context.commit("increaseWood", n);
    },
    decreaseWood(context, n) {
      context.commit("decreaseWood", n);
    },
    increaseStone(context) {
      context.commit("increaseStone");
    },
    increaseOre(context) {
      context.commit("increaseOre");
    },
    increaseMeat(context) {
      context.commit("increaseMeat");
    },
    increaseLeather(context) {
      context.commit("increaseLeather");
    },
    // LOCATIONS
    showSlums(context) {
      context.commit("showSlums");
    },
    showInnerCity(context) {
      context.commit("showInnerCity");
    },
  },
  getters: {
    getActionLog: (state) => state.actionLog,
    getBools: (state) => state.bools,
    getCamp: (state) => state.camp,
    getRes: (state) => state.resources,
    getPlayer: (state) => state.player,
    getLocations: (state) => state.locations,
  },
  modules: {},
});
