<template>
  <div>
    <!-- Hero Section -->
    <client-only>
      <Hero />
    </client-only>
    <!-- End Hero Section -->
    <!-- About Section -->
    <div class="relative lg:py-48 about gs_reveal">
      <div
        class="container flex flex-col items-center px-4 lg:py-5 lg:flex-row"
      >
        <div class="mt-24 lg:mt-0 reveal_fromLeft gs_reveal">
          <img data-src="~assets/images/web/map_pucaksari.png" v-lazy-load />
        </div>

        <div class="flex flex-col lg:ml-5 lg:w-1/2">
          <h1
            class="mt-5 mb-5 font-serif text-4xl lg:mt-0 about-heading lg:text-5xl"
          >
            <span class="border-b border-red">Pucak Sari</span>
          </h1>
          <p class="relative text-sm about-text lg:text-base">
            Desa Angseri memiliki luas 758,160 Km2. Desa Angseri dibagi menjadi
            4 dusun dengan 3 desa pekraman. Dilihat dari kondisi geografisnya,
            wilayah Desa Angseri merupakan dataran dengan ketinggian kurang
            lebih 640 meter di atas permukaan laut, dengan curah hujan rata-rata
            3,458 mm/tahun.
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
      <div class="flex flex-col mt-20 gs_reveal lg:mt-10">
        <h1 class="mb-5 font-serif text-4xl reveal_fromLeft lg:text-5xl">
          Video
        </h1>
        <div class="w-full video-js-responsive-container vjs-hd">
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
      <div class="flex flex-col justify-center mt-20 text-center gs_reveal">
        <h1 class="font-serif text-4xl lg:text-5xl">Galeri Foto</h1>
        <div class="mx-auto my-5 lg:w-1/2">
          <p>
            Apakah itu semua adalah asli ? ataukah itu ilusi ? walau indah tapi
            tak punya arti yang dapat dipahami
          </p>
        </div>
        <Button class="mt-10 mb-20" to="galeri" text="Lihat lebih banyak" />
      </div>
    </div>
    <!-- End Tag Root Div -->
    <Gallery />
    <!-- End Gallery Section -->
    <div class="container px-4">
      <!-- Section Article -->
      <div class="flex flex-row mt-20 lg:flex-col">
        <div class="flex flex-col gs_reveal reveal_fromLeft">
          <h3>KUMPULAN BERITA</h3>
          <h1 class="font-serif text-2xl lg:w-6/12 lg:text-5xl">
            Informasi, Pengumaman, Acara
          </h1>
          <div class="flex flex-col gs_reveal lg:flex-row lg:justify-between">
            <Article
              :berita="{
                judul: listBerita[0].judul,
                tanggal: listBerita[0].tanggal,
                deskripsi: listBerita[0].deskripsi,
                slug: listBerita[0].slug,
              }"
            />
            <Article
              :berita="{
                judul: listBerita[1].judul,
                tanggal: listBerita[1].tanggal,
                deskripsi: listBerita[1].deskripsi,
                slug: listBerita[1].slug,
              }"
              class="lg:-mt-84"
            />
          </div>
          <div class="z-10 flex justify-center mt-10 lg:justify-end lg:-mt-20">
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
.video-js {
  outline: 0;
}
.video-js video.vjs-tech {
  position: relative;
  top: 50%;
  -webkit-transform: translateY(-50%) translateX(-50%);
  transform: translateY(-50%) translateX(-50%);
  left: 50%;
  height: 100%;
  width: 100%;
  outline: none;
  cursor: pointer;
}
.video-js .vjs-big-play-button {
  left: 50%;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  border: none;
  border-radius: 100%;
  outline: 0;
  height: 3em;
  width: 3em;
  background-color: transparent;
}
.video-js .vjs-big-play-button .vjs-icon-placeholder:before {
  top: 50%;
  left: 50%;
  width: auto;
  height: auto;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  font-size: 3em;
}
.video-js .vjs-fullscreen-control {
  display: none;
}
.video-js .vjs-custom-fullscreen {
  position: absolute;
  top: 15px;
  right: 19px;
  width: 30px;
  height: 30px;
  background-color: rgba(43, 51, 63, 0.25);
  z-index: 9;
  outline: none;
  cursor: pointer;
}
.video-js .vjs-custom-fullscreen:before {
  font-family: "monstserrat";
  font-weight: normal;
  font-style: normal;
  content: "\f108";
  font-size: 2em;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
}
.video-js .vjs-progress-control,
.video-js .vjs-remaining-time,
.video-js .vjs-play-control,
.video-js .vjs-volume-panel {
  background-color: #707070;
  outline: 0;
}
.video-js .vjs-progress-control .vjs-icon-placeholder:before,
.video-js .vjs-remaining-time .vjs-icon-placeholder:before,
.video-js .vjs-play-control .vjs-icon-placeholder:before,
.video-js .vjs-volume-panel .vjs-icon-placeholder:before {
  top: 50%;
  height: auto;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}
