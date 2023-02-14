import { getAuth, onAuthStateChanged } from "firebase/auth";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("@/views/SiteHome.vue"),
      children: [
        {
          path: "sobrenos",
          component: () => import("@/views/SobreNos.vue")
        },
        {
          path: "contato",
          component: () => import("@/views/Contato.vue")
        }, //localhost:8080/home/servicos
        {
          path: "estudos",
          component: () => import("@/views/Estudos.vue")
        },
        {
          path: "agenda",
          component: () => import("@/views/AgendaSite.vue")
        },
        {
          path: "pregacoes",
          component: () => import("@/views/Pregacoes.vue")
        },
        {
          path: "home",
          component: () => import("@/views/Home.vue")
        }
      ]
    },

    { path: "/login", component: () => import("@/views/LoginPage.vue") },

    {
      path: "/admin",
      component: () => import("@/views/HomeAdmin.vue"),
      children: [
        {
          path: "pregacoes",
          component: () => import("@/views/PregacoesAdmin.vue")
        }, //localhost:8080/home/vendas
        { path: "agendaadm", component: () => import("@/views/Agenda.vue") } //localhost:8080/home/servicos
      ]
      /*meta: {
        requiresAuth: true
      }*/
    }
  ]
});

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    );
  });
};

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      alert("Você não possui acesso");
      next("/login");
    }
  } else {
    next();
  }
});

export default router;
