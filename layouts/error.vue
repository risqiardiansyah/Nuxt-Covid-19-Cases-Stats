<template>
	<div class="container text-center" style="margin-top: 100px;">

		<div v-if="error.statusCode === 500">
			<i class="fa fa-warning fa-lg text-warning"></i><br>
			<img src="/img/err.png" width="200px">
			<h3>Oops.. {{ props }}</h3>
			<h5>Gagal terhubung ke server nih, coba lagi ya..{{error.statusCode}}</h5><br>
			<button class="btn btn-success" @click="reload()">Coba Lagi</button>
		</div>

		<div v-if="error.statusCode === 404">
			<i class="fa fa-warning fa-lg text-warning"></i><br>
			<img src="/img/404.jpg" width="200px">
			<h3>Oops.. {{ props }}</h3>
			<h5>Halaman yang kamu tuju nggak ada nih, coba lagi ya.. {{error.statusCode}}</h5><br>
			<button class="btn btn-success" @click="home()">Beranda</button>
		</div>

		<div v-if="error.statusCode !== 404 && error.statusCode !== 500">
			<i class="fa fa-warning fa-lg text-warning"></i><br>
			<img src="/img/404.jpg" width="200px">
			<h3>Oops.. {{ props }}</h3>
			<h5>Saat Ini sistem sedang maintance nih, maaf ya :) {{error.statusCode}}</h5><br>
			<button class="btn btn-success" @click="home()">Coba Lagi</button>
		</div>

	</div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'blog', // Anda dapat mengatur layout kustom untuk halaman kesalahan

  mounted() {
    this.$store.commit('setStatusCode', '500')
  },

  methods: {
  	reload() {
  		window.location.reload()
  	},
  	home() {
  		this.$router.replace('/')
  	}
  },
  computed: {
    status () { return this.$store.state.code }
  },
}
</script>