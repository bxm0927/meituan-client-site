<template>
  <section class="container">
    <div>
      <Logo />
      <h1 class="title">{{ error.statusCode }}</h1>
      <h2 class="info">{{ error.message }}</h2>

      <nuxt-link v-if="error.statusCode === 404" class="button" to="/">
        Homepage
      </nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin: 0 auto;
  text-align: center;
}

.title {
  display: block;
  color: #35495e;
  font-weight: 300;
  font-size: 100px;
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  letter-spacing: 1px;
}

.info {
  margin: 0;
  color: #9aabb1;
  font-weight: 300;
}

.button {
  margin-top: 50px;
}
</style>
