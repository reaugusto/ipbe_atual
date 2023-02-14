<template>
  <div class="row">
    <div class="col conteudo">
      <h2>Equipe Pastoral</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
        molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
        fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
        elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
        lectus.
      </p>
    </div>
  </div>
  <div class="row justify-content-center flex-wrap">
    <div class="col-md-3 d-flex justify-content-center mt-sm-1">
      <div class="card c1">
        <div class="info">
          <h1 class="title">Rev. Thiago</h1>
          <p class="description">
            <span>Pastor Titular</span><br />
            (11) 0000-0000 <br />
            contato@email.com
          </p>
        </div>
      </div>
    </div>
    <div class="col-md-3 d-flex justify-content-center mt-sm-1">
      <div class="card c2">
        <div class="info">
          <h1 class="title">Rev. Neemias</h1>
          <p class="description">
            <span>Pastor Auxiliar</span><br />
            (11) 0000-0000 <br />
            contato@email.com
          </p>
        </div>
      </div>
    </div>
    <div class="col-md-3 d-flex justify-content-center mt-sm-1">
      <div class="card c3">
        <div class="info">
          <h1 class="title">Sem. Luiz</h1>
          <p class="description">
            <span>Seminarista</span><br />
            (11) 0000-0000 <br />
            contato@email.com
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.conteudo {
  padding: 0 15%;
  margin-bottom: 25px;
}

.conteudo h2 {
  font-weight: 500;
  color: #0a5c5a;
  margin-bottom: 25px;
}

@media (max-width: 767.98px) {
  .conteudo {
    padding: 0 5%;
    margin-bottom: 25px;
  }
}

.card {
  border: 0;
  border-radius: 16px;
  margin: 0 0;
  width: 350px;
  max-width: 100%;
  min-height: 400px;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);
  overflow: hidden;
  background-size: cover;
}

.info {
  position: relative;
  width: 100%;
  height: 400px;
  background-color: #fff;
  transform: translateY(100%) translateY(-88px) translateZ(0);
  transition: transform 0.5s ease-out;
}

.info:before {
  z-index: -1;
  display: block;
  position: absolute;
  content: " ";
  width: 100%;
  height: 100%;
  overflow: hidden;
  filter: blur(10px);
  background-size: cover;
  opacity: 0.25;
  transform: translateY(-100%) translateY(88px) translateZ(0);
  transition: transform 0.5s ease-out;
}

.card:hover .info,
.card:hover .info:before {
  transform: translateY(0) translateZ(0);
}

.title {
  margin: 0;
  padding: 24px;
  font-size: 30px;
  line-height: 1;
  color: rgba(0, 0, 0, 0.87);
}

.description {
  margin: 10px 0;
  padding: 0 24px 24px;
  font-size: 18px;
  line-height: 1.5;
}

.c1 {
  background-image: url(https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg);
}

.c1 .info:before {
  background-image: url(https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg);
}

.c2 {
  background-image: url(https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg);
}

.c2 .info:before {
  background-image: url(https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg);
}

.c3 {
  background-image: url(https://images.pexels.com/photos/1288182/pexels-photo-1288182.jpeg);
}

.c3 .info:before {
  background-image: url(https://images.pexels.com/photos/1288182/pexels-photo-1288182.jpeg);
}
</style>