<template>
    <div class="cart">
        <div class="container">
            <h2 class="cart__title">Your shopping cart</h2>
            <div class="cart-products">
                <div class="cart-products__column-titles cart-products-row">
                    <span class="cart-products__column-title">Product</span>
                    <span class="cart-products__column-title">Quantity</span>
                    <span class="cart-products__column-title">Total</span>
                </div>
                <div class="cart-products-list" v-for="product of cart" :key="product.id">
                    <div class="cart-product cart-products-row">
                        <div class="cart-product-info">
                            <router-link class="cart-product-info__link-img" :to="`/products/${product.category}/${product.id}`">
                                <img class="cart-product-info__image" :src="product.img" :alt="product.title">
                            </router-link>
                            <router-link class="cart-product-info__text" :to="`/products/${product.category}/${product.id}`">
                                <h3 class="cart-product-info__name">{{ product.title }}</h3>
                                <span class="cart-product-info__price">£{{ product.price }}</span>
                            </router-link>
                            <div class="cart-product-info__quantity">
                                <span class="cart-product__quantity-symbol" @click="changeQuantity('minus', product.id)">-</span>
                                <span class="cart-product__quantity-value">{{ product.count }}</span>
                                <span class="cart-product__quantity-symbol" @click="changeQuantity('plus', product.id)">+</span>
                            </div>
                        </div>
                        <div class="cart-product__quantity">
                            <span class="cart-product__quantity-symbol" @click="changeQuantity('minus', product.id)">-</span>
                            <span class="cart-product__quantity-value">{{ product.count }}</span>
                            <span class="cart-product__quantity-symbol" @click="changeQuantity('plus', product.id)">+</span>
                        </div>
                        <span class="cart-product__total-price">£{{ product.count*product.price }}</span>
                    </div>
                </div>
            </div>
            <div class="cart-total">
                <div class="cart-total__price">
                    <span class="cart-total__price-title">Subtotal</span>
                    <span class="cart-total__price-subtotal">£{{ subtotal }}</span>
                </div>
                <span class="cart-total__info">Taxes and shipping are calculated at checkout</span>
                <uiButton color="primary" type="button" @click="checkout()">Go to checkout</uiButton>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useCartStore } from '@/store/cart.js';
import uiButton from '@/components/UI/Button.vue';

const subtotal = ref();
const cart = useCartStore().cart;

const checkout = () => {
    subtotal.value = 0;
    cart.forEach(product => { subtotal.value += product.count * product.price })
}

const changeQuantity = (type, id) => {
    let product = cart.find(prod => prod.id === id);
    if (type === 'minus') {
        product.count === 1 ? (product.count = 1) : product.count--;
    }
    if (type === 'plus') {
        product.count === 10 ? (product.count = 10) : product.count++;
    }
};

checkout();

</script>

<style lang="sass">
.cart
    background: var(--lightgraybutton)
    color: var(--dark)
    padding: 64px 0 48px
    @media screen and (max-width: 767px)
        padding: 36px 0 55px
    & .container
        max-width: 1064px

    &__title
        font-family: var(--clash)
        font-size: 36px
        line-height: 1.4
        padding-bottom: 48px
        @media screen and (max-width: 767px)
            font-size: 24px
            padding-bottom: 12px
    &-products
        &-row
            display: grid
            grid-template-columns: 3fr 1fr 1fr
            column-gap: 20px
            align-items: center
            @media screen and (max-width: 767px)
                grid-template-columns: 1fr
            
        &__column-titles
            border-bottom: 1px solid #EBE8F4
            padding-bottom: 12px
            font-size: 14px
            line-height: 1.4
            @media screen and (max-width: 767px)
                display: none
        &__column-title:last-of-type
            text-align: right

    &-product
        margin-top: 20px
        &-info
            display: flex
            text-decoration: none
            @media screen and (max-width: 767px)
                display: grid
                grid-template-columns: 130px 1fr
            &__link-img
                width: 150px
                @media screen and (max-width: 767px)
                    width: 130px
                    grid-row: span 2

            &__image
                object-fit: cover
                height: 100%
                
            &__text
                width: 100%
                padding: 30px 21px
                text-align: left
                color: var(--dark)
                @media screen and (max-width: 767px)
                    padding: 0 8px 0 22px
            &__name
                font-family: var(--clash)
                font-size: 20px
                line-height: 1.4
                display: block
                margin-bottom: 20px
                @media screen and (max-width: 767px)
                    margin-bottom: 8px
            &__price
                line-height: 1.5
        &__total-price
            font-size: 18px
            line-height: 1.5
            text-align: right
            @media screen and (max-width: 767px)
                display: none

        &__quantity, &-info__quantity
            background: #fff
            width: 122px
            height: 46px
            display: grid
            grid-template-columns: repeat(3, 1fr)
            text-align: center
            align-items: center
            margin-top: 12px
            &-symbol
                color: #EBE8F4
                cursor: pointer
                display: block
                transition: all .4s ease
                @media screen and (max-width: 767px)
                    color: var(--gray)
                &:hover
                    color: var(--gray)
        &__quantity
            @media screen and (max-width: 767px)
                display: none

        &-info__quantity
            display: none
            @media screen and (max-width: 767px)
                display: grid
                margin: 0 8px 0 22px
                align-self: end



    &-total
        width: 100%
        display: flex
        flex-direction: column
        align-items: flex-end
        border-top: 1px solid #EBE8F4
        padding-top: 28px
        margin-top: 20px
        @media screen and (max-width: 767px)
            padding-top: 16px
        &__price
            margin-bottom: 12px
            &-title
                color: #4E4D93
                font-size: 20px
                line-height: 1.4
                margin-right: 16px
            &-subtotal
                font-size: 24px
                line-height: 1.4
        &__info
            color: #4E4D93
            font-size: 14px
            line-height: 1.5
    & .btn
        margin-top: 16px
        @media screen and (max-width: 767px)
            margin-bottom: 36px
</style>