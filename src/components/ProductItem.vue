<script>
import { watch, ref } from "vue";

export default {
  props: {
    product: Object,
  },
  setup(props) {
    let product = ref(props.product);

    watch(
      () => props.product,
      (newValue, oldValue) => {
        product = newValue;
      }
    );

    return {
      product,
    };
  },
};
</script>

<template>
  <a
    class="card card-bordered border-gray-200 dark:border-gray-800 card-compact lg:card-normal"
    :href="`/product/${product.id}`"
  >
    <figure class="flex h-80 bg-white overflow-hidden">
      <img :src="product.image" class="transition-transform duration-300" />
    </figure>
    <div
      class="card-body bg-gray-300 dark:bg-gray-900 text-gray-600 dark:text-gray-200"
    >
      <p class="card-title text-base">{{ product.title }}</p>
      <p class="text-base">${{ product.price }}</p>
    </div>
  </a>
</template>

<style scoped>
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 1rem;
}

.card figure {
  display: flex;
  align-items: center;
  justify-content: center;
}

.card figure img {
  max-width: 50%;
  max-height: 50%;
}

.card:hover figure img {
  transform: scale(1.2);
  transition-duration: 0.3s;
}

.card-body {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding: 2rem;
  gap: 0.5rem;
}

.card-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 600;
}
</style>
