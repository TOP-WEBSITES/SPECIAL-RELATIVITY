<template>
  <router-view />
</template>

<script lang='ts'>
</script>

<style>
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
  color: white;
}

.chapter-container {
  padding-top: 170px;
  padding-right: 100px;
  height: 100vh;
  overflow-y: scroll;
}
</style>
