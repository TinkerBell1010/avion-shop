import {
    createRouter,
    createWebHistory
} from 'vue-router';
import Index from '@/views/Index.vue';
import Product from "@/views/Product.vue";
import Catalog from '@/views/Catalog.vue';
import Cart from '@/views/Cart.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: '/',
            name: 'Index',
            component: Index,
        },
        {
            path: "/products/:category/:id",
            name: "Product",
            component: Product,
        },
        {
            path: "/products/:category",
            name: "Products",
            component: Catalog,
        },
        {
            path: "/cart",
            name: "Cart",
            component: Cart,
        }
    ]
});

export default router;