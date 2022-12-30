<script setup>
import { onMounted, ref } from 'vue';
import api from '@/api';

import Hero from '@/components/Hero.vue';
import AboutBrand from '@/components/AboutBrand.vue';
import Products from '@/components/ProductsColumns.vue';
import Ideas from '@/components/Ideas.vue';
import Subscribe from '@/components/Subscribe.vue';

const productsList = ref([]);
const popularProducts = ref([]);

onMounted(async () => {
    productsList.value = await api.getProducts();
    popularProducts.value = productsList.value.slice(0, 4);
});
</script>

<template>
    <div class="wrapper">
        <Hero />
        <AboutBrand />
        <Products :products="popularProducts"/>
        <Ideas />
        <Subscribe/>
    </div>
</template>