const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        components: "@/components",
        assets: "@/assets",
        common: "@/common",
        network: "@/network",
        views: "@/views",
      },
    },
    devtool: "source-map",
  },
});
