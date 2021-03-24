<template>
  <div class="overflow-hidden text-white bg-black">
    <div class="container"></div>

    <Nuxt />
    <!-- Footer Section-->
    <Footer />
    <!-- End Footer Section -->
  </div>
</template>

<script>
export default {
  mounted() {
    // this.$gsap.utils.toArray(".gs_reveal").forEach((elem) => {
    //   this.hide(elem); // assure that the element is hidden when scrolled into view
    //   this.$ScrollTrigger.create({
    //     trigger: elem,
    //     onEnter: () => {
    //       this.animateFrom(elem);
    //     },
    //     onEnterBack: () => {
    //       this.animateFrom(elem, -1);
    //     },
    //     onLeave: () => {
    //       this.hide(elem);
    //     }, // assure that the element is hidden when scrolled into view
    //   });
    // });
  },
  methods: {
    animateFrom(elem, direction) {
      direction = direction | 1;

      var x = 0,
        y = direction * 100;
      if (elem.classList.contains("reveal_fromLeft")) {
        x = -100;
        y = 0;
      } else if (elem.classList.contains("reveal_fromRight")) {
        x = 100;
        y = 0;
      }
      this.$gsap.fromTo(
        elem,
        { x: x, y: y, autoAlpha: 0 },
        {
          duration: 1.25,
          x: 0,
          y: 0,
          autoAlpha: 1,
          ease: "expo",
          overwrite: "auto",
        }
      );
    },
    hide(elem) {
      this.$gsap.set(elem, { autoAlpha: 0 });
    },
  },
};
</script>
<style>
.page-enter-active,
.page-leave-active {
  transition: 0.3s ease-in-out;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
.split-parent {
  overflow: hidden;
}
.split-child {
  display: inline-block;
}
</style>
