<script>
export default {
    name: 'YugiohCardItem',
    props: {
        yugiohCard: Object
    }
}
</script>

<template>
    <div class="col my-3">
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
.YugiohCardItem{
    background-color: $primary;
    margin: 1rem auto;
    height: 100%;

    h5{
        color: white;
    }
}

</style>