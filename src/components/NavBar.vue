<template>
  <div class='menu'>
    <h3>Chapters</h3>
    <router-link :class="{active: route.query.chapter === 'introduction'}" to='/article?chapter=introduction'>
      Introduction
    </router-link>
    <router-link :class="{active: route.query.chapter === 'applications'}" to='/article?chapter=applications'>
      Applications
    </router-link>
    <router-link :class="{active: route.query.chapter === 'paradoxes'}" to='/article?chapter=paradoxes'>
      Paradoxes
    </router-link>
    <router-link :class="{active: route.query.chapter === 'video'}" to='/article?chapter=video'>
      Video
    </router-link>
    <router-link :class="{active: route.path === '/quiz'}" to='/quiz'>
      Quiz
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<style lang='scss' scoped>
.menu {
  padding-top: 200px;
  margin-right: 160px;

  h3 {
    font-family: Porto;
    font-size: 24px;
    font-weight: 700;
    color: #2D3D27;
    margin-bottom: 40px;
  }

  a {
    display: block;
    margin-bottom: 20px;
    text-decoration: none;
    color: black;
    font-size: 20px;

    &.active {
      color: #2D3D27;
      font-weight: 700;
    }
  }
}
</style>