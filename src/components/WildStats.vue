<template>
  <div class="card shadow table-text">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">
        <div class="row">
          <div class="col text-start">Workers</div>
          <div class="col text-end">{{ camp.population }}</div>
        </div>
      </li>
      <li class="list-group-item">
        <div class="row">
          <div class="col text-start">Gatherer</div>
          <div class="col text-end">0</div>
        </div>
      </li>
      <li class="list-group-item">
        <div class="row">
          <div class="col text-start">Hunter</div>
          <div class="col text-end">0</div>
        </div>
      </li>
      <li class="list-group-item">
        <div class="row">
          <div class="col text-start">Chef</div>
          <div class="col text-end">0</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "CampStats",
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      camp: "getCamp",
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
