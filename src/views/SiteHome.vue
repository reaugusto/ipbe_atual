<template>
  <div class="row topHeader p-2 flex-wrap">
    <div class="col-12 col-md-6">
      <span
        >Av. Manoelino do Prado, 255, Vargem Grande Paulista, SP, Brazil,
        06730-000</span
      >
    </div>
    <div class="col-12 col-md-4">
      <span class="tel">(11) 4159-4590</span>
    </div>
    <div class="col-12 col-md-2 align-items-end">
      <button type="button" class="btCChegar">
        Como chegar <i class="bi bi-geo-alt-fill"></i>
      </button>
    </div>
  </div>
  <div class="row header flex-wrap">
    <div class="containerHead" :style="image">
      <div class="row mt-4 align-items-start flex-wrap">
        <div class="col-12 col-md-5 d-flex justify-content-center">
          <router-link class="navItem" to="/home">
            <img src="@/assets/logo_sb.png" width="270" class="img-fluid" />
          </router-link>
        </div>
        <div class="menu col-12 col-md-7 mt-3 d-flex justify-content-center">
          <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i class="bi bi-arrow-down-circle"></i>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <router-link class="navItem" to="/sobrenos"
                      >Sobre nós</router-link
                    >
                  </li>
                  <li class="nav-item">
                    <router-link class="navItem" to="/estudos"
                      >Estudos</router-link
                    >
                  </li>
                  <li class="nav-item">
                    <router-link class="navItem" to="/pregacoes"
                      >Pregações</router-link
                    >
                  </li>
                  <li class="nav-item">
                    <router-link class="navItem" to="/agenda"
                      >Agenda</router-link
                    >
                  </li>
                  <li class="nav-item">
                    <router-link class="navItem" to="/contato"
                      >Contato</router-link
                    >
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <!-- -->
      <div class="row mt-5 flex-wrap">
        <div class="col-12 col-md-5 d-flex flex-column">
          <div class="contHeader">
            <h2>Uma comunidade que adora e glorifica a Deus</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              pulvinar turpis vel metus feugiat.
            </p>
          </div>
          <div class="d-flex justify-content-evenly text-center flex-wrap">
            <button type="button" class="btVisite">
              Visitenos <i class="bi bi-geo-alt-fill"></i>
            </button>
            <button type="button" class="btAssistir">
              Assita Online <i class="bi bi-play-fill"></i>
            </button>
          </div>
        </div>
        <div class="col-12 col-md-7 d-flex justify-content-center">
          <img src="@/assets/igreja.jpg" alt="" class="foto" />
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <router-view />
    </div>
  </div>
  <div class="row footer flex-wrap">
    <div
      class="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center"
    >
      <img src="@/assets/logo_sb.png" alt="" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
        molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
        fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
        elit sed risus.
      </p>
      <p>
        <i class="bi bi-facebook"></i>
        <i class="bi bi-instagram"></i>
        <i class="bi bi-whatsapp"></i>
      </p>
    </div>
    <div
      class="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center"
    >
      <div class="cardContac">
        <h2>Entre em contato</h2>
        <span>Igreja Presbiteriana Betel</span>
        <p>
          Av. Manoelino do Prado, 255, Vargem Grande Paulista, SP, Brazil,
          06730-000
        </p>
        <span>(11) 4159-4590</span><br />
        <span>ipbe@ipbe.org.br</span>
      </div>
    </div>
    <div class="col-12 col-md-4"></div>
  </div>
</template>
<script>
import { useRouter } from "vue-router";
export default {
  data: () => ({
    image: {
      backgroundImage: "url(https://i.ibb.co/Yk6gSmT/detalhe-banner.png)",
      bgIgreja: "url(@/assets/igreja.jpg)",
    },
    router: useRouter(),
  }),
  created() {
    this.router.push("/home");
  },
};
</script>

