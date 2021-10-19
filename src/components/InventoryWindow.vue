<template>
  <div class="card border-dark border-2 shadow table-text">
    <div class="card-header bg-dark fw-bold text-white">
      Inventory
    </div>
    <table class="table table-secondary table-striped m-0">
      <tbody>
        <tr v-for="res in resData" :key="res.id">
          <td class="text-start">{{ res.label }}</td>
          <td v-if="res.label == 'Wood'" class="text-start">{{ res.wood }}</td>
          <td v-if="res.label == 'Stone'" class="text-start">
            {{ res.stone }}
          </td>
          <td v-if="res.label == 'Ore'" class="text-start">{{ res.ore }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import resData from "@/data/resources.json";

export default {
  name: "InventoryWindow",
  props: {},
  data() {
    return {
      resData: resData,
    };
  },
  computed: {
    ...mapGetters({
      res: "getRes",
    }),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
