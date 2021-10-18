import { createStore } from "vuex";

// STATE is the data.
// MUTATIONS change state, and are uppercase.
// ACTIONS `commit` mutations, and invoked by `dispatch`
// GETTERS is how state is read.

export default createStore({
  state: {
    player: {
      level: 1,
      xp: 0,
      xpCap: 5,
    },
    camp: {
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
    // CAMP STATS
    increasePopulation(context) {
      context.commit("increasePopulation");
    },
    increaseHousing(context) {
      context.commit("increaseHousing");
    },
    increaseTraps(context) {
      context.commit("increaseTraps");
    },
    // RESOURCES
    increaseWood(context, n) {
      context.commit("increaseWood", n);
    },
    decreaseWood(context) {
      context.commit("decreaseWood");
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
    getCamp: (state) => state.camp,
    getRes: (state) => state.resources,
    getPlayer: (state) => state.player,
  },
  modules: {},
});
