<script>
import { RouterLink } from "vue-router";

export default {
  name: "ShopHeader",
  data() {
    return {
      data: [],
    };
  },
};
</script>

<template>
  <div class="container">
    <div class="header">
      <div class="header-inner">
        <div class="header-text">
          <h1 class="header-title">
            <router-link to="/">Vue Shop</router-link>
          </h1>
          <div class="header-text-wrap">
            <router-link :to="{ name: 'jewelery' }" class="header-text-item"
              >jewelery</router-link
            >
            <router-link :to="{ name: 'electronics' }" class="header-text-item"
              >electronics</router-link
            >
            <router-link :to="{ name: 'men' }" class="header-text-item"
              >men's clothing</router-link
            >
            <router-link :to="{ name: 'women' }" class="header-text-item"
              >women's clothing</router-link
            >
          </div>
        </div>
        <div class="header-icon">
          <label>
            <input type="checkbox" />
          </label>
          <input
            class="header-input"
            type="text"
            placeholder="검색어를 입력해주세요"
          />
          <router-link :to="{ name: 'cart' }"> 장바구니 </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  position: fixed;
  top: 0px;
  z-index: 9999;
}
.header {
  background-color: rgb(25, 29, 36);

  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.header-inner {
  max-width: 1360px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header-text {
  display: flex;
  align-items: center;
}

.header-title {
  display: inline;
  cursor: pointer;
  margin: 0 8px;
  font-size: 16px;
  color: #fff;
}

.header-text-wrap {
  margin-left: 8px;
}

.header-text-item {
  padding: 0 12px;
  font-size: 14px;
  cursor: pointer;
}

.header-input {
  height: 46px;
  padding: 0px 16px;
  border: 1px solid black;
}

a {
  color: #fff;
}
</style>
