<script>
import { watch, ref } from "vue";
import ProductList from "./ProductList.vue";

export default {
  components: { ProductList },
  props: {
    category: String,
  },
  setup(props) {
    let category = ref(props.category);

    watch(
      () => props.category,
      (newValue, oldValue) => {
        console.log(newValue);
        category.value = newValue;
      }
    );

    return {
      category,
    };
  },
};
</script>

<template>
  <product-list v-bind:category="category"></product-list>
</template>

<style scoped></style>
