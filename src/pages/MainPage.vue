<script>
import { computed } from "vue";
import { useQuery } from "vue-query";
import { useStore } from "vuex";

import axios from "axios";

import CarouselBanner from "../components/CarouselBanner.vue";
import ProductList from "../components/ProductList.vue";
import { ProductCategory } from "../common/constants.ts";

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
      products.filter((v) => category.list.includes(v.category)).slice(0, 4)
    "
  />
</template>

<style scoped></style>
