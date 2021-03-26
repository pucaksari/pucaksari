<template>
  <div>
    <div class="flex flex-col justify-center px-4 mt-32">
      <h1 class="mb-5 font-serif text-3xl lg:text-6xl">{{ nama }}</h1>
      <div class="relative img-pura">
        <img :src="gambarPura" alt="Pura Dalem" />
      </div>
      <div class="flex w-10/12 mx-auto">
        <p class="z-10 -mt-5 text-sm text-center lg:text-base">
          {{ deskripsi }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["nama", "deskripsi", "gambarPura"],
};
</script>