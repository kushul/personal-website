<template>
  <div
    class="container bg-background-invert text-copy-invert flex justify-center items-center mx-auto text-sm py-6 my-2 tracking-wide"
  >
    <div class="text-copy-invert mx-4 font-bold">© 2020 | KUSHUL SOOMAREE</div>

    <ul class="menu flex justify-end">
      <li class="kush-footer-item">
        <nuxt-link :to="{name: 'settings'}">Blogs</nuxt-link>
      </li>
      <li class="kush-footer-item">
        <nuxt-link :to="{name: 'settings'}">Events</nuxt-link>
      </li>
      <li class="kush-footer-item">
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
  display: grid;
}

.logo {
}

/* purgecss start ignore */

.kush-footer-item {
  @apply mx-4 font-bold;

  a {
    @apply border-b-2 border-gray-800 text-copy-invert;
  }
}

/* purgecss end ignore */
</style>
