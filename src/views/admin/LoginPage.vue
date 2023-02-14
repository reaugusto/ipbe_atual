<template>
  <main class="login">
    <div class="login_container">
      <div class="login_form">
        <img src="@/assets/logo_sb.png" width="200" />
        <h1 class="login_title">Acessar</h1>
        <div class="row">
          <div class="col">
            <div class="input-group">
              <input type="text" class="input" v-model="emails" />
              <label for="text" class="input-label">E-mail</label>
            </div>
            <div class="input-group">
              <input type="password" class="input" v-model="senhas" />
              <label for="password" class="input-label">Senha</label>
            </div>
          </div>
        </div>
        <p v-if="errorMsg">{{ errorMsg }}</p>
        <button class="login_submit" @click="login()">Entrar</button>
      </div>
    </div>
  </main>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

export default {
  name: "LoginPage",
  data: () => ({
    emails: "",
    senhas: "",
    router: useRouter(),
    errorMsg: "",
  }),
  methods: {
    login() {
      console.log("função login");
      signInWithEmailAndPassword(getAuth(), this.emails, this.senhas)
        .then((userCred) => {
          console.log("login realizado com sucesso");
          console.log(userCred.user);
          this.router.push("/admin");
        })
        .catch((error) => {
          console.log(error.code);
          switch (error.code) {
            case "auth/invalid-email":
              this.errorMsg = "E-mail invalido";
              break;
            case "auth/user-not-found":
              this.errorMsg = "E-mail não cadastrado";
              break;
            case "auth/wrong-password":
              this.errorMsg = "Senha incorreta";
              break;
            default:
              this.errorMsg = "E-mail ou senha invalidos";
              break;
          }
        });
    },
  },
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  font-family: Sans-Serif;
}

.input-group {
  position: relative;
}

.input {
  padding: 10px;
  border: none;
  border-radius: 4px;
  font: inherit;
  color: #FBB232;
  background-color: transparent;
  outline: 2px solid #0a5c5a;
  margin-bottom: 20px;
  transition: 1s linear;
}

.input-label {
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(10px, 10px);
  transition: transform 0.25s;
}

.input:focus + .input-label {
  transform: translate(10px, -10px) scale(0.9);
  color: #fa2a3a;
  padding-inline: 5px;
  background-color: #FFFFFF;
}
.input:is(:focus) {
  outline-color: #fa2a3a;
}

.login {
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    270.34deg,
    rgba(10, 92, 90, 0.73) -5.82%,
    rgba(165, 198, 133, 0.704383) 11.9%,
    rgba(192, 216, 140, 0.7) 26.51%,
    rgba(206, 151, 110, 0.71) 53.06%,
    #F7A472 99.34%
  );
}

.login_container {
  min-height: 400px;
  width: 400px;
  background-color: #ffffff;
  box-sizing: border-box;
  padding: 10px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #000;
  box-shadow: 5px 5px 5px rgb(78, 78, 78);
}

.login_title {
  margin-top: 20px;
  margin-bottom: 15px;
  color: #0a5c5a;
}

.login_form {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.login_submit {
  height: 40px;
  width: 70%;
  outline: none;
  background: #fa2a3a;
  background-size: 200%;
  margin-top: 20px;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  border: unset;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.5s ease;
}

.login_submit:hover {
  background: #f7a472;
  color: #000;
}

.login_reset {
  font-size: 12px;
  text-decoration: none;
  color: #ffffff;
}
</style>