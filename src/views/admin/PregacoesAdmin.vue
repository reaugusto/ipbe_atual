<template>
  <div class="row mt-2">
    <div class="col d-flex justify-content-end">
      <button
        type="button"
        class="btn btn-outline-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        + Devocional
      </button>
    </div>
  </div>
  <div class="row">
    <div class="col"></div>
  </div>
  <div>
    <div class="card" style="width: 18rem" v-for="(devs, index) in devocionais" :key="index">
      <div class="card-body">
        <h5 class="card-title">{{devs.titulo}}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{devs.assunto}}/h6>
        <span
              v-for="(refs, index) in devs.referencias"
              :key="index"
              >{{ refs }}</span
            >
        <p class="card-text">
          {{devs.mensagem}}
        </p>
        <button type="button" @click="deleteDevocional(devs.id)">delete</button>
      </div>
    </div>
  </div>

  <!-- modal de adição de devocional -->
  <div
    class="modal fade modal-xl"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">
            Inserir nova Devocional
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Titulo</span>
            <input
              type="text"
              class="form-control"
              placeholder="titulo"
              aria-label="titulo"
              aria-describedby="basic-addon1"
              v-model="devocional.titulo"
            />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Assunto</span>
            <input
              type="text"
              class="form-control"
              placeholder="assunto"
              aria-label="assunto"
              aria-describedby="basic-addon1"
              v-model="devocional.assunto"
            />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Referências</span>
            <input
              type="text"
              class="form-control"
              placeholder="Digite ',' para adicionar referência"
              aria-label="referencias"
              aria-describedby="basic-addon1"
              v-model="referencia"
              @keyup="addReferencias($event)"
            />
          </div>
          <div class="referView">
            <span
              v-for="(refs, index) in devocional.referencias"
              :key="index"
              >{{ refs }}</span>
          </div>
          <div class="input-group">
            <span class="input-group-text">Mensagem</span>
            <textarea
              class="form-control"
              aria-label="mensagem"
              rows="15"
              v-model="devocional.mensagem"
            ></textarea>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-warning" data-bs-dismiss="modal">
            Cancelar
          </button>
          <button type="button" class="btn btn-success">Enviar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "@/firebase/db";
export default {
  name: "Pregacoes",
  data: () => ({
    devocional: {
      titulo: "",
      assunto: [],
      referencias: [],
      mensagem: "",
    },
    devocionais: [],
  }),
  methods: {
    addReferencias(event) {
      if (event.key === ",") {
        this.devocional.referencias.push(this.referencia.replace(",", ""));
        this.referencia = "";
      }
    },
    async addDevocional() {
      if (this.devocional) {
        await db.collection("devocionais").add(this.devocional);
        this.devocional.titulo = "";
        this.devocional.assunto = "";
        this.devocional.referencias = "";
        this.devocional.mensagem = "";
      }
    },
    deleteDevocional(id) {
      db.collection("devocionais").doc(id).delete();
    },
  },
  firestore: {
    Devocionais: db.collection("devocionais"),
  },
};
</script>

<style scoped>
#basic-addon1,
.input-group-text {
  color: #ffffff !important;
  background-color: #0a5c5a !important;
}
.referView span {
  color: #ffffff;
  border: solid 2px #0a5c5a;
  background-color: #0a5c5a;
  border-radius: 10px;
  padding: 5px;
  margin: 5px;
}
.referView {
  margin-bottom: 10px;
}
</style>