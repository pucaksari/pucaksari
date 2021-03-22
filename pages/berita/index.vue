<template>
  <div>
    <hero-blank text="Berita baru di Desa" />
    <div class="container grid grid-cols-1 px-4 lg:px-0 lg:grid-cols-2">
      <Article />
      <Article />
      <Article />
    </div>
  </div>
</template>

<script>
import HeroBlank from "~/components/HeroBlank.vue";
export default {
  components: { HeroBlank },
};
</script>
