<template>
  <div class="mt-5"><br><br>
  	<h1 class="text-center">Data Terkonfirmasi Tiap Provinsi di Indonesia</h1>
  	<br>
    <div id="app" class="col-12 col-sm-12 col-lg-6 mb-5 d-lg-flex d-sm-inline">
        <div id="preloader" v-if="loading"></div>
      	<canvas id="chart_1"></canvas>
      	<canvas id="chart_2"></canvas>
      	<canvas id="chart_3"></canvas>
    </div>
  </div>
  
</template>

<script>
import axios from 'axios'
import Chart from 'chart.js'

export default {
	data() {
		return {
			kosong: false,
			loading: false,
			labels_1: [],
			chart_1: [],
			positif_1: [],

			labels_2: [],
			chart_2: [],
			positif_2: [],

			labels_3: [],
			chart_3: [],
			positif_3: [],
		}
	},
	mounted() {
		this.start()
		axios('https://services5.arcgis.com/VS6HdKS0VfIhv8Ct/arcgis/rest/services/COVID19_Indonesia_per_Provinsi/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json').then( ({ data }) => {
		    data.features.map((item, key) => {
			    // this.data_prov.push(item.attributes)
			    if (item.attributes.FID < 13) {
			    	this.labels_1.push(item.attributes.Provinsi)
			    	this.positif_1.push(item.attributes.Kasus_Posi)
			    }
			    if (item.attributes.FID < 24 && item.attributes.FID > 13) {
			    	this.labels_2.push(item.attributes.Provinsi)
			    	this.positif_2.push(item.attributes.Kasus_Posi)
			    }
			    if (item.attributes.FID <= data.features.length && item.attributes.FID > 24) {
			    	this.labels_3.push(item.attributes.Provinsi)
			    	this.positif_3.push(item.attributes.Kasus_Posi)
			    }
			    this.finish()
			    

			    this.chart_1 = {
				type: 'horizontalBar',
				data: {
					labels: this.labels_1,
					datasets: [{
						label: 'Terkonfirmasi',
				    	backgroundColor: 'rgba(255, 0, 0,.5)',
				        data: this.positif_1
					    }]
					},
					options: {
					    title: {
					        display: true,
					        text: 'klik 2x pada kotak dibawah ini untuk memfokuskan'
					    }
				    }
				}
				this.createChart('chart_1', this.chart_1)

				this.chart_2 = {
				type: 'horizontalBar',
				data: {
					labels: this.labels_2,
					datasets: [{
						label: 'Terkonfirmasi',
				    	backgroundColor: 'rgba(255, 0, 0,.5)',
				        data: this.positif_2
					    }]
					},
					options: {
					    title: {
					        display: true,
					        text: 'klik 2x pada kotak dibawah ini untuk memfokuskan'
					    }
				    }
				}
				this.createChart('chart_2', this.chart_2)

				this.chart_3 = {
				type: 'horizontalBar',
				data: {
					labels: this.labels_3,
					datasets: [{
						label: 'Terkonfirmasi',
				    	backgroundColor: 'rgba(255, 0, 0,.5)',
				        data: this.positif_3
					    }]
					},
					options: {
					    title: {
					        display: true,
					        text: 'klik 2x pada kotak dibawah ini untuk memfokuskan'
					    }
				    }
				}
				this.createChart('chart_3', this.chart_3)
		    })
		})
	},
	methods: {
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
