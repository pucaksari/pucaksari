<template>
  <div>
    <hero-blank text="Pura" />
    <div class="container">
      <Pura
        :gambarPura="require(`~/assets/images/pura/pucak-luhur.jpg`)"
        nama="Pura Pucak Luhur"
      />
      <Pura
        :gambarPura="require(`~/assets/images/pura/dalem.jpg`)"
        nama="Pura Dalem"
      />
      <Pura
        :gambarPura="require(`~/assets/images/pura/melanting.jpg`)"
        nama="Pura Melanting"
      />
      <Pura
        :gambarPura="require(`~/assets/images/pura/yeh-sakti.jpg`)"
        nama="Pura Yeh Sakti"
      />
      <Pura
        :gambarPura="require(`~/assets/images/pura/pakangaya.jpg`)"
        nama="Pura Pakang Aya"
      />
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