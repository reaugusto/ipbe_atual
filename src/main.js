import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import { initializeApp } from "firebase/app";
//import Vue from "vue";
//import Vuetify from "vuetify";
//import "vuetify/dist/vuetify.min.css";
//import "vuetify/dist/vuetify.css";

const firebaseConfig = {
  apiKey: "AIzaSyBfkfSuX9aQCr_2sGEH2bsXQZsNJrj0Jqg",
  authDomain: "ipbetel-vgp.firebaseapp.com",
  projectId: "ipbetel-vgp",
  storageBucket: "ipbetel-vgp.appspot.com",
  messagingSenderId: "221105237143",
  appId: "1:221105237143:web:89e27b965eb20234c48dd2"
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const app = createApp(App);

app.use(router);
app.mount("#app");
