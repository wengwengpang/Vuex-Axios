<template>
  <ul
    class="dropdown-menu p-2"
    style="min-width:320px; right:0;left:auto"
    aria-labelledby="dropdownMenuButton1"
    @click.stop
  >
    <div v-for="item in cart" :key="item.product.id">
      <div class="px-2 d-flex justify-content-between">
        <div>
          <strong>{{ item.product.title }}</strong>
          <br />
          {{ item.quantity }} x ${{ item.product.price }}
        </div>
        <div>
          <span class="badge bg-secondary">
            <a
              href="#"
              class="badge badge-secondary"
              @click.stop.prevent="removeProductFromCart(item.product)"
              >remove</a
            >
          </span>
        </div>
      </div>
    </div>
    <hr />
    <div class="d-flex justify-content-between">
      <span>Total:${{ productCartTotal }}</span>
      <a href="#" @click.stop.prevent="clearCartItem()">Clear Cart</a>
    </div>
  </ul>
</template>

<script>
export default {
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    productCartTotal() {
      return this.$store.getters.productCartTotal;
    }
  },
  mounted() {
    // this.$store.dispatch("getCartItems");
  },
  methods: {
    removeProductFromCart(product) {
      this.$store.dispatch("removeProductFromCart", product);
    },
    clearCartItem() {
      this.$store.dispatch("clearCartItem");
    }
  }
};
</script>

<style lang="css" scoped></style>
