module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/REPLACE_ME/" : "/",
  pluginOptions: {
    s3Deploy: {
      registry: undefined,
      awsProfile: "default",
      overrideEndpoint: false,
      region: "us-west-2",
      bucket: "",
      createBucket: false,
      staticHosting: true,
      staticIndexPage: "index.html",
      staticErrorPage: "index.html",
      assetPath: "dist",
      assetMatch: "**",
      deployPath: "/REPLACE_ME/",
      acl: "public-read",
      pwa: false,
      enableCloudfront: true,
      cloudfrontId: "E25V8K87R8LY63",
      cloudfrontMatchers: "/REPLACE_ME",
      pluginVersion: "4.0.0-rc3",
      uploadConcurrency: 5
    }
  },
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = `${process.env.VUE_APP_COURSE} | ${process.env.VUE_APP_TITLE}`;
      return args;
    });
  }
};
