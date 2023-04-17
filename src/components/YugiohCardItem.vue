<script>
export default {
    name: 'YugiohCardItem',
    props: {
        yugiohCard: Object
    }
}
</script>

<template>
    <div class="col">
        <div class="YugiohCardItem text-center">
            <img class="img-fluid" :src="yugiohCard.card_images.image_url_small" >
            <div class="text">
                <h3>{{yugiohCard.name  }}</h3>
                <div class="archetype">{{ yugiohCard.archetype }}</div>
            </div>
        </div>
    </div>
</template>