<template>
  <div>
    <div class="flex flex-row w-full">
      <div class="grid grid-flow-col grid-rows-2 -ml-40">
        <div :style="bgImage(asset[0])"></div>
        <div :style="bgImage(asset[1])" class="-mt-10"></div>
        <div :style="bgImage(asset[2])" class="mt-10"></div>
        <div :style="bgImage(asset[3])"></div>
        <div :style="bgImage(asset[4])"></div>
        <div :style="bgImage(asset[5])" class="-mt-10"></div>
        <div :style="bgImage(asset[6])" class="mt-10"></div>
        <div :style="bgImage(asset[7])"></div>
        <div :style="bgImage(asset[8])"></div>
        <div :style="bgImage(asset[9])" class="-mt-10"></div>
      </div>
    </div>
  </div>
</template>

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
  methods: {
    bgImage(image) {
      var req = require(`@/assets/images/desa/${image}.jpg`);
      return {
        height: "14rem",
        width: "21rem",
        backgroundImage: `url(${req})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      };
    },
  },
};
</script>

<style>
</style>