<template>
  <center>
  <div class="mt-5"><br><br><h2>Data Negara {{ String(key).toUpperCase() }}</h2>
    <div class="container mt-5">
      <div class="row justify-content-md-center">
        <div class="col-12 col-sm-12" v-for="item in posts">
          <img :src="'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQD0vYpOmIHTGFvQ-DkcLP-EkW0NO7VUaj5Cd3Dqm6fB2-FZVNU&usqp=CAU'" alt="Country">
          <p class="card-text"><small class="text-muted">{{ item.CountryCode }} - {{ item.Country }}</small></p>
          <h5 class="card-title">{{ item.Country }} - <small class="text-muted">{{ item.Date }}</small></h5>
          
            <div class="md-4">Kasus :
              <p class="card-text text-warning"><i class="fa fa-circle"></i><small> Aktif {{ item.Active }}</small></p>
            </div>
            <div class="md-4">
              <p class="card-text text-info"><i class="fa fa-circle"></i><small> Terkonfirmasi {{ item.Confirmed }}</small></p>
            </div>
            <div class="md-4">
              <p class="card-text text-success"><i class="fa fa-circle"></i> Sembuh {{ item.Recovered }} </p>
            </div>
            <div class="md-4">
              <p class="card-text text-danger"><i class="fa fa-circle"></i><small> Meninggal {{ item.Deaths }}</small></p>
            </div><br><br>

          <button class="btn btn-secondary btn-sm" @click="kembali()"><i class="fa fa-arrow-left"></i> Kembali</button>
        </div>
      </div>
    </div>
  </div>

  <div id="preloader" v-if="loading"></div>

</center>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'
import axios from 'axios'

export default {
  data() {
  	return {
  		deleteModal: false,
      key: this.$store.state.key,
      posts: [],
      hari: 0,
      bulan: 0,
      date: new Date(),
      loading: false,
  	}
  },
  mounted () {
    this.hari = String(this.date.getDate()) - 1;
    this.bulan = this.date.getMonth() + 1;
    this.start()
    axios('https://api.covid19api.com/live/country/'+this.key+'/status/confirmed/date/'+this.date.getFullYear()+'-0'+this.bulan+'-'+this.hari+'T20:00:00Z').then( ({ data }) => {
      // this.negara = data.Country
      if (data.length == 0) {
          this.$store.commit('setKey', {})
          this.$router.replace({'path': '/'}).then(() => {
            alert("Negara Tidak Ada...")
          })
        }
      data.map((item, key) => {
        this.posts.push(item)
        this.finish()
      })
    })

  },
  computed: {
    article () { return this.posts }
  },
  methods: {
    kembali() {
      this.$router.replace({'path': '/'})
    },
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    }
  },
  
}
</script>