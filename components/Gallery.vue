<template>
  <div>
    <div class="flex flex-row w-full mx-auto">
      <div class="grid grid-flow-col grid-rows-2 -ml-32 lg:gap-x-10">
        <div class="img-gallery">
          <img :src="require(`~/assets/images/desa/${asset[0]}.jpg`)" alt="" />
        </div>
        <div class="-mt-5 lg:-mt-10 img-gallery">
          <img :src="require(`~/assets/images/desa/${asset[1]}.jpg`)" alt="" />
        </div>
        <div class="mt-5 lg:mt-10 img-gallery">
          <img :src="require(`~/assets/images/desa/${asset[2]}.jpg`)" alt="" />
        </div>
        <div class="img-gallery">
          <img :src="require(`~/assets/images/desa/${asset[3]}.jpg`)" alt="" />
        </div>
        <div class="img-gallery">
          <img :src="require(`~/assets/images/desa/${asset[4]}.jpg`)" alt="" />
        </div>
        <div class="-mt-5 lg:-mt-10 img-gallery">
          <img :src="require(`~/assets/images/desa/${asset[5]}.jpg`)" alt="" />
        </div>
        <div class="mt-5 lg:mt-10 img-gallery">
          <img :src="require(`~/assets/images/desa/${asset[6]}.jpg`)" alt="" />
        </div>
        <div class="img-gallery">
          <img :src="require(`~/assets/images/desa/${asset[3]}.jpg`)" alt="" />
        </div>
        <div class="img-gallery">
          <img :src="require(`~/assets/images/desa/${asset[8]}.jpg`)" alt="" />
        </div>
        <div class="-mt-5 lg:-mt-10 img-gallery">
          <img :src="require(`~/assets/images/desa/${asset[9]}.jpg`)" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<style >
.img-gallery {
  width: 120%;
}
</style>

<script>
export default {
  props: {
    image: "",
  },
  data() {
    return {
      asset: [
        "DSC00407",
        "DSC00419",
        "DSC00432",
        "DSC00448",
        "DSC00471",
        "DSC00502",
        "DSC00525",
        "DSC00535",
        "DSC00546",
        "DSC00567",
      ],
    };
  },
};
</script>

