<script>
import { watch, ref, computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import ProductList from "./ProductList.vue";
import { ProductCategory } from "../common/constants.ts";

export default {
  components: { ProductList },
  props: {
    category: String,
  },
  setup(props) {
    const route = useRoute();
    const store = useStore();

    let category = ref(route.path.slice(1));
    let categoryInfo = ref(
      ProductCategory.filter((v) => v.cat === category.value)
    );

    watch(route, (newCategory, oldCategory) => {
      category.value = newCategory.path.slice(1);
      categoryInfo.value = ProductCategory.filter(
        (v) => v.cat === category.value
      );
    });

    const products = computed(() => store.state.allProducts);

    return {
      category,
      products,
      categoryInfo,
    };
  },
};
</script>

<template>
  <div
    class="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto top-62"
  >
    <h3 class="text-gray-200 dark:text-gray-600">
      home > {{ categoryInfo[0].title }}
    </h3>
    <product-list
      v-bind:category="category"
      :products="
        products.filter((v) => categoryInfo[0].list.includes(v.category))
      "
    ></product-list>
  </div>
</template>

<style scoped></style>
