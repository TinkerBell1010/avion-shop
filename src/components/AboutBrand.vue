<template>
    <div class="about-brand container">
        <h3 class="about-brand__title">What makes our brand different</h3>
        <div class="about-brand-elements">
            <div 
                class="about-brand-element"
                v-for="(element, i) of aboutBrand"
                :key="i">
                <img :src="element.img" :alt="element.title">
                <h4 class="about-brand-element__title">{{element.title}}</h4>
                <span class="about-brand-element__description">{{element.description}}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const aboutBrand = [
    {
        img: '/svg/about-brand-1.svg',
        title: 'Next day as standard',
        description: 'Order before 3pm and get your order the next day as standard'
    },
    {
        img: '/svg/about-brand-2.svg',
        title: 'Made by true artisans',
        description: 'Handmade crafted goods made with real passion and craftmanship'
    },
    {
        img: '/svg/about-brand-3.svg',
        title: 'Unbeatable prices',
        description: 'For our materials and quality you won’t find better prices anywhere'
    },
    {
        img: '/svg/about-brand-4.svg',
        title: 'Recycled packaging',
        description: 'We use 100% recycled to ensure our footprint is more manageable'
    }

]
</script>

<style lang="sass">
.about-brand
    padding: 80px 0
    @media screen and (max-width: 768px)
        padding: 48px 0 50px
    &__title
        text-align: center
        font-size: 24px
        color: var(--dark)
        font-family: var(--clash)
        @media screen and (max-width: 768px)
            text-align: left
    &-elements
        display: grid
        grid-template-columns: repeat(4, 1fr)
        column-gap: 20px
        margin-top: 36px
        @media screen and (max-width: 1024px)
            grid-template-columns: repeat(2, 1fr)
            gap: 20px
        @media screen and (max-width: 768px)
            grid-template-columns: repeat(1, 1fr)
            gap: 26px

    &-element
        background: var(--lightgraybutton)
        padding: 48px
        color: var(--dark)
        &__title
            margin: 12px 0
            font-size: 20px
            line-height: 1.4
            font-family: var(--clash)

        &__description
            line-height: 1.5

    
</style>