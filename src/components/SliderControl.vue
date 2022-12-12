<template>
  <div>
    <!-- <SingleImage :url="defaultImage" /> -->
    <template v-if="mediaData.type=='image'">
      <SingleImage :url="mediaData.src" />
    </template>
    <template v-else-if="mediaData.type=='video'">
        <SingleVideo :url="mediaData.src" />
    </template>
    <template v-else>
      <SingleImage :url="config.remoteDefaultAssetImage" />
    </template>
  </div>
</template>

<script setup>
import { config } from "../config/config";
import SingleImage from "./SingleImage.vue";
import SingleVideo from "./SingleVideo.vue";
import defaultImage from "../assets/kimacloud1920x1080.jpg"

const props = defineProps({
  mediaData: Object
});
</script>

<style scoped>
.slideshow-container {
  width: 100vw;
  height: 100vh;
}

.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}
@-webkit-keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}

@keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}
</style>