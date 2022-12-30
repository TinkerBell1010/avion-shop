<template>
    <footer class="footer">
        <div class="footer-content container">
            <div class="footer-top">
                <div class="footer-menu">
                    <div class="footer-menu-column">
                        <span class="footer-menu__title">Menu</span>
                        <router-link to="/" class="footer-menu__link">New arrivals</router-link>
                        <router-link to="/" class="footer-menu__link">Best sellers</router-link>
                        <router-link to="/" class="footer-menu__link">Recently viewed</router-link>
                        <router-link to="/" class="footer-menu__link">Popular this week</router-link>
                        <router-link to="/" class="footer-menu__link">All products</router-link>
                    </div>
                    <div class="footer-menu-column">
                        <span class="footer-menu__title">Categories</span>
                        <router-link to="/" class="footer-menu__link">Crockery</router-link>
                        <router-link to="/" class="footer-menu__link">Furniture</router-link>
                        <router-link to="/" class="footer-menu__link">Homeware</router-link>
                        <router-link to="/" class="footer-menu__link">Plant pots</router-link>
                        <router-link to="/" class="footer-menu__link">Chairs</router-link>
                        <router-link to="/" class="footer-menu__link">Crockery</router-link>
                    </div>
                    <div class="footer-menu-column">
                        <span class="footer-menu__title">Our company</span>
                        <router-link to="/" class="footer-menu__link">About us</router-link>
                        <router-link to="/" class="footer-menu__link">Vacancies</router-link>
                        <router-link to="/" class="footer-menu__link">Contact us</router-link>
                        <router-link to="/" class="footer-menu__link">Privacy</router-link>
                        <router-link to="/" class="footer-menu__link">Returns policy</router-link>
                    </div>
                </div>
                <div class="footer-subscribe">
                    <span class="footer-subscribe__title">Join our mailing list</span>
                    <SubscribeForm colorButton="white" colorInput="dark"/>
                </div>
            </div>
            <div class="footer-bottom">
                <span class="footer-bottom__copyright">Copyright 2022 Avion LTD</span>
                <div class="footer-bottom-socials">
                    <a href="#" class="footer-bottom-socials__link"><img class="footer-bottom-socials__link-icon" src="/svg/in.svg" alt="linkedin"></a>
                    <a href="#" class="footer-bottom-socials__link"><img class="footer-bottom-socials__link-icon" src="/svg/facebook.svg" alt="facebook"></a>
                    <a href="#" class="footer-bottom-socials__link"><img class="footer-bottom-socials__link-icon" src="/svg/instagram.svg" alt="instagram"></a>
                    <a href="#" class="footer-bottom-socials__link"><img class="footer-bottom-socials__link-icon" src="/svg/skype.svg" alt="skype"></a>
                    <a href="#" class="footer-bottom-socials__link"><img class="footer-bottom-socials__link-icon" src="/svg/twitter.svg" alt="twitter"></a>
                    <a href="#" class="footer-bottom-socials__link"><img class="footer-bottom-socials__link-icon" src="/svg/pinterest.svg" alt="pinterest"></a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import SubscribeForm from '@/components/SubscribeForm.vue'
</script>

<style lang="sass">
.footer
    background: var(--dark)
    color: #fff
    &-content
        padding: 58px 0 25px
        @media screen and (max-width: 767px)
        padding: 40px 0 20px

    &-top
        display: grid
        grid-template-columns: 540px 1fr
        justify-content: space-between
        padding-bottom: 48px
        border-bottom: 1px solid #4E4D93
        @media screen and (max-width: 1024px)
            grid-template-columns: repeat(2, 1fr)
            gap: 10px
        @media screen and (max-width: 767px)
            grid-template-columns: repeat(1, 1fr)
            gap: 40px
            padding-bottom: 16px
        
    &-menu
        display: grid
        grid-template-columns: repeat(3, 1fr)
        @media screen and (max-width: 1024px)
            grid-template-columns: repeat(2, 1fr)
            gap: 40px 20px
        &-column:nth-child(2)
            @media screen and (max-width: 1024px)
                order: -1
                

        &__link
            display: block
            color: #fff
            font-size: 14px
            margin-bottom: 12px
            line-height: 19px
            &:last-child
                margin-bottom: 0

        &__title
            display: block
            margin-bottom: 12px
            font-family: var(--clash)
            line-height: 20px

    &-subscribe
        &__title
            display: block
            font-family: var(--clash)
            line-height: 20px
            margin-bottom: 16px

    &-bottom
        display: flex
        justify-content: space-between
        margin-top: 24px
        @media screen and (max-width: 767px)
            flex-direction: column-reverse
            align-items: center
        &-copyrights
            font-size: 14px
            line-height: 19px
        &-socials
            @media screen and (max-width: 767px)
                margin-bottom: 20px
            &__link
                &-icon
                    width: 24px
                &:not(:last-of-type)
                    margin-right: 24px
                    
        

</style>