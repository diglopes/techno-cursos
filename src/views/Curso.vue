<template>
  <div>
    <PageLoading v-if="loading" />
    <transition>
      <div v-if="api" class="content">
        <div>
          <h1>{{api.nome}}</h1>
          <p>{{api.descricao}}</p>
          <h2>Aulas</h2>
          <ul class="aulas">
            <li v-for="aula in api.aulas" :key="aula.id">
              <router-link :to="{name: 'Aula', params:{aula: aula.id}}">{{aula.nome}}</router-link>
            </li>
          </ul>
        </div>
        <router-view />
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData";

export default {
  name: "Curso",
  props: ["curso"],
  mixins: [fetchData],
  created() {
    this.fetchData(`/curso/${this.curso}`);
  }
};
</script>

<style scoped>
.aulas li {
  display: grid;
}

.aulas li a {
  display: block;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  background: #fff;
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 4px;
  transition: all 0.3s;
}

.aulas li a.router-link-active {
  background: #4b8;
  color: #fff;
}
</style>
