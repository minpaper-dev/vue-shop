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
  <div class="wrap">
    <h3>home > {{ categoryInfo[0].title }}</h3>
    <product-list
      v-bind:category="category"
      :products="
        products.filter((v) => categoryInfo[0].list.includes(v.category))
      "
    ></product-list>
  </div>
</template>

<style scoped>
.wrap {
  position: relative;
  top: 62px;
  max-width: 1360px;
  width: 100%;
  margin: 0 auto;
  padding-bottom: 62px;
}
</style>
