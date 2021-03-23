<template>
  <div class="flex flex-col justify-center mt-20 text-center lg:mt-0 lg:p-10">
    <img src="~assets/images/desa/DSC00407.jpg" alt="" />
    <span class="mt-10 text-sm lg:text-base"
      ><p>{{ berita.tanggal }}</p></span
    >
    <nuxt-link
      :to="`/berita/${berita.slug}`"
      class="mx-auto my-5 font-serif text-2xl border-b lg:text-4xl border-red"
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
  props: {
    berita: {
      tanggal: "",
      judul: "",
      path: "",
      deskripsi: "",
    },
  },
};
</script>