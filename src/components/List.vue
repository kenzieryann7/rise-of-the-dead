<template>
  <div class="h5 font-weight-bold">{{ header }}</div>
  <div class="boxshadow card card-body">
    <div class="m-3">
      <div class="row">
        <div
          v-for="(elem, i) in data"
          class="col-12 col-sm-6 col-md-4 col-lg-3 p-2"
          v-bind:key="i"
        >
          <button
            class="btn btn-link text-left p-0 textsize-small js-list-entry"
            v-on:click="() => clickHandle()"
          >
            {{ elem }}
          </button>
        </div>

        <!-- {{#each elements}}
			 	<div class='col-12 col-sm-6 col-md-4 col-lg-3 p-2'>
				  	{{#if hasData }}
				  		<span class='textsize-small text-left text-muted p-0'><del>{{{ name }}}</del></span>
				  	{{else}}
				  		<button class='btn btn-link text-left p-0 textsize-small js-list-entry {{../bindClass}}' data-id='{{ id }}'>{{{ name }}}</button>
				  	{{/if}}
			  	</div>
			{{/each}}
            -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "List",
  props: {
    header: String,
    data: {
      type: Array,
      required: true,
    },
  },
  methods: {
    clickHandle() {},
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
