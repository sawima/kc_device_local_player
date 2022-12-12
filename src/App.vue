<script setup>
import { onBeforeMount,ref,reactive } from 'vue'
import { isUndefined } from './utils/isUndefined'
import { config } from './config/config'
import SliderControl from './components/SliderControl.vue'
import defaultImage from "./assets/kimacloud1920x1080.jpg"

let playData = ref({})

const isLocal = window.location.href.includes('localhost')

const queryUri = window.location.href.split('?')
let paramsUri = ""
if(queryUri.length==2){
  paramsUri = "?"+queryUri[1]
}
const params = new URLSearchParams(paramsUri)
const mediaType = params.get("type")
const mediaFileName = params.get("asset")
const orgID = params.get("orgID")

console.log(mediaType)
console.log(mediaFileName)
console.log(orgID)

onBeforeMount(async ()=>{
  let mediaData = {}

  if(isLocal){
    if(!isUndefined(mediaType)&&!isUndefined(mediaFileName)){
      mediaData={
        type:mediaType,
        src:config.localAssetSite+mediaFileName
      }
      console.log("display image",mediaData);
    } else {
      //demo default local asset
      console.log("display default");
      
      mediaData={
        type:"image",
        src:defaultImage
      }
    }
  } else{
    console.log("remote access")
    if(!isUndefined(mediaType)&&!isUndefined(mediaFileName)&&!isUndefined(orgID)){
      mediaData={
        type:mediaType,
        src:config.remoteAssetSite+orgID+"/assets/"+mediaFileName
      }
      console.log(mediaData)
      
    } else {
      //default remote asset
      console.log("params is not correct")
      
      mediaData={
        type:"image",
        src:config.remoteDefaultAssetImage
      }
    }
  }
  playData.value = mediaData
})
 
</script>
<template>
  <SliderControl :mediaData = playData />
</template>

<style>
body,html{
  height: 100vh;
  width: 100vw;
  margin: 0;
  font-family: "Arial", "sans-serif";
}
</style>
