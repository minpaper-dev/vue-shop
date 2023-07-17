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
  <section class="main pt-16">
    <section
      class="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto"
    >
      <div class="text-sm breadcrumbs">홈 > 장바구니</div>
      <div class="mt-6 md:mt-14 px-2 lg:px-0">
        <div class="lg:flex justify-between mb-20">
          <div>
            <div
              v-for="cartItem in cartProduct"
              :key="cartItem.productInfo.id"
              class="lg:flex lg:items-center mt-4 px-2 lg:px-0"
            >
              <a>
                <figure
                  class="w-56 min-w-full flex-shrink-0 rounded-2xl overflow-hidden px-4 py-4 bg-white"
                >
                  <img
                    class="object-contain w-full h-48"
                    :src="cartItem.productInfo.image"
                    alt="상품 이미지"
                  />
                </figure>
              </a>
              <div class="card-body px-1 lg:px-12">
                <h2 class="card-title">
                  <a class="link link-hover">
                    {{ cartItem.productInfo.title }}
                  </a>
                </h2>
                <p class="mt-2 mb-4 text-3xl">
                  ${{ cartItem.productInfo.price }}
                </p>
                <div class="card-actions">
                  <div class="btn-group">
                    <button class="btn btn-primary">-</button>
                    <button class="btn btn-ghost no-animation">
                      {{ cartItem.count }}
                    </button>
                    <button class="btn btn-primary">+</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="self-start shrink-0 flex items-center mt-10 mb-20">
            <span class="text-xl md:text-2xl">총 --원</span>
            <label
              for="confirm-modal"
              class="modal-button btn btn-primary ml-5"
            >
              구매하기
            </label>
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
  background-color: white;
}
</style>
