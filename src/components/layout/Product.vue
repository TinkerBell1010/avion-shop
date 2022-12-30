<template>
    <div class="product">
        <router-link :to="`/products/${product.category}/${product.id}`">
            <img class="product-image" :src="product.img" :alt="product.title">
        </router-link>
        <router-link :to="`/products/${product.category}/${product.id}`" class="product-name">{{product.title}}</router-link>
        <span class="product-price">£{{product.price}}</span>
    </div>
</template>

<script setup>
const props = defineProps({
    product: {
        type: Object,
        required: true
    }
}) 
</script>

<style lang="sass">
.product
    display: flex
    flex-direction: column
    color: var(--dark)
    &-image
        display: block
        width: 100%
        object-fit: cover

    &-name
        font-family: var(--clash)
        font-size: 20px
        line-height: 1.4
        color: var(--dark)
        margin: 24px 0 8px
        display: block
        @media screen and (max-width: 767px)
            font-size: 18px

    &-price
        font-size: 18px
        line-height: 1.5
        @media screen and (max-width: 767px)
            font-size: 16px
</style>