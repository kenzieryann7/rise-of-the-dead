<template>
  <div
    class="card shadow border border-dark border-3 mb-3"
    style="max-height: 40rem"
  >
    <div class="card-header bg-dark fw-bold text-white">
      Log
    </div>
    <div class="card-body overflow-auto p-0">
      <table class="table table-secondary table-striped m-0">
        <tbody>
          <tr v-for="action in actionLog" :key="action">
            <td class="text-start">
              <span>{{ action }}</span>
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
  name: "ActionLog",
  data() {
    return {
      timestamp: "",
    };
  },
  computed: {
    ...mapGetters({
      actionLog: "getActionLog",
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
