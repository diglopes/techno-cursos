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
</style>
