<template>
  <div>
    <hero-blank text="Pura" />
    <div class="container">
      <Pura nama="Pura Pucak Luhur" />
      <Pura nama="Pura Dalem" />
      <Pura nama="Pura Melanting" />
      <Pura nama="Pura Yeh Sakti" />
      <Pura nama="Pura Pakangaya" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.img-pura::after {
  content: "";
  height: 100%;
  width: 100%;
  bottom: 0;
  position: absolute;
  background: linear-gradient(0deg, #1f1e1a 4.45%, rgba(31, 30, 26, 0) 100%);
}
</style>