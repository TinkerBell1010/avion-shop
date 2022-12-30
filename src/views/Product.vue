<template>
    <div class="wrapper">
        <ProductDetail :product="currentProduct"/>
        <Products :products="productsPopular" :title="true"/>
        <AboutBrand/>
        <Subscribe/>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import api from '@/api';
import ProductDetail from "@/components/ProductDetail.vue";
import Products from "@/components/ProductsColumns.vue";
import AboutBrand from "@/components/AboutBrand.vue";
import Subscribe from "@/components/Subscribe.vue";


const route = useRoute();
const router = useRouter();
const currentProduct = ref([]);
const productsList = ref([]);
const productsPopular = ref([]);

onMounted(async () => { 
    productsList.value = await api.getProducts();
    productsPopular.value = productsList.value.slice(0, 4);
    currentProduct.value = productsList.value.find(product => product.id == route.params.id);
});

</script>