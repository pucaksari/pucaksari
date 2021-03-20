<template>
  <div class="pt-10">
    <!-- About Section -->
    <div class="relative lg:py-48 about">
      <div
        class="container flex flex-col items-center px-4 lg:py-5 lg:flex-row"
      >
        <div class="">
          <img src="~assets/images/web/map_pucaksari.png" />
        </div>

        <div class="flex flex-col lg:ml-5 lg:w-1/2">
          <h1 class="mt-5 mb-5 font-serif text-4xl lg:mt-0 lg:text-5xl">
            <span class="border-b border-red">Pucak Sari</span>
          </h1>
          <p class="relative text-sm text-about lg:text-base">
            Desa Angseri memiliki luas 758,160 Km2. Desa Angseri dibagi menjadi
            4 dusun dengan 3 desa pekraman. Dilihat dari kondisi geografisnya,
            wilayah Desa Angseri merupakan dataran dengan ketinggian kurang
            lebih 640 meter di atas permukaan laut, dengan curah hujan rata-rata
            3,458 mm/tahun.
          </p>
          <Button class="mt-10" to="#" text="Telusuri" />
        </div>
      </div>
    </div>
    <!-- End About Section -->
    <div class="container px-4">
      <!-- Video Section -->
      <div class="flex flex-col mt-20 lg:mt-10">
        <h1 class="mb-5 font-serif text-4xl lg:text-5xl">Video</h1>
        <div>
          <!-- youtube div element -->
          <vue-plyr>
            <video>
              <source
                size="720"
                src="~assets/videos/title.mp4"
                type="video/mp4"
              />
            </video>
          </vue-plyr>
        </div>
      </div>
      <!-- End Video Section -->
      <!-- Gallery Section -->
      <div class="flex flex-col justify-center mt-20 text-center">
        <h1 class="font-serif text-4xl lg:text-5xl">Galeri Foto</h1>
        <div class="mx-auto my-5 lg:w-1/2">
          <p>
            Apakah itu semua adalah asli ? ataukah itu ilusi ? walau indah tapi
            tak punya arti yang dapat dipahami
          </p>
        </div>
        <Button class="mt-10 mb-20" to="#" text="Lihat lebih banyak" />
      </div>
    </div>
    <!-- End Tag Root Div -->
    <Gallery />
    <!-- End Gallery Section -->
    <div class="container px-4">
      <!-- Section Article -->
      <div class="flex flex-row mt-20 lg:flex-col">
        <div class="flex flex-col">
          <h3>KUMPULAN BERITA</h3>
          <h1 class="font-serif text-2xl lg:w-6/12 lg:text-5xl">
            Informasi, Pengumaman, Acara
          </h1>
          <div class="flex flex-col lg:justify-between">
            <div
              class="flex flex-col justify-center mt-10 text-center lg:mt-0 lg:p-10 lg:w-6/12"
            >
              <img src="~assets/images/desa/DSC00407.jpg" alt="" />
              <span class="mt-10"><p>02 Oktober 2020</p></span>
              <nuxt-link
                to="#"
                class="mx-auto my-5 font-serif text-2xl border-b lg:w-1/2 lg:text-4xl border-red"
              >
                Desa Indah dan Asri di Bali
              </nuxt-link>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere
                ut risus, feugiat fames vulputate vel ipsum. Sodales ut libero
                vel id non sodales augue eros.
              </p>
            </div>
            <div
              class="flex flex-col justify-center mt-10 text-center lg:p-10 lg:w-6/12 lg:-mt-84"
            >
              <img src="~assets/images/desa/DSC00567.jpg" alt="" />
              <span class="mt-10"><p>02 Oktober 2020</p></span>
              <h1
                class="mx-auto my-5 font-serif text-2xl border-b lg:w-1/2 lg:text-4xl border-red"
              >
                Desa Indah dan Asri di Bali
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere
                ut risus, feugiat fames vulputate vel ipsum. Sodales ut libero
                vel id non sodales augue eros.
              </p>
            </div>
          </div>
          <div class="flex justify-center mt-10 lg:justify-end lg:-mt-20">
            <Button text="Selengkapnya" />
          </div>
        </div>
      </div>
      <!-- End Section Article -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.about {
  background: url("~assets/images/balisvg.svg") no-repeat center;
}
</style>
