<template>
  <div class="container pt-10 text-white">
    <Navbar />
    <!-- Hero Section -->
    <div class="flex flex-col py-24">
      <h1 class="font-serif text-6xl">
        Temukan keindahan dan <br />
        keberagaman budaya
      </h1>
      <div class="flex">
        <div class="w-16 h-1 mt-2 mr-3 bg-white"></div>
        <p class="w-1/2">
          Parawisely membantu kamu untuk memilih tempat wisata di Indonesia yang
          kaya akan budaya dan keberagaman serta petualangan yang menunggumu di
          Indonesia.
        </p>
      </div>
      <a class="pt-5 ml-20" href="#">
        <span class="px-4 py-2 border border-white">Selengkapnya</span>
      </a>
    </div>
    <!-- End Hero Section -->
    <!-- About Section -->
    <div class="relative flex items-center py-48 about">
      <div class="w-1/2">
        <div class="h-64 bg-gray-800"></div>
      </div>
      <img
        class="absolute ml-56 bg-cover"
        src="~assets/images/balisvg.svg"
        alt=""
      />

      <div class="flex flex-col w-1/2 ml-5">
        <h1 class="mb-5 font-serif text-3xl">
          <span class="border-b border-white">Pucak Sari</span>
        </h1>
        <p class="relative text-about">
          Desa Angseri memiliki luas 758,160 Km2. Desa Angseri dibagi menjadi 4
          dusun dengan 3 desa pekraman. Dilihat dari kondisi geografisnya,
          wilayah Desa Angseri merupakan dataran dengan ketinggian kurang lebih
          640 meter di atas permukaan laut, dengan curah hujan rata-rata 3,458
          mm/tahun.
        </p>
        <a class="pt-5" href="#">
          <span class="px-4 py-2 border border-white">Telusuri</span>
        </a>
      </div>
    </div>
    <!-- End About Section -->
    <!-- Video Section -->
    <div class="flex flex-col mt-10">
      <h1 class="mb-5 font-serif text-3xl">Video</h1>
      <div class="flex justify-center">
        <div class="w-10/12">
          <!-- youtube div element -->
          <vue-plyr>
            <div
              data-plyr-provider="youtube"
              data-plyr-embed-id="H4p7fJGHCI8"
            ></div>
          </vue-plyr>
        </div>
      </div>
    </div>
    <!-- End Video Section -->
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
