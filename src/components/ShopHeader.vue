<script>
import { computed, ref } from "vue";
import { RouterLink } from "vue-router";
import { useStore } from "vuex";
import CustomButton from "./CustomButton.vue";

export default {
  name: "ShopHeader",
  components: { CustomButton },
  setup() {
    const store = useStore();
    let isDark = ref(localStorage.getItem("isDark") === "true" ? true : false);

    const changeTheme = () => {
      isDark.value = !isDark.value;
      store.commit("setIsDark", isDark.value);
      localStorage.setItem("isDark", JSON.stringify(isDark.value));
    };

    const linkTo = (link) => {
      window.location.href = `/${link}`;
    };

    const categoryList = [
      {
        id: 1,
        name: "패션",
        link: "fashion",
      },
      {
        id: 2,
        name: "액세서리",
        link: "jewelery",
      },
      {
        id: 3,
        name: "디지털",
        link: "electronics",
      },
    ];

    return {
      categoryList,
      linkTo,
      store,
      isDark,
      changeTheme,
    };
  },
};
</script>

<template>
  <div
    class="w-full fixed top-0 z-50 py-3 bg-black dark:bg-white text-white dark:text-gray-300"
  >
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      <div class="flex items-center text-header dark:text-header-dark">
        <h1>
          <router-link to="/">Vue Shop</router-link>
        </h1>
        <div class="ml-8">
          <router-link :to="{ name: 'fashion' }" class="px-4">패션</router-link>
          <router-link :to="{ name: 'jewelery' }" class="px-4"
            >액세서리</router-link
          >
          <router-link :to="{ name: 'electronics' }" class="px-4"
            >디지털</router-link
          >
        </div>
      </div>
      <div class="flex items-center px-2">
        <button @click="changeTheme" class="flex items-center justify-center">
          <i
            v-if="store.state.isDark"
            class="bx bx-moon bx-sm text-headerBg"
          ></i>
          <i v-else class="bx bx-sun bx-sm text-headerBg"></i>
        </button>

        <input
          class="mx-3 p-2 rounded-sm bg-header bg-gray-500 dark:bg-gray-700"
          type="text"
          placeholder="검색어를 입력해주세요"
        />
        <router-link
          class="btn btn-ghost w-10 sm:w-12 ml-1"
          :to="{ name: 'cart' }"
        >
          <span class="relative">
            <i class="bx bx-shopping-bag bx-sm text-headerBg"></i>
            <span
              class="inline-flex items-center justify-center absolute top-0 right-0 px-2 py-1 rounded-full bg-red text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2"
            >
              {{ store.state.count }}
            </span>
          </span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
