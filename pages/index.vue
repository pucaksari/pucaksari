<template>
  <div class="pt-10 text-white">
    <div class="container">
      <Navbar />
      <!-- Hero Section -->
      <Hero />
      <!-- End Hero Section -->
      <!-- About Section -->
      <div class="relative flex items-center py-48 about">
        <div class="w-1/2">
          <div class="h-64 bg-gray"></div>
        </div>
        <img class="absolute ml-56 bg-cover" src="~assets/images/balisvg.svg" />

        <div class="flex flex-col w-1/2 ml-5">
          <h1 class="mb-5 font-serif text-5xl">
            <span class="border-b border-red">Pucak Sari</span>
          </h1>
          <p class="relative w-9/12 text-about">
            Desa Angseri memiliki luas 758,160 Km2. Desa Angseri dibagi menjadi
            4 dusun dengan 3 desa pekraman. Dilihat dari kondisi geografisnya,
            wilayah Desa Angseri merupakan dataran dengan ketinggian kurang
            lebih 640 meter di atas permukaan laut, dengan curah hujan rata-rata
            3,458 mm/tahun.
          </p>
          <Button class="mt-10" to="#" text="Telusuri" />
        </div>
      </div>
      <!-- End About Section -->
      <!-- Video Section -->
      <div class="flex flex-col mt-10">
        <h1 class="mb-5 font-serif text-5xl">Video</h1>
        <div>
          <!-- youtube div element -->
          <vue-plyr>
            <div
              data-plyr-provider="youtube"
              data-plyr-embed-id="H4p7fJGHCI8"
            ></div>
          </vue-plyr>
        </div>
      </div>
      <!-- End Video Section -->
      <!-- Gallery Section -->
      <div class="flex flex-col justify-center mt-20 text-center">
        <h1 class="font-serif text-5xl">Galeri Foto</h1>
        <div class="w-1/2 mx-auto my-5">
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
    <div class="container">
      <!-- Section Article -->
      <div class="flex flex-col mt-20">
        <div>
          <h3>KUMPULAN BERITA</h3>
          <h1 class="w-6/12 font-serif text-5xl">
            Informasi, Pengumaman, Acara
          </h1>
          <div class="flex justify-between">
            <div class="flex flex-col justify-center w-6/12 p-10 text-center">
              <img src="~assets/images/desa/DSC00407.jpg" alt="" />
              <span class="mt-10"><p>02 Oktober 2020</p></span>
              <h1
                class="w-1/2 mx-auto my-5 font-serif text-4xl border-b border-red"
              >
                Desa Indah dan Asri di Bali
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere
                ut risus, feugiat fames vulputate vel ipsum. Sodales ut libero
                vel id non sodales augue eros.
              </p>
            </div>
            <div
              class="flex flex-col justify-center w-6/12 p-10 text-center -mt-84"
            >
              <img src="~assets/images/desa/DSC00567.jpg" alt="" />
              <span class="mt-10"><p>02 Oktober 2020</p></span>
              <h1
                class="w-1/2 mx-auto my-5 font-serif text-4xl border-b border-red"
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
          <div class="flex justify-end -mt-20">
            <Button text="Selengkapnya" />
          </div>
        </div>
      </div>
      <!-- End Section Article -->
      <!-- Footer Section-->
      <Footer />
      <!-- End Footer Section -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
