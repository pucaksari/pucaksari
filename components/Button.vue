<template>
  <div>
    <nuxt-link :to="to">
      <span class="px-8 py-4 bg-red">{{ text }}</span>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: "#",
    },
    text: String,
  },
};
</script>

<style>
</style>