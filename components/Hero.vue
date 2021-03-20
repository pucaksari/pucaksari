<template>
  <div>
    <div class="relative flex flex-col px-4 mb-24 hero-banner">
      <div class="z-10">
        <Navbar class="z-10" />
        <div class="container z-20 flex flex-col mt-12 lg:mt-32">
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

          <Button class="mt-12 lg:ml-20" to="#" text="Selengkapnya" />
        </div>
      </div>
      <video
        muted
        autoplay
        loop
        class="absolute hidden -mx-4 bg-black opacity-25 lg:block video-bg"
      >
        <source src="~assets/videos/notitle.mp4" type="video/mp4" />
      </video>
    </div>
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
  background-color: rgba(0, 0, 0, 0.123);
}
</style>