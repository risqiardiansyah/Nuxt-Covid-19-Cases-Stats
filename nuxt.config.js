
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Corona Update - Kodearsip.com' || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/ka_favicon.png' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css' },
      // { rel: 'stylesheet', type: 'text/css', href: 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' }
      { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css' }
    ],

    script: [
      { src: "/vendor/jquery/jquery.min.js" },
      { src: "/vendor/bootstrap/js/bootstrap.bundle.min.js" },
      // { src: "/vendor/jquery-easing/jquery.easing.min.js" },
      // { src: "/vendor/owl.carousel/owl.carousel.min.js" },
      // { src: "/vendor/aos/aos.js" },
      // { src: "/vendor/counterup/counterup.min.js" },
      // { src: "/vendor/waypoints/jquery.waypoints.min.js" },
      // { src: "/vendor/venobox/venobox.min.js" },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#0000ff' },
  /*
  ** Global CSS
  */
  css: [
   { src: '@/assets/vendor/boxicons/css/boxicons.min.css', lang: 'css' },
   // { src: '@/assets/vendor/venobox/venobox.css', lang: 'css' },
   // { src: '@/assets/vendor/remixicon/remixicon.css', lang: 'css' },
   // { src: '@/assets/vendor/aos/aos.css', lang: 'css' },
   // { src: '@/assets/vendor/owl.carousel/assets/owl.carousel.min.css', lang: 'css' },
   { src: '@/assets/css/style.css', lang: 'css' }
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '@plugins/aos', ssr: false },
    { src: '~plugins/ga.js', mode: 'client' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/svg',
    '@nuxtjs/component-cache',
    ['@nuxtjs/component-cache', {
      max: 10000,
      maxAge: 1000 * 60 * 60
    }],
    // 'nuxt-compress',
    // ['nuxt-compress',{
    //   gzip: {
    //     cache: true
    //   },
    //   brotli: {
    //     treshold: 10240
    //   }
    // }]
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, { isClient }) {
      config.module.rules.push({
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 100000,
            }
          }
        ],
        exclude: /(node_modules)/
      });
    }
  }
}
