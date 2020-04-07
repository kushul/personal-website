<template>
  <div
    class="container bg-background-invert text-copy-invert flex justify-center items-center mx-auto text-sm py-6 my-2 tracking-wide"
  >
    <div class="text-copy-invert mx-4 font-bold">© 2020 | KUSHUL SOOMAREE</div>

    <ul class="menu flex justify-end">
      <li class="footer-item">
        <nuxt-link :to="{name: 'settings'}">Blogs</nuxt-link>
      </li>
      <li class="footer-item">
        <nuxt-link :to="{name: 'settings'}">Events</nuxt-link>
      </li>
      <li class="footer-item">
        <nuxt-link :to="{name: 'settings'}">Projects</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    url: {
      get() {
        return this.$store.state.ghostUrl
      }
    }
  }
}
</script>

<style scoped lang="scss">
.footer-wrapper {
  /* @apply text-center; */
  display: grid;
  /* grid-auto-columns: auto; */
  /* grid-template-rows: 1fr 1fr; */
}

@sm {
  .footer-wrapper {
    /* grid-template-columns: 100px 1fr; */
    /* grid-template-rows: 1fr; */
    /* grid-gap: 100px; */
    padding: 20px 0;
  }
}

.logo {
}

.footer-item {
  a {
    @apply mx-4 font-bold border-b-2 border-gray-800;
  }
}
</style>
