<script>
import { onMounted, ref, computed } from "vue";
import { useStore } from "vuex";

import PaymentModal from "./PaymentModal.vue";

export default {
  components: { PaymentModal },
  setup() {
    const store = useStore();
    const allProduct = computed(() => store.state.allProducts);
    let localCart = ref({});
    let totalPrice = ref(0);
    let isModalOpen = ref(false);

    let cartProduct = ref(null);

    const plusCount = (id) => {
      store.commit("increment");
      localCart.value[id].count++;
      localStorage.setItem("CART_DATA", JSON.stringify(localCart.value));
      calcTotal();
    };

    const minusCount = (id) => {
      store.commit("decrement");
      localCart.value[id].count--;
      localStorage.setItem("CART_DATA", JSON.stringify(localCart.value));
      calcTotal();
    };

    const setModalOpen = () => {
      isModalOpen.value = true;
    };

    const setModalClose = () => {
      isModalOpen.value = false;
    };

    const deleteCart = () => {
      localStorage.removeItem("CART_DATA");
      isModalOpen.value = false;
      cartProduct.value = [];
      calcTotal();
    };

    onMounted(() => {
      localCart.value = JSON.parse(localStorage.getItem("CART_DATA")) || [];

      cartProduct.value = allProduct.value.filter((v) =>
        Object.keys(localCart.value).includes(v.id + "")
      );

      calcTotal();
    });

    const calcTotal = () => {
      totalPrice.value = 0;
      cartProduct.value.map(
        (v) =>
          (totalPrice.value += v.price.toFixed() * localCart.value[v.id].count)
      );
    };

    return {
      cartProduct,
      localCart,
      totalPrice,
      plusCount,
      minusCount,
      isModalOpen,
      setModalOpen,
      setModalClose,
      deleteCart,
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
              :key="cartItem.id"
              class="lg:flex lg:items-center mt-4 px-2 lg:px-0"
            >
              <a>
                <figure
                  class="w-56 min-w-full flex-shrink-0 rounded-2xl overflow-hidden px-4 py-4 bg-white"
                >
                  <img
                    class="object-contain w-full h-48"
                    :src="cartItem.image"
                    alt="상품 이미지"
                  />
                </figure>
              </a>
              <div class="card-body px-1 lg:px-12">
                <h2 class="card-title">
                  <a class="link link-hover">
                    {{ cartItem.title }}
                  </a>
                </h2>
                <p class="mt-2 mb-4 text-3xl">
                  ${{ cartItem.price.toFixed() * localCart[cartItem.id].count }}
                </p>
                <div class="card-actions">
                  <div class="btn-group">
                    <button
                      @click="minusCount(cartItem.id)"
                      class="btn btn-primary"
                    >
                      -
                    </button>
                    <button class="btn btn-ghost no-animation">
                      {{ localCart[cartItem.id].count }}
                    </button>
                    <button
                      @click="plusCount(cartItem.id)"
                      class="btn btn-primary"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="self-start shrink-0 flex items-center mt-10 mb-20">
            <span class="text-xl md:text-2xl">총 ${{ totalPrice }}</span>
            <label
              for="confirm-modal"
              class="modal-button btn btn-primary ml-5"
              @click="setModalOpen"
            >
              구매하기
            </label>
          </div>
        </div>
      </div>
    </section>
  </section>
  <PaymentModal
    v-if="isModalOpen"
    @close-modal="setModalClose"
    @delete-cart="deleteCart"
  />
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
