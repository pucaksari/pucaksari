<template>
  <div>
    <!-- Hero Section -->
    <client-only>
      <Hero />
    </client-only>
    <!-- End Hero Section -->
    <!-- About Section -->
    <div class="relative lg:py-48 about">
      <div
        class="container flex flex-col items-center px-4 lg:py-5 lg:flex-row"
      >
        <div class="mt-24 lg:mt-0 reveal_fromLeft">
          <img data-src="~assets/images/web/map_pucaksari.png" v-lazy-load />
        </div>

        <div class="flex flex-col lg:ml-5 lg:w-1/2">
          <h1
            class="mt-5 mb-5 font-serif text-4xl lg:mt-0 about-heading lg:text-5xl"
          >
            <span class="border-b border-red">Pucaksari</span>
          </h1>
          <p class="relative text-sm about-text lg:text-base">
            Desa Pucaksari, di Kecamatan Busungbiu, salah satu desa yang
            terletak diatas ketinggian sekitar 650 diatas permukaan laut (dpl).
            Desa ini sejak lama, terkenal sebagai penghasil kopi jenis robusta.
            Secara turun temurun, warga disini melanggengkan diri sebagai petani
            kopi. Sama halnya dengan desa-desa tetangganya seperti Desa Sepang,
            Desa Telaga dan sekitarnya. Standar kopi robusta mendapat nilai di
            atas rata-rata oleh Dinas Perkebunan Kabupaten Buleleng. Menurut
            sebuah penjual di sebuah Marketplace harga kopi robusta untuk ukuran
            500gram dibanderol dengan harga Rp. 75.000an.
          </p>
          <a
            class="mt-10"
            target="_blank"
            href="https://www.google.com/maps/place/Pucaksari,+Busungbiu,+Kabupaten+Buleleng,+Bali/@-8.3097545,114.9197294,13z/data=!3m1!4b1!4m5!3m4!1s0x2dd180f92ed64629:0x5030bfbca830440!8m2!3d-8.2990663!4d114.9576197"
            ><span class="px-8 py-4 text-xs lg:text-base bg-red"
              >Telusuri</span
            ></a
          >
        </div>
      </div>
    </div>
    <!-- End About Section -->
    <div class="container px-4">
      <!-- Video Section -->
      <div class="flex flex-col mt-20 lg:mt-10">
        <h1 class="mb-5 font-serif text-4xl reveal_fromLeft lg:text-5xl">
          Video
        </h1>
        <div
          class="w-full vjs-show-big-play-button-on-pause vjs-big-play-centered play-circle video-js-responsive-container vjs-hd"
        >
          <!-- youtube div element -->
          <div
            class="video-player-box"
            :playsinline="playsinline"
            v-video-player:myVideoPlayer="playerOptions"
          ></div>
        </div>
      </div>
      <!-- End Video Section -->
      <!-- Gallery Section -->
      <div class="flex flex-col justify-center mt-64 text-center">
        <h1 class="font-serif text-4xl lg:text-5xl">Galeri Foto</h1>
        <div class="mx-auto my-5 lg:w-1/2">
          <p>
            Berikut merupakan galeri dari Pesona Desa Pucaksari, Buleleng, Bali
          </p>
        </div>
        <Button class="mt-10 mb-20" to="galeri" text="Lihat lebih banyak" />
      </div>
    </div>
    <!-- End Tag Root Div -->
    <Gallery class="mb-32" />
    <!-- End Gallery Section -->
    <div class="container px-4">
      <!-- Section Article -->
      <div class="flex flex-row mt-20 lg:flex-col">
        <div class="flex flex-col reveal_fromLeft">
          <span>KUMPULAN BERITA</span>
          <h1 class="font-serif text-2xl lg:w-6/12 lg:text-5xl">
            Informasi, Pengumaman, Acara
          </h1>
          <div class="flex flex-col lg:flex-row lg:justify-between">
            <Article
              class="w-full"
              :berita="{
                judul: listBerita[0].judul,
                tanggal: listBerita[0].tanggal,
                deskripsi: listBerita[0].deskripsi,
                slug: listBerita[0].slug,
                judul_gambar: listBerita[0].judul_gambar,
              }"
            />
            <Article
              :berita="{
                judul: listBerita[1].judul,
                tanggal: listBerita[1].tanggal,
                deskripsi: listBerita[1].deskripsi,
                slug: listBerita[1].slug,
                judul_gambar: listBerita[1].judul_gambar,
              }"
              class="w-full lg:-mt-84"
            />
          </div>
          <div class="flex justify-center mt-10 lg:justify-end lg:-mt-20">
            <Button to="berita" text="Selengkapnya" />
          </div>
        </div>
      </div>
      <!-- End Section Article -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // component options
      playsinline: true,

      // videojs options
      playerOptions: {
        sources: [
          {
            type: "video/mp4",
            src: "/title.mp4",
          },
        ],
        poster: "cover.png",
      },
    };
  },
  async asyncData({ $content, params }) {
    const listBerita = await $content("artikel")
      .sortBy("createdAt", "desc")
      .limit(2)
      .fetch();
    return { listBerita };
  },
};
</script>

<style>
.video-js-responsive-container.vjs-hd {
  padding-top: 56.25%;
}
.video-js-responsive-container.vjs-sd {
  padding-top: 75%;
}
.video-js-responsive-container {
  width: 100%;
  position: relative;
}
.video-js-responsive-container .video-js {
  height: 100% !important;
  width: 100% !important;
  position: absolute;
  top: 0;
  left: 0;
}
.about {
  background: url("~assets/images/balisvg.svg") no-repeat center;
}
</style>
