<template>
  <div>
    <div class="relative flex flex-col justify-between px-4 hero-banner">
      <Navbar />
      <div class="container flex my-12 lg:my-0 lg:mt-20 place-items-center">
        <div class="flex-col w-1/2">
          <div class="flex place-items-center">
            <span class="">02 Oktober 2021</span>
            <div class="w-1/12 h-1 mx-10 bg-red"></div>
            <span>Ismawati</span>
          </div>
          <h1 class="font-serif text-4xl md:text-5xl lg:text-5xl">
            Acara Bakti Sosial dari Universitas Udayana
          </h1>
        </div>
        <div class="w-1/2 img-article"></div>
      </div>
      <Gradient class="-mx-4" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.img-article {
  height: 400px;
  background-image: url("~assets/images/galeri/21.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}
</style>