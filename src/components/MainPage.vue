<script>
import { computed } from "vue";
import { useQuery } from "vue-query";
import { useStore } from "vuex";

import axios from "axios";

import CarouselBanner from "./CarouselBanner.vue";
import ProductList from "./ProductList.vue";
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
    class="wrap"
  />
</template>

<style scoped>
.wrap {
  position: relative;
  top: 62px;
  max-width: 1360px;
  width: 100%;
  margin: 0 auto;
}

.wrap:last-child {
  padding-bottom: 100px;
}
</style>
