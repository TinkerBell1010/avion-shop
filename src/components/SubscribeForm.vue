<template>
    <div class="subscribe-form">
        <input type="text" placeholder="your@email.com" 
        :class="[
            'subscribe-form__input', 'input-text',
            {
                'input-text--light': colorInput === 'light',
                'input-text--dark': colorInput === 'dark'
            }
        ]">
        <ui-Button type="button" :color="colorButton" :mobileFullWidth=false>Sign up</ui-Button>
    </div>
</template>

<script setup>
import uiButton from '@/components/UI/Button.vue'

const props = defineProps({
    colorButton: {
        type: String,
        default: 'primary'
    },
    colorInput: {
        type: String,
        default: 'light'
    }
})
</script>

<style lang="sass">
.subscribe
    &-form
        display: flex
        &__input
            flex-grow: 1
        & .btn
            font-size: 14px


.input-text
    &--light
        background-color: var(--lightgraybutton)
        color: var(--dark)
        &::placeholder
            color: var(--dark)
            opacity: 0.2

    &--dark
        background-color: rgba(255, 255, 255, 0.15)
        color: #fff
        &::placeholder
            color: #fff
</style>