<template>
  <div>
    <PageLoading v-if="loading" />

    <div v-else-if="api">{{api}}</div>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData";

export default {
  name: "Home",
  mixins: [fetchData]
};
</script>

<style>
</style>
