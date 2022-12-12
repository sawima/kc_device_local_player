<template>
    <div class="imgdiv">
      <img :src="url" draggable="false" />
    </div>
</template>

<script setup>
    const props = defineProps({
        url: String
    })
</script>

<style scoped>
.imgdiv {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    height: 100vh;
    width: 100vw;
}
.imgdiv img {
    flex-shrink:2;
    object-fit: contain;
    min-width: 100vw;
}
</style>