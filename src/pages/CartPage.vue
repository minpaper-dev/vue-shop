<script lang="ts">
import { onMounted, ref, computed, Ref } from "vue";
import { RouterLink } from "vue-router";
import { useStore } from "vuex";

import PaymentModal from "../components/PaymentModal.vue";
import { Product } from "../common/types";

interface CartItem {
  count: number;
}

export default {
  components: { PaymentModal },
  setup() {
    const store = useStore();
    const allProduct = computed(() => store.state.allProducts);
    const localCart: Ref<{ [id: string]: CartItem }> = ref({});
    const totalPrice = ref(0);
    const isModalOpen = ref(false);

    const cartProduct = ref<Product[]>([]);

    const plusCount = (id: string) => {
      store.commit("increment");
      localCart.value[id].count++;
      localStorage.setItem("CART_DATA", JSON.stringify(localCart.value));
      calcTotal();
    };

    const minusCount = (id: string) => {
      store.commit("decrement");
      localCart.value[id].count--;

      console.log(localCart.value);
      console.log(cartProduct.value);
      if (localCart.value[id].count) {
        localStorage.setItem("CART_DATA", JSON.stringify(localCart.value));
      } else {
        delete localCart.value[id];
        cartProduct.value = cartProduct.value.filter(
          (v) => String(v.id) !== id
        );
        localStorage.setItem("CART_DATA", JSON.stringify(localCart.value));
      }

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
      store.commit("setCartEmpty");
    };

    onMounted(() => {
      localCart.value = JSON.parse(localStorage.getItem("CART_DATA") || "{}");

      cartProduct.value = allProduct.value.filter((v: Product) =>
        Object.keys(localCart.value).includes(v.id.toString())
      );

      calcTotal();
    });

    const calcTotal = () => {
      totalPrice.value = 0;
      cartProduct.value.forEach((v: Product) => {
        totalPrice.value += Math.round(v.price) * localCart.value[v.id].count;
      });
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
  <section class="main">
    <section
      class="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto"
    >
      <div class="text-sm p-1 breadcrumbs text-gray-200 dark:text-gray-600">
        홈 > 장바구니
      </div>

      <div v-if="cartProduct.length > 0" class="mt-6 md:mt-14 px-2 lg:px-0">
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
              <div
                class="card-body px-1 lg:px-12 text-black dark:text-gray-600"
              >
                <h2 class="card-title">
                  <a class="link link-hover font-bold text-lg">
                    {{ cartItem.title }}
                  </a>
                </h2>
                <p class="mt-2 mb-4 text-3xl">
                  ${{
                    Math.round(cartItem.price) * localCart[cartItem.id].count
                  }}
                </p>
                <div class="card-actions">
                  <div class="flex items-center">
                    <button
                      @click="minusCount(String(cartItem.id))"
                      class="flex items-center justify-center px-4 py-2 rounded-lg bg-purple-100 hover:bg-purple-200 font-bold text-white text-base rounded-e-none"
                    >
                      -
                    </button>
                    <button class="px-4">
                      {{ localCart[cartItem.id].count }}
                    </button>
                    <button
                      @click="plusCount(String(cartItem.id))"
                      class="flex items-center justify-center px-4 py-2 rounded-lg bg-purple-100 hover:bg-purple-200 font-bold text-white text-base rounded-s-none"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="self-start shrink-0 flex items-center mt-10 mb-20 text-gray-200 dark:text-gray-600"
          >
            <span class="text-xl md:text-2xl">총 ${{ totalPrice }}</span>
            <label
              for="confirm-modal"
              class="p-4 bg-purple-100 hover:bg-purple-200 text-white cursor-pointer rounded-lg ml-5"
              @click="setModalOpen"
            >
              구매하기
            </label>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="mt-20">
          <p class="text-black dark:text-gray-600 text-2xl">
            장바구니에 물품이 없습니다.
          </p>
          <router-link
            to="/"
            class="bg-purple-100 hover:bg-purple-200 text-white flex items-center justify-center p-4 rounded-lg text-sm font-bold mt-10 max-w-fit"
            >담으러가기</router-link
          >
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

figure {
  background-color: white;
}
</style>
