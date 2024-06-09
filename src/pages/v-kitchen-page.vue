<template>
  <div
    class="
      v-kitchen-page
      page-container
    "
    id="page"
  >
    <img class="kitchen-image" src="@/images/menu/left-menu.png"/>
    <img class="kitchen-image" src="@/images/menu/right-menu.png"/>
  </div>
</template>

<script>
export default {
  name: 'v-kitchen-page',
  components: {
  }
}
</script>

<style>
.kitchen-image {
  width: 50%;
}

@media screen and (max-width: 700px) {
  .kitchen-image {
    width: 100%;
  }
}
</style>