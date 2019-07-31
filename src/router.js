import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Contato from "./views/Contato.vue";
import Cursos from "./views/Cursos.vue";
import Curso from "./views/Curso.vue";
import Aula from "./views/Aula.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/contato",
      name: "Contato",
      component: Contato
    },
    {
      path: "/cursos",
      name: "Cursos",
      component: Cursos
    },
    {
      path: "/cursos/:curso",
      name: "Curso",
      component: Curso,
      props: true,
      children: [
        {
          path: ":aula",
          name: "Aula",
          component: Aula,
          props: true
        }
      ]
    }
  ]
});
