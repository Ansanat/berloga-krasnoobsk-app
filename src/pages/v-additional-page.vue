<template>
  <div
    class="
      v-price-page
      page-container
    "
    id="page"
  >
    <div v-for="item in headers" :key="item">
      <div class="service-header"> {{item.name}} </div>
      <div class="price-table">
        <div v-for="price in item.data" :key="price">
          <div class="price-line"></div> 
          <div class="price-row">
            <div class="price-name">{{price.name}}</div>
            <div class="price-price">{{price.price}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-additional-page',
  components: {
  },
  data() {
    return {
      headers: [
        {
          name: 'Индивидуальное парение',
          data: [
            {
              name: 'Классическое 10-15 минут',
              price: '800 руб'
            },
            {
              name: 'Контрастное 15-20 минут',
              price: '1 200 руб'
            },
            {
              name: 'Дополнительное коллективное парение 10 мин',
              price: '1 500 руб'
            },
            {
              name: 'Скрабирование: 15 минут',
              price: '1 200 руб'
            }
          ]
        },
        {
          name: 'Мойка',
          data: [
            {
              name: 'Классическая 15-20 минут',
              price: '1 200 руб'
            },
            {
              name: 'Мыльная с Березовым веником 15-20 минут',
              price: '1 500 руб'
            }
          ]
        },
        {
          name: 'Массаж',
          data: [
            {
              name: 'Общий 60 минут',
              price: '2 500 руб'
            },
            {
              name: 'Зона 20 минут ',
              price: '800 руб'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss">
$color: #f7f745;
.v-price-page{
  background-image: url(@/images/wood.jpg);
  width: 100%;
  border: 5px solid #121820;
  box-sizing: border-box;
}
.service-header {
  padding-top: 20px;
  margin-left: 20px;
  font-size: 40px;
  color: $color;
  font-weight: bold;
}
.price-line{
  height: 2px;
  margin-bottom: 10px;
  background-color:$color;

}
.price-table{
  padding-top: 20px;
  width: 85%;
  height: auto;
  margin: auto;
  font-size: 18px;
}
.price-row{
  width: 100%;
  height: 50px;
  display: block;
}
.price-name{
  color:white;
  float: left;
  width: 49%;
}
.price-price{
  float: right;
  text-align: right;
  width: 49%;
  color:$color;
  font-weight: bold;
}
@media screen and (max-width: 700px) {
  .service-header {
    font-size: 27px;
  }
  .price-table{
    font-size: 16px;
  }
  .price-name{
    width: 100%;
  }
  .price-price{
    padding-top: 5px;
    width: 100%;
    font-size: 20px;
    text-align: right;
  }
  .price-row{
    height: 110px;
  }
  .price-line{
    display: block;
  }
}
@media screen and (min-width: 701px) and  (max-width: 1100px){
  .price-row{
    height: 90px;
  }
}
</style>