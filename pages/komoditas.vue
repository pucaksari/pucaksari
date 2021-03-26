<template>
  <div>
    <hero-blank text="Komoditas Desa" />
    <div class="container mt-32">
      <Komoditas
        judul="Kopi Robusta"
        deskripsi="Kini, Kelompok Tani Kutul Amerta Rahayu juga sudah memproduksi kopi dengan label Kopi Kutul Robusta.  Rata-rata hasil panen kopi pertahun di desa ini mencapai dua ton perhektar. Total lahan perkebunan kopi yang dikelola oleh 24 petani kopi desa setempat mencapai 100 hektar."
        :gambar1="require(`@/assets/images/galeri/42.jpg`)"
        :gambar2="require(`@/assets/images/galeri/35.jpg`)"
        :gambar3="require(`@/assets/images/galeri/54.jpg`)"
      />
      <Komoditas
        judul="Peternakan"
        deskripsi="Kini, Kelompok Tani Kutul Amerta Rahayu juga sudah memproduksi kopi dengan label Kopi Kutul Robusta.  Rata-rata hasil panen kopi pertahun di desa ini mencapai dua ton perhektar. Total lahan perkebunan kopi yang dikelola oleh 24 petani kopi desa setempat mencapai 100 hektar."
        :gambar1="require(`@/assets/images/galeri/60.jpg`)"
        :gambar2="require(`@/assets/images/galeri/61.jpg`)"
        :gambar3="require(`@/assets/images/galeri/62.jpg`)"
      />
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