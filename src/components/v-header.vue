<template>
<div class="header">
    <router-link to="/"><span><img class="berloga-logo" src="@/images/berloga_logo.png" /></span></router-link>
    <span><a href="https://t.me/ErchimBerloga"><img class="telegram-logo" src="@/images/telegram_logo.png" /></a></span>
</div>
</template>

<script>
export default {
  name: 'v-header',
}
</script>

<style>
    .header {
        position: relative;
    }

    .berloga-logo {
        width: 200px;
        cursor: pointer;
    }

    .telegram-logo {
        width: 40px;
    }
</style>