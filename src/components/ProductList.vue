<template>
  <div class="d-flex align-items-stretch flex-wrap">
    <product-card
      v-for="product in products"
      :product="product"
      :key="product.id"
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
    this.$store.dispatch("getProducts");
  },
  computed: {
    // products: function() {
    //
    //   // console.log("ok");
    //   // console.log(this.$store.state.products);
    //   console.log(this.$store.state);
    //   console.log(this.$store.state.default.products);
    //   console.log(`++${this.$store.state.default.products}++`);
    //   return this.$store.state.default.products;
    // }
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
