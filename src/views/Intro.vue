<template>
  <h1 class="mb-5">
    <span class="fw-bold text-muted me-3">{{ course }}</span
    ><br />
    <span class="fw-bold">{{ title }}</span>
  </h1>

  <div class="container">
    <div class="row justify-content-center">
      <div class="col-6">
        <div class="card mb-5">
          <div class="card-header fw-bold">{{ cardTitle }}</div>
          <div class="card-body">{{ cardBody }}</div>
        </div>
      </div>
    </div>

    <router-link
      :to="{ name: buttonView }"
      class="btn btn-lg btn-primary fw-bold"
      >{{ buttonLabel }}</router-link
    >
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
      buttonView: content.buttonView
    };
  }
};
</script>
