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

        <div class="container">
            <label for="cars">Chose and Archetype</label>
            <select name="cars" id="cars">
                <option value="Roid">Roid</option>
                <option value="Dark Magician">Dark Magician</option>
                <option value="Cyber Dragon">Cyber Dragon</option>
                <option value="Blackwing">Blackwing</option>
            </select>

        </div>

        <YugiohCardList :yugiohCard="store.yugiohCards"></YugiohCardList>

    </main>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

main {
    background-color: $primary;
}
</style>