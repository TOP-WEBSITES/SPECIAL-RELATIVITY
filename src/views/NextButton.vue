<template>
  <div class='stack'>
    <div ref='curve' class="img-container">
      <img src="@/assets/images/welcome_curve.svg" />
    </div>
    <div ref="button" class="btn-movement">
      <div class='next-button' @mouseenter="mouseEnter" @mouseleave="mouseLeave" @mousedown="expandButton">
        <div class="material-symbols-outlined">arrow_forward</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const curve = ref(null);
const button = ref(null);

function mouseEnter() {
  curve.value.classList.add('hover');
}

function mouseLeave() {
  curve.value.classList.remove('hover');
}

function expandButton() {
  button.value.classList.add('explode');
  setTimeout(() => router.push('/article'), 450);
}
</script>

<style lang="scss" scoped>
.stack {
  width: 100px;
  height: 100vh;
  overflow-y: clip;
  position: relative;

  .img-container {
    position: absolute;
    transform: translateX(36px) scale(1.2);
    transform-origin: left;
    transition: transform 400ms;

    &.hover {
      transform: translateX(36px) scale(1.3);
    }
  }

  img {
    height: 100vh;
    transform-origin: left;
    animation: undulate 1s infinite;
    animation-direction: alternate;
    animation-timing-function: ease-in-out;
  }
}

@keyframes undulate {
  from {
    transform: scale(1.2);
  }

  to {
    transform: scale(1.38);
  }
}

.btn-movement {
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  animation: backandforth 1s infinite;
  animation-direction: alternate;
  animation-timing-function: ease-in-out;

  &.explode .material-symbols-outlined {
    opacity: 0;
  }
}

@keyframes backandforth {
  from {
    transform: translate(0, -50%);
  }

  to {
    transform: translate(12%, -50%);
  }
}

.next-button {
  width: 80px;
  height: 80px;
  border-radius: 40px;
  background-color: #DCC095;
  cursor: pointer;
  user-select: none;
  display: grid;
  place-items: center;

  transition: transform 400ms;

  &:hover {
    transform: scale(1.1);
  }
}

.explode .next-button {
  transform: scale(50);
}

.material-symbols-outlined {
  color: black;
}
</style>