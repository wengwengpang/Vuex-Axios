<template>
  <div class="row mt-5" v-if="product">
    <div class="col-4">
      <img :src="product.image" class="w-100" alt="" />
    </div>
    <div class="col-8">
      <h1>{{ product.title }}</h1>
      <h3>${{ product.price }}</h3>
      <input type="text" class="text-center col-1 mr-2 p-1" />
      <button class="btn btn-primary">Add to the Cart</button>
      <p class="mt-4">
        {{ product.description }}
      </p>
    </div>
  </div>
</template>

<script>
import store from "@/store";
export default {
  props: ["id"],
  mounted() {
    store.dispatch("GET_PRODUCT", this.id);
  },
  computed: {
    product() {
      return store.state.product;
    }
  }
};
</script>

<style lang="css" scoped></style>
