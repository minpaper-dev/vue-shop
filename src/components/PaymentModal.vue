<script setup></script>

<template>
  <div class="modal">
    <div class="overlay">
      <div class="container">
        <h3>정말로 구매하시겠습니까?</h3>
        <p>장바구니의 모든 상품들이 삭제됩니다.</p>
        <div class="flex justify-end">
          <button @click="$emit('delete-cart')">네</button>
          <button @click="$emit('close-modal')">아니요</button>
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
  background-color: white;
  z-index: 10;
  opacity: 1;
  border-radius: 1rem;
}
</style>
