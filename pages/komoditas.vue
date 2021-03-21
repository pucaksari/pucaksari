<template>
  <div>
    <hero-blank text="Komoditas Desa" />
    <div class="container mt-32">
      <Komoditas />
      <Komoditas />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.img-overlay::after {
  content: "";
  height: 100%;
  width: 100%;
  bottom: 0;
  position: absolute;
  background: linear-gradient(0deg, #1f1e1a 4.45%, rgba(31, 30, 26, 0) 100%);
}
</style>