<template>
  <div class="card mb-3" style="max-height: 20rem">
    <div class="card-body overflow-auto p-0">
      <table class="table table-striped m-0">
        <tbody>
          <tr v-for="action in actionLog" :key="action">
            <td>
              {{ action }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "ActionLog",
  props: {
    actionLog: Array,
  },
  data() {
    return {
      recentLog: false,
    };
  },
  computed: {},
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hi {
  background: lightcoral;
}
</style>
