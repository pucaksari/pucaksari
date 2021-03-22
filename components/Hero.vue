<template>
  <client-only placeholder="Loading...">
    <div>
      <video-background
        :src="require('~/assets/videos/notitle.mp4')"
        :poster="require('~/assets/images/web/bg.jpg')"
        class="flex flex-col justify-between w-full vid-bg"
        overlay="rgba(0, 0, 0, 0.562)"
      >
        <div class="relative flex flex-col px-4 mb-24">
          <Navbar class="z-10" />
          <div class="container flex flex-col mt-12 lg:mt-32">
            <h1 class="font-serif text-3xl lg:text-6xl">
              Temukan keindahan dan <br />
              keberagaman budaya
            </h1>
            <div class="flex">
              <div class="hidden w-16 h-1 mt-2 mr-3 bg-white lg:block"></div>
              <p class="text-sm lg:w-1/2 lg:text-base">
                Parawisely membantu kamu untuk memilih tempat wisata di
                Indonesia yang kaya akan budaya dan keberagaman serta
                petualangan yang menunggumu di Indonesia.
              </p>
            </div>

            <Button class="my-12 lg:ml-20" to="#" text="Selengkapnya" />
          </div>
        </div>
        <Gradient class="-mt-24 lg:-mt-32 md:-mt-32 md:block lg:block" />
      </video-background>
    </div>
  </client-only>
</template>

<script>
import Gradient from "./Gradient.vue";
export default {
  components: { Gradient },
  props: ["text"],
};
</script>

<style>
.vid-bg {
  height: 100vh;
}

.video-wrapper {
  background-size: cover;
  background-position: center;
  display: none !important;
}

@scren md {
  .video-wrapper {
    display: block !important;
  }
}

@screen lg {
  .video-wrapper {
    display: block !important;
  }
  .vid-bg {
    height: 910px;
  }
}
</style>