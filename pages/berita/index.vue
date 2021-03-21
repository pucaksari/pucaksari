<template>
  <div>
    <hero-blank />
    <div class="container grid grid-cols-1 px-4 lg:grid-cols-2">
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

<style>
</style>