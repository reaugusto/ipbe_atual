<template>
  <div class="row p-0 justify-content-center flex-wrap">
    <div class="col-12 align-items-center p-0 container">
      <div class="map-responsive">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3295.292731541487!2d-47.02380497873281!3d-23.60406316121165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf0900c530149d%3A0xb95e2272ad65560b!2sAv.%20Manuelino%20do%20Prado%2C%20255%20-%20Centro%2C%20Vargem%20Grande%20Paulista%20-%20SP%2C%2006730-000!5e0!3m2!1spt-BR!2sbr!4v1668079031002!5m2!1spt-BR!2sbr"
          width="100%"
          height="100%"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div class="cardContac">
        <h2>Venha nos Visitar</h2>
        <span>Igreja Presbiteriana Betel</span>
        <p>
          Av. Manoelino do Prado, 255, Vargem Grande Paulista, SP, Brazil,
          06730-000
        </p>
        <span>(11) 4159-4590</span>
        <span>ipbe@ipbe.org.br</span>
        <button type="button">
          Obter rota <i class="fa-solid fa-route"></i>
        </button>
      </div>
    </div>
  </div>
  <!-- <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3295.292731541487!2d-47.02380497873281!3d-23.60406316121165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf0900c530149d%3A0xb95e2272ad65560b!2sAv.%20Manuelino%20do%20Prado%2C%20255%20-%20Centro%2C%20Vargem%20Grande%20Paulista%20-%20SP%2C%2006730-000!5e0!3m2!1spt-BR!2sbr!4v1668079031002!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> -->
</template>
<style scoped>
@media (max-width: 767.98px) {
  .cardContac {
    position: unset !important;
    top: unset !important;
    left: unset !important;
  }
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .map-responsive {
    overflow: hidden;
    height: 600px !important;
    width: 100%;
    position: unset !important;
  }
  .map-responsive iframe {
    position: relative !important;
  }
}
.cardContac {
  position: relative;
  width: 350px;
  height: 380px;
  top: -450px;
  left: 70%;
  border-radius: 30px;
  background-color: #ffffff;
  box-shadow: 0px 0px 8px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
}
h2 {
  color: #fa2a3a;
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 30px;
}
p {
  margin-top: 10px;
  margin-bottom: 30px;
}
span {
  font-size: 20px;
  font-weight: 600;
  color: #000000;
}

button {
  width: 60%;
  height: 50px;
  border: 0;
  border-radius: 50px;
  background: linear-gradient(270.34deg, #c0d88c 25%, #0a5c5a 88%);
  background-size: 200%;
  color: #ffffff;
  font-size: 25px;
  margin-top: 30px;
  transition: 0.5s ease;
}

button:hover {
  background-position: right;
  color: #fa2a3a;
}

.map-responsive {
  overflow: hidden;
  padding-bottom: 30%;
  position: relative;
  height: 0;
}

.map-responsive iframe {
  left: 0;
  top: 0;
  width: 100%;
  position: absolute;
}
</style>