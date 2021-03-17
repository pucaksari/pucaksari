<template>
  <div>
    <div class="flex flex-col py-12 mt-56 text-center">
      <div class="flex flex-col">
        <h1 class="font-serif text-6xl">
          Ada Pertanyaan, Keluhan, atau Saran ?
        </h1>
        <p class="w-6/12 mx-auto">
          Pesan Anda akan dikirimkan melalui Aplikasi Telegram ke pengurus Desa
          Pucaksari. Yuk jangan ragu untuk diskusi dengan kami!
        </p>
        <form action="#">
          <div class="relative flex w-10/12 mx-auto mt-10 mb-4">
            <input
              type="text"
              class="relative flex-1 flex-grow flex-shrink w-px h-16 px-3 leading-normal text-black border rounded rounded-r-none border-red"
              placeholder="Tuliskan pesanmu disini"
            />
            <div class="flex -mr-px">
              <button type="submit" class="px-3">Kirim</button>
            </div>
          </div>
        </form>
      </div>
      <div
        class="flex justify-between pb-5 mx-10 mt-20 text-left border-b border-red"
      >
        <div class="flex flex-col w-4/12">
          <h1 class="font-serif text-4xl">Pucak Sari</h1>
          <p class="text-left">
            Parawisely membantu kamu untuk memilih tempat wisata di Indonesia
            yang kaya akan budaya dan keberagaman serta petualangan yang
            menunggumu di Indonesia.
          </p>
        </div>
        <div class="flex flex-col w-4/12 ml-32">
          <h1 class="font-serif text-4xl">Navigasi</h1>
          <div class="grid grid-flow-row gap-2">
            <nuxt-link to="#">Home</nuxt-link>
            <nuxt-link to="#">Pura</nuxt-link>
            <nuxt-link to="#">Hasil Desa</nuxt-link>
            <nuxt-link to="#">Lokasi</nuxt-link>
            <nuxt-link to="#">Kontak</nuxt-link>
          </div>
        </div>
        <div class="flex flex-col w-4/12">
          <h1 class="font-serif text-4xl">Kontak</h1>
          <p>Desa Angseri, Kecamatan Baturiti, Tabanan, Bali, Indonesia</p>
          <p class="mt-10">+62 813 3818 8144</p>
        </div>
      </div>
    </div>
    <div class="flex flex-col py-5 font-bold text-center mx-ato">
      <p>Copyright 2021 Desa Pucaksari. All Right Reserved</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>