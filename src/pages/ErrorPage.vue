<script lang="ts" setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goToMain = () => {
  router.push({
    name: "Main",
  });
};
</script>

<template>
  <div
    class="main pt-16 flex items-center flex-col text-black dark:text-gray-600"
  >
    <h2 class="mt-20 sm:mt-28 text-center text-4xl sm:text-9xl font-bold">
      404
    </h2>
    <p class="mt-4 mb-5 sm:mb-10 text-center text-lg sm:text-3xl">
      페이지를 찾을 수 없습니다.
    </p>
    <button
      class="bg-purple-100 hover:bg-purple-200 text-white flex items-center justify-center p-4 rounded-lg text-sm font-bold mr-3"
      @click="goToMain"
    >
      메인으로
    </button>
  </div>
</template>

<style scoped>
.main {
  min-height: calc(100vh - 4rem - 224px);
}
</style>
