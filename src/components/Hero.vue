<template>
    <div class="hero">
        <div class="container">
            <HeroInformation
            title="Luxury homeware for people who love timeless design quality"
            description="Shop the new Spring 2022 collection today"
            link="/"
            colorTitle="var(--black)"
            />
        </div>
        <img class="hero__img" src="/img/hero.jpg" alt="hero">
    </div>
</template>

<script setup>
import HeroInformation from '@/components/HeroInformation.vue'
</script>

<style lang="sass">
.hero
    background: url('/img/hero.jpg')
    height: 704px
    background-size: cover
    display: flex
    align-items: center
    @media screen and (max-width: 767px)
        height: auto
        background: transparent
        flex-direction: column
    &__img
        display: none
        @media screen and (max-width: 768px)
            display: flex

    & .container
        width: 1280px
        display: flex
        justify-content: flex-end
        @media screen and (max-width: 1344px)
            width: 100%
        @media screen and (max-width: 767px)
            width: auto
</style>