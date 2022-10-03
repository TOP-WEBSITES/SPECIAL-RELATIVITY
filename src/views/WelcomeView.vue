<template>
  <div class='container'>
    <MenuButton />
    <div class='column'>
      <h1>Theory of</h1>
      <h1 class='bigger'>Relativity</h1>
      <span>Dave, Jia Jie, Mayukh</span>
    </div>
    <div class="spacer"></div>
    <StartReadingButton />
  </div>
</template>

<script lang='ts' setup>
import MenuButton from '@/components/MenuButton.vue';
import StartReadingButton from '@/components/StartReadingButton.vue';

</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  display: flex;
  align-items: center;
  padding-left: 100px;
  padding-right: 100px;
  overflow: clip;
}

.column {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-left: 80px;

  span {
    font-size: 24px;
    font-weight: 300;
    margin-top: 40px;
    color: white;
  }
}

h1 {
  font-family: Porto;
  font-size: 80px;
  font-weight: 400;
  color: #DCC095;

  &.bigger {
    font-size: 96px;
  }
}
</style>