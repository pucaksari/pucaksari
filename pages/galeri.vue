<template>
  <div>
    <hero-blank text="Galeri Desa" />
    <div class="container px-4 mt-32">
      <div
        class="grid gap-4 lg:grid-cols-3 place-items-stretch"
        v-viewer="{
          button: true,
          navbar: true,
          title: false,
          toolbar: true,
          movable: false,
          zoomable: false,
          rotatable: false,
          scalable: false,
          transition: true,
        }"
      >
        <div
          v-for="src in countImage"
          :key="src"
          class="h-64 overflow-hidden bg-center bg-no-repeat bg-cover gambar"
          :style="{ backgroundImage: `url(${backgroundUrl(src)})` }"
        >
          <img
            :src="require(`~/assets/images/galeri/${src}.jpg`)"
            class="opacity-0 cursor-pointer"
          />
        </div>
      </div>
      <div class="flex justify-center mt-20">
        <button
          v-if="countImage != maxCountImage"
          @click="more"
          class="px-8 py-4 text-xs lg:text-base bg-red"
        >
          Lihat lebih banyak
        </button>
        <div v-else></div>
      </div>
    </div>
  </div>
</template>


<script>
import "viewerjs/dist/viewer.css";

export default {
  mounted() {},
  data() {
    return {
      countImage: 9,
      maxCountImage: 69,
    };
  },
  methods: {
    backgroundUrl(src) {
      return require(`~/assets/images/galeri/${src}.jpg`);
    },
    more() {
      this.countImage += 9;
      if (this.countImage > this.maxCountImage) {
        this.countImage = 69;
      }
    },
  },
};
</script>
