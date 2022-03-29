<template>
    <div class="imgdiv">
      <img :src="url" draggable="false" />
    </div>
</template>

<script setup>
import { ref,toRefs } from "vue";
    // const bgStyle = ref("")
    const props = defineProps({
        url: String
    })
    // const { url } = toRefs(props)

    // bgStyle.value=`background-image: url("${url.value}");`
    // console.log(bgStyle.value);
</script>

<style scoped>
/* .bgimg{
  position: absolute;
  opacity: 1;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
} */
/* .imgdiv{
  position: relative;
  opacity: 1;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  background-image: url("https://s3.cn-northwest-1.amazonaws.com.cn/kcsignage-dev.1m2.fun/Ax1lpAZXVc9t/assets/2SuqFl6aOlf48Cli.jpg");
} */
.imgdiv {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    height: 100vh;
    width: 100vw;
    /* height: 100vh;
    width: 100vw; */
}
.imgdiv img {
    flex-shrink:2;
    object-fit: contain;
    /* width: 100vw; */
    min-width: 100vw;
    /* min-height: 100%; */
    /* max-width:100%; */
    /* max-height:100%; */
    /* width: 100vh;
    height: 100vw; */
}
</style>