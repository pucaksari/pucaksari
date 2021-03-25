<template>
  <div>
    <div class="relative flex flex-col justify-between px-4 hero-banner">
      <Navbar />
      <div
        class="container flex flex-col my-12 lg:flex-row lg:my-0 lg:mt-20 place-items-center"
      >
        <div class="flex-col lg:w-1/2">
          <div class="flex place-items-center">
            <span class="text-xs lg:text-base">{{ berita.tanggal }}</span>
            <div class="w-1/12 h-1 mx-3 lg:mx-10 lg:w-1/12 bg-red"></div>
            <span class="text-xs lg:text-base"> {{ berita.penulis }} </span>
          </div>
          <h1
            class="mt-10 font-serif text-4xl lg:ml-0 lg:m-6 md:text-5xl lg:text-5xl"
          >
            {{ berita.judul }}
          </h1>
        </div>
        <div
          class="w-full lg:w-1/2 img-article"
          :style="`background-image: url(${imgSrc(berita.judul_gambar)})`"
        ></div>
      </div>
      <Gradient class="-mx-4" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    imgSrc(src) {
      return require(`~/assets/images/berita/${src}`);
    },
  },
  props: {
    berita: {
      tanggal: "",
      judul: "",
      deskripsi: "",
      judul_gambar: "",
    },
  },
};
</script>

<style>
.img-article {
  height: 400px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}
</style>