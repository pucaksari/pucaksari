<template>
  <div
    class="container flex items-center justify-between py-10 lg:border-b-2 border-red"
  >
    <div class="flex">
      <h1 class="font-serif text-xl lg:text-4xl">Pucaksari</h1>
    </div>
    <div class="flex">
      <div class="hidden grid-flow-col gap-16 lg:grid">
        <nuxt-link to="/">Home</nuxt-link>
        <nuxt-link to="pura">Pura</nuxt-link>
        <nuxt-link to="komoditas">Komoditas</nuxt-link>
        <nuxt-link to="berita">Berita</nuxt-link>
        <nuxt-link to="galeri">Galeri</nuxt-link>
      </div>
      <div @click="toggleMenu" class="z-20 cursor-pointer menu lg:hidden">
        {{ open ? "close" : "menu" }}
      </div>
      <div
        class="fixed top-0 z-10 w-screen h-screen bg-black link-menu"
        :class="{ 'left-0': !open }"
      >
        <nuxt-link to="#">Test</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false,
    };
  },
  methods: {
    toggleMenu() {
      const gsap = this.$gsap;

      if (open) {
        gsap.to(".link-menu", {
          duration: 1,
          x: "100%",
        });
      } else {
        gsap.to(".link-menu", {
          duration: 1,
          x: "-100%",
        });
      }
      this.open = !this.open;
    },
  },
};
</script>

<style>
</style>