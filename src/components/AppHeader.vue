<template>
  <div>
    <nav class="navbar-expand navbar navbar-dark bg-dark">
      <div class="container">
        <div class="nav navbar-nav">
          <router-link to="/" class="nav-item nav-link active">
            Home
          </router-link>
          <a href="#" class="nav-tem nav-link">Product</a>
        </div>
        <div>
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              0 Cart
            </button>

            <mini-Cart></mini-Cart>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import MiniCart from "@/components/MiniCart";
export default {
  name: "AppHeader",
  components: {
    MiniCart
  },
  data() {
    return {};
  }
};
</script>

<style lang="css" scoped></style>
