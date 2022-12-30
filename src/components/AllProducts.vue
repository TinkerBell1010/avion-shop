<template>
    <div class="all-products container">
        <div class="all-products-filters">
            <uiCheckbox :options="productTypes" title="Product type" filterType="type"/>
            <uiCheckbox :options="prices" title="Price" filterType="price"/>
            <uiCheckbox :options="designers" title="Designer" filterType="designer"/>
        </div>
        <Products :products="productsList" :columnsCount="3" :btn="false"/>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import api from '@/api';
import Products from '@/components/ProductsColumns.vue';
import uiCheckbox from "@/components/UI/Checkbox.vue";

const route = useRoute();
const router = useRouter();
const productsList = ref([]);
const productTypes = ['Furniture','Homeware','Sofas','Light fittings','Accessories'];
const prices = ['0 - 100', '101 - 250','250 +'];
const designers = ['Robert Smith', 'Liam Gallagher', 'Biggie Smalls','Thom Yorke'];
const category = route.params.category;

onMounted(async () => {
    if (category === 'all') {
        productsList.value = await api.getProducts();
    } else {
        productsList.value = (await api.getProducts()).filter(product => product.category == category);
    }
});

</script>

<style lang="sass">
.all-products
    display: grid
    grid-template-columns: 305px 1fr
    @media screen and (max-width: 767px)
        grid-template-columns: 1fr

    &-filters
        @media screen and (max-width: 767px)
            display: flex
            justify-content: space-between
              

</style>