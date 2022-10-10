<template>
  <div class='chapter-container'>
    <h1>Video</h1>
    <p>Now, watch this video that covers some additional information from the article content</p>
    <iframe width="800" height="500" src="https://www.youtube.com/embed/nXLWFuMyJkw"></iframe>
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