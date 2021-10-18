<h1 align='center'>
vue3-bootstrap5-boilerplate
</h1>
<p align='center'>
Vue 3, Vuex, Bootstrap 5, Bootstrap Icons
</p>
<br><br>

## Setup

### env

`.env` should include:

* `APP_VUE_COURSE` : course name
* `APP_VUE_TITLE` : activity name


#### public keys
<details>
* `.env.development` should include your development public key.
* `.env.production` should include your production public key.

The above files are all tracked in git, and should never contain private credentials.

#### local files

`.env.local` will override `.env` values and will not be tracked by git.
</details>

## Development

### Visual Studio

Set up your IDE for Vue projects so we don't have git commits that are just formatting issues.

[Vue Mastery - VS Code Setup](https://www.vuemastery.com/courses/real-world-vue-js/optimizing-your-editor)

### Bootstrap

The UI library Vue projects use is Bootstrap for consistency.

* https://getbootstrap.com/
* https://icons.getbootstrap.com/

## Deployment

### vue.config.js
<details>

Deployment URLs have two components, one being the domain (subdomain.domain.tld) and the folder (project specific). By default, we use Amazon S3 for hosting.

Ex: `https://demo.oregonstate.education/example/`

In **vue.config.js** update the following values to include your **bucket**.

* `bucket`

In **vue.config.js** update the following values to include your **folder**.

* `publicPath`
* `pluginOptions.deployPath`
* `pluginOptions.cloudFrontMatcher`

`cloudfrontId` is per a specific bucket, so make sure your cloudFrontId you use is appropriate in case you have a different bucket than the default.
</details>

Deployment uses [Vue CLI Plugin S3 Deploy](https://github.com/multiplegeorges/vue-cli-plugin-s3-deploy) to transfer files to S3 from the build folder (typically `dist`) and then optionally, uses **Cloudfront** invalidation to remove cache.
