<template>
  <div class="card shadow table-text">
    <div class="card-body p-0">
      <table class="table table-secondary table-striped m-0">
        <tbody>
          <tr>
            <td class="text-start">
              Workers
            </td>
            <td class="text-start">
              {{ camp.population }}
            </td>
          </tr>
          <tr>
            <td class="text-start">
              Gatherers
            </td>
            <td class="text-start">
              0
            </td>
          </tr>
          <tr>
            <td class="text-start">
              Hunters
            </td>
            <td class="text-start">
              0
            </td>
          </tr>
          <tr>
            <td class="text-start">
              Chefs
            </td>
            <td class="text-start">
              0
            </td>
          </tr>
        </tbody>
      </table>
    </div>
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
