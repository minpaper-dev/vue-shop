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

    const { data, isLoading, error } = useQuery("products", async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      store.commit("setProducts", response.data);
      return response.data;
    });

    onMounted(() => {
      theme.value = localStorage.getItem("isDark") || "true";
      store.commit("setIsDark", theme.value === "true");
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
