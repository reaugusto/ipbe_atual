<template>
  <router-view />
</template>

<script>
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "vue-router";

export default {
  name: "App",
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
