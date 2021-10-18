<template>
  <div class="card shadow table-text">
    <div class="card-header fw-bold">
      Inventory
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">
        <div class="row">
          <div class="col">Wood</div>
          <div class="col">{{ res.wood }}</div>
        </div>
      </li>
      <li class="list-group-item">
        <div class="row">
          <div class="col">Stone</div>
          <div class="col">{{ res.stone }}</div>
        </div>
      </li>
      <li class="list-group-item">
        <div class="row">
          <div class="col">Ore</div>
          <div class="col">{{ res.ore }}</div>
        </div>
      </li>
      <li class="list-group-item">
        <div class="row">
          <div class="col">Meat</div>
          <div class="col">{{ res.meat }}</div>
        </div>
      </li>
      <li class="list-group-item">
        <div class="row">
          <div class="col">Leather</div>
          <div class="col">{{ res.leather }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "InventoryWindow",
  props: {},
  data() {
    return {};
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
