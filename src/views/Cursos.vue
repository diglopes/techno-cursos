<template>
  <div>
    <PageLoading v-if="loading" />
    <transition>
      <div v-if="api" class="content">
        <div>
          <h1>{{api.titulo}}</h1>
          <p>{{api.descricao}}</p>
        </div>
        <ul>
          <router-link
            :to="{name: 'Curso', params: {curso: curso.id}}"
            v-for="curso in api.cursos"
            :key="curso.id"
          >
            <li>
              <h2>{{curso.nome}} - {{curso.totalAulas}} Aulas | {{curso.horas}} horas</h2>
              <p>{{curso.descricao}}</p>
            </li>
          </router-link>
        </ul>
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
