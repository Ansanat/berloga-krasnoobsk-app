<template>
  <Header />
  <Dashboard />
  <Navigation />
  <router-view />
  <Footer />
</template>

<script>
import Navigation from '@/components/v-nav-bar.vue'
import Header from '@/components/v-header.vue'
import Dashboard from '@/components/v-dashboard.vue'
import Footer from '@/components/v-footer.vue'

export default {
  name: 'App',
  components: {
    Dashboard,
    Header,
    Navigation,
    Footer
  }
}
</script>

<style>
* {
  font-family: 'DINPro-Medium', Arial, Helvetica, sans-serif;
}

.page-container {
  border: 5px solid #121820;
}

.page-image {
  width: 100%;
  aspect-ratio: 16 / 6;
  object-fit: cover;
}

.zagolovok-container {
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.zagolovok {
  margin-top: 0;
  margin-left: 40px;
  font-size: 40px;
  display:inline-block; 
  text-align: center;
}

.text-background {
  background-color: #f5f8fc;
  padding-bottom: 20px;
  margin-bottom: 30px;
  margin-top: 60px;
}

.text {
  text-indent: 1.5em;
  margin-left: auto;
  margin-right: auto;
  text-align: justify;
  font-style: italic;
  font-size: 20px;
  width: 50%;
}

@media screen and (min-width: 701px) and  (max-width: 1100px){
  .zagolovok{
    margin-left: 2px;
    font-size: 30px;
  }

  .text {
    width: 90%;
  }
}

@media screen and (max-width: 700px) {
  .page-image {
    aspect-ratio: 3 / 3;
    object-fit: cover;
  }

  .zagolovok{
    margin-left: 2px;
    font-size: 30px;
  }

  .text {
    width: 90%;
  }
}
</style>
