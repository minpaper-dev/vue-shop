<script>
import { onMounted, ref, computed } from "vue";
import { useStore } from "vuex";
import { useQuery } from "vue-query";

import axios from "axios";

import ShopHeader from "./components/ShopHeader.vue";
import ShopFooter from "./components/ShopFooter.vue";

export default {
  name: "App",
  components: {
    ShopHeader,
    ShopFooter,
  },
  setup() {
    const store = useStore();

    let theme = ref(null);
    let cartCount = ref(0);

    const { data, isLoading, error } = useQuery("products", async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      store.commit("setProducts", response.data);
      return response.data;
    });

    onMounted(() => {
      // theme 설정
      theme.value = localStorage.getItem("isDark") || "true";
      store.commit("setIsDark", theme.value === "true");

      // 장바구니 설정
      let cart = JSON.parse(localStorage.getItem("CART_DATA")) || {};
      Object.values(cart).map((v) => (cartCount.value += v.count));
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
    <div v-if="!isLoading" class="bg-[#2b303b] dark:bg-white pb-62">
      <router-view />
    </div>
    <shop-footer />
  </div>
</template>

<style scoped></style>
