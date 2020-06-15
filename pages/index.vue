<template>
  
  <div class="mt-5">
      <div class="container">
        <center>
          <h1 data-eos="fade-up" v-if="!loading">Kasus COVID-19 Di Seluruh Dunia</h1>
          <p v-for="y in this.$store.state.code">{{ y.error }}</p>
        </center>
      </div>

      <section id="counts" class="counts">
        <div class="container">
          <div class="row" data-aos="fade-up">


            <div class="col-lg-3 col-md-6 col-sm-2">
              <div class="count-box shadow">
                <i class="fa fa-ambulance bg-info text-light"></i>
                <span data-toggle="counter-up" class="text-info">{{ Number(dunia.NewConfirmed).toLocaleString() }}</span>
                <p class="text-info"><b>Baru</b></p>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 mt-5 mt-md-0">
              <div class="count-box shadow">
                <i class="fa fa-hospital fa-alt-5 bg-warning text-light"></i>
                <span data-toggle="counter-up" class="text-warning">{{ Number(dunia.TotalConfirmed).toLocaleString() }}</span>
                <p class="text-warning"><b>Terkonfirmasi</b></p>
              </div>
            </div>
            
            <div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
              <div class="count-box shadow">
                <i class="fa fa-minus-circle bg-danger text-light"></i>
                <span data-toggle="counter-up" class="text-danger">{{ Number(dunia.TotalDeaths).toLocaleString() }}</span>
                <p class="text-danger"><b>Meninggal</b></p>
              </div>
            
            </div>
            <div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
              <div class="count-box shadow">
                <i class="fa fa-check-square bg-success text-light"></i>
                <span data-toggle="counter-up" class="text-success">{{ Number(dunia.TotalRecovered).toLocaleString() }}</span>
                <p class="text-success"><b>Sembuh</b></p>
              </div>
            </div>
          </div>
        </div>
        <center>
          <button class="btn btn-lime btn-lg mt-5" @click="semua()">
            Lihat Data Tiap Negara
            <i class="fa fa-angle-double-right"></i>
          </button>
        </center>
      </section>

      <div class="container" v-if="!loading">
        <center>
          <h1 data-eos="fade-up" class="mt-5">Kasus COVID-19 Di Indonesia</h1>
        </center>
      </div>
      
      <section id="counts" class="counts">
        <div class="container" v-for="ind in indonesia">
          <div class="row" data-aos="fade-up">

            <div class="col-lg-3 col-md-6 col-sm-2">
              <div class="count-box shadow">
                <i class="fa fa-ambulance fa-alt-5 bg-info"></i>
                <span data-toggle="counter-up" class="text-info">{{ Number(ind.NewConfirmed).toLocaleString() }}</span>
                <p class="text-info"><b>Baru</b></p>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 mt-5 mt-md-0">
              <div class="count-box shadow">
                <i class="fa fa-hospital fa-alt-5 bg-warning"></i>
                <span data-toggle="counter-up" class="text-warning">{{ Number(ind.TotalConfirmed).toLocaleString() }}</span>
                <p class="text-warning"><b>Terkonfirmasi</b></p>
              </div>
            </div>
            
            <div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
              <div class="count-box shadow">
                <i class="fa fa-minus-circle fa-alt-5 bg-danger"></i>
                <span data-toggle="counter-up" class="text-danger">{{ Number(ind.TotalDeaths).toLocaleString() }}</span>
                <p class="text-danger"><b>Meninggal</b></p>
              </div>
            
            </div>
            <div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
              <div class="count-box shadow">
                <i class="fa fa-check-square fa-alt-5 bg-success"></i>
                <span data-toggle="counter-up" class="text-success">{{ Number(ind.TotalRecovered).toLocaleString() }}</span>
                <p class="text-success"><b>Sembuh</b></p>
              </div>
            </div>

          </div>
          <center>
            <nuxt-link to="/data_provinsi" class="btn btn-info btn-lg mt-5 d-none d-lg-inline-block">Data Per-Provinsi</nuxt-link>
            <button class="btn btn-lime btn-lg mt-5" @click="indo(ind)">Detail</button>
          </center>
        </div>
        
      </section>

      <section id="about" class="about" v-if="!loading">
      <div class="container-fluid">

        <div class="row">
          <div class="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch" data-aos="fade-right">
            <a href="https://youtu.be/MtJPwxmPup0" class="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"></a>
          </div>

          <div class="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5" data-aos="fade-left">
            <h3>Tak Perlu Panik, Mari Cegah Penularan COVID-19</h3>
            <p>Beberapa Cara Berikut Dapat Mencegah Penularan COVID-19, Untuk Diri Sendiri Ataupun Orang Lain. Tindakan Baikmu Mampu Menyelamatkan Dunia.</p>

            <div class="icon-box" data-aos="zoom-in" data-aos-delay="100">
              <div class="icon"><i class="bx bx-home-heart"></i></div>
              <h4 class="title"><a href="javascript:void(0)">Tetap Dirumah</a></h4>
              <p class="description">Dengan Kamu Tetap Dirumah, Kamu Membantu Untuk Tidak Menularkan Virus atau Terkena Virus Ini</p>
            </div>

            <div class="icon-box" data-aos="zoom-in" data-aos-delay="200">
              <div class="icon"><i class="bx bx-male"></i></div>
              <h4 class="title"><a href="javascript:void(0)">Jaga Jarak(Social Distance)</a></h4>
              <p class="description">Jaga Jarak Minimal 1 Meter Dari Orang Lain.</p>
            </div>

            <div class="icon-box" data-aos="zoom-in" data-aos-delay="300">
              <div class="icon"><i class="bx bx-water"></i></div>
              <h4 class="title"><a href="javascript:void(0)">Cuci Tangan</a></h4>
              <p class="description">Cuci Tangan Dengan Sabun atau Hand Sanitiser</p>
            </div>

            <div class="icon-box" data-aos="zoom-in" data-aos-delay="300">
              <div class="icon"><i class="bx bx-badge-check"></i></div>
              <h4 class="title"><a href="javascript:void(0)">Tutup Mulut dan Hidung</a></h4>
              <p class="description">Tutup Mulut dan Hidung Dengan Kain atau Kenakan Masker Bila Batuk atau Bersin, Untuk Mencegah Penularan.</p>
            </div>

          </div>
        </div>

      </div>
    </section>

    <section id="faq" class="faq section-bg" v-if="!loading">
      <div class="container">

        <div class="section-title" data-aos="fade-up">
          <h2>F.A.Q</h2>
          <p>Beberapa Pertanyaan Terkait</p>
        </div>

        <div class="faq-list">
          <ul>
            <li data-aos="fade-up">
              <i class="bx bx-help-circle icon-help"></i> <a data-toggle="collapse" class="collapse" href="#faq-list-1">
              Apa Sebenarnya COVID-19 ??<i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-1" class="collapse show" data-parent=".faq-list">
                <p>
                  COVID-19 adalah penyakit menular yang disebabkan oleh jenis coronavirus yang baru ditemukan. Ini merupakan virus baru dan penyakit yang tidak dikenal sebelum terjadi wabah di Wuhan, Tiongkok, bulan Desember 2019.<br><br>COVID-19 adalah singkatan dari CoronaVirus Disease-2019.
                </p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="100">
              <i class="bx bx-help-circle icon-help"></i> <a data-toggle="collapse" href="#faq-list-2" class="collapsed">
              Apa Saja Gejala COVID-19 ??<i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-2" class="collapse" data-parent=".faq-list">
                <p>
                  Gejala COVID-19 yang umum adalah demam, rasa lelah dan batuk kering. Ada juga yang mengalami rasa nyeri dan sakit, hidung tersumbat, pilek, sakit tenggorokan atau diare. Ada juga yang tidak merasakan apa-apa, seperti orang sehat. <br><br>

                  Jika kamu pernah berdekatan dengan orang yang memilliki gejala COVID-19 atau berpergian ke tempat terjangkiti, laporkan ke puskesmas terdek..<a href="/faq#faq-list-2">Lanjut Baca</a> 
                </p>
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="200">
              <i class="bx bx-help-circle icon-help"></i> <a data-toggle="collapse" href="#faq-list-3" class="collapsed">
              Bagaimana Cara Melindungi Diri ??<i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-3" class="collapse" data-parent=".faq-list">
                <p>
                  Apa AKSI nyata yang dapat kamu lakukan? <br><br>

                  ✅ Tetap di rumah. Bekerja, belajar dan beribadah di rumah<br><br>

                  ✅ Jika terpaksa keluar rumah karena kebutuhan penting, pakai masker kain, selalu jaga jarak minimal 1 meter dengan orang di lain dan sering cuci tang..<a href="/faq#faq-list-3">Lanjut Baca</a> 
                </p>
              </div>
            </li>

          </ul>

          <center data-aos="fade-up">
            <button class="btn btn-lime btn-lg" @click="faq()">
              Selanjutnya...
            </button>
          </center>
        </div>

      </div>
    </section>

    <section id="contact" class="contact" v-if="!loading">
      <div class="container">

        <div class="section-title">
          <h2>Kotak</h2>
          <p>Pusat Bantuan</p>
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

          <div class="col-lg-8 mt-5 mt-lg-0" data-aos="fade-left" data-aos-delay="200">
            <h3 class="text-dark">Kirim Kritik & Saran Untuk Team Developer</h3>
            <div role="" class="php-email-form">
              <div class="form-group">
                <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Ketik Kritik & Saranmu Disini..." v-model="pesan"></textarea>
                <div class="validate"></div>
              </div>
              <div class="text-center">
                <button @click="kirimPesanWA()" type="submit"><i class="fab fa-whatsapp"></i> Kirim WA</button>
                <button @click="kirimPesanMail()" type="submit" class="d-none d-md-inline"><i class="fa fa-envelope"></i> Kirim Email</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    
    <div id="preloader" v-if="loading"></div>

    </div>  
