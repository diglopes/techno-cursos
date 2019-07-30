<template>
  <div>
    <PageLoading v-if="loading" />
    <transition>
      <div v-if="api" class="content">
        <div>
          <h1>Sobre a {{api.titulo}}</h1>
          <p>{{api.descricao}}</p>
          <router-link tag="button" to="cursos" class="btn-cursos">Cursos</router-link>
          <div>
            <h2>Avalicações</h2>
            <ul>
              <li v-for="avaliacao in api.avaliacoes" :key="avaliacao.nome">
                <p>{{avaliacao.nome}}</p>
                <p>{{avaliacao.descricao}}</p>
              </li>
            </ul>
          </div>
        </div>

        <img src="@/assets/aprender.png" alt="Aprenda web design" />
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData";

export default {
  name: "Home",
  mixins: [fetchData]
};
</script>

<style scoped>
.btn-cursos {
  font-family: Arial, sans-serif;
  font-weight: bold;
  border: none;
  background: #4b8;
  color: #fff;
  cursor: pointer;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 1rem;
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.1);
  padding: 15px 30px;
}
</style>
