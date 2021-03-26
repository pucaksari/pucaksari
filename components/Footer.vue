<template>
  <div>
    <div
      class="flex flex-col mt-32 text-center lg:pt-32 lg:mt-56 footer--background"
    >
      <div class="container px-4">
        <div class="flex flex-col">
          <h1 class="font-serif text-4xl lg:text-6xl">
            Ada Pertanyaan, Keluhan, atau Saran ?
          </h1>
          <p class="mx-auto mt-5 text-sm lg:text-base lg:w-6/12">
            Pesan Anda akan dikirimkan ke pengurus Desa Pucaksari. Yuk jangan
            ragu untuk diskusi dengan kami!
          </p>
          <form action="#" @submit.prevent="submitFormKeluhan">
            <div class="relative flex mx-auto mt-10 mb-4 lg:w-10/12">
              <form
                name="form-keluhan"
                class="relative flex flex-grow"
                @submit.prevent="submitFormKeluhan"
              >
                <input
                  type="text"
                  name="keluhan"
                  v-model="keluhan"
                  :disabled="loading ? true : false"
                  class="relative flex-1 flex-grow flex-shrink w-px h-16 px-3 leading-normal text-black border rounded rounded-r-none"
                  placeholder="Tuliskan pesanmu disini"
                />
                <div class="flex -mr-px">
                  <button type="submit" class="px-3 bg-black rounded-r">
                    {{ loading ? "Loading" : "Kirim" }}
                  </button>
                </div>
              </form>
            </div>
          </form>
        </div>
        <div
          class="flex flex-col pb-24 mt-20 text-left border-b lg:mx-10 lg:flex-row lg:justify-between border-red"
        >
          <div class="flex flex-col mt-10 lg:w-4/12">
            <h1 class="font-serif text-2xl lg:text-4xl">Pucaksari</h1>
            <p class="text-sm text-left lg:text-base">
              Pucaksari dipenuhi oleh tempat wisata yang kaya akan budaya dan
              keberagaman serta petualangan yang menunggumu di Indonesia.
            </p>
          </div>
          <div class="flex flex-col mt-10 lg:w-4/12 lg:ml-32">
            <h1 class="font-serif text-2xl lg:text-4xl">Navigasi</h1>
            <div class="grid grid-flow-row gap-2 text-sm lg:text-base">
              <nuxt-link exact-active-class="none" to="//">Home</nuxt-link>
              <nuxt-link exact-active-class="none" to="/pura">Pura</nuxt-link>
              <nuxt-link exact-active-class="none" to="/komoditas"
                >Komoditas</nuxt-link
              >
              <nuxt-link exact-active-class="none" to="/berita"
                >Berita</nuxt-link
              >
              <nuxt-link exact-active-class="none" to="/galeri"
                >Galeri</nuxt-link
              >
            </div>
          </div>
          <div class="flex flex-col mt-10 lg:w-4/12">
            <h1 class="font-serif text-2xl lg:text-4xl">Kontak</h1>
            <div class="text-sm lg:text-base">
              <p>Desa Angseri, Kecamatan Baturiti, Tabanan, Bali, Indonesia</p>
              <div class="mt-12">
                <a  href="http://wa.me/6283869624779">+62 838 6962 4779</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col px-4 py-5 text-xs font-bold text-center lg:text-base mx-ato"
      >
        <p>Copyright 2021 Desa Pucaksari. All Right Reserved</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keluhan: "",
      loading: false,
    };
  },
  methods: {
    submitFormKeluhan() {
      const form = document.forms["form-keluhan"];
      this.loading = true;
      fetch(
        "https://script.google.com/macros/s/AKfycbxm7_u4-FsDbFA9r0T8C-oX9pqeu_rejdQqb38wQXnReVw85iTGS6v_d3jnYH5oRtT-/exec",
        { method: "POST", body: new FormData(form) }
      )
        .then(() => {
          this.keluhan = "";
          this.loading = false;
          alert("Keluhanmu sudah terkirim, Terimakasih sudah memberi masukan!");
        })
        .catch(() => alert("Ada error, silahkan hubungi admin"));
    },
  },
};
</script>

<style>
.footer--background {
  background: url("~assets/images/web/bg.jpg") no-repeat center;
  background-size: cover;
}
</style>