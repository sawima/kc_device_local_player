<template>
  <div>
    <template v-if="multiImgs.length>0">
      <template v-if="effection=='slider'">
        <SliderPlayer :multiImgs="multiImgs" :duration="duration" />
      </template>
      <template v-else-if="effection=='fade'">
        <FadePlayer :multiImgs="multiImgs" :duration="duration" />
      </template>
      <template v-else>
        <FadePlayer :multiImgs="multiImgs" :duration="duration" />
      </template>
    </template>
  </div>
</template>

<script setup>
import { ref, toRefs, watch, onBeforeMount } from "vue";
import { isUndefined } from "../utils/isUndefined";
import { config } from "../config/config";
import SliderPlayer from "./SliderPlayer.vue";
import FadePlayer from "./FadePlayer.vue";

const props = defineProps({
  editRegions: Object
});
const { editRegions } = toRefs(props);
const duration = ref(30000);
const effection = ref("fade");
const multiImgs = ref([]);

function calPlayData(regionData) {
  if (!isUndefined(regionData[0])) {
    if (!isUndefined(regionData[0].assets)) {
      multiImgs.value = regionData[0].assets;
      if (!isUndefined(regionData[0].params)) {
        if (!isUndefined(regionData[0].params.duration)) {
          try {
            duration.value = parseInt(regionData[0].params.duration);
          } catch (e) {
            console.log(e);
          }
        }
        if(multiImgs.length>1){
          if(!isUndefined(regionData[0].params.effection)) {
            effection.value = regionData[0].params.effection;
          }
        }
      }
    }
  }
}
calPlayData(editRegions.value)
watch(editRegions, (newData, oldData) => {
  calPlayData(newData);
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