<template>
  <div>
    <div class="relative flex flex-col justify-between px-4 hero-banner">
      <Navbar />
      <div class="container flex flex-col my-12 lg:mt-56">
        <h1 class="font-serif text-2xl text-center md:text-5xl lg:text-6xl">
          {{ text }} Pucaksari
        </h1>
      </div>
      <Gradient class="-mx-4" />
    </div>
  </div>
</template>

<script>
import Gradient from "./Gradient.vue";
export default {
  components: { Gradient },
  props: ["text"],
};
</script>

<style>
.hero-banner {
  background: url("~assets/images/web/bg.jpg") no-repeat center;
  background-size: cover;
}
</style>