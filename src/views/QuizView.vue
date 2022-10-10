<template>
  <div class='quiz-container'>
    <NavBar />
    <div class="divider"></div>
    <div v-if="qn < questions.length" class="main">
      <h1>Quiz</h1>
      <div class='qnum-container'>
        <h3>Question {{qn + 1}} of 6</h3>
        <div class='bar'>
          <div class="progress" :style="{width: `${120 / questions.length * (qn + 1)}px`}"></div>
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
          {{ checkAnswer ? (qn == questions.length - 1 ? 'View results' : 'Next') : 'Check answer' }}
          <div v-if="checkAnswer" class="material-symbols-outlined">arrow_forward</div>
        </div>
      </div>
    </div>
    <div v-else class='main results-container'>
      <h1>Results</h1>
      <h3>{{numCorrect}} / {{questions.length}}</h3>
      <p>{{resultsMessages[numCorrect]}}</p>
    </div>
    <div v-if="qn >= questions.length" class="again-btn" @click="router.push('/')">
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
const selectedOption = ref<number | null>(null);
const checkAnswer = ref(false);
const numCorrect = ref(0);

const questions = [
  {
    text: 'What led to Einstein to reject the theory of Luminiferous Aether?',
    options: ['He didn\'t think some substance could permeate the environment undetected', 'He felt that light was too fast to have to be mediated by some substance', 'The concept of a massless photon meant that its passage did not require a medium', 'The null result of the Michelson-Morley Experiment'],
    answer: 3,
  },
  {
    text: 'A cube with sides of length 1m is moving with one of its sides parallel to the x-axis of an inertial frame S with velocity 0.5c. ' +
      'An observer is moving along the x-axis of this inertial frame S (travelling at 0.5c) with velocity 0.3c. ' +
      'Find the volume (to 4 d.p.) of the cube as measured by the observer',
    options: ['1.0000 m3', '1.0155 m3', '0.9848 m3', '0.9539 m3'],
    answer: 3,
  },
  {
    text: 'What is the main motivation of using lorentz\' transformation over Galilean transformation? (Most accurate answer)',
    options: ['Failure of Galilean transformation to make the speed of light constant upon translation to different inertial frames.', 'Breakdown of galilean transformation at low speeds', 'Galilean transformation fails to predict for massless particles', 'Galilean transformation fails to account for uncertainty (Heisenburg)'],
    answer: 0,
  },
  {
    text: 'What is the main point of spacetime diagram having units of ct against x (e.g. Light second against second)',
    options: ['Objects having the speed of light will have a 45 degrees angle with respect to the x axis', 'To ensure that the scale will be easy for humans to understand and comprehend', 'So as to ensure Einstein\'s second postulate is observed (speed of light remains constant)', 'To ensure Heisenberg uncertainty principle is accounted for'],
    answer: 0,
  },
  {
    text: 'How is the twin paradox resolved?',
    options: [
      'The travelling twin has two different reference frames while the other twin remains at earth\'s reference frame throughout',
      'One twin is experiencing acceleration while the other is not',
      'It remains an unsolved problem of physics',
      'Time moves slower for the travelling twin',
    ],
    answer: 0,
  },
  {
    text: 'How is the barn pole paradox resolved?',
    options: [
      'The length of the pole is not affected by the presence of the barn',
      'From the barn\'s reference frame, the pole always fit, while from the reference frame of the pole, both its ends were never in the barn at the same time.',
      'From the barn\'s reference frame, the back end of the pole was inside while the front end was not, while from the reference frame of the pole, it was fully it the barn.',
      'From both reference frames, the pole could never fit inside the barn',
    ],
    answer: 1,
  },
];

const resultsMessages = [
  'Oh dear, you need to study more!',
  'Read the articles another time and try again!',
  'Read the articles another time and try again!',
  'Not bad, but you can do better!',
  'Good score!',
  'Good score! One more to a perfect one!',
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
