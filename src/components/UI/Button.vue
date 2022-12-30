<template>
    <button v-if="type === 'button'" 
    :class="[
    'btn', 
    {
        'btn--primary': color === 'primary', 
        'btn--light': color === 'light', 
        'btn--secondary': color === 'secondary',
        'btn--fullwidth': mobileFullWidth
    },
    ]">
        <slot/>
    </button>
    <router-link v-else class="btn" :to="to"
    :class="[
    'btn', 
    {
        'btn--primary': color === 'primary', 
        'btn--light': color === 'light', 
        'btn--secondary': color === 'secondary',
        'btn--fullwidth': mobileFullWidth
    },
    ]">
        <slot/> 
    </router-link>
</template>

<script setup>
const props = defineProps({
    background: {
        type: String,
        required: false
    },
    color: {
        type: String,
        required: false
    },
    type: {
        type: String,
        default: 'button'
    },
    to: {
        type: String,
        required: false
    },
    mobileFullWidth: {
        type: Boolean,
        default: true
    }
})
</script>

<style lang="sass">
.btn
    padding: 16px 32px
    display: flex
    align-items: center
    justify-content: center
    cursor: pointer
    border: none
    font-size: 16px
    white-space: nowrap
    @media screen and (max-width: 440px)
        padding: 16px 12px
    &:hover
        opacity: 0.8

    &--primary
        background: var(--dark)
        color: #fff
    &--secondary
        background: rgba(249, 249, 249, 0.15)
        color: #fff
    &--light
        background: var(--lightgraybutton)
        color: var(--dark)
    &--white
        background: #fff
        color: var(--dark)
    &--fullwidth
        @media screen and (max-width: 767px)
            width: 100%
    
</style>