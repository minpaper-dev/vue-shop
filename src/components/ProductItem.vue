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
  <div class="container">
    <div class="product-list">
      <a class="product-item">
        <figure class="product-card-wrap-image">
          <img :src="product.image" class="product-card-image" />
        </figure>
        <div class="product-card-description">
          <span>{{ product.title }}</span>
          <p>${{ product.price }}</p>
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped>
h2 {
  margin-bottom: 32px;
  color: #fff;
}
.container {
  max-width: 1360px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* position: relative;
  top: 62px; */
  padding: 48px 8px 32px;
  margin: 0 auto;
}
.product-card-wrap-image {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
}
.product-card-image {
  width: 100px;
  height: 100px;
}
.product-item {
  max-width: 316px;
  width: 316px;
  height: 468px;
  overflow: hidden;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.product-card {
}
.product-list {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.product-card-description {
  width: 100%;
  min-height: 180px;
  color: #fff;
  background-color: #394150;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 32px;
}

.product-card-description span {
  margin-bottom: 20px;
}
</style>
