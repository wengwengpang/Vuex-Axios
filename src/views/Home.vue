<template>
  <div class="home">
    <product-list></product-list>
  </div>
</template>

<script>
import ProductList from "../components/ProductList";
export default {
  name: "Home",
  components: { ProductList }
};
</script>
