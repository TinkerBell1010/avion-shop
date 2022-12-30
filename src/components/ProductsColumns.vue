<template>
    <div class="products-container container">
        <h3 v-if="title" class="products__title">You might also like</h3>
        <div :class="['products', {'products--3columns': columnsCount===3}]">
            <Product 
            v-for="product of products" 
            :product="product"
            :key="product.id"
            />
        </div>
        <ui-Button v-if="btn" to="/products/all" color="light" type="link">View collection</ui-Button>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Product from '@/components/layout/Product.vue'
import uiButton from '@/components/UI/Button.vue'

const props = defineProps({
    products: {
        required: true,
    },
    title: {
        type: Boolean,
        default: false
    },
    columnsCount: {
        type: Number,
        required: false
    },
    btn: {
        type: Boolean,
        default: true
    }
})

</script>

<style lang="sass">
.products-container
    padding: 30px 0 40px
    display: flex
    flex-direction: column
    align-items: center
    @media screen and (max-width: 767px)
        padding: 24px 0

.products
    display: grid
    grid-template-columns: repeat(4, 1fr)
    gap: 36px 20px
    margin-bottom: 48px
    @media screen and (max-width: 1024px)
        grid-template-columns: repeat(2, 1fr)
        gap: 20px
    @media screen and (max-width: 767px)
        gap: 20px 16px
        margin-bottom: 40px

    &__title
        font-family: var(--clash)
        align-self: start
        color: var(--dark)
        font-size: 32px
        line-height: 39px
        margin-bottom: 33px
        @media screen and (max-width: 767px)
            font-size: 20px
            line-height: 24px
    &--3columns
        grid-template-columns: repeat(3, 1fr)
        padding-top: 6px
        @media screen and (max-width: 1024px)
            grid-template-columns: repeat(2, 1fr)


</style>