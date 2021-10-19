import { createStore } from "vuex";

// STATE is the data.
// MUTATIONS change state, and are uppercase.
// ACTIONS `commit` mutations, and invoked by `dispatch`
// GETTERS is how state is read.

export default createStore({
  state: {
    actionLog: [],
    bools: {
      alertBool: false,
    },
    player: {
      level: 1,
      xp: 0,
      xpCap: 5,
    },
    camp: {
      campfire: {
        isLit: false,
        reset: false,
        burnTime: 5,
      },
      population: 0,
      housing: 0,
      traps: 0,
    },
    resources: {
      wood: 0,
      stone: 0,
      ore: 0,
      meat: 0,
      leather: 0,
    },
  },
  mutations: {
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
  },
  actions: {
    // PLAYER STATS
    increaseLevel(context) {
      context.commit("increaseLevel");
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
    // CAMP STATS
    increasePopulation(context) {
      context.commit("increasePopulation");
    },
    increaseHousing(context) {
      if (this.state.resources.wood >= 5) {
        this.state.bools.alertBool = false;
        context.commit("increaseHousing");
        context.commit("decreaseWood", 5);
        this.state.actionLog.unshift("You built a tent.");
      } else {
        console.log("from store: not enough wood!");
        this.state.bools.alertBool = true;
        setTimeout(() => {
          this.state.bools.alertBool = false;
        }, 4000);
      }
    },
    increaseTraps(context) {
      context.commit("increaseTraps");
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
  },
  getters: {
    getActionLog: (state) => state.actionLog,
    getBools: (state) => state.bools,
    getCamp: (state) => state.camp,
    getRes: (state) => state.resources,
    getPlayer: (state) => state.player,
  },
  modules: {},
});
