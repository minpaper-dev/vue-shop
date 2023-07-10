<script>
import { onMounted, ref, watch } from "vue";
import axios from "axios";
import ProductItem from "./ProductItem.vue";

export default {
  props: {
    category: String,
    limit: {
      type: Number,
      default: 0,
    },
  },
  components: { ProductItem },
  setup(props) {
    let products = ref([]);

    const getProduct = (category) => {
      axios
        .get(
          `https://fakestoreapi.com/products/category/${category}?limit=${props.limit}`
        )
        .then((result) => {
          products.value = [...result.data];
        });
    };

    onMounted(() => {
      getProduct(props.category);
    });
    watch(
      () => props.category,
      (newValue, oldValue) => {
        getProduct(newValue);
      }
    );

    return {
      products,
    };
  },
};

const getProducts = async () => {};
</script>

<template>
  <div class="wrap">
    <h2 class="title">{{ category }}</h2>
    <div class="flex">
      <product-item
        v-for="product in products"
        :key="product.id"
        v-bind:product="product"
      ></product-item>
    </div>
  </div>
</template>

<style scoped>
.wrap {
  /* max-width: 1360px;
  width: 100%;
  margin: 0 auto; */

  /* overflow: hidden; */
}
.title {
  text-align: center;
}
.flex {
  max-width: 1360px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
}
</style>
