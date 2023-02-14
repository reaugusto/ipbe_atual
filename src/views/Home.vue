<template>
  <div class="container-fluid">
    <div class="row cards justify-content-center flex-wrap">
      <flip-card
        class="flip"
        v-for="(card, index) in cards"
        :key="index"
        :dados="card"
      />
    </div>
    <div class="row mapa d-flex flex-column align-items-center">
      <mapa />
    </div>

    <div class="row eqPastoral d-flex flex-column align-items-center">
      <equipe-pastoral />
    </div>
  </div>

  <div class="row ult_videos d-flex flex-column align-items-center">
    <div class="col"></div>
    <div class="col"></div>
    <div class="col"></div>
  </div>
</template>

<script>
import FlipCard from "@/components/FlipCard.vue";
import Mapa from "@/components/Mapa.vue";
import EquipePastoral from "@/components/EquipePastoral.vue";
export default {
  components: {
    FlipCard,
    Mapa,
    EquipePastoral,
  },
  data: () => ({
    cards: [
      {
        titulo: "Cultos e reuniões",
        icon: "fa-cross",
        classes: ["green", "red"],
        texto: [
          "Culto: Domingo - 19:00",
          "EBD: Domingo - 09:00",
          "reunião de oração: Quarta - 19:00",
        ],
      },
      {
        titulo: "Nossos contatos",
        icon: "fa-address-card",
        classes: ["red", "green"],
        texto: ["E-mail: contato@igreja.com", "Telefone: (11) 9 9999-9999"],
      },
      {
        titulo: "Dizimos e Ofertas",
        icon: "fa-heart",
        classes: ["green", "red"],
        texto: [
          "Banco: Nome Banco",
          "Agencia: 9999-1",
          "Conta Corrente: 123456-7",
          "Pix: CNPJ 00.000.000/0000-00",
        ],
      },
    ],
  }),
};
</script>
<style scoped>
.cards {
  margin-top: 150px;
  margin-bottom: 150px;
}
@media (max-width: 767.98px) {
  .flip {
    margin-bottom: 15px;
  }
  .mapa {
    height: 100% !important;
    width: 100% !important;
  }
}
.mapa {
  position: relative;
  height: 400px;
  width: 100%;
  padding: 0;
}
.eqPastoral {
  margin-top: 10%;
}
</style>