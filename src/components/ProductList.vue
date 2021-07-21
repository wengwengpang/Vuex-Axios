<template>
  <div class="d-flex align-items-stretch flex-wrap">
    <product-card
      v-for="product in products"
      :key="product.id"
      :product="product"
    ></product-card>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard";
export default {
  components: {
    ProductCard
  },
  computed: {
    products() {
      return this.$store.state.products;
    }
  },
  mounted() {
    this.$store.dispatch("getProducts");
  }
};
</script>

<style lang="css" scoped></style>
