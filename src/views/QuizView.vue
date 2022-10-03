<template>
  <div class='quiz-container'>
    <NavBar />
    <div class="divider"></div>
    <div class="main">
      <h1>Quiz</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';

</script>

<style lang='scss' scoped>
.quiz-container {
  height: 100vh;
  background-color: #DCC095;
  display: flex;
  padding-left: 100px;
}

.divider {
  width: 1px;
  height: calc(100vh - 200px);
  background-color: rgba(#2D3D27, 0.2);
  align-self: center;
}

h1 {
  font-family: Porto;
  font-size: 64px;
  font-weight: 400;
  color: #2D3D27;
  margin-bottom: 80px;
}

.main {
  align-self: center;
  margin-left: 180px;
}
</style>