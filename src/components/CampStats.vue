<template>
  <div class="card shadow table-text border border-secondary border-2">
    <div class="card-body p-0">
      <table class="table table-secondary table-striped m-0">
        <tbody>
          <tr v-for="camp in campData" :key="camp.id">
            <td class="text-start">{{ camp.label }}</td>
            <td v-if="camp.label == 'Population'" class="text-start">
              {{ campStore.population }}
            </td>
            <td v-if="camp.label == 'Housing'" class="text-start">
              {{ campStore.housing }}
            </td>
            <td v-if="camp.label == 'Animal Traps'" class="text-start">
              {{ campStore.traps }}
            </td>
          </tr>
          <tr v-show="campStore.buildings.hasBuilding">
            <td class="text-start fw-bold text-white bg-dark p-1">
              Buildings:
            </td>
            <td class="text-start bg-dark"></td>
          </tr>
          <tr v-show="campStore.buildings.showForge">
            <td class="text-start">
              Forge
            </td>
            <td class="text-start">
              <i
                class="bi bi-arrow-right-circle-fill h5 building-pointer"
                @click="showBuilding('Forge')"
              ></i>
            </td>
          </tr>
          <tr v-show="campStore.buildings.showTavern">
            <td class="text-start">
              Tavern
            </td>
            <td class="text-start">
              <i
                class="bi bi-arrow-right-circle-fill h5 building-pointer"
                @click="showBuilding('Tavern')"
              ></i>
            </td>
          </tr>
          <tr v-show="campStore.buildings.showArmory">
            <td class="text-start">
              Armory
            </td>
            <td class="text-start">
              <i
                class="bi bi-arrow-right-circle-fill h5 building-pointer"
                @click="showBuilding('Armory')"
              ></i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import campData from "@/data/camp-stats.json";
import buildingData from "@/data/buildings.json";

export default {
  name: "CampStats",
  props: {},
  data() {
    return {
      campData: campData,
      buildingData: buildingData,
    };
  },
  computed: {
    ...mapGetters({
      campStore: "getCamp",
    }),
  },
  methods: {
    showBuilding(building) {
      console.log(building);
      this.campStore.buildings.showBuilding = true;
      this.campStore.buildings.buildingType = building;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hi {
  background: lightcoral;
}
.building-pointer {
  cursor: pointer;
}

.building-pointer:hover {
  color: rgb(136, 2, 231);
}
</style>
