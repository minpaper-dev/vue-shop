<script lang="ts" setup></script>

<template>
  <div class="modal">
    <div class="overlay">
      <div
        class="container bg-white dark:bg-gray-100 text-black dark:text-gray-600"
      >
        <h3 class="font-bold text-lg mb-3">정말로 구매하시겠습니까?</h3>
        <p class="text-base mb-10">장바구니의 모든 상품들이 삭제됩니다.</p>
        <div class="flex justify-end">
          <button
            class="bg-purple-100 hover:bg-purple-200 text-white flex items-center justify-center p-4 rounded-lg text-sm font-bold mr-3"
            @click="$emit('delete-cart')"
          >
            네
          </button>
          <button
            class="text-black dark:text-gray-600 hover:text-white hover:dark:text-gray-100 border border-solid border-black dark:border-gray-600 hover:border-gray-100 hover:bg-black hover:dark:bg-gray-600 flex items-center justify-center p-4 rounded-lg text-sm font-bold cursor-pointer"
            @click="$emit('close-modal')"
          >
            아니요
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.modal,
.overlay {
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999;
}
.overlay {
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
.container {
  position: relative;
  max-width: 32rem;
  margin: auto;
  padding: 20px;
  z-index: 10;
  opacity: 1;
  border-radius: 1rem;
}
</style>
