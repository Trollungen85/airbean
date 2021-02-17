<template>
  <div id="app">
    <router-view/>
  </div>

</template>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: 'Times New Roman', Times, serif;
}
:root {
  --color1: rgb(47, 41, 38);
  --color2: rgb(14, 146, 125);
  --color3: rgb(243, 228, 225);
  --color4: rgb(229, 103, 78);
/* background-color: var(--color1); */
}
.default-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.default-btn {
  background: var(--color1);
  padding: 16px 32px;
  border-radius: 30px;
  border: none;
  outline: none;
  font-size: 24px;
  font-weight: 600;
  color: white;
}
h2 {
  font-size: 32px;
  margin-bottom: 32px;
}
ul {
    list-style: none;
}
.small-text {
  font-size: 12px;
}

</style>