<style scoped>
.topHeader {
  color: #ffffff;
  background-color: #0a5c5a;
}
.containerHead {
  background-repeat: no-repeat;
  background-size: cover;
}

.header {
  height: 550px;
  background: linear-gradient(
    270.34deg,
    rgba(10, 92, 90, 0.73) -5.82%,
    rgba(165, 198, 133, 0.704383) 11.9%,
    rgba(192, 216, 140, 0.7) 26.51%,
    rgba(206, 151, 110, 0.71) 53.06%,
    #F7A472 99.34%
  );
}
@media (max-width: 767.98px) {
  .header,
  .footer {
    height: auto !important;
  }
  .foto {
    position: unset !important;
    top: auto !important;
    margin-top: 25px;
    margin-bottom: 20px;
    width: 270px !important;
    height: 250px !important;
    border-radius: 130px 15px !important;
  }
}

.contHeader {
  padding: 50px 80px 50px;
  color: #FFFFFF;
}
.foto {
  position: absolute;
  width: 500px;
  height: 460px;
  top: 236px;
  box-shadow: 4px 6px 4px 2px rgba(0, 0, 0, 0.25);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 200px 30px;
}
.btVisite,
.btAssistir {
  border: 0;
  border-radius: 25px;
  height: 50px;
  width: 200px;
  color: #FFFFFF;
}
.btCChegar:hover {
  background-color: transparent;
}
.btVisite:hover {
  background-position: right;
}

.btAssistir:hover {
  background-color: #fa2a3a;
}

.btVisite {
  background: linear-gradient(270.34deg, #c0d88c 25%, #0a5c5a 88%);
  background-size: 200%;
  transition: 0.5s ease;
}

.btAssistir {
  border: solid 2px #fa2a3a;
  background-color: transparent;
  transition: 0.8s ease;
}

.btCChegar {
  border: solid 2px #fa2a3a;
  height: 90%;
  border-radius: 20px;
  background-color: #fa2a3a;
  color: #ffffff;
  transition: 0.8s ease;
}
.tel {
  font-weight: 500;
}
.navbar a {
  color: #FFFFFF;
  text-decoration: none;
  font-size: 24px;

  font-weight: 700;
}
.navbar a:hover {
  color: #fa2a3a;
}

.navbar,
ul {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 90%;
}

.navItem:after {
  display: flex;
  background-color: #fa2a3a;
  content: "";
  height: 10px;
  width: 10px;
  border-radius: 5px;
  padding-bottom: 5%;
  margin-left: 45%;
  left: -5px;
  transform: scale(0);
  transition: transform 300ms ease-in-out;
}
.navItem:hover:after {
  transform: scale(1);
}
.router-link-active {
  color: #fa2a3a !important;
}
.router-link-active:after {
  transform: scale(1);
}

.navbar-toggler {
  width: 100%;
  border: 0;
  color: #FFFFFF;
  font-size: 30px;
}

.navbar-toggler:active {
  border: 0;
}

.map {
  margin-bottom: 150px;
}

.footer {
  margin-top: 100px;
  height: 400px;
  bottom: 0;
  background: linear-gradient(
    270.34deg,
    rgba(10, 92, 90, 0.73) -5.82%,
    rgba(165, 198, 133, 0.704383) 11.9%,
    rgba(192, 216, 140, 0.7) 26.51%,
    rgba(206, 151, 110, 0.71) 53.06%,
    #F7A472 99.34%
  );
}

.footer {
  color: #FFFFFF;
}

.footer img {
  width: 200px;
}

.footer p {
  margin: 20px 0px;
  padding: 0px 80px;
}

.footer i {
  font-size: 35px;
  letter-spacing: 20px;
}

.cardContac h2 {
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 30px;
  margin-left: 15%;
  text-align: left;
}
.cardContac p {
  margin-top: 10px;
  margin-bottom: 30px;
  padding: 0px 25%;
}
.cardContac span {
  font-size: 20px;
  font-weight: 600;
}
</style>