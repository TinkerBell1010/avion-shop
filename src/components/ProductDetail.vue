<template>
    <div class="product-details">
        <div class="container">
            <img :src="product.img" :alt="product.title" class="product-details__image">
            <div class="product-details__info">
                <h2 class="product-details__name">{{ product.title }}</h2>
                <span class="product-details__price">£{{ product.price }}</span>
                <div class="product-details-block product-details-description">
                    <span class="product-details-block__title">Product description</span>
                    <p class="product-details-description__text">{{ product.description }}</p>
                </div>
                <div class="product-details-block">
                    <span class="product-details-block__title">Dimensions</span>
                    <div class="product-details-block__params">
                        <div class="product-details-block__params-text">
                            <span class="product-details-block__params-text-title">Height</span>
                            <span>{{product.height}}cm</span>
                        </div>
                        <div class="product-details-block__params-line"></div>
                        <div></div>
                        <div class="product-details-block__params-text">
                            <span class="product-details-block__params-text-title">Width</span>
                            <span>{{ product.width }}cm</span>
                        </div>
                        <div class="product-details-block__params-line"></div>
                        <div></div>
                        <div class="product-details-block__params-text">
                            <span class="product-details-block__params-text-title">Depth</span>
                            <span>{{ product.depth }}cm</span>
                        </div>
                    </div>

                </div>
                <div class="product-details-block">
                    <span class="product-details-block__title">Quantity</span>
                    <div class="product-details__quantity">
                        <span class="product-details__quantity-symbol" @click="changeQuantity('minus')">-</span>
                        <span class="product-details__quantity-value">{{ quantity }}</span>
                        <span class="product-details__quantity-symbol" @click="changeQuantity('plus')">+</span>
                    </div>
                </div>
                <uiButton color="primary" type="button" @click="cartStore.addToCart(product, quantity)">Add to cart</uiButton>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useCartStore } from '@/store/cart.js';
import uiButton from '@/components/UI/Button.vue';


const quantity = ref(1);
const cartStore = useCartStore();

const props = defineProps({
    product: {
        type: Object,
        default: () => {},
        required: true
        }
    });

const changeQuantity = (type) => {
    if (type === 'minus') {
        quantity.value === 1 ? (quantity.value = 1) : quantity.value--;
    }
    if (type === 'plus') {
        quantity.value === 10 ? (quantity.value = 10) : quantity.value++;
    }
};
</script>

<style lang="sass">
.product-details
    background: var(--lightgraybutton)
    padding: 50px 0
    margin-bottom: 50px
    @media screen and (max-width: 767px)
        margin-bottom: 42px
        padding: 30px 0
    & .container
        display: grid
        align-items: center
        grid-template-columns: repeat(2, 1fr)
        gap: 65px
        @media screen and (max-width: 1024px)
            grid-template-columns: 1fr
            gap: 40px
        @media screen and (max-width: 767px)
            gap: 28px

    &__image
        width: 100%
        object-fit: cover
        height: 100%

    &__info
        max-width: 518px 
        color: var(--dark)
        @media screen and (max-width: 1024px)
            max-width: 100%
    
    &__name
        font-family: var(--clash)
        font-size: 36px
        line-height: 44px
        margin-bottom: 16px
        @media screen and (max-width: 767px)
            font-size: 24px
            line-height: 34px
            margin-bottom: 12px

    &__price
        font-size: 24px
        line-height: 32px
        display: block
        padding-bottom: 28px
        border-bottom: 1px solid #EBE8F4
        margin-bottom: 24px
        @media screen and (max-width: 767px)
            font-size: 20px
            line-height: 28px
            padding-bottom: 16px
            margin-bottom: 28px

    &-description
        &__text
            line-height: 22px
            margin-top: 14px

    &-block
        margin-bottom: 40px
        @media screen and (max-width: 767px)
            margin-bottom: 28px
        &__title
            font-family: var(--clash)
            line-height: 19px

        &__params
            display: grid
            grid-template-columns: repeat(7, 44px)
            margin-top: 24px
            @media screen and (max-width: 767px)
                grid-template-columns: repeat(7, 1fr)
            &-text
                display: flex
                flex-direction: column
                font-size: 14px
                line-height: 17px
                &-title
                    display: block
                    font-family: var(--clash)
                    margin-bottom: 15px
            &-line
                border-right: 1px solid #EBE8F4
                margin: 5px

    &__quantity
        background: #fff
        width: 122px
        height: 46px
        display: grid
        grid-template-columns: repeat(3, 1fr)
        text-align: center
        align-items: center
        margin-top: 12px
        @media screen and (max-width: 767px)
            width: 100%
        
        &-symbol
            color: #EBE8F4
            cursor: pointer
            display: block
            transition: all .4s ease
            @media screen and (max-width: 767px)
                color: var(--gray)
            &:hover
                color: var(--gray)

</style>