
module.exports = {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: "大家好",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "房小团摇号助手-成都新房信息综合平台-买房摇号就上摇号助手",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#409EFF" },
  /*
   ** Global CSS
   */
  css: ["element-ui/lib/theme-chalk/index.css", "~assets/css/common.css"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "@/plugins/element-ui",
    { src: "~/plugins/vue-awesome-swipe", ssr: false },
    { src: "@/plugins/loading", ssr: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        path: "/list/*",
        component: resolve(__dirname, "pages/list/index.vue")
      });
    }
  }
};
