<template>
  <div class="container text-center">
    <h1 class="mt-40 mb-5 font-serif text-3xl" v-if="error.statusCode === 404">
      Halaman Tidak ditemukan
    </h1>
    <h1 class="mt-40 mb-5 font-serif text-3xl" v-else>
      Ada yang salah, Coba kembali lagi
    </h1>
    <Button to="/" text="Kembali ke beranda" />
  </div>
</template>

<script>
export default {
  props: ["error"],
};
</script>
