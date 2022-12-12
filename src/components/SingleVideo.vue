<template>
    <div class="videodiv">
        <video :src="url" autoplay="true" loop="true" muted="true" />
    </div>
</template>

<script setup>
    const props = defineProps({
        url: String
    })
</script>

<style scoped>
.videodiv {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    overflow: hidden;
    height: 100%;
    width: 100%;
}
.videodiv video {
    width: 100%;
    object-fit: contain;
}
</style>