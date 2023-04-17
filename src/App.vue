<script>
import { store } from "./store";
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

export default {
    components: {
        AppHeader,
        AppFooter,
        AppMain,
    },
    data() {
        return {
            store
        }
    },
    mounted() {
        store.generateCards(store.API_URL)
    },
}
</script>

<template>
    
    <AppHeader></AppHeader>
    <AppMain></AppMain>
    <AppFooter></AppFooter>

</template>

<style lang="scss" scoped>
    
</style>