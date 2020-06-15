<template>
<div class="mt-5">
	<section id="contact" class="contact">
      <div class="container">

        <div class="section-title">
          <h2>Kotak</h2>
          <p>Pusat Bantuan</p>
          <button class="btn btn-success btn-lg" type="button" data-toggle="collapse" data-target="#ListDokter" aria-expanded="false" aria-controls="ListDokter">
            <i class="fab fa-whatsapp"></i> Chat Dengan Dokter
          </button>
          <div class="collapse" id="ListDokter">
            <li class="list-group-item">
                <h4>Pilih Dokter</h4>
              </li>
            <ul class="list-group list-group-flush" v-for="item in data">
              
              <li class="list-group-item">{{item.nama_dokter}}
                <a :href="'https://wa.me/'+item.nomor_dokter" class="btn btn-outline-success btn-sm" target="_blank"><i class="fab fa-whatsapp"></i> Chat</a><br>
                <p class="text-muted" style="font-size: 8px;">Aktif Hari Ini - Pukul {{ waktu.getHours()}}:00</p>
              </li>
            </ul>
            <div class="card card-body" v-if="data == '' ">
              Waktu Untuk Konsultasi Pukul 07:00-20:00
            </div>
          </div>
        </div>

        <div class="row">

          <div class="col-lg-4">
              <div class="info">
                <div class="address">
                  <i class="fa fa-window-maximize"></i>
                  <h4>Website Corona Indonesia:</h4>
                  <p><a href="https://www.covid19.go.id/">https://www.covid19.go.id/</a></p>
                </div>

                <div class="phone">
                  <i class="fa fa-phone"></i>
                  <h4>Call Center:</h4>
                  <p>119</p>
                </div>

                <div class="phone">
                  <i class="fab fa-whatsapp"></i>
                  <h4>Chat Bot:</h4>
                  <p><a href="https://wa.me/6281133399000">0811 333 99 000</a></p>
                </div>

              </div>
          </div>

        </div>
      </div>
    </section>
</div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      data: [],
      waktu: new Date(),
      load: false
    }
  },
  mounted() {
  	this.load = true
    axios('https://server.kodearsip.com/get/'+this.waktu.getHours()+'/'+this.waktu.getDay()).then( ({ data }) => {
    	this.load = false
    	this.nama = data
      	data.data.map((item, key) => {
        	this.data.push(item)
      	})
    })
  }
}

</script>