<template>
  <div class='option-container' :class="{'show-is-correct-answer': props.showIsCorrectAnswer}" @click="$emit('select')">
    <div class="checkbox" :class="{checked: props.isSelected}">
      <div v-if="props.isSelected" class="material-symbols-outlined">
        check_small
      </div>
    </div>
    <div class="text">{{props.text}}</div>
    <span v-if="props.showIsCorrectAnswer" class='correct-answer-message'>Correct answer</span>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  text: String,
  isSelected: Boolean,
  showIsCorrectAnswer: Boolean,
})
</script>

<style lang='scss' scoped>
.option-container {
  width: calc(100% + 28px);
  border-radius: 27px;
  display: flex;
  align-items: center;
  padding-left: 14px;
  padding-right: 20px;
  padding-top: 14px;
  padding-bottom: 14px;
  font-size: 18px;
  cursor: pointer;
  transform: translateX(-14px);

  transition: background-color 200ms;

  &:hover {
    background-color: rgba(#2D3D27, 0.1);
  }

  &:active {
    background-color: rgba(#2D3D27, 0.2);
  }

  &.show-is-correct-answer {
    border: 2px solid rgba(black, 0.1);
  }

  .checkbox {
    width: 28px;
    // min-width: 28px;
    height: 28px;
    border-radius: 14px;
    border: 2px solid black;
    margin-right: 24px;
    display: grid;
    place-items: center;

    transition: background-color 200ms;

    &.checked {
      background-color: black;
    }

    .material-symbols-outlined {
      color: #DCC095;
    }
  }

  .text {
    flex: 1;
    margin-right: 8px;
  }

  .correct-answer-message {
    font-size: 18px;
    font-weight: 700;
  }
}
</style>