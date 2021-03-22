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
export default {};
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
</style>
