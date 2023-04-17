<script>

import YugiohCardList from "./YugiohCardList.vue";
import { store } from "../store";
export default {
    name: 'AppMain',
    components: { YugiohCardList },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <main>
        <YugiohCardList :yugiohCard="store.yugiohCards"></YugiohCardList>
    </main>
</template>

<style lang="scss" scoped></style>