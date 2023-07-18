<script lang="ts">
import { computed, ref, Ref } from "vue";
import { RouterLink } from "vue-router";
import { useStore } from "vuex";
import { Product } from "../common/types";

interface Category {
  id: number;
  name: string;
  link: string;
}

export default {
  name: "ShopHeader",
  setup() {
    const store = useStore();
    const products = computed(() => store.state.allProducts);
    const isDark = ref(localStorage.getItem("isDark") === "true");
    const inputData = ref("");
    const searchList: Ref<Product[]> = ref([]);
    let isFocus = ref(false);

    const changeTheme = () => {
      isDark.value = !isDark.value;
      store.commit("setIsDark", isDark.value);
      localStorage.setItem("isDark", JSON.stringify(isDark.value));
    };

    const linkTo = (link: string) => {
      window.location.href = `/${link}`;
    };

    const changeText = (event: any) => {
      inputData.value = event.target.value;
      searchList.value = products.value.filter((v: Product) =>
        v.title.toUpperCase().includes(event.target.value.toUpperCase())
      );
    };

    const setIsBlur = () => {
      setTimeout(() => {
        isFocus.value = false;
      }, 200);
    };

    const categoryList: Category[] = [
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
      inputData,
      searchList,
      changeText,
      isFocus,
      setIsBlur,
    };
  },
};
</script>

<template>
  <div
    class="w-full fixed top-0 z-50 py-3 bg-white dark:bg-black text-gray-300 dark:text-white"
  >
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      <div class="flex items-center">
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
          <i v-if="store.state.isDark" class="bx bx-sun bx-sm"></i>
          <i v-else class="bx bx-moon bx-sm"></i>
        </button>
        <div class="relative mx-3">
          <input
            class="p-2 rounded-sm bg-gray-700 dark:bg-gray-500 text-black dark:text-white focus:outline-none"
            type="text"
            placeholder="검색어를 입력해주세요"
            :value="inputData"
            @input="changeText"
            @focus="() => (isFocus = true)"
            @blur="setIsBlur"
          />
          <ul
            v-if="searchList.length && inputData.length && isFocus"
            class="absolute w-64 top-14 left-0 max-h-96 bg-white dark:bg-gray-500 text-black dark:text-white overflow-y-auto"
          >
            <li
              v-for="item in searchList"
              :key="item.id"
              class="p-3 hover:bg-gray-600"
            >
              <a :href="`/product/${item.id}`" @click="(e) => console.log(e)">
                <span> {{ item.title }} </span>
              </a>
            </li>
          </ul>
        </div>
        <router-link
          class="btn btn-ghost w-10 sm:w-12 ml-1"
          :to="{ name: 'cart' }"
        >
          <span class="relative">
            <i class="bx bx-shopping-bag bx-sm"></i>
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
