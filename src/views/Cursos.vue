<template>
  <div>
    <PageLoading v-if="loading" />
    <transition>
      <div v-if="api">
        <h1>CURSOS</h1>
        {{api}}
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData";

export default {
  name: "Cursos",
  mixins: [fetchData]
};
</script>

<style>
</style>
