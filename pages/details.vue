<template>
  <center>
  <div class="mt-5"><br><br>
    <div class="container mt-5"><h2>Data di Negara {{ article.Country }}</h2>
      <div class="row justify-content-md-center">
        <div class="col-12 col-sm-12">

          <img :src="'https://simomot.files.wordpress.com/2011/02/flag-'+(article.Slug)+'.gif'" alt="Bendera Negara" onerror="this.onerror=null; this.src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQD0vYpOmIHTGFvQ-DkcLP-EkW0NO7VUaj5Cd3Dqm6fB2-FZVNU&usqp=CAU'" width="250px;">
          <p class="card-text"><small class="text-muted">{{ article.CountryCode }} - {{ article.Country }}</small></p>
          <h5 class="card-title">{{ article.Country }} - <small class="text-muted">{{ article.Date }}</small></h5>
          
            <div class="md-4">Kasus :
              <p class="card-text text-warning"><i class="fa fa-circle"></i><small> Baru {{ article.NewConfirmed }}</small></p>
            </div>
            <div class="md-4">
              <p class="card-text text-info"><i class="fa fa-circle"></i><small> Terkonfirmasi {{ article.TotalConfirmed }}</small></p>
            </div>
            <div class="md-4">
              <p class="card-text text-success"><i class="fa fa-circle"></i> Sembuh {{ article.TotalRecovered }} +{{ article.NewRecovered }}</p>
            </div>
            <div class="md-4">
              <p class="card-text text-danger"><i class="fa fa-circle"></i><small> Meninggal {{ article.TotalDeaths }} +{{ article.NewDeaths }}</small></p>
            </div><br><br>

            <button class="btn btn-secondary btn-sm" @click="kembali()"><i class="fa fa-arrow-left"></i> Kembali</button>
            <br><br>
            <h2>Grafik Kasus <br> <small style="font-size: 10px; color: green">*Klik <i class="fa fa-arrow-down"></i> Untuk Memfokuskan Diagram</small></h2>
            <h3 v-if="this.kosong == true" class="text-success"><i class="fa fa-check-circle fa-2x"></i> <br>BELUM ADA KASUS TERKONFIRMASI</h3>
        </div>
      </div>
    </div>
    <div id="app" class="col-12 col-sm-12 col-lg-6 mb-5">
        <p v-if="loading"><i class="fa fa-spinner fa-pulse"></i> Loading...</p>
      <canvas id="planet-chart"></canvas>
    </div>
  </div>
  
</center>

</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'
import axios from 'axios'
import Chart from 'chart.js'

export default {
  data() {
  	return {
  		deleteModal: false,
      planetChartData: [],
      konfirm: [],
      meninggal: [],
      sembuh: [],
      labels: [],
      kosong: false,
      loading: false
  	}
  },
  computed: {
    article () { return this.$store.state.negara }
  },
  mounted() {
    this.start()
    axios('https://api.covid19api.com/dayone/country/'+this.article.Slug).then( ({ data }) => {
      // this.allPost = data.Countries  
      if (data.length === 0) {
        this.kosong = true
        this.finish()
      }
      data.map((item, key) => {
        this.konfirm.push(item.Confirmed)
        this.labels.push((item.Date).substring(5,10))
        this.meninggal.push(item.Deaths)
        this.sembuh.push(item.Recovered)

        this.planetChartData = {
          type: 'line',
          data: {
            labels: this.labels,
            datasets: [
              { // Konfirm
                label: 'Total Terkonfirmasi',
                data: this.konfirm,
                backgroundColor: [
                  'rgba(255, 0, 0,.5)',
                ],
                borderColor: [
                  '#ff0000',
                ],
                
                borderWidth: 3
              },

              { // Sembuh
                label: 'Total Sembuh',
                data: this.sembuh,
                backgroundColor: [
                  'rgba(0, 255, 60,.5)',
                ],
                borderColor: [
                  '#00ff3c',
                ],
                borderWidth: 3
              },

              { // Meninggal
                label: 'Total Meninggal',
                data: this.meninggal,
                backgroundColor: [
                   'rgba(255, 247, 0,.5)',
                ],
                borderColor: [
                  '#fff700',
                ],
                borderWidth: 3
              }
            ]
          },
          options: {
            responsive: true,
            // lineTension: 1,
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: false,
                  padding: 25,
                }
              }]
            }
          }
        }
        this.createChart('planet-chart', this.planetChartData)
        this.finish()
      })
    })

    
  },
  methods: {
    kembali() {
      this.$router.replace({'path': '/dunia'})
    },
    createChart(chartId, chartData) {
      const ctx = document.getElementById(chartId);
      const myChart = new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options,
      });
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

<style scoped>
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding-top: 200px;
  font-size: 30px;
  font-family: sans-serif;
}
</style>