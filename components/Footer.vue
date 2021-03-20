<template>
  <div>
    <div
      class="flex flex-col mt-32 text-center lg:pt-32 lg:mt-56 footer--background"
    >
      <div class="container">
        <div class="flex flex-col">
          <h1 class="font-serif text-4xl lg:text-6xl">
            Ada Pertanyaan, Keluhan, atau Saran ?
          </h1>
          <p class="mx-auto text-sm lg:text-base lg:w-6/12">
            Pesan Anda akan dikirimkan melalui Aplikasi Telegram ke pengurus
            Desa Pucaksari. Yuk jangan ragu untuk diskusi dengan kami!
          </p>
          <form action="#">
            <div class="relative flex w-10/12 mx-auto mt-10 mb-4">
              <input
                type="text"
                class="relative flex-1 flex-grow flex-shrink w-px h-16 px-3 leading-normal text-black border rounded rounded-r-none"
                placeholder="Tuliskan pesanmu disini"
              />
              <div class="flex -mr-px">
                <button type="submit" class="px-3 bg-black rounded-r">
                  Kirim
                </button>
              </div>
            </div>
          </form>
        </div>
        <div
          class="flex flex-col pb-24 mx-10 mt-20 text-left border-b lg:flex-row lg:justify-between border-red"
        >
          <div class="flex flex-col mt-10 lg:w-4/12">
            <h1 class="font-serif text-2xl lg:text-4xl">Pucak Sari</h1>
            <p class="text-sm text-left lg:text-base">
              Parawisely membantu kamu untuk memilih tempat wisata di Indonesia
              yang kaya akan budaya dan keberagaman serta petualangan yang
              menunggumu di Indonesia.
            </p>
          </div>
          <div class="flex flex-col mt-10 lg:w-4/12 lg:ml-32">
            <h1 class="font-serif text-2xl lg:text-4xl">Navigasi</h1>
            <div class="grid grid-flow-row gap-2 text-sm lg:text-base">
              <nuxt-link to="#">Home</nuxt-link>
              <nuxt-link to="#">Pura</nuxt-link>
              <nuxt-link to="#">Hasil Desa</nuxt-link>
              <nuxt-link to="#">Lokasi</nuxt-link>
              <nuxt-link to="#">Kontak</nuxt-link>
            </div>
          </div>
          <div class="flex flex-col mt-10 lg:w-4/12">
            <h1 class="font-serif text-2xl lg:text-4xl">Kontak</h1>
            <div class="text-sm lg:text-base">
              <p>Desa Angseri, Kecamatan Baturiti, Tabanan, Bali, Indonesia</p>
              <p class="mt-10">+62 813 3818 8144</p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col py-5 text-sm font-bold text-center lg:text-base mx-ato"
      >
        <p>Copyright 2021 Desa Pucaksari. All Right Reserved</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.footer--background {
  background: url("~assets/images/web/bg.jpg") no-repeat;
  background-size: cover;
}
</style>