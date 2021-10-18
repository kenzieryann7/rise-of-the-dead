<template>
  <div
    class="navbar navbar-dark bg-dark text-white border-top text-small footer"
  >
    <div class="container-fluid">
      <div class="row">
        <div class="col text-start">&copy; {{ year }} PantherGames</div>
        <div class="col text-end">
          <a href="#" @click="toggleVersion" class="">
            {{ version }}
          </a>
          <a
            class="ms-3"
            target="_blank"
            href="https://main.oregonstate.edu/digital-millennium-copyright-act-contact-information"
            >Copyright</a
          >

          <a
            class="ms-3"
            target="_blank"
            href="https://oregonstate.edu/official-web-disclaimer"
            >Disclaimer</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data: () => {
    return {
      showVersion: false,
    };
  },
  props: {},
  computed: {
    year() {
      return new Date().getFullYear();
    },
    version() {
      let version = "";

      if (this.showVersion) {
        version = document.lastModified;
      } else {
        version = "Version";
      }

      return version;
    },
  },
  methods: {
    toggleVersion() {
      this.showVersion = !this.showVersion;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.text-small {
  font-size: 0.8em;
}

a {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
