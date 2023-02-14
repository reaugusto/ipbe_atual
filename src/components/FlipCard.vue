<template>
  <div class="card__giratorio">
    <div class="card__giratorio-conteudo">
      <div class="card__giratorio-conteudo--frente" :class="dados.classes[0]">
        <div class="icone d-flex justify-content-center align-items-center">
          <i class="fa-solid" :class="dados.icon"></i>
        </div>
        <h2 v-text="dados.titulo"></h2>
      </div>
      <div class="card__giratorio-conteudo--traseira" :class="dados.classes[1]">
        <div class="conteudo">
          <span
            v-for="(text, index) in dados.texto"
            :key="index"
            v-text="text"
          ></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    dados: Object,
  },
};
</script>
<style scoped>
.card__giratorio {
  background-color: transparent;
  width: 350px;
  height: 280px;
  perspective: 600px;
}

.card__giratorio-conteudo {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.card__giratorio-conteudo:hover {
  transform: rotate3d(1, 1, 1, 180deg);
}

.card__giratorio-conteudo--frente,
.card__giratorio-conteudo--traseira {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  /* Safari */
  backface-visibility: hidden;
  border-radius: 15px;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: 4px 6px 4px 2px rgba(0, 0, 0, 0.25);
}

.red {
  background-color: #F07877;
}

.green {
  background-color: #c0d88c;
}

.card__giratorio-conteudo--traseira {
  color: white;
  transform: rotate3d(1, 1, 1, 180deg);
}

.icone {
  margin-top: 20px;
  margin-bottom: 30px;
  height: 100px;
  width: 100px;
  border-radius: 50px;
  background-color: rgba(255, 255, 255, 0.6);
  font-size: 45px;
  font-weight: 400;
  box-shadow: 4px 6px 4px 2px rgba(0, 0, 0, 0.25);
}

h2 {
  font-weight: 600;
}
.conteudo {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  font-size: 21px;
  padding: 0px 10px;
}
</style>