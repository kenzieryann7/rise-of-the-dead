<template>
  <div class="card shadow table-text">
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
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import campData from "@/data/camp-stats.json";

export default {
  name: "CampStats",
  props: {},
  data() {
    return {
      campData: campData,
    };
  },
  computed: {
    ...mapGetters({
      campStore: "getCamp",
    }),
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hi {
  background: lightcoral;
}
</style>
