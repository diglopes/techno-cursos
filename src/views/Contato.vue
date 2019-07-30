<template>
  <div>
    <PageLoading v-if="loading" />

    <transition>
      <div v-if="api">
        <h1>CONTATO</h1>
        {{api}}
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData";

export default {
  name: "Contato",
  mixins: [fetchData]
};
</script>

<style>
</style>
