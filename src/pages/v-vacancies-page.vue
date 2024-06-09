<template>
  <div
    class="
      v-vacancies-page
      page-container
    "
    id="page"
  >
    <div class="vacancies-head"> Резюме присылать на почту <b>berloga2023@yandex.ru</b> или WhatsApp <b>+79139150709</b></div>
    <div class="v-service-card">
      <img src="@/images/vacancies/oficiant.png" class="service-img"/>
      <div class="service-name">
        Официант в мужское отделение
      </div>
      <div class="service-description">
        График сменный<br>
        ЗП от 40.000 руб<br>
      </div>
    </div>
    <div class="v-service-card">
      <img src="@/images/vacancies/oficiant.png" class="service-img"/>
      <div class="service-name">
        Официант в женское отделение
      </div>
      <div class="service-description">
        График сменный<br>
        ЗП от 40.000 руб<br>
      </div>
    </div>
    <div class="v-service-card">
      <img src="@/images/vacancies/technik.png" class="service-img"/>
      <div class="service-name">
        Техник
      </div>
      <div class="service-description">
        График 5/2<br>
        ЗП договорная<br>
      </div>
    </div>
    <div class="v-service-card">
      <img src="@/images/vacancies/cleaning.png" class="service-img"/>
      <div class="service-name">
        Уборщица
      </div>
      <div class="service-description">
        График сменный<br>
        ЗП - 36.000 руб<br>
      </div>
    </div>
    <div class="v-service-card">
      <img src="@/images/vacancies/barmen.png" class="service-img"/>
      <div class="service-name">
        Бармен
      </div>
      <div class="service-description">
        График 2/2<br>
        ЗП от 40.000 руб<br>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-vacancies-page',
  components: {
  }
}
</script>

<style>
.v-vacancies-page {
  width: 100%;
  background-image: url(@/images/background.jpg) ;
  background-size: 100%;
  box-sizing: border-box;
}

.vacancies-head {
  padding-top: 10px;
  padding-bottom: 10px;
  overflow: hidden;
  border-bottom: 5px solid #121820;
  color: black;
  background-color: white;
  margin: auto;
  text-align: center;
  font-size: 30px;
}

.v-service-card{
  border: 3px solid #121820;
  color: black;
  text-decoration: none;
  box-sizing: border-box;
  overflow: hidden;
  cursor: pointer;
  display: inline-block;
  border-radius: 20px;
  margin-left: 30px;
  margin-right: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  height: auto;
  width: 430px;
  background-color: white;
  box-shadow: 3px 3px 10px gray;
}

.service-name{
  padding-top: 10px;
  margin: auto;
  text-align: center;
  font-size: 26px;
  width: 100%;
  font-weight: bold;
}

.service-button{
  font-size: 15px;
  margin: auto;
  margin-top: 10px;
  height: 30px;
}

.service-description{
  font-size: 20px;
  padding-top: 4px;
  margin: auto;
  text-align: center;
  width: 420px;
  padding-bottom: 20px;
}

.v-service-card:hover{
  box-shadow: 3px 3px 20px gray;
}

.service-img{
  width: 100%;
  aspect-ratio: 16 / 12;
  object-fit: cover;
  border-bottom: 3px solid #121820;
}

@media screen and (max-width: 700px) {
  .v-service-card{
    text-align: center;
    width: 85%;
    height: auto;
    padding-bottom: 10px;
  }
  .service-description{
    width: 290px;
    height: auto;
  }

}
@media screen and (min-width: 701px) and  (max-width: 1100px){
  .v-service-card{
    text-align: center;
    width: 85%;
    height: auto;
    padding-bottom: 10px;
  }
}
</style>