</template>

<script>
import axios from 'axios'
export default {
  asyncData ({ params, error }) {
    return axios.get('https://api.covid19api.com/summary')
      .then((res) => {
        return {
          indonesia: [],
          dunia: [],
          key: '',
          loading: false,
          statusCode: [],
          pesan: 'Terima Kasih, Sangat Bermanfaat :)',
        }
      })
      .catch((e) => {
        error({ statusCode: 500, message: 'Post not found' })
      })
  },
  data () {
    
  },
  mounted () {

    this.$store.commit('setStatusCode', 'null')
    this.start()
    axios('https://api.covid19api.com/summary').then( ({ data }) => {
      this.allPost = data.Countries
      data.Countries.map((item, key) => {
          this.dunia = data.Global
          if (this.dunia != '') {
            if (item.Country == 'Indonesia') {
              this.indonesia.push(item)
              this.finish()
            }
          }else {
            this.finish()
            this.error()
          }
      })
    })
  },
  methods : {
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    },
    semua() {
      this.$router.replace({'path': '/dunia'})
    },
    indo(negara) {
      this.$store.commit('setNegara', negara)
      this.$router.replace({'path': '/details'})
    },
    faq() {
      this.$router.replace({'path': '/faq'})
    },
    kirimPesanWA() {
      if (this.pesan != '' && this.pesan != ' ') {
        location.href = 'https://api.whatsapp.com/send?phone=6281520343826&text='+this.pesan
      }else {
        alert('Masukkan Pesan Anda !!')
      }
    },
    kirimPesanMail() {
      if (this.pesan != '' && this.pesan != ' ') {
        location.href = 'mailto:kodearsipcom@gmail.com?Subject='+this.pesan
      }else {
        alert('Masukkan Pesan Anda !!')
      }
    },
    error() {
      this.loading === false
      this.$router.replace('/err')
    }
  }
}

</script>