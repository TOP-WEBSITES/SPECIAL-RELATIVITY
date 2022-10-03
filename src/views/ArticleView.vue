<template>
  <div class='article-container'>
    <NavBar />
    <div>
      <transition name="fade">
        <IntroductionChapter v-if="route.query.chapter === 'introduction'" />
        <ApplicationsChapter v-else-if="route.query.chapter === 'applications'" />
        <ParadoxesChapter v-else-if="route.query.chapter === 'paradoxes'" />
      </transition>
    </div>
    <div class="divider"></div>
  </div>
</template>

<script lang='ts' setup>
import { useRoute } from 'vue-router';
import IntroductionChapter from './chapters/IntroductionChapter.vue';
import ApplicationsChapter from './chapters/ApplicationsChapter.vue';
import ParadoxesChapter from './chapters/ParadoxesChapter.vue';
import NavBar from '@/components/NavBar.vue';

const route = useRoute();
</script>

<style lang="scss" scoped>
.article-container {
  height: 100vh;
  background-color: #DCC095;
  display: flex;
  padding-left: 100px;
}

.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter-from,
.fade-leave-active {
  opacity: 0
}

.divider {
  width: 1px;
  height: calc(100vh - 224px);
  align-self: flex-end;
  background-color: rgba(#2D3D27, 0.2);
}
</style>