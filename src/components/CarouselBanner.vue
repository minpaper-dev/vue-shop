<script lang="ts" setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination } from "vue3-carousel";
import { RouterLink } from "vue-router";
import digitalImage from "../assets/images/img_shop_digital.jpeg";
import fasionImage from "../assets/images/img_shop_fashion.jpeg";
import groceryImage from "../assets/images/img_shop_grocery.jpeg";

interface BannerItem {
  title: string;
  description: string;
  image: string;
  category: string;
}

const bannerList: BannerItem[] = [
  {
    title: "물빠진 청바지!",
    description: "이제 막 도착한 패션 청바지를 구경해보세요.",
    image: fasionImage,
    category: "fashion",
  },
  {
    title: "신속한 업무처리!",
    description: "다양한 디지털 상품을 둘러보세요.",
    image: digitalImage,
    category: "electronics",
  },
  {
    title: "신선한 식품!",
    description: "농장 직배송으로 더욱 신선한 식료품을 만나보세요.",
    image: groceryImage,
    category: "jewelery",
  },
];
</script>

<template>
  <div class="wrap-carousel">
    <carousel :autoplay="2000" :wrap-around="true">
      <slide v-for="(bannerItem, index) in bannerList" :key="index">
        <div
          class="banner-item"
          :style="{
            backgroundImage: `url(${bannerItem.image})`,
            backgroundPosition: 'center',
          }"
        >
          <div class="banner-text text-white">
            <h2 class="text-4xl font-bold text-white">
              {{ bannerItem.title }}
            </h2>
            <p class="text-base my-2">{{ bannerItem.description }}</p>
            <router-link
              :to="{ name: bannerItem.category }"
              class="text-sm font-bold px-4 py-2 mt-3 rounded-md bg-gray-100 hover:bg-black text-gray-600"
              >바로가기</router-link
            >
          </div>
        </div>
      </slide>
      <template #addons>
        <pagination />
      </template>
    </carousel>
  </div>
</template>

<style scoped>
.wrap-carousel {
  position: relative;
}

.banner-item {
  height: 700px;
  width: 100%;
  display: flex;
}

.banner-text {
  max-width: 1360px;
  width: 100%;
  margin: 0 auto;
  padding: 0px 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
</style>
