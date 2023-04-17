<script>
export default {
    name: 'AppHeader',
}
</script>

<template>
    <header class="d-flex align-items-center">
        <img src="../assets/img/yugioh-logo.png" alt="">
        <h1>Yu-Gi-Oh API</h1>
    </header>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

img {
    height: 80px;
}
</style>