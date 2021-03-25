<template>
  <div class="flex flex-col justify-center mt-20 text-center lg:mt-0 lg:p-10">
    <div
      class="w-full bg-center bg-no-repeat bg-cover h-96"
      :style="`background-image: url(${imgSrc(berita.judul_gambar)})`"
    >
      <!-- <img src="" alt="" /> -->
    </div>
    <span class="mt-10 text-sm lg:text-base"
      ><p>{{ berita.tanggal }}</p></span
    >
    <nuxt-link
      :to="`/berita/${berita.slug}`"
      class="pb-5 mx-auto my-5 font-serif text-2xl border-b lg:text-4xl border-red"
    >
      {{ berita.judul }}
    </nuxt-link>
    <p class="text-sm lg:text-base">
      {{ berita.deskripsi }}
    </p>
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
      path: "",
      deskripsi: "",
      judul_gambar: "",
    },
  },
};
</script>