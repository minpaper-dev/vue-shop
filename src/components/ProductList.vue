<script>
import { onMounted, ref, watch, computed } from "vue";
import axios from "axios";
import ProductItem from "./ProductItem.vue";

export default {
  props: {
    category: String,
    products: Array,
    limit: {
      type: Number,
      default: 0,
    },
  },
  components: { ProductItem },
};

const getProducts = async () => {};
</script>

<template>
  <section
    class="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mt-10 xl:container mx-auto"
  >
    <h2
      class="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold text-gray-600 dark:text-gray-200"
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
