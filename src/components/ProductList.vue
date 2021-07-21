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
  mounted() {
    this.$store.dispatch("GET_PRODUCTS");
  },
  computed: {
    products() {
      return this.$store.state.products;
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="css" scoped></style>
