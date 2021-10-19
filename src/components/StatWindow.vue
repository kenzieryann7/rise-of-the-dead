<template>
  <div class="card border-dark border-2 shadow table-text">
    <div class="card-header bg-dark fw-bold text-white">
      <div class="row">
        <div class="col text-start">
          Statistics
        </div>
        <div class="col text-end">
          <small>
            Attribute Points:
            {{ player.stats.attributePoints }}</small
          >
        </div>
      </div>
    </div>

    <table class="table table-secondary table-striped m-0">
      <tbody>
        <tr v-for="stat in statData" :key="stat.id">
          <td class="text-start">{{ stat.label }}</td>
          <td v-if="stat.label == 'Strength'" class="text-end">
            {{ player.stats.strength }}
          </td>
          <td v-if="stat.label == 'Health'" class="text-end">
            {{ player.stats.health }}
          </td>
          <td v-if="stat.label == 'Defense'" class="text-end">
            {{ player.stats.defense }}
          </td>
          <td v-if="stat.label == 'Agility'" class="text-end">
            {{ player.stats.agility }}
          </td>
          <td v-if="stat.label == 'Damage'" class="text-end">
            {{ player.stats.damage }}
          </td>
          <td
            class="text-end"
            :class="{ 'text-muted': player.stats.attributePoints == 0 }"
          >
            <i
              id="addAttribute"
              class="bi h5 bi-plus-circle-fill me-2"
              :class="[
                { '': player.stats.attributePoints == 0 },
                { pointer: player.stats.attributePoints > 0 },
              ]"
              @click="attributeAllocation('addAttribute', stat.label)"
            ></i>
            <i
              id="subAttribute"
              class="bi h5 bi-dash-circle-fill"
              :class="[
                { '': player.stats.attributePoints == 0 },
                { pointer: player.stats.attributePoints > 0 },
              ]"
              @click="attributeAllocation('subAttribute', stat.label)"
            ></i>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- <ul class="list-group list-group-flush">
      <li class="list-group-item" v-for="stat in statData" :key="stat.id">
        <div class="row">
          <div class="col">{{ stat.label }}</div>
          <div class="col">{{ stat.amount }}</div>
        </div>
      </li>
    </ul> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
import statData from "@/data/stats.json";

export default {
  name: "StatWindow",
  props: {},
  data() {
    return {
      statData: statData,
    };
  },
  computed: {
    ...mapGetters({
      player: "getPlayer",
    }),
  },
  methods: {
    ...mapActions({
      increaseAttributePoints: "increaseAttributePoints",
      spendAttributePoints: "spendAttributePoints",
      removeAttributePoints: "removeAttributePoints",
    }),
    attributeAllocation(operator, id) {
      if (
        operator == "addAttribute" &&
        this.player.stats.attributePoints >= 0
      ) {
        this.spendAttributePoints(id);
      }
      if (
        operator == "subAttribute" &&
        this.player.stats.attributePoints >= 0
      ) {
        this.removeAttributePoints(id);
      }
    },
  },
  mounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pointer {
  cursor: pointer;
}

.pointer:hover {
  color: rgb(136, 2, 231);
}
</style>
