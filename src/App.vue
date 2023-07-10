<script lang="js">
import axios from "axios";

import ShopHeader from "./components/ShopHeader.vue";
import ShopFooter from './components/ShopFooter.vue'

export default {
  name : 'App',
  components : {
    ShopHeader,  ShopFooter,
  },
}
</script>

<template>
  <shop-header />
  <hr />
  <router-view></router-view>
  <shop-footer />
</template>

<style scoped></style>
