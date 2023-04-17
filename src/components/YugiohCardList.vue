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
    <section class="container">
        <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4">

            <!-- cardItem -->
            <YugiohCardItem :yugiohCard="yugiohCard" v-for="yugiohCard in store.yugiohCards" v-if="!store.loading"></YugiohCardItem>

            <div class="loader" v-else>
                Loading...
            </div>

        </div>
    </section>
</template>