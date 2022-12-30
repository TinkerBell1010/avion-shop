<template>
    <header class="header">
        <div class="header-top">
            <div class="header-top-left">
                <div class="header-top-search">
                    <img class="header-img" src="/svg/search.svg" alt="search">
                </div>
            </div>
            <router-link to="/" class="header-logo">Avion</router-link>
            <div class="header-top-right">
                <div class="header-top-right__search">
                    <img class="header-img" src="/svg/search.svg" alt="search">
                </div>
                <div class="header-top-right__cart">
                    <router-link to="/cart">
                        <img class="header-img" src="/svg/shopping-cart.svg" alt="shopping cart">
                        <span class="header-top-right__cart-count" v-if="cartStore.cart.length">{{ cartStore.cart.length }}</span>
                    </router-link>
                </div>
                <div class="header-top-right__profile">
                    <router-link to="/user">
                        <img class="header-img" src="/svg/user-avatar.svg" alt="user">
                    </router-link>
                </div>
                <div class="header-top-mobile-menu" @click="isOpenedMobileMenu = !isOpenedMobileMenu">
                    <img class="header-img" src="/svg/menu.svg" alt="menu">
                </div>
            </div>
        </div>
        <div class="header-menu">
            <router-link 
                class="header-menu__link"
                :to="`/products${ element.path }`" 
                v-for="(element, i) of menu"
                :key="i">{{element.name}}</router-link>
        </div>
        <div class="header-menu-mobile" v-if="isOpenedMobileMenu">
            <router-link class="header-menu__link" :to="`/products${ element.path }`" v-for="(element, i) of menu"
                :key="i">{{element.name}}</router-link>
        </div>
    </header>
</template>

<script setup>
import { ref } from 'vue';
import { useCartStore } from '@/store/cart.js';

const menu = [
    {
        name: 'Plant pots',
        path: '/plant'
    },
    {
        name: 'Ceramics',
        path: '/ceramics'
    },
    {
        name: 'Tables',
        path: '/tables'
    },
    {
        name: 'Chairs',
        path: '/chairs'
    },
    {
        name: 'Lighting',
        path: '/lighting'
    },
    {
        name: 'Cutlery',
        path: '/cutlery'
    }
]

const isOpenedMobileMenu = ref(false);
const cartStore = useCartStore();
</script>

<style lang="sass" scoped>
.header
    background-color: #fff
    height: 132px
    margin: 0 28px
    @media screen and (max-width: 767px)
        height: 70px
        margin: 0 24px
    &-top
        display: grid
        grid-template-columns: repeat(3, 1fr)
        height: 70px
        align-items: center
        border-bottom: 1px solid rgba(0, 0, 0, 0.1)
        margin: 0, 28px
        @media screen and (max-width: 767px)
            border: none
            grid-template-columns: repeat(2, 1fr)

        &-left
            @media screen and (max-width: 767px)
                display: none
        
        &-search
            margin-right: 20px

        &-mobile-menu
            display: none
            @media screen and (max-width: 767px)
                display: block
                z-index: 10

        &-right
            display: flex
            align-items: center
            justify-content: flex-end
            &__cart
                margin-right: 20px
                position: relative
                &-count
                    position: absolute
                    width: 15px
                    height: 15px
                    background: var(--dark)
                    border-radius: 50%
                    color: #fff
                    font-size: 10px
                    text-decoration: none
                    display: flex
                    justify-content: center
                    align-items: center
                    top: -20%
                    right: -30%

            &__profile
                @media screen and (max-width: 767px)
                    margin-right: 20px
            &__search
                display: none
                @media screen and (max-width: 767px)
                    margin-right: 20px
                    display: block

    &-logo
        font-family: var(--clash)
        color: var(--black)
        font-weight: 400
        font-size: 24px
        text-decoration: none
        text-align: center
        @media screen and (max-width: 767px)
            order: -1
            text-align: left
        &:hover
            text-decoration: underline

    &-img
        width: 20px

    &-menu
        height: 62px
        display: flex
        justify-content: center
        align-items: center
        @media screen and (max-width: 767px)
            display: none
        &__link
            margin: 0 22px
            color: var(--gray)
            font-weight: 400
            font-size: 16px
            text-decoration: none
            @media screen and (max-width: 767px)
                padding: 15px 5px
                color: var(--dark)
                margin: 0
                border-bottom: 1px solid rgba(0, 0, 0, 0.1)
            &:hover
                text-decoration: underline

        &-mobile
            position: fixed
            background: #fff
            top: 0
            right: 0
            bottom: 0
            width: 250px
            padding: 45px 20px
            display: flex
            flex-direction: column
            box-shadow: -53px 4px 39px -6px rgba(34, 32, 46, 0.2)
            &-top
                display: flex
                justify-content: flex-end
                padding-bottom: 15px
    
    

</style>