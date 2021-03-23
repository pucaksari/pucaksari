<template>
  <div>
    <header-article />
    <div class="container">
      <nuxt-content
        class="px-10 prose md:prose-lg lg:prose-2xl"
        :document="berita"
      />
    </div>
  </div>
</template>

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