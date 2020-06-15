<template>
<div class="mt-5">
	<section id="faq" class="faq section-bg">
      <div class="container">

        <div class="section-title">
          <h2>F.A.Q</h2>
          <p>Beberapa Pertanyaan Terkait</p><br>
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

        <div class="faq-list">

          <ul>
            <li>
              <i class="bx bx-help-circle icon-help"></i> <a data-toggle="collapse" class="collapse" href="#faq-list-1">
              Apa Sebenarnya COVID-19 ??<i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-1" class="collapse show" data-parent=".faq-list">
                <p>
                  COVID-19 adalah penyakit menular yang disebabkan oleh jenis coronavirus yang baru ditemukan. Ini merupakan virus baru dan penyakit yang tidak dikenal sebelum terjadi wabah di Wuhan, Tiongkok, bulan Desember 2019.<br><br>COVID-19 adalah singkatan dari CoronaVirus Disease-2019.
                </p>
              </div>
            </li>

            <li>
              <i class="bx bx-help-circle icon-help"></i> <a data-toggle="collapse" href="#faq-list-14" class="collapsed">
              Siapa saja yang Berisiko Terinfeksi COVID-19 ??<i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-14" class="collapse" data-parent=".faq-list">
                <p>
                    <b>Pertama</b>, orang yang mungkin terinfeksi Covid- 19 adalah orang yang bertempat atau berpergian ke wilayah yang sudah positif Covid- 19.
                    <br><br>
                    <b>Kedua</b>, yaitu orang-orang yang dalam 14 hari sebelum memiliki gejala melakukan perjalanan dari negara terjangkit, atau kontak erat dengan anggota keluarga dan rekan kerja  yang sudah terinfeksi COVID-19.
                    <br><br>
                    <b>Ketiga</b>, Petugas kesehatan yang merawat pasien positif terinfeksi COVID-19.
                    <br><br>
                    <b>Keempat</b>, Mereka yang memiliki siatem imun pada tubuhnya rendah. Diantaranya ada manula, anak- anak, manula yang menderita hipertensi, diabetes dan penyakit gangguan sistem pernapasan. 
                </p>
              </div>
            </li>

            <li>
              <i class="bx bx-help-circle icon-help"></i> <a data-toggle="collapse" href="#faq-list-15" class="collapsed">
              Apakah COVID-19 dapat melekat pada benda mati ??<i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-15" class="collapse" data-parent=".faq-list">
                <p>
                    COVID-19 dapat menempel pada benda mati selama beberapa jam atau bisa beberapa hari. COVID-19 mampu bertahan atau menempel pada suatu benda dipengaruhi oleh beberapa faktor seperti suhu, kelembapan, dan jenis permukaan.
                </p>
              </div>
            </li>

            <li>
              <i class="bx bx-help-circle icon-help"></i> <a data-toggle="collapse" href="#faq-list-16" class="collapsed">
              Apakah ada obat atau perawatan yang dapat mencegah atau menyembuhkan COVID-19 ??<i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-16" class="collapse" data-parent=".faq-list">
                <p>
                    Gejala Covid- 19 dapat diringankan dengan obat-obatan barat, tradisional atau buatan sendiri. Obat-obatan yang ada belum terbukti dapat mencegah atau menyembuhkan penyakit ini. Tidak direkomendasikan tindakan mengobati diri sendiri dengan obat apa pun, termasuk antibiotik, untuk mencegah atau menyembuhkan COVID-19. Namun, beberapa obat-obatan barat dan tradisional sedang diuji klinis.
                </p>
              </div>
            </li>

            <li>
              <i class="bx bx-help-circle icon-help"></i> <a data-toggle="collapse" href="#faq-list-17" class="collapsed">
              Hal apa saja yang Harus Dihindari Pada Situasi Covid- 19 ??<i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-17" class="collapse" data-parent=".faq-list">
                <p>
                    Seperti yang kita ketahui Covid- 19 dapat menyerang kita melalui sistem pernapasan. Untuk itu, jika ingin mencegah COVID-19 jagalah sistem pernapasanm sobat sekalian. Hal tersebut dapat dilakukan dengan cara mengurangi penggunaan rokok, menghindari penggunaan yang berlapis, tidak mengkonsumsi antibiotik.
                    <br><br>
                    Oke sobat kodearsip, hal diaatas merupakan pertanyaan yang sering muncul pada situasi Covid-19 seperti saat ini. Untuk itu, kami harap sobat sekalian dapat menjaga kesehatan dengan mempelajari ulasan pertanyaan tersebut.
                </p>
              </div>
            </li>

            <li>
              <i class="bx bx-help-circle icon-help"></i> <a data-toggle="collapse" href="#faq-list-2" class="collapsed">
              Apa Saja Gejala COVID-19 ??<i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-2" class="collapse" data-parent=".faq-list">
                <p>
                  Gejala COVID-19 yang umum adalah demam, rasa lelah dan batuk kering. Ada juga yang mengalami rasa nyeri dan sakit, hidung tersumbat, pilek, sakit tenggorokan atau diare. Ada juga yang tidak merasakan apa-apa, seperti orang sehat. <br><br>

                  Jika kamu pernah berdekatan dengan orang yang memilliki gejala COVID-19 atau berpergian ke tempat terjangkiti, laporkan ke puskesmas terdekat dan lakukan monitoring mandiri. Bila dalam 1-14 hari kemudian mengalami gejala, lakukan isolasi diri. <br><br>

                  Karena orang yang merasa sehat pun bisa saja sedang kena COVID-19, kita semua harus tinggal di rumah. <br><br>

                  Bekerja, belajar dan beribadah di rumah. <br><br>

                  Kenapa? Untuk mencegah penyebaran COVID-19 lebih luas. <br><br>

                  Dari rumah, kamu bisa hubungi 119 untuk bantuan lebih lanjut. <br><br>

                  Kalau kondisi memburuk, seperti sesak napas, kontak Rumah Sakit rujukan dan segera periksakan diri. 
                </p>
              </div>
            </li>

            <li>
              <i class="bx bx-help-circle icon-help"></i> <a data-toggle="collapse" href="#faq-list-3" class="collapsed">
              Bagaimana Cara Melindungi Diri ??<i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-3" class="collapse" data-parent=".faq-list">
                <p>
                  Apa AKSI nyata yang dapat kamu lakukan? <br><br>

                  ✅ Tetap di rumah. Bekerja, belajar dan beribadah di rumah<br><br>

                  ✅ Jika terpaksa keluar rumah karena kebutuhan penting, pakai masker kain, selalu jaga jarak minimal 1 meter dengan orang di lain dan sering cuci tangan pakai sabun atau cairan pembersih tangan (alcohol minimal 60%).
                  <br><br>

                  ✅ Jangan kontak langsung dengan orang bergejala COVID-19. Lakukan komunikasi via telepon, chat atau video call
                  <br><br>
                  ✅ Hindari kerumunan
                  <br><br>
                  ✅ Jangan sentuh mata, hidung dan mulut
                  <br><br>
                  ✅ Selalu cuci tangan pakai sabun dan air mengalir! Sebelum makan dan menyiapkan makanan, setelah dari toilet, setelah memegang binatang dan sehabis berpergian
                  <br><br>
                  ✅ Ketika batuk atau bersin, tutup mulut dan hidung dengan siku terlipat atau tisu. Buang langsung tisu ke tempat sampah setelah digunakan
                  <br><br>
                  ✅ Beritahu petugas kesehatan jika kamu mengalami gejala, pernah kontak erat dengan orang bergejala atau bepergian ke wilayah terjangkit COVID-19
                  <br><br>
                  ✅ Jika petugas kesehatan menyatakan kamu harus isolasi diri, maka patuhi agar lekas sembuh dan tidak menulari orang lain
                  <br><br>
                  ✅ Bersikaplah terbuka tentang statusmu pada orang lain di sekitar. Ini adalah bentuk nyata kepedulianmu pada diri sendiri dan sesama
                </p>
              </div>
            </li>

            <li>
              <i class="bx bx-help-circle icon-help"></i> <a data-toggle="collapse" href="#faq-list-4" class="collapsed">
              Bagaimana Cara Melindungi Orang Lain ??<i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-4" class="collapse" data-parent=".faq-list">
                <p>
                Yang bisa kamu lakukan untuk melindungi orang-orang terdekatmu dari COVID-19, yaitu:
                <br><br>
				✅ Bekerja, belajar dan beribadah di rumah
				<br><br>
				✅ Jaga jarak minimal 1 meter dengan siapapun disekitarmu
				<br><br>
				✅ Saat kamu batuk atau bersin: menjauh dan tutup mulut serta hidung kamu dengan tisu, saputangan atau lipatan siku. Segera buang tisu yang telah kamu pakai ke tempat sampah 
				<br><br>
				✅ Kalau kamu demam, batuk atau tidak enak badan, pakai masker. Jangan lupa ikuti cara pakai masker yang benar
				<br><br>
				✅ Jika terpaksa beraktivitas di luar rumah, pakailah masker kain, jangan lupa cuci masker kain setiap hari  
				<br><br>
				✅ Jangan pernah meludah sembarangan
				<br><br>
				✅ Sering cuci tangan pakai sabun dan air mengalir selama minimal 20 detik
				<br><br>
				✅ Segera hubungi call center 119 atau Rumah Sakit rujukan bila orang terdekatmu mengalami gejala COVID-19 
                </p>
              </div>
            </li>

            <li>
              <i class="bx bx-help-circle icon-help"></i> <a data-toggle="collapse" href="#faq-list-5" class="collapsed">
              Himbauan Pemerintah Tentang Penggunaan Masker<i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-5" class="collapse" data-parent=".faq-list">
                <p>
                  	Semua orang harus menggunakan masker kain jika terpaksa beraktivitas di luar rumah.
                  	<br><br>
					Kamu bisa menggunakan masker kain tiga lapis yang dapat dicuci dan digunakan berkali-kali, agar masker bedah dan N-95 yang sekali pakai bisa ditujukan untuk petugas medis.
					<br><br>
					Jangan lupa untuk mencuci masker kain menggunakan air sabun agar tetap bersih.
					<br><br>
					Penggunaan masker yang keliru justru meningkatkan risiko penularan. Jangan sentuh atau buka-tutup masker saat digunakan. Tetap jaga jarak minimal 1 meter dengan siapapun, jangan sentuh wajah dan cuci tangan pakai sabun sesering mungkin. 
					<br><br>
					#LawanBersamaCovid19
					#DiRumahAja
					#JagaJarak
					#MaskerUntukSemua
					#BersatuLawanCovid19
                </p>
              </div>
            </li>

            <li>
              <i class="bx bx-help-circle icon-help"></i> <a data-toggle="collapse" href="#faq-list-6" class="collapsed">
              Apa yang dimaksud dengan Rapid Test atau Tes Cepat COVID-19 ??<i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-6" class="collapse" data-parent=".faq-list">
                <p>
                  	Rapid Test atau tes cepat COVID-19 bertujuan untuk mendeteksi kasus secara dini sehingga pemerintah dapat menyusun dan melakukan tindakan yang tepat untuk menghentikan penyebaran virus corona. <br><br>

					<b>Tidak semua orang perlu mengikuti Rapid Test atau tes cepat.</b> Hanya mereka yang direkomendasikan oleh petugas kesehatan yang perlu menjalaninya.
                </p>
              </div>
            </li>

            <li>
              <i class="bx bx-help-circle icon-help"></i> <a data-toggle="collapse" href="#faq-list-7" class="collapsed">
              Rapid Test seperti apa dilakukan di Indonesia ??<i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-7" class="collapse" data-parent=".faq-list">
                <p>
                  	Saat ini pemerintah melaksanakan kebijakan Rapid Test atau tes cepat. Rapid test dilakukan dengan mengambil tetes darah untuk melihat antibodi. Dengan dilakukannya Rapid Test di banyak daerah, akan ada lonjakan kasus positif. Mengetahui kasus positif penting bagi pemerintah untuk mengambil tindakan tepat dalam penanganan wabah COVID-19. 
                  	<br><br>
					Tidak ada aktivitas mobilisasi massa untuk pemeriksaan.
					<br><br>
					Petugas akan mendatangi rumah ke rumah menelusuri riwayat kontak erat seseorang.
                </p>
              </div>
            </li>

            <li>
              <i class="bx bx-help-circle icon-help"></i> <a data-toggle="collapse" href="#faq-list-8" class="collapsed">
              Bagaimana Rapid Test bekerja ??<i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-8" class="collapse" data-parent=".faq-list">
                <p>
                  	Hasil Rapid Test dapat diperoleh dengan cepat, yaitu 2-15 menit.
                  	<br><br>
					Perlu diingat: 
					<br><br>
					✅ Antibodi baru dihasilkan tubuh antara 8-10 hari setelah timbul gejala sehingga tetap ada kemungkinan hasil negatif yang keliru  
					<br><br>
					✅ Hasil positif bisa terjadi karena infeksi lain, seperti demam berdarah, sehingga tetap ada kemungkinan hasil positif yang keliru
                </p>
              </div>
            </li>

            <li>
              <i class="bx bx-help-circle icon-help"></i> <a data-toggle="collapse" href="#faq-list-9" class="collapsed">
              Apa yang harus dilakukan setelah mendapat hasil Rapid Test ??<i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-9" class="collapse" data-parent=".faq-list">
                <p>
                  	Hasil positif harus dikonfirmasi dengan pemeriksaan Laboratorium di Rumah Sakit Rujukan.
                  	<br><br>
					Hasil negatif harus diulang pada hari ke-10. Sementara menunggu, orang harus isolasi diri selama 14 Hari. Jika muncul demam tinggi dan sesak napas maka segera ke Rumah Sakit rujukan.
                </p>
              </div>
            </li>

            <li>
              <i class="bx bx-help-circle icon-help"></i> <a data-toggle="collapse" href="#faq-list-10" class="collapsed">
              Bagaimana cara isolasi diri ??<i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-10" class="collapse" data-parent=".faq-list">
                <p>
                  	Isolasi diri dilakukan untuk memantau kondisi kesehatan diri dan menghindari penularan pada orang-orang sekitar termasuk keluarga.
                  	<br><br>
					Mereka yang melakukan isolasi diri perlu melaporkan kondisi kesehatannya kepada fasilitasi layanan terdekat.
					<br><br>
					Yang dilakukan saat isolasi diri:<br>
					✅ Tinggal di rumah dan tidak boleh berinteraksi dengan masyarakat.
					<br><br>
					✅ Menggunakan kamar terpisah dari anggota keluarga lain.
					<br><br>
					✅ Jaga jarak lebih dari 1 meter dari anggota keluarga lainnya.
					<br><br>
					✅ Menggunakan masker selama isolasi diri.
					<br><br>
					✅ Ukur suhu tubuh setiap hari dan amati gejala yang dialami.
					<br><br>
					✅ Hindari pemakaian bersama peralatan makan, peralatan mandi dan linen/sprei.
					<br><br>
					✅ Sering cuci tangan pakai sabun dengan air mengalir. 
					<br><br>
					✅ Berada di ruang terbuka dan berjemur di bawah sinar matahari setiap pagi.
					<br><br>
					✅ Bersihkan permukaan benda-benda yang sering disentuh dengan cairan disinfektan.
					<br><br>
					✅ Segera hubungi fasilitasi layanan kesehatan jika kondisi memburuk.
                </p>
              </div>
            </li>

            <li>
              <i class="bx bx-help-circle icon-help"></i> <a data-toggle="collapse" href="#faq-list-11" class="collapsed">
              Apa Itu Physical Distancing ??<i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-11" class="collapse" data-parent=".faq-list">
                <p>
                  	Physical distancing adalah upaya yang dilakukan untuk mencegah penyebaran virus corona di masyarakat. Secara sederhana Physical Distancing adalah menjaga jarak lebih dari 1 meter dengan siapapun. Dengan kata lain: Tidak Berdekatan dan Tidak Berkumpul.
                  	<br><br>
					Dengan menerapkan Physial Distancing penyebaran virus dapat dicegah. Ingat, virus tidak bergerak sendiri tapi oranglah yang membawanya ke mana-mana.
                </p>
              </div>
            </li>
			
			       <li>
              <i class="bx bx-help-circle icon-help"></i> <a data-toggle="collapse" href="#faq-list-12" class="collapsed">
              Bagaimana Cara Menerapkan Physical Distancing ??<i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-12" class="collapse" data-parent=".faq-list">
                <p>
                  	✅ Kita harus tetap berada di rumah sesuai panduan pemerintah.
                  	<br><br>
          					✅ Bekerja, belajar dan beribadah di rumah.
          					<br><br>
          					✅ Keluar hanya untuk belanja hal yang penting atau pengobatan Itu pun seminimal mungkin. Gunakan masker kain saat di luar rumah.
          					<br><br>
          					✅ Dilarang berdekatan. Selalu menjaga jarak lebih dari 1 meter dengan orang lain.
          					<br><br>
          					✅ Sebisa mungkin hindari penggunaan kendaraan umum.
          					<br><br>
          					✅ Tunda atau batalkan acara keluarga atau teman, saling mengunjungi atau silaturahmi tatap muka ganti dengan komunikasi via telephon, internet, media sosial atau aplikasi komunikasi.
          					<br><br>
          					✅ Tunda atau batalkan kegiatan pertemuan, konser musik, pertandingan olahraga, kegiatan keagamaan atau kegiatan lain yang mengundang orang banyak.
          					<br><br>
          					✅ Gunakan telepon atau layanan online untuk menghubungi dokter atau fasilitas lainnnya.
          					<br><br>
          					✅ Kalau kamu mengalami demam, merasa lelah dan batuk kering, lakukan isolasi diri.
                </p>
              </div>
            </li>
			
            <li>
              <i class="bx bx-help-circle icon-help"></i> <a data-toggle="collapse" href="#faq-list-13" class="collapsed">
              Siapa Yang Harus Melakukan & Menerapkan Physical Distancing ??<i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-13" class="collapse" data-parent=".faq-list">
                <p>
                  	<b>Semua orang harus melakukannya untuk mencegah meluasnya penyebaran virus corona.</b>
                  	<br><br>
          					Kamu harus lebih ketat melakukannya jika untuk melindungi orang yang berisiko, yaitu:
          					<br><br>
          					✅ Orang berusia 60 tahun ke atas.
          					<br><br>
          					✅ Mereka yang memiliki masalah kesehatan seperti penyakit jantung, tekanan darah tinggi, diabetes, kanker, asma atau paru.
          					<br><br>
          					✅ Ibu hamil.
                </p>
              </div>
            </li>
          </ul>

        </div>

      </div>
    </section>

    <section id="contact" class="contact">
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
	                <p><a href="tel:119">119</a></p>
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
    }
  },
  mounted() {
    axios('https://server.kodearsip.com/get/'+this.waktu.getHours()+'/'+this.waktu.getDay()).then( ({ data }) => {
      this.nama = data
      data.data.map((item, key) => {
          this.data.push(item)
      })
    })
  }
}

</script>