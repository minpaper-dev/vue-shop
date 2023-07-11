<script>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
export default {
  name: "ProductDetail",
  setup() {
    const route = useRoute();

    let productId = ref(route.params.id);
    let productInfo = ref({});
    let isLoading = ref(true);

    const getProductInfo = async () => {
      const response = await axios.get(`https://fakestoreapi.com/products/1`);
      console.log(response.data);
      productInfo.value = { ...response.data };
      isLoading.value = false;
    };

    onMounted(() => {
      getProductInfo();
    });

    return {
      productId,
      productInfo,
      isLoading,
    };
  },
};
</script>

<template>
  <div class="wrap" v-if="!isLoading">
    <h3>{{ productInfo.category }} > {{ productInfo.title }}</h3>
    <div class="product">
      <img :src="productInfo.image" />
      <div>
        <p>{{ productInfo.title }}</p>
        <p>{{ productInfo.description }}</p>
        <p>
          {{ productInfo.rating.rate }} / {{ productInfo.rating.count }} 참여
        </p>
        <p>${{ productInfo.price }}</p>
        <button>장바구니에 담기</button>
        <button>장바구니로 이동</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
