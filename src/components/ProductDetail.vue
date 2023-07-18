<script>
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import axios from "axios";
export default {
  name: "ProductDetail",
  setup() {
    const route = useRoute();
    const store = useStore();

    const allProduct = computed(() => store.state.allProducts);
    const productInfo = allProduct.value.find(
      (product) => product.id == route.params.id
    );

    const addToCart = (productInfo) => {
      store.commit("increment");
      let cartStorage = JSON.parse(localStorage.getItem("CART_DATA")) || {};
      if (Object.keys(cartStorage).includes(String(productInfo.id))) {
        cartStorage[productInfo.id].count++;
      } else {
        cartStorage = {
          ...cartStorage,
          [productInfo.id]: { count: 1, id: productInfo.id },
        };
      }
      localStorage.setItem("CART_DATA", JSON.stringify(cartStorage));
    };

    return {
      addToCart,
      allProduct,
      productInfo,
    };
  },
};
</script>

<template>
  <section class="main pt-16">
    <section
      class="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto"
    >
      <p class="text-sm breadcrumbs">
        {{ productInfo?.category }} > {{ productInfo?.title }}
      </p>
      <div class="lg:flex lg:items-center mt-6 md:mt-14 px-2 lg:px-0">
        <figure
          class="flex-shrink-0 rounded-2xl overflow-hidden px-4 py-4 bg-white"
        >
          <img class="object-contain w-full h-72" :src="productInfo?.image" />
        </figure>
        <div class="card-body px-1 lg:px-12">
          <h2 class="card-title">{{ productInfo?.title }}</h2>
          <p>{{ productInfo?.description }}</p>
          <div class="flex items-center mt-3">
            <p class="ml-2">
              {{ productInfo?.rating.rate }} /
              {{ productInfo?.rating.count }} 참여
            </p>
          </div>

          <p class="mt-2 mb-4 text-3xl">${{ productInfo?.price }}</p>
          <div class="card-actions">
            <button
              @click="addToCart(productInfo)"
              class="bg-purple text-white"
            >
              장바구니에 담기
            </button>
            <a
              class="text-gray-600 border-2 border-solid border-gray-600 rounded"
              >장바구니로 이동</a
            >
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<style scoped>
.main {
  min-height: calc(100vh - 4rem - 224px);
}
.breadcrumbs {
  max-width: 100%;
  overflow-x: auto;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

figure {
  min-width: 20em;
  background-color: white;
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
.wrap {
  position: relative;
  top: 62px;
  max-width: 1062px;
  width: 100%;
  margin: 0 auto;
}
.product {
  display: flex;
  align-items: center;
}
img {
  /* width: 100%; */
  height: 18rem;
}
</style>
