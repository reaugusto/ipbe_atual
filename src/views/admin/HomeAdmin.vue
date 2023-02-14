<template>
  <div class="d-flex">
    <div class="menu">
      <p class="text-end logout">Sair <i class="bi bi-box-arrow-right"></i></p>
      <img src="@/assets/logo_sb.png" width="200" class="img-fluid" />
      <nav class="mt-4">
        <div class="list-group list-group-flush">
          <router-link class="list-group-item item" to="/admin"
            >Principal</router-link
          >
          <router-link class="list-group-item item" to="/admin/pregacoes">
            <i class="bi bi-book-half"></i> Pregações
          </router-link>
          <router-link class="list-group-item item" to="/admin/agendaAdmin">
            <i class="bi bi-calendar-check-fill"></i> Agenda
          </router-link>
        </div>
      </nav>
    </div>
    <div class="container-fluid">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "vue-router";
export default {
  name: "HomeAdmin",
  components: {},
  data: () => ({
    isLoggedIn: false,
    auth: "",
    router: useRouter(),
  }),
  methods: {
    handleSingOut() {
      signOut(this.auth).then(() => {
        this.router.push("/");
      });
    },
  },
  created() {
    this.auth = getAuth();
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    });
  },
};
</script>

<style scoped>
.menu {
  width: 300px;
  height: 100vh;
  box-shadow: 2px 1px 4px rgb(187, 187, 187);
}
.logout {
  margin-right: 5px;
  font-size: 1.3em;
}

.item:hover {
  background-color: #c0d88c;
  color: #fa2a3a;
  cursor: pointer;
}
.item:valid {
  background-color: #c0d88c;
  color: #fa2a3a;
  cursor: pointer;
}
</style>