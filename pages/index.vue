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
          <Button
            class="mt-10"
            to="https://www.google.com/maps/place/Pucaksari,+Busungbiu,+Kabupaten+Buleleng,+Bali/@-8.3097545,114.9197294,13z/data=!3m1!4b1!4m5!3m4!1s0x2dd180f92ed64629:0x5030bfbca830440!8m2!3d-8.2990663!4d114.9576197"
            text="Telusuri"
          />
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
        <div>
          <!-- youtube div element -->
          <client-only>
            <vue-plyr>
              <video>
                <source
                  size="720"
                  src="~assets/videos/title.mp4"
                  type="video/mp4"
                />
              </video>
            </vue-plyr>
          </client-only>
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
            <Article />
            <Article class="lg:-mt-84" />
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



<style>
.about {
  background: url("~assets/images/balisvg.svg") no-repeat center;
}
</style>
