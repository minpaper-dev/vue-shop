<script lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";

import CarouselBanner from "../components/CarouselBanner.vue";
import ProductList from "../components/ProductList.vue";
import { ProductCategory } from "../common/constants.ts";
import { Product } from "../common/types";

export default {
  setup() {
    const store = useStore();
    const products = computed(() => store.state.allProducts);

    return {
      ProductCategory,
      products,
    };
  },
  components: { CarouselBanner, ProductList },
};
</script>

<template>
  <carousel-banner />
  <product-list
    v-for="category in ProductCategory"
    :key="category.cat"
    :category="category.title"
    :products="
      products.filter((v : Product) => category.list.includes(v.category)).slice(0, 4)
    "
  />
</template>

<style scoped></style>
