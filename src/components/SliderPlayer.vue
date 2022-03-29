<template>
  <agile
    :dots="false"
    :infinite="true"
    :navButtons="false"
    timing="ease"
    :autoplay-speed="duration"
    :autoplay="true"
  >
    <div class="slide" v-for="({attribute,name}) in multiImgs" :key="'image'+name">
      <SingleImage :url="attribute" />
    </div>
  </agile>
</template>

<script setup>
import agile from "./Agile.vue";
import SingleImage from "./SingleImage.vue";
import { toRefs } from "vue";

const props = defineProps({
  multiImgs: Array,
  duration: Number
});
const { multiImgs, duration } = toRefs(props);
</script>

<style>
</style>