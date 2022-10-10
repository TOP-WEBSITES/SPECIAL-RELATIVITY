<template>
  <router-view />
</template>

<script lang='ts'>
</script>

<style>
@import "../node_modules/katex/dist/katex.min.css";

@font-face {
  font-family: Porto;
  src: url(assets/fonts/Porto-Regular.otf);
}

@font-face {
  font-family: Porto;
  src: url(assets/fonts/Porto-Light.otf);
  font-weight: 200;
}

@font-face {
  font-family: Porto;
  src: url(assets/fonts/Porto-Bold.otf);
  font-weight: 700;
}

@font-face {
  font-family: Avenir;
  src: url(assets/fonts/AvenirLTStd-Roman.otf);
}

@font-face {
  font-family: Avenir;
  src: url(assets/fonts/AvenirLTStd-Book.otf);
  font-weight: 300;
}

@font-face {
  font-family: Avenir;
  src: url(assets/fonts/AvenirLTStd-Medium.otf);
  font-weight: 500;
}

@font-face {
  font-family: Avenir;
  src: url(assets/fonts/AvenirLTStd-Heavy.otf);
  font-weight: 700;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  -ms-overflow-style: none;
  scrollbar-width: none;
}

*::-webkit-scrollbar {
  display: none;
}

#app {
  height: 100vh;
  background-color: #232622;
  font-family: Avenir;
}

.spacer {
  flex-grow: 1;
}

.chapter-container {
  padding-top: 170px;
  padding-right: 100px;
  width: 60vw;
  height: 100vh;
  overflow-y: scroll;
  position: relative;
}

.chapter-container img {
  width: 50vw;
  height: auto;
}

.chapter-container h1 {
  font-family: Porto;
  font-size: 64px;
  font-weight: 400;
  color: #2D3D27;
}

.chapter-container h1.subtitle {
  font-size: 28px;
  font-weight: 400;
  margin-top: 12px;
  margin-bottom: 24px;
  font-style: italic;
}

.chapter-container h2 {
  color: #2D3D27;
  font-size: 24px;
  margin-top: 40px;
  margin-bottom: 24px;
}

.chapter-container h3 {
  color: #2D3D27;
  margin-bottom: 12px;
}

.chapter-container p {
  font-size: 18px;
  margin-bottom: 24px;
}

.chapter-container p strong {
  font-size: 20px;
  text-transform: uppercase;
}

.chapter-container p strong::before {
  display: inline-block;
  width: 16px;
  height: 16px;
  background-color: #2D3D27;
  margin-right: 8px;
  content: '';
}
</style>
