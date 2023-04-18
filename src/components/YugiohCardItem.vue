<script>
export default {
    name: 'YugiohCardItem',
    props: {
        yugiohCard: Object
    }
}
</script>

<template>
    <div class="col mb-3">
        <div class="YugiohCardItem text-center">
            <img class="img-fluid" :src="yugiohCard.card_images[0].image_url" :alt="yugiohCard.name">
            <div class="text p-1">
                <h5>{{ yugiohCard.name }}</h5>
                <div class="archetype">{{ yugiohCard.archetype }}</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

.YugiohCardItem {
    background-color: $primary;
    height: 100%;
    -webkit-box-shadow: 5px 5px 15px 5px #000000;
    box-shadow: 5px 5px 15px 5px #000000;
    border-radius: 0 0 7px 7px;

    h5 {
        color: white;
    }
}
</style>