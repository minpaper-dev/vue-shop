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
  <div class="wrap flex align-center direction-column">
    <h2>404</h2>
    <p>페이지를 찾을 수 없습니다.</p>
    <button @click="goToMain">메인으로</button>
  </div>
</template>

<style scoped></style>
