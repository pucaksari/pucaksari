<template>
  <div>
    <header-article :berita="berita" />
    <div class="container">
      <nuxt-content
        class="mx-auto prose md:prose-lg lg:prose-2xl"
        :document="berita"
      />
    </div>
  </div>
</template>

<style>
h1,
h2,
h3,
h4,
h5,
h6 {
  @apply font-serif;
}
</style>

<script>
import HeaderArticle from "~/components/HeaderArticle.vue";
export default {
  components: { HeaderArticle },
  async asyncData({ $content, params }) {
    const berita = await $content("artikel", params.slug).fetch();
    return { berita };
  },
};
</script>