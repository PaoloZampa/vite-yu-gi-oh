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
            <div class="dropdown_item">
                <div class="dropdown">
                    <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Dropdown button
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <YugiohCardList :yugiohCard="store.yugiohCards"></YugiohCardList>

    </main>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

main {
    background-color: $primary;

    .dropdown_item {
        padding: 2rem 0;
    }
}
</style>