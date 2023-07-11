<script>
import { useRouter } from "vue-router";

export default {
  computed: {
    fontColor() {
      return "var(--primary-text)";
    },
  },
  setup() {
    const router = useRouter();
    const goToMain = () => {
      router.push({
        name: "Main",
      });
    };

    return {
      goToMain,
    };
  },
};
</script>

<template>
  <div
    :style="{ color: fontColor }"
    class="wrap flex align-center direction-column"
  >
    <h2>404</h2>
    <p>페이지를 찾을 수 없습니다.</p>
    <button @click="goToMain">메인으로</button>
  </div>
</template>

<style scoped>
@import url(../assets/styles/main.css);
</style>
