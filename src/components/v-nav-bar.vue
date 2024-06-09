<template>
  <div class="v-nav-bar">
    <ul class="menu-list">
      <router-link 
        v-for="item in menuItems" :key="item"
        :to="{ name: item.route, hash: item.hash}"
        class="menu-item"
      >
        {{ item.name }}
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'v-nav-bar',
  data() {
    return {
      menuItems: [
        {
          name: 'Главная',
          route: 'Main',
          hash: '#page'
        },
        {
          name: 'Мужское отделение',
          route: 'Male',
          hash: '#page'
        },
        {
          name: 'Женское отделение',
          route: 'Female',
          hash: '#page'
        },
        {
          name: 'Кухня/бар',
          route: 'Kitchen',
          hash: '#page'
        },
        // {
        //   name: 'Аксессуары',
        //   route: 'Accessories',
        //   hash: '#page'
        // },
        {
          name: 'Доп услуги',
          route: 'Additional',
          hash: '#page'
        },
        // {
        //   name: 'Контакты',
        //   route: 'Contacts',
        //   hash: '#page'
        // },
        {
          name: 'Вакансии',
          route: 'Vacancies',
          hash: '#page'
        },
        {
          name: 'Правила посещения',
          route: 'Rules',
          hash: '#page'
        },
      ]
    }
  }
}
</script>

<style>
.v-nav-bar {
  margin: none;
  display: block;
  padding-top: 1%;
  padding-bottom: 1%;
  background-color: #121820;
}

.menu-list {
  text-align: center;
  list-style: none;
}

.menu-item {
  text-decoration: none;
  margin-left: 1%;
  margin-right: 1%;
  font-size: 1.2em;
  color: white;
  cursor: pointer;
}

.menu-item:hover {
  color: #D2B48C;
}

@media screen and (max-width: 700px) {
  .menu-item {
    text-decoration: none;
    margin-left: 0px;
    display: block;
    margin-top: 10px;
    font-size: 20px;
  }
}

@media screen and (min-width: 701px) and  (max-width: 1100px){
  .menu-item {
    font-size: 1em;
  }
}
</style>