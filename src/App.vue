<script setup>
import Header from '@/components/layout/Header.vue';
import Footer from '@/components/layout/Footer.vue';

</script>

<template>
  <div class="wrapper">
    <Header />
    <router-view :key="$route.fullPath"/>
    <Footer />
  </div>
</template>

<style lang="sass">
@import './assets/styles/global'
</style>
