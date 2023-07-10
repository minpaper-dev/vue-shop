<script>
import { ref, reactive, onMounted } from "vue";
import axios from "axios";
import CarouselBanner from "./CarouselBanner.vue";
import ProductList from "./ProductList.vue";

export default {
  setup() {
    let categoryList = ref([]);

    onMounted(() => {
      axios
        .get(`https://fakestoreapi.com/products/categories`)
        .then((result) => {
          categoryList.value = [...categoryList.value, ...result.data];
        });
    });

    return {
      categoryList,
    };
  },
  components: { CarouselBanner, ProductList },
};
</script>

<template>
  <carousel-banner />
  <product-list
    v-for="listItem in categoryList"
    :key="listItem"
    :category="listItem"
    :limit="4"
    class="wrap"
  >
  </product-list>
</template>

<style scoped>
.wrap {
  position: relative;
  top: 62px;
  max-width: 1360px;
  width: 100%;
  margin: 0 auto;
}
</style>
