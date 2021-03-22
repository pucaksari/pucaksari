<template>
  <div
    class="container flex items-center justify-between py-10 lg:border-b-2 border-red"
  >
    <div class="flex">
      <h1 class="font-serif text-3xl lg:text-4xl">Pucaksari</h1>
    </div>
    <div class="flex">
      <div class="hidden grid-flow-col gap-16 lg:grid">
        <nuxt-link to="/">Home</nuxt-link>
        <nuxt-link to="pura">Pura</nuxt-link>
        <nuxt-link to="komoditas">Komoditas</nuxt-link>
        <nuxt-link to="berita">Berita</nuxt-link>
        <nuxt-link to="galeri">Galeri</nuxt-link>
      </div>
      <!-- Mobile Menu -->
      <div
        @click="open ? closeMenu() : openMenu()"
        class="fixed z-20 cursor-pointer menu lg:hidden"
      >
        <svg
          v-if="open"
          height="40"
          viewBox="0 0 21 21"
          width="40"
          xmlns="http://www.w3.org/2000/svg"
          class="bg-black"
        >
          <g
            fill="none"
            fill-rule="evenodd"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            transform="translate(5 5)"
          >
            <path d="m.5 10.5 10-10" />
            <path d="m10.5 10.5-10-10z" />
          </g>
        </svg>

        <svg
          v-else
          height="40"
          viewBox="0 0 21 21"
          width="40"
          xmlns="http://www.w3.org/2000/svg"
          class="bg-black"
        >
          <g
            fill="none"
            fill-rule="evenodd"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m4.5 7.5h12" />
            <path d="m4.498 10.5h11.997" />
            <path d="m4.5 13.5h11.995" />
          </g>
        </svg>
      </div>
    </div>
    <div
      class="fixed top-0 z-10 w-screen h-screen pt-32 pl-10 bg-black lg:hidden link-menu"
    >
      <div class="grid gap-10 text-2xl">
        <nuxt-link to="/">Beranda</nuxt-link>
        <nuxt-link to="pura">Pura</nuxt-link>
        <nuxt-link to="komoditas">Komoditas</nuxt-link>
        <nuxt-link to="berita">Berita</nuxt-link>
        <nuxt-link to="galeri">Galeri</nuxt-link>
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
    openMenu() {
      const gsap = this.$gsap;
      gsap.to(".link-menu", {
        duration: 0.3,
        x: "100%",
      });
      this.open = !this.open;
    },
    closeMenu() {
      this.$gsap.to(".link-menu", {
        duration: 0.3,
        x: "0",
      });
      this.open = !this.open;
    },
  },
};
</script>

<style>
.menu {
  right: 5%;
  top: 6%;
}
.link-menu {
  right: 100%;
}
</style>