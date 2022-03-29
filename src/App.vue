<script setup>
import { onBeforeMount,ref,reactive } from 'vue'
import { getLocalPlayBook,getRemotePlayBook,getRemoteDefaultPlayBook } from './api/api'
import { isUndefined } from './utils/isUndefined'
import { config,demoData } from './config/config'
import SlideShow from './components/SlideShow.vue'
import SliderControl from './components/SliderControl.vue'

const editRegions = ref({})

const isLocal = window.location.href.includes('localhost')

const queryUri = window.location.href.split('?')
let paramsUri = ""
if(queryUri.length==2){
  paramsUri = "?"+queryUri[1]
}
const params = new URLSearchParams(paramsUri)
const appID = params.get("appID")
const thingName = params.get("thingName")

onBeforeMount(async ()=>{
  let apiData = {}
  if(!isUndefined(appID)){
    if(isLocal){
      try {
        apiData = await getLocalPlayBook({appID:appID})
          // apiData = await getRemotePlayBook({appID:appID,thingName:thingName})
      } catch (error) {
        console.log(error)
      }
    } else {
      if(isUndefined(thingName)){
        try {
          apiData = await getRemoteDefaultPlayBook({appID:appID})
        } catch (error) {
          console.log(error)
        }
      } else {
        try {
          apiData = await getRemotePlayBook({appID:appID,thingName:thingName})
        } catch (error) {
          console.log(error)
        }
      }
    }
  } else {
    console.log("to display demo site when appID is null")
  }

  if(!isUndefined(apiData.data)){
    if(!isUndefined(apiData.data.editRegions)){
      editRegions.value = apiData.data.editRegions
    }
  } else {
    // editRegions.value = [{assets:[{attribute:config().defaultDisplayImg,name:"defaultImage"}],type:"image",limit:100,regionName:"images",params:{duration:10000000,effection:"fade"}}]
    editRegions.value = demoData
    console.log("bypass the apiData");
  }
})
 
</script>
<template>
  <!-- <SlideShow :editRegions = editRegions /> -->
  <SliderControl :editRegions = editRegions />
</template>

<style>
body,html{
  height: 100vh;
  width: 100vw;
  margin: 0;
  font-family: "Arial", "sans-serif";
}
</style>
