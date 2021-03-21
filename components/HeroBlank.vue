<template>
  <div>
    <div class="relative flex flex-col justify-between px-4 hero-banner">
      <Navbar />
      <video-background
        src="./assets/video/notitle.mp4"
        style="max-height: 400px; height: 100vh"
      >
        <h1 style="color: white">Hello welcome!</h1>
      </video-background>
      <div class="container flex flex-col my-12 lg:mt-56">
        <h1 class="font-serif text-2xl text-center lg:text-6xl">
          Hal baru di Desa Pucaksari
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
};
</script>

<style>
.hero-banner {
  background: url("~assets/images/web/bg.jpg") no-repeat center;
  background-size: cover;
}
</style>