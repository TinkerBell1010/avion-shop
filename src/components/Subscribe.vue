<template>
    <div class="subscribe">
        <div class="subscribe-content">
            <h3 class="subscribe-title">Join the club and get the benefits</h3>
            <span class="subscribe-description">Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</span>
            <div class="subscribe-checks">
                <div class="subscribe-check">
                    <img src="/svg/check.svg" class="subscribe-check__icon" alt="check">
                    <span class="subscribe-check__name">Exclusive offers</span>
                </div>
                <div class="subscribe-check">
                    <img src="/svg/check.svg" class="subscribe-check__icon" alt="check">
                    <span class="subscribe-check__name">Free events</span>
                </div>
                <div class="subscribe-check">
                    <img src="/svg/check.svg" class="subscribe-check__icon" alt="check">
                    <span class="subscribe-check__name">Large discounts</span>
                </div>
            </div>
            <SubscribeForm/>
        </div>
    </div>
</template>

<script setup>
import SubscribeForm from '@/components/SubscribeForm.vue'

</script>

<style lang="sass">
.subscribe
    background: url('/img/subscribe.jpg')
    background-size: cover
    background-position: center
    padding: 97px 0 86px
    @media screen and (max-width: 767px)
        padding: 24px 24px 32px
    &-content
        max-width: 500px
        margin: auto
        color: #fff
        text-align: center
        @media screen and (max-width: 767px)
            text-align: left
    &-title
        font-family: var(--clash)
        font-size: 32px
        line-height: 1.4
        margin-bottom: 12px
        @media screen and (max-width: 767px)
            font-size: 24px
    &-description
        font-size: 18px
        line-height: 1.5
        @media screen and (max-width: 767px)
            font-size: 14px
    &-checks
        display: flex
        margin: 30px 26px 40px
        justify-content: space-between
        @media screen and (max-width: 767px)
            flex-direction: column
            margin: 20px 0

    &-check
        display: flex
        align-items: center
        @media screen and (max-width: 767px)
            margin-bottom: 8px
        &__icon
            margin-right: 8px
        &__name
            line-height: 1.5   
    
</style>