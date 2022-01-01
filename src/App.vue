<template>
  <h3>A Happy New Year!</h3>
  <router-view></router-view>
  <p class="notice">※スマホをぐりぐりしたり振ったりしてみてください。<br>過度な期待はしないでください。</p>
  <p class="notice">iOSできないかも...</p>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Yomogi&display=swap');

body {
  font-family: 'Yomogi', cursive;
}

h3 {
  font-size: 1.4rem;
  text-align: center;
  color: rgb(200, 180, 100)
}

.notice {
  font-size: 0.8rem;
  text-align: center;
  color: #666;
}

</style>
