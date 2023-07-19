<script lang="ts" setup>
import ProductItem from "./ProductItem.vue";
import { Product } from "../common/types";

const { category, products } = defineProps({
  category: String,
  products: Object as () => Product[],
});
</script>

<template>
  <section class="pt-6 pb-4 px-4 mt-10 mx-auto">
    <h2
      class="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold text-gray-200 dark:text-gray-600"
    >
      {{ category }}
    </h2>
    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list">
      <product-item
        v-for="product in products"
        :key="product.id"
        v-bind:product="product"
      ></product-item>
    </div>
  </section>
</template>

<style scoped></style>
