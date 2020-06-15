<template>
<div>
  <Nav v-if="status == 'null' " />
  
  <nuxt />

  <footer id="footer" v-if="status == 'null'" class="d-none d-lg-block">
    <div class="container">
      <div class="copyright">
        &copy; Copyright <strong><span>Kodearsip.com</span></strong>. All Rights Reserved 2020
      </div>
    </div>
  </footer>

  <nav class="navbar fixed-bottom navbar-light d-lg-none " style="background-color: #1acc8d; height: 50px;">
    <div class="container col-12">
      <div class="col-2" @click="link_home()">
        <i class="fa fa-home active fa-lg fa-2x fa-2x" style="float: left;" v-if="homes == false"></i>
        <div class="text-light" v-if="homes == true">
          <i class="fa fa-home active fa-lg fa-2x fa-2x" style="float: left;"></i>
        </div> 
      </div>
      <div class="col-2" @click="link_dunia()">
        <i class="fa fa-globe-americas active fa-lg fa-2x" style="float: left;" v-if="dunia == false"></i>
        <div class="text-light" v-if="dunia == true">
          <i class="fa fa-globe-americas active fa-lg fa-2x fa-2x" style="float: left;"></i>
        </div>
      </div>
      
      <div class="col-2" @click="link_kontak()">
        <i class="fa fa-stethoscope active fa-lg fa-2x" style="float: left;" v-if="kontak == false"></i>
        <div class="text-light" v-if="kontak == true">
          <i class="fa fa-stethoscope active fa-lg fa-2x fa-2x" style="float: left;"></i>
        </div>
      </div>
      <div class="col-2" @click="link_faq()">
        <i class="fa fa-question-circle active fa-lg fa-2x" style="float: left;" v-if="faq == false"></i>
        <div class="text-light" v-if="faq == true">
          <i class="fa fa-question-circle active fa-lg fa-2x fa-2x" style="float: left;"></i>
        </div>
      </div>
    </div>
    
  </nav>

  <a href="#" class="back-to-top"><i class="icofont-simple-up"></i></a>
</div>
</template>

<script>
import Nav from '~/components/Navigation'
export default {
  props: ['error'],
  layout: 'blog',

  data() {
    return {
      homes: false,
      dunia: false,
      kontak: false,
      faq: false,
    }
  },

  components: {
    Nav
  },

  computed: {
    status () { return this.$store.state.code }
  },

  mounted() {
    if (this.$route.path == '/') {
      this.homes = true
      this.dunia = false
      this.kontak = false
      this.faq = false
    } else if(this.$route.path == '/dunia') {
      this.dunia = true
      this.homes = false
      this.kontak = false
      this.faq = false
    }else if(this.$route.path == '/kontak') {
      this.kontak = true
      this.dunia = false
      this.homes = false
      this.faq = false
    }else if(this.$route.path == 'faq') {
      this.faq = true
      this.dunia = false
      this.kontak = false
      this.homes = false
    }
  },

  methods: {
    link_home() {
      this.$router.replace('/')
      this.homes = true
      this.dunia = false
      this.kontak = false
      this.faq = false
    },
    link_dunia() {
      this.$router.replace('/dunia')
      this.homes = false
      this.dunia = true
      this.kontak = false
      this.faq = false
    },
    link_kontak() {
      this.$router.replace('/kontak')
      this.homes = false
      this.dunia = false
      this.kontak = true
      this.faq = false
    },
    link_faq() {
      this.$router.replace('/faq')
      this.homes = false
      this.dunia = false
      this.kontak = false
      this.faq = true
    }
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

</style>