.video-js .vjs-seek-to-live-control {
  display: none;
  background-color: #707070;
}
.video-js .vjs-progress-control .vjs-progress-holder {
  background-color: #b5b5b5;
}
.video-js .vjs-progress-control .vjs-progress-holder .vjs-load-progress div {
  background-color: #bdbdbd;
}
.video-js .vjs-progress-control .vjs-progress-holder .vjs-play-progress {
  background: none;
}
.video-js .vjs-progress-control .vjs-progress-holder .vjs-play-progress:before {
  top: -5px;
  font-size: 1.4em;
}
.video-js .vjs-progress-control:hover .vjs-progress-holder {
  font-size: 1.2em;
}
.video-js .vjs-play-control {
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}
.video-js .vjs-remaining-time {
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}
.video-js .vjs-control-bar {
  width: 50%;
  height: 40px;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  bottom: 0;
  border-radius: 20px;
  opacity: 0.75;
}
.video-js .vjs-volume-panel-horizontal,
.video-js .vjs-remaining-time {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.video-js .vjs-volume-panel-horizontal .vjs-remaining-time-display,
.video-js .vjs-remaining-time .vjs-remaining-time-display {
  font-size: 12px;
}
.video-js button.vjs-chapters-button {
  display: none;
}
.video-js div.vjs-chapters-button {
  position: absolute;
  left: 50%;
  bottom: 55px;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  height: 8px;
  width: auto;
  z-index: 9;
}
.video-js div.vjs-chapters-button .vjs-menu {
  display: block;
  position: relative;
  bottom: initial;
  left: initial;
  width: auto;
  height: 100%;
  margin-bottom: 0;
  border-top-color: none;
}
.video-js div.vjs-chapters-button .vjs-menu.vjs-hidden {
  display: block !important;
}
.video-js div.vjs-chapters-button .vjs-menu .vjs-menu-content {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  position: relative;
  max-height: initial;
  height: 100%;
  bottom: initial;
  background-color: none;
  background-color: transparent;
}
.video-js div.vjs-chapters-button .vjs-menu .vjs-menu-content .vjs-menu-title {
  display: none;
}
.video-js div.vjs-chapters-button .vjs-menu .vjs-menu-content .vjs-menu-item {
  width: 89px;
  padding: 0;
  background-color: #707070;
  opacity: 0.6;
  outline: 0;
}
.video-js
  div.vjs-chapters-button
  .vjs-menu
  .vjs-menu-content
  .vjs-menu-item:not(:first-child):not(:nth-child(2)) {
  margin-left: 17px;
}
.video-js
  div.vjs-chapters-button
  .vjs-menu
  .vjs-menu-content
  .vjs-menu-item.vjs-selected {
  background-color: #ffd800;
  opacity: 1;
}
.video-js
  div.vjs-chapters-button
  .vjs-menu
  .vjs-menu-content
  .vjs-menu-item
  .vjs-menu-item-text {
  display: none;
}
.video-js.vjs-user-inactive .vjs-custom-fullscreen,
.video-js.vjs-user-inactive .vjs-chapters-button {
  visibility: hidden;
}
</style>
