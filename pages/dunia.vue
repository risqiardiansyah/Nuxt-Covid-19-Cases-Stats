<template>

<div class="container mt-5"><br><br>
	<h2 class="text-center"">Kasus COVID-19 Setiap Negara Di Seluruh Dunia</h2>
    <small class="text-muted"">*Klik Untuk Melihat Detail</small>
	
	<div class="card-columns">
		<div class="card" v-for="item in posts" v-bind:key="item.Country" @click="openDetail(item)">
		 	<img class="card-img-top" :src="'https://simomot.files.wordpress.com/2011/02/flag-'+(item.Slug)+'.gif'" alt="Bendera Negara" onerror="this.onerror=null; this.src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQD0vYpOmIHTGFvQ-DkcLP-EkW0NO7VUaj5Cd3Dqm6fB2-FZVNU&usqp=CAU'">
		 	<div class="card-body">
			    <h5 class="card-title">{{ item.Country }}</h5>
			      <div class="md-4">Kasus :
			        <p class="card-text text-warning"><i class="fa fa-circle"></i><small>  Baru {{ item.NewConfirmed }}</small></p>
			      </div>
			      <div class="md-4">
			        <p class="card-text text-info"><i class="fa fa-circle"></i><small> Terkonfirmasi {{ item.TotalConfirmed }}</small></p>
			      </div>
			      <div class="md-4">
			        <p class="card-text text-success"><i class="fa fa-circle"></i> Sembuh {{ item.TotalRecovered }}</p>
			      </div>
			      <div class="md-4">
			        <p class="card-text text-danger"><i class="fa fa-circle"></i><small> Meninggal {{ item.TotalDeaths }}</small></p>
			      </div>
			    <p class="card-text text-right"><small class="text-muted">Data {{ String(item.Date).substring(0,10) }} Pukul {{ String(item.Date).substring(11,19) }}</small></p>
		 	</div>
		</div>
	</div>

	<div id="preloader" v-if="loading">
		<center style="margin-top: 370px;">Meload Banyak Data, Mohon Tunggu..<br><a href="/" class="btn btn-secondary btn-sm">Batal</a></center>
		
	</div>

</div>

</template>

<script>
import axios from 'axios'
export default {
	data() {
		return {
			posts: [],
			loading: false
		}
	},
	mounted() {
		this.start()
	    axios('https://api.covid19api.com/summary').then( ({ data }) => {
	      this.allPost = data.Countries
	      data.Countries.map((item, key) => {
	        if (item.Country !== null) {
	          this.posts.push(item)
	          this.finish()
	        }
	      })
	    })
	},
	methods: {
		openDetail (data) {
	      this.$store.commit('setNegara', data)
	      this.$router.replace({'path': '/details'})
	    },
	    start () {
	      this.loading = true
	    },
	    finish () {
	      this.loading = false
	    }
	}
}
</script>