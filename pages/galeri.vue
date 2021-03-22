<template>
  <div>
    <hero-blank text="Galeri Desa" />
    <div class="container mt-32">
      <div
        class="grid grid-cols-3 gap-4"
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
        <img
          v-for="src in countImage"
          :key="src"
          :src="require(`~/assets/images/galeri/${src}.jpg`)"
          alt=""
        />
      </div>
      <div class="flex justify-center mt-20">
        <button @click="more" class="px-8 py-4 text-xs lg:text-base bg-red">
          Lihat lebih banyak
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import "viewerjs/dist/viewer.css";
export default {
  data() {
    return {
      countImage: 9,
    };
  },
  methods: {
    more() {
      this.countImage *= 2;
    },
  },
};
</script>
