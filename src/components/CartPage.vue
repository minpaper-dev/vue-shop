<script>
import { onMounted, ref } from "vue";
export default {
  setup() {
    let cartProduct = ref(null);

    onMounted(() => {
      cartProduct.value = Object.values(
        JSON.parse(localStorage.getItem("CART_DATA")) || {}
      );
    });

    return {
      cartProduct,
    };
  },
};
</script>

<template>
  <div class="wrap">
    <h3>홈 > 장바구니</h3>
    <div class="flex justify-between">
      <div>
        <div
          class="item"
          v-for="cartItem in cartProduct"
          :key="cartItem.productInfo.id"
        >
          <a>
            <figure class="figure">
              <img class="img" :src="cartItem.productInfo.image" />
            </figure>
          </a>

          <div class="div">
            <p>
              {{ cartItem.productInfo.title }}
            </p>
            <p>${{ cartItem.productInfo.price }}</p>
            <div>
              <button>-</button>
              <span>{{ cartItem.count }}</span>
              <button>+</button>
            </div>
          </div>
          <br />
        </div>
      </div>
      <div>
        <span> 총 : $00 </span>
        <button>구매하기</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrap {
  position: relative;
  top: 62px;
  max-width: 1360px;
  width: 100%;
  margin: 0 auto;
}

.flex {
  display: flex;
}

.justify-between {
  justify-content: space-between;
}

.item {
  display: flex;
  margin-top: 10px;
}

.figure {
  width: 224px;
  height: 224px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
}

.img {
  width: 192px;
  height: 192px;
}

.div {
  padding: 32px 48px;
}
</style>
