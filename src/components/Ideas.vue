<template>
    <div class="ideas container">
        <HeroInformation
        title="It started with a small idea"
        description="A global brand with local beginnings, our story begain in a small studio in South London in early 2014"
        link="/"
        colorTitle="#fff"
        colorDescription="#fff"
        background="var(--dark)"
        colorLink="secondary"/>
        <img src="/img/room.jpg" alt="room" class="ideas-image">
    </div>
</template>

<script setup>
import HeroInformation from '@/components/HeroInformation.vue'
</script>

<style lang="sass">
.ideas 
    padding: 60px 0
    display: grid
    grid-template-columns: repeat(2, 1fr)
    column-gap: 20px
    @media screen and (max-width: 767px)
        grid-template-columns: repeat(1, 1fr)
        padding: 32px 0
        gap: 24px
    &-image
        object-fit: cover
        height: 100%

    & .hero-info
        @media screen and (max-width: 767px)
            padding: 36px 32px 30px
        &__title
            @media screen and (max-width: 767px)
                font-size: 20px
        &__description
            @media screen and (max-width: 767px)
                font-size: 14px

        &-text
            @media screen and (max-width: 767px)
                margin-bottom: 56px
</style>