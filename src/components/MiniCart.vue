<template>
  <ul
    class="dropdown-menu p-2"
    style="min-width:320px; right:0;left:auto"
    aria-labelledby="dropdownMenuButton1"
    @click.stop
  >
    <div>
      <div class="px-2 d-flex justify-content-between">
        <div>
          <strong>Product title</strong>
          <br />
          1 x $23
        </div>
        <div>
          <span class="badge bg-secondary">
            <a href="#" class="badge badge-secondary" @click.stop>remove</a>
          </span>
        </div>
      </div>
    </div>
    <hr />
    <div class="d-flex justify-content-between">
      <span>Total:$23</span>
      <a href="#" @click.stop>Clear Cart</a>
    </div>
  </ul>
</template>

<script>
export default {};
</script>

<style lang="css" scoped></style>
