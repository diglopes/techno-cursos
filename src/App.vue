<template>
  <div id="app">
    <TheHeader />
    <router-view class="container" />
  </div>
</template>
<script>
import TheHeader from "./components/TheHeader";

export default {
  components: {
    TheHeader
  }
};
</script>

<style>
body {
  margin: 0;
  font-family: Arial;
  color: #234;
}

img {
  max-width: 100%;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

a {
  font-weight: bold;
  text-decoration: none;
  color: #234;
}

a.router-link-exact-active {
  color: #4b8;
}

* {
  box-sizing: border-box;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.v-enter {
  opacity: 0;
  transform: translate3d(-20px, 0, 0);
}

.v-enter-active {
  transition: all 0.3s;
}

.content {
  display: grid;
  grid-template-columns: 1fr minmax(200px, 400px);
  grid-gap: 30px;
}

@media screen and (max-width: 600px) {
  .content {
    display: block;
  }
}
</style>
