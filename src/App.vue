<script lang="ts">
import { onMounted, ref } from "vue";
import { useStore } from "vuex";
import { useQuery } from "vue-query";
import axios from "axios";
import { AxiosResponse } from "axios";

import ShopHeader from "./components/ShopHeader.vue";
import ShopFooter from "./components/ShopFooter.vue";
import { Product } from "./common/types";

export default {
  name: "App",
  components: {
    ShopHeader,
    ShopFooter,
  },
  setup() {
    const store = useStore();

    const theme = ref<string | null>(null);
    const cartCount = ref(0);

    const { isLoading } = useQuery<Product[], Error>("products", async () => {
      const response: AxiosResponse<Product[]> = await axios.get(
        "https://fakestoreapi.com/products"
      );
      store.commit("setProducts", response.data);
      return response.data;
    });

    onMounted(() => {
      // theme 설정
      theme.value = localStorage.getItem("isDark") || "true";
      store.commit("setIsDark", theme.value === "true");

      // 장바구니 설정
      const cart = JSON.parse(localStorage.getItem("CART_DATA") || "");
      Object.values(cart).map((v: any) => (cartCount.value += v.count));
      store.commit("increment", cartCount.value);
    });

    return {
      theme,
      store,
      isLoading,
    };
  },
};
</script>

<template>
  <div :class="{ dark: store.state.isDark }" class="relative">
    <shop-header />
    <hr />
    <div v-if="!isLoading" class="bg-white dark:bg-[#2b303b] py-16">
      <router-view />
    </div>
    <shop-footer />
  </div>
</template>

<style scoped></style>
