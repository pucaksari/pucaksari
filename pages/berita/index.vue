<template>
  <div>
    <hero-blank text="Berita baru di Desa" />
    <div class="container grid grid-cols-1 px-4 lg:px-0 lg:grid-cols-2">
      <div v-for="berita in listBerita" :key="berita.id">
        <Article :berita="berita" />
      </div>
    </div>
  </div>
</template>

<script>
import HeroBlank from "~/components/HeroBlank.vue";
export default {
  components: { HeroBlank },
  head() {
    return {
      title: "Pesona Pucaksari | Berita",
    };
  },
  async asyncData({ $content, params }) {
    const listBerita = await $content("artikel")
      .sortBy("createdAt", "desc")
      .fetch();
    return { listBerita };
  },
};
</script>
