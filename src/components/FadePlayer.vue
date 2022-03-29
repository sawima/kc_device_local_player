<template>
  <div
    class="slideshow-container"
    @touchstart.passive="handleTouchStart"
    @touchmove.passive="handleTouchMove"
    @mousedown="divMouseDown"
    @mousemove="divMouseMove"
    @mouseup="divMouseUp"
  >
    <div
      class="mySlides fade"
      v-for="({attribute,name}, index) in multiImgs"
      :key="'image'+name"
      v-show="index==showIndex"
    >
      <SingleImage :url="attribute" />
    </div>
  </div>
</template>

<script setup>
import { ref, toRefs, watch,onMounted } from "vue";
import { isUndefined } from "../utils/isUndefined";
import { config } from "../config/config";
import SingleImage from "./SingleImage.vue";

const showIndex = ref(0);
let xDown = null;
let yDown = null;
let mouseX = null;

let imgsLen = 0;
let timeInterval;
let mouseDrag = false
const props = defineProps({
  multiImgs: Array,
  duration: Number
});
const { multiImgs,duration } = toRefs(props);

// function divDragStart(){
//     console.log("div drag start")
// }

function divMouseDown(evt){
    mouseX = evt.pageX
    mouseDrag = true
}

function divMouseUp(evt){
    if(!mouseDrag) return
    var xMove =evt.pageX;
    var xDistance = xMove - mouseX

    if(xDistance>0){
        if (showIndex.value > 0) {
            showIndex.value--;
        } else {
            showIndex.value = imgsLen - 1;
        }
    } else if(xDistance<0) {
        if (showIndex.value < imgsLen - 1) {
            showIndex.value++;
        } else {
            showIndex.value = 0;
        }
    }
    mouseDrag = false
    mouseX = null
}
function divMouseMove(evt){
    if(!mouseDrag || !mouseX) return
}

function clickToNext() {
  if (showIndex.value < imgsLen - 1) {
    showIndex.value++;
  } else {
    showIndex.value = 0;
  }
}

function handleTouchStart(evt) { 
  const firstTouch = evt.touches[0];
  xDown = firstTouch.clientX;
  yDown = firstTouch.clientY;
}

function handleTouchMove(evt) {
  if (!xDown || !yDown) {
    return;
  }
  var xUp = evt.touches[0].clientX;
  var yUp = evt.touches[0].clientY;

  var xDiff = xDown - xUp;
  var yDiff = yDown - yUp;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    /*most significant*/
    if (xDiff > 0) {
      /* right swipe */
      if (showIndex.value < imgsLen - 1) {
        showIndex.value++;
      } else {
        showIndex.value = 0;
      }
    } else {
      /* left swipe */
      if (showIndex.value > 0) {
        showIndex.value--;
      } else {
        showIndex.value = imgsLen - 1;
      }
    }
  } else {
    if (yDiff > 0) {
      /* down swipe */
    } else {
      /* up swipe */
    }
  }
  xDown = null;
  yDown = null;
}
function showImages(){
  clearInterval(timeInterval);
  imgsLen = multiImgs.value.length
  if(imgsLen>0){
    timeInterval = setInterval(() => {
      if (showIndex.value < imgsLen - 1) {
        showIndex.value++;
      } else {
        showIndex.value = 0;
      }
      // console.log(showIndex.value);
    }, duration.value);
  }
}
// console.log(multiImgs.value);
showImages()
// onMounted(()=>{
//   showImages()
// })
// showImages()

// onBeforeMount(()=>{
//   showImages()
// })
// watch(editRegions, (newData, oldData) => {
//   showImages();
// });
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