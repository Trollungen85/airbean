<template>
  <div id="app">
    <router-view/>
  </div>

</template>

<style>
* {
  margin: 0;
  padding: 0;
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

</style>
