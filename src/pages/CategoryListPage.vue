<script lang="ts">
import { watch, ref, computed, Ref } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import ProductList from "../components/ProductList.vue";
import { ProductCategory } from "../common/constants.ts";
import { Product } from "../common/types";

interface CategoryInfo {
  cat: string;
  title: string;
  list: string[];
}

export default {
  components: { ProductList },

  setup() {
    const route = useRoute();
    const store = useStore();

    const currentCategory: Ref<string> = ref(route.path.slice(1));
    const categoryInfo: Ref<CategoryInfo[]> = ref(
      ProductCategory.filter((v) => v.cat === currentCategory.value)
    );

    watch(route, (newRoute) => {
      currentCategory.value = newRoute.path.slice(1);
      categoryInfo.value = ProductCategory.filter(
        (v) => v.cat === currentCategory.value
      );
    });

    const products = computed(() => store.state.allProducts);

    return {
      products,
      categoryInfo,
    };
  },
};
</script>

<template>
  <div class="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
    <h3 class="text-sm p-1 text-gray-200 dark:text-gray-600">
      home > {{ categoryInfo[0].title }}
    </h3>
    <product-list
      v-bind:category="categoryInfo[0].title"
      :products="
        products.filter((v : Product) => categoryInfo[0].list.includes(v.category))
      "
    ></product-list>
  </div>
</template>

<style scoped>
.main {
  min-height: calc(100vh - 4rem - 224px);
}
</style>
