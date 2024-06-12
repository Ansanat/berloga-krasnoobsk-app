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
  name: 'v-accessories-page',
  components: {
  },
  data() {
    return {
      headers: [
        {
          name: 'Все для бани',
          data: [
            {
              name: 'Веник дубовый ',
              price: '400 руб'
            },
            {
              name: 'Веник березовый ',
              price: '300 руб'
            },
            {
              name: 'Шапка фирменная',
              price: '800 руб'
            },
            {
              name: 'Бритвенный набор ',
              price: '50 руб'
            },
            {
              name: 'Тапочки резиновые',
              price: '350 руб'
            },
              {
              name: 'Коврик одноразовый ',
              price: '50 руб'
            },
            {
              name: 'Мыло',
              price: '150 руб'
            },
            {
              name: 'Мочалка',
              price: '350 руб'
            },
            {
              name: 'Шампунь/гель для душа ',
              price: '50 руб'
            },
            {
              name: 'Простынь в аренду',
              price: '100 руб'
            },
          ]
        },
      ]
    }
  }
}
</script>

<style>
</style>