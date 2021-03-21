<template>
  <div>
    <video-background
      :src="require('~/assets/videos/notitle.mp4')"
      style="height: 100vh"
      overlay="rgba(0, 0, 0, 0.562)"
    >
      <div class="relative flex flex-col h-screen px-4 mb-24 hero-banner">
        <Navbar class="z-10" />
        <div class="container z-20 flex flex-col mt-12 lg:my-32">
          <h1 class="font-serif text-3xl lg:text-6xl">
            Temukan keindahan dan <br />
            keberagaman budaya
          </h1>
          <div class="flex">
            <div class="hidden w-16 h-1 mt-2 mr-3 bg-white lg:block"></div>
            <p class="text-sm lg:w-1/2 lg:text-base">
              Parawisely membantu kamu untuk memilih tempat wisata di Indonesia
              yang kaya akan budaya dan keberagaman serta petualangan yang
              menunggumu di Indonesia.
            </p>
          </div>

          <Button class="my-12 lg:ml-20" to="#" text="Selengkapnya" />
        </div>
      </div>
    </video-background>
  </div>
</template>

<script>
export default {};
</script>

<style>
.video-bg {
  z-index: 1;
}
.hero-banner {
  background-color: rgba(0, 0, 0, 0.562);
}
</style>