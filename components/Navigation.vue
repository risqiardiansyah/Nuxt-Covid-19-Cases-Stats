<template>
<div>
	<header id="header" class="fixed-top d-flex align-items-center col-12" v-if="this.$route.path != '/' " style="background-color: #1acc8d;"><i class="fa fa-angle-left fa-lg fa-2x text-light" @click="kembali()"></i>&nbsp;&nbsp;
	    <div class="col-lg-4 col-sm-6 d-flex" v-if="this.$route.path != '/search'">
	    	<input class="form-control" type="search" placeholder="Cari Negara.." aria-label="Search" v-model="key">&nbsp;&nbsp;
		    <button class="btn btn-primary" @click="cari()" v-if="this.$route.path != 'search' "><i class="fa fa-search"></i></button>
	    </div>
	    <nav class="navbar navbar-expand-lg col-4">
		      <div class="logo mr-auto col-sm-0">
				<a href="/" class="text-light"><span>Kodearsip.com</span></a>
			</div>
	    </nav>
	</header>

  	<section id="hero" style="background: url('/img/hero-bg.jpg')" v-if="this.$route.path == '/' ">

    <div class="container">
      <div class="row">
        <div class="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
          <div data-aos="zoom-out" data-aos-delay="400">
            	<h1>Corona <span>Kodearsip.com</span></h1>
            	<h2>Update Informasi Tentang Kasus Corona Covid-19 Di Indonesia dan Seluruh Dunia.
            	<br><small style="font-size: 10px;">*Data Resmi Dari api.covid19api.com</small></h2>
            <div class="text-center text-lg-left">
              <a href="#about" class="btn-get-started scrollto"><i class="fa fa-user-shield"></i> Tips Menjaga Diri</a>
              <a href="javascript:void(0)" @click="link_faq" class="btn-get-started mt-2"><i class="fab fa-whatsapp"></i> Chat Dengan Dokter</a>
            </div>
          </div>
        </div>
        <div class="col-lg-5 order-1 order-lg-2 hero-img" data-aos="zoom-out" data-aos-delay="500">
        	<h1 class="text-center">Kodearsip.com</h1>
          <img src="/img/medic.png" class="img-fluid animated" alt="">
        </div>
      </div>
    </div>

    
    <svg class="hero-waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28 " preserveAspectRatio="none">
      <defs>
        <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
      </defs>
      <g class="wave1">
        <use xlink:href="#wave-path" x="50" y="3" fill="rgba(255,255,255, .1)" />
      </g>
      <g class="wave2">
        <use xlink:href="#wave-path" x="50" y="0" fill="rgba(255,255,255, .2)" />
      </g>
      <g class="wave3">
        <use xlink:href="#wave-path" x="50" y="9" fill="#fff" />
      </g>
    </svg>

  	</section>
</div>

</template>

<script>

export default {
	data() {
		return {
			key: '',
		}
	},
	methods : {
		cari() {
			if (this.key != '') {
				    this.$store.commit('setKey', (this.key).split(' ').join('-').toLowerCase())
	      		this.$router.replace({'path': '/search'})
	      	}
    	},
    	kembali() {
    		this.$store.commit('setKey', {})
    		this.$store.commit('setNegara', {})
    		if (this.$route.path == '/details') {
    			this.$router.replace({'path': '/dunia'})
    		}else if(this.$route.path == '/dunia') {
    			this.$router.replace({'path': '/'})
    		}else {
    			this.$router.replace({'path': '/'})
    		}
    		
    	},
      link_faq() {
        this.$router.replace('/faq')
      }
	}
}
</script>