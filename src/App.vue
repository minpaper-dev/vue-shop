<template>
  <Header />
  <CarouselBanner />
  <div v-for="item in productList" :key="item.category">
    <ProductList v-bind:product="item" />
  </div>

  <Footer />
</template>

<script lang="js">
import axios from "axios";

import Header from "./components/Header.vue";
import CarouselBanner from "./components/CarouselBanner.vue";
import Footer from './components/Footer.vue'
import ProductList from './components/ProductList.vue'

export default {
  name : 'App',
  components : {
    Header, CarouselBanner, Footer, ProductList
  },
  data(){
    return {
      categoryList : ["electronics", "jewelery", "men's clothing"],
      productList : []
    }
  },
  methods : {
    get(category) {
      axios.get(`https://fakestoreapi.com/products/category/${category}?limit=4`)
      .then((result)=>{
        console.log(result.data)
        this.productList.push({category, data : result.data})
      })
    },

  },
  created()  {
    for (const category in this.categoryList) {
      this.get(this.categoryList[category])
    }
  }
}
</script>

<style scoped></style>
