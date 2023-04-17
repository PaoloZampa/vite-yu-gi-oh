<script>
import YugiohCardItem from "./YugiohCardItem.vue";
import { store } from "../store";

export default {
    name: "YugiohCardList",
    components: { YugiohCardItem },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <section class="container p-5">
        <div class="cards_found">
            <span v-if="store.yugiohCards">Founds: {{ store.yugiohCards.length }} cards</span>
        </div>
        <div class="row row-cols-2 row-cols-md-3 row-cols-lg-5">

            <!-- cardItem -->
            <YugiohCardItem :yugiohCard="yugiohCard" v-for="yugiohCard in store.yugiohCards" v-if="!store.loading">
            </YugiohCardItem>

            <div class="loader" v-else>
                Loading...
            </div>

        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

.container {
    background-color: $light;

    .cards_found {
        color: $light;
        background-color: $dark;
        padding: 1rem;
        font-weight: 700;
    }
}
</style>