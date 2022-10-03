<template>
  <div class='menu-button' :class='{open: open}' @click="open = !open">
    <div class="circle"></div>
    <div class="bar top"></div>
    <div class="bar center"></div>
    <div class="bar bottom"></div>
  </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue';

const open = ref(false);
</script>

<style lang="scss" scoped>
.menu-button {
  width: 80px;
  height: 80px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
}

.circle {
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.2);

  transform-origin: center;
  transition: transform 400ms;
  transition-timing-function: ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
}

.bar {
  width: 20px;
  height: 2px;
  background-color: white;
  transition: transform 200ms;

  &.center {
    transform-origin: left;
  }
}

.menu-button.open .bar {
  &.top {
    transform: translateY(6px) rotate(45deg);
  }

  &.center {
    transform: scaleX(0);
  }

  &.bottom {
    transform: translateY(-6px) rotate(-45deg);
  }
}
</style>