<template>
  <div class="col-3 mt-3">
    <div class="card h-100" style="width: 18rem;">
      <img :src="product.image" class="card-img-top w-100" alt="..." />
      <div class="card-body">
        <h5 class="card-title">
          <router-link :to="{ name: 'product', params: { id: 23 } }">
            Product title
          </router-link>
        </h5>
        <strong>$23</strong>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"]
};
</script>

<style lang="css" scoped></style>
