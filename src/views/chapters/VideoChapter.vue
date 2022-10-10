<template>
  <div class='chapter-container'>
    <h1>Video</h1>
    <p>Now, watch this video that covers some additional information from the article content</p>
    <video width="800" controls>
      <source src="@/assets/video/dave.mp4" type="video/mp4">
    </video>
    <NextChapter prev-chapter="paradoxes" next-chapter="quiz" />
  </div>
</template>

<script setup lang="ts">
import NextChapter from '@/components/NextChapter.vue';

</script>

<style lang='scss' scoped>
h1 {
  margin-bottom: 40px;
}

p {
  margin-bottom: 40px;
}
</style>