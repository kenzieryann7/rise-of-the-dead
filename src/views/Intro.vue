<template>
  <h1 class="mb-5">
    <span class="fw-bold me-3 text-white">{{ course }}</span
    ><br />
    <span class="fw-bold">{{ title }}</span>
  </h1>

  <div class="container">
    <div class="row">
      <div class="col">
        <!-- LOGIN -->
        <div v-if="showLoginCard" class="card bg-dark text-white mb-5 shadow">
          <div class="card-header fw-bold h5">Login</div>
          <div class="card-body">
            <div class="mb-2 text-start">
              <div class="row">
                <div class="col-4">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Username</label
                  >
                </div>
                <div class="col">
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Username"
                  />
                </div>
              </div>
            </div>
            <div class="text-start">
              <div class="row">
                <div class="col-4">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Password</label
                  >
                </div>
                <div class="col">
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Password"
                  />
                </div>
              </div>
            </div>
            <div class="text-end mb-3">
              <a href="#" class="forget-password"
                ><small>Forgot password?</small></a
              >
            </div>
            <div class="">
              <div class="row">
                <div class="col"></div>
                <div class="col text-center">
                  <router-link
                    :to="{ name: buttonView }"
                    class="btn btn-purple fw-bold text-white"
                    @click="(showRegisterCard = false), (showLoginCard = true)"
                    >Login</router-link
                  >
                </div>
                <div class="col text-end">
                  <button
                    type="button"
                    class="btn btn-sm btn-purple text-white"
                    @click="(showRegisterCard = true), (showLoginCard = false)"
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- REGISTER -->
        <div
          v-if="showRegisterCard"
          class="card bg-dark text-white mb-5 shadow"
        >
          <div class="card-header fw-bold h5">
            Register
          </div>
          <div class="card-body">
            <div class="mb-2 text-start">
              <div class="row">
                <div class="col-4">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Username</label
                  >
                </div>
                <div class="col">
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Username"
                  />
                </div>
              </div>
            </div>
            <div class="mb-2 text-start">
              <div class="row">
                <div class="col-4">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Password</label
                  >
                </div>
                <div class="col">
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Password"
                  />
                </div>
              </div>
            </div>
            <div class="mb-2 text-start">
              <div class="row">
                <div class="col-4">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Verify Password</label
                  >
                </div>
                <div class="col">
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Verify Password"
                  />
                </div>
              </div>
            </div>
            <div class="mb-2 text-start">
              <div class="row">
                <div class="col-4">
                  <label for="exampleFormControlInput1" class="form-label"
                    >Email Address</label
                  >
                </div>
                <div class="col">
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Email"
                  />
                </div>
              </div>
            </div>
            <div class="text-start">
              <button
                type="button"
                class="btn btn-sm btn-purple text-white"
                @click="(showRegisterCard = false), (showLoginCard = true)"
              >
                <i class="bi bi-arrow-left-circle h5"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- GAME DETAILS -->
      <div class="col-8">
        <div class="card bg-dark text-white mb-5">
          <div class="card-header fw-bold">{{ cardTitle }}</div>
          <div class="card-body">{{ cardBody }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import content from "@/data/content-intro.json";

// @ is an alias to /src
//import Card from "@/components/Card.vue";

export default {
  name: "Intro",
  data() {
    return {
      course: process.env.VUE_APP_COURSE,
      title: process.env.VUE_APP_TITLE,
      cardTitle: content.cardTitle,
      cardBody: content.cardBody,
      buttonLabel: content.buttonLabel,
      buttonView: content.buttonView,
      showRegisterCard: false,
      showLoginCard: true,
    };
  },
};
</script>

<style scoped>
.forget-password {
  text-decoration: none;
  color: rgb(170, 51, 255);
}

.forget-password:hover {
  text-decoration: underline;
  color: white;
}
</style>
