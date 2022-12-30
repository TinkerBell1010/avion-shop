<template>
    <div class="hero-info" :style="{backgroundColor: background}">
        <div class="hero-info-text">
            <h2 class="hero-info__title" :style="{color: colorTitle}">{{title}}</h2>
            <span class="hero-info__description" :style="{color: colorDescription}">{{description}}</span>
        </div>
        <ui-Button :color="colorLink" to="/products/all" type="link">View collection</ui-Button>
    </div>
</template>

<script setup>
import uiButton from '@/components/UI/Button.vue'

const props = defineProps({
    title: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    link: {
        type: String,
        required: false
    },
    colorTitle: {
        type: String,
        default: ''
    },
    colorDescription: {
        type: String,
        default: 'var(--lightgray)'
    },
    background: {
        type: String,
        default: '#fff'
    },
    colorLink: {
        type: String,
        default: 'light'
    }


})
</script>

<style lang="sass">
.hero
    &-info
        max-width: 630px
        min-height: 444px
        padding: 50px 55px
        display: flex
        flex-direction: column
        justify-content: space-between
        align-items: flex-start
        @media screen and (max-width: 767px)
            padding: 47px 0 32px
            height: auto
            max-width: 100%
            min-height: auto
        &-text
            @media screen and (max-width: 767px)
                margin-bottom: 32px
        &__title
            font-family: var(--clash)
            color: var(--black)
            font-size: 32px
            line-height: 1.4
            margin: 0 0 20px 0
            @media screen and (max-width: 767px)
                font-size: 24px
                margin-bottom: 12px
        &__description
            font-size: 18px
            color: var(--lightgray)
            @media screen and (max-width: 767px)
                font-size: 16px
</style>