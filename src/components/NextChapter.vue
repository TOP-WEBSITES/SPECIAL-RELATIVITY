<template>
  <div class='next-chapter-container'>
    <div v-if="props.prevChapter" class="prev-btn" @click="goToPrev">
      <div class="material-symbols-outlined">arrow_back</div>
    </div>
    <div v-if="props.nextChapter" class="next-btn" @click="goToNext">
      Next Chapter
      <div class="material-symbols-outlined">arrow_forward</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps({
  prevChapter: String,
  nextChapter: String,
});

function goToPrev() {
  router.push(`/article?chapter=${props.prevChapter}`);
}

function goToNext() {
  if (props.nextChapter === 'quiz') {
    router.push('/quiz');
  } else {
    router.push(`/article?chapter=${props.nextChapter}`);
  }
}
</script>

<style lang='scss' scoped>
.next-chapter-container {
  display: flex;
  justify-content: flex-end;
  margin-top: 100px;
  margin-bottom: 100px;
}

.prev-btn {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: rgba(#2D3D27, 0.2);
  margin-right: 24px;
  display: grid;
  place-items: center;
  cursor: pointer;
  user-select: none;

  transition: transform 200ms, background-color 200ms;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(1);
    background-color: rgba(#2D3D27, 0.4);
  }

  .material-symbols-outlined {
    color: #2D3D27;
  }
}

.next-btn {
  height: 80px;
  border-radius: 40px;
  padding-left: 36px;
  padding-right: 24px;
  display: flex;
  align-items: center;
  background-color: #2D3D27;
  color: #DCC095;
  font-weight: 500;
  cursor: pointer;
  user-select: none;

  transition: transform 200ms, background-color 200ms;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(1);
    background-color: #21271f;
  }

  .material-symbols-outlined {
    margin-left: 28px;
  }
}
</style>