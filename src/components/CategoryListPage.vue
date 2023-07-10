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
  <div class="wrap">
    <h3>home > {{ category }}</h3>
    <product-list v-bind:category="category"></product-list>
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
