<template>
  <div class="card border-dark border-2 shadow table-text">
    <div class="card-header bg-dark fw-bold text-white">
      Statistics
    </div>

    <table class="table table-secondary table-striped m-0">
      <tbody>
        <tr v-for="stat in statData" :key="stat.id">
          <td class="text-start">{{ stat.label }}</td>
          <td class="text-start">{{ stat.amount }}</td>
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
import statData from "@/data/stats.json";

export default {
  name: "StatWindow",
  props: {},
  data() {
    return {
      statData: statData,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
