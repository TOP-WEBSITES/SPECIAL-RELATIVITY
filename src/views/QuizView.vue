<template>
  <div class='quiz-container'>
    <NavBar />
    <div class="divider"></div>
    <div v-if="qn < 5" class="main">
      <h1>Quiz</h1>
      <div class='qnum-container'>
        <h3>Question {{qn + 1}} of 5</h3>
        <div class='bar'>
          <div class="progress" :style="{width: `${24 * qn + 24}px`}"></div>
        </div>
      </div>
      <p class="question-text">
        {{questions[qn].text}}
      </p>
      <QuestionOption v-for="(option, i) in questions[qn].options" :key="i" :text="option"
        :isSelected="selectedOption === i" @select="selectedOption = checkAnswer ? selectedOption : i"
        :show-is-correct-answer="checkAnswer && i === questions[qn].answer" />
      <div class="bottom">
        <div class="correct-answer-message up-in"
          :class="{show: checkAnswer && selectedOption === questions[qn].answer}">
          <div class="material-symbols-outlined">check</div>
          Great job!
        </div>
        <div class="wrong-answer-message up-in" :class="{show: checkAnswer && selectedOption !== questions[qn].answer}">
          <div class="material-symbols-outlined">close</div>
          Incorrect
        </div>
        <div class="spacer"></div>
        <div class="next-btn" :class="{'equal-padding': !checkAnswer}" @click="checkAnswerOrNextQn">
          {{ checkAnswer ? (qn == 4 ? 'View results' : 'Next') : 'Check answer' }}
          <div v-if="checkAnswer" class="material-symbols-outlined">arrow_forward</div>
        </div>
      </div>
    </div>
    <div v-else class='main results-container'>
      <h1>Results</h1>
      <h3>{{numCorrect}} / 5</h3>
      <p>{{resultsMessages[numCorrect]}}</p>
    </div>
    <div v-if="qn >= 5" class="again-btn" @click="router.push('/')">
      <div class="material-symbols-outlined">restart_alt</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import NavBar from '@/components/NavBar.vue';
import QuestionOption from '../components/QuestionOption.vue';

const router = useRouter();

const qn = ref(0);
const selectedOption = ref(null);
const checkAnswer = ref(false);
const numCorrect = ref(0);

const questions = [
  {
    text: 'Semper aenean dignissim semper donec id rhoncus cras purus, ornare. Id felis turpis quis neque nisl, semper mauris adipiscing?',
    options: ['Ut orci eros', 'Aliquam ut hendrerit', 'Feugiat sed tellus', 'Erat laoreet sagittis'],
    answer: 2,
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?',
    options: ['Ut orci eros', 'Aliquam ut hendrerit', 'Feugiat sed tellus', 'Erat laoreet sagittis'],
    answer: 2,
  },
  {
    text: 'What is the answer to life, the universe, and everything?',
    options: ['Ut orci eros', 'Aliquam ut hendrerit', 'Feugiat sed tellus', 'Erat laoreet sagittis'],
    answer: 2,
  },
  {
    text: 'Why does the sun rise in the east?',
    options: ['Ut orci eros', 'Aliquam ut hendrerit', 'Feugiat sed tellus', 'Erat laoreet sagittis'],
    answer: 2,
  },
  {
    text: 'Which of the following is not a real programming language?',
    options: ['Ut orci eros', 'Aliquam ut hendrerit', 'Feugiat sed tellus', 'Erat laoreet sagittis'],
    answer: 2,
  },
];

const resultsMessages = [
  'Oh dear, you need to study more!',
  'Read the articles another time and try again!',
  'Read the articles another time and try again!',
  'Not bad, but you can do better!',
  'Good score!',
  'Excellent work! You have achieved a perfect score!',
];

function checkAnswerOrNextQn() {
  if (checkAnswer.value) {
    // answer has already been checked, move on to next qn
    checkAnswer.value = false;
    selectedOption.value = null;
    qn.value++;
  } else if (selectedOption.value !== null) {
    checkAnswer.value = true;
    if (selectedOption.value === questions[qn.value].answer) {
      numCorrect.value++;
    }
  } else {
    // hasn't selected an option
  }
}
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

.main {
  align-self: center;
  margin-left: 10vw;
  width: 50vw;
}

h1 {
  font-family: Porto;
  font-size: 64px;
  font-weight: 400;
  color: #2D3D27;
  margin-bottom: 20px;
}

.qnum-container {
  display: flex;
  align-items: center;
  margin-bottom: 60px;

  h3 {
    font-size: 20px;
    font-weight: 700;
  }

  .bar {
    width: 120px;
    height: 6px;
    border-radius: 4px;
    background-color: rgba(black, 0.1);
    margin-left: 24px;
  }

  .progress {
    height: 6px;
    border-radius: 4px;
    background-color: black;
    transition: width 400ms;
  }
}

.question-text {
  font-size: 18px;
  margin-bottom: 36px;
}

.bottom {
  margin-top: 24px;
  display: flex;
}

.correct-answer-message {
  position: absolute;
  color: #2D3D27;
  font-size: 20px;
  font-weight: 700;
  display: flex;
  align-items: center;

  .material-symbols-outlined {
    font-size: 28px;
    margin-right: 20px;
  }
}

.wrong-answer-message {
  position: absolute;
  color: #B52B2B;
  font-size: 20px;
  font-weight: 700;
  display: flex;
  align-items: center;

  .material-symbols-outlined {
    font-size: 28px;
    margin-right: 20px;
  }
}

.up-in {
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 200ms, transform 200ms;

  &.show {
    opacity: 1;
    transform: translateY(0);
  }
}

.next-btn {
  height: 70px;
  padding-left: 32px;
  padding-right: 24px;
  border-radius: 35px;
  background-color: #2D3D27;
  display: flex;
  align-items: center;
  color: #DCC095;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  user-select: none;

  transition: transform 200ms, background-color 200ms;

  &.equal-padding {
    padding-left: 36px;
    padding-right: 36px;
  }

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(1);
    background-color: #21271f;
  }

  .material-symbols-outlined {
    font-size: 24px;
    margin-left: 20px;
  }
}

.results-container {
  h3 {
    font-size: 50px;
    font-weight: 300;
    margin-bottom: 80px;
  }

  p {
    font-size: 16px;
  }
}

.again-btn {
  align-self: center;
  width: 70px;
  height: 70px;
  border-radius: 35px;
  background-color: #2D3D27;
  display: grid;
  place-items: center;
  color: #DCC095;
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
}
</style>