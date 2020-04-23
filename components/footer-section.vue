<template>
  <div
    class="container bg-background-invert text-copy-invert flex justify-center items-center mx-auto text-sm py-6 my-2 tracking-wide"
  >
    <div class="text-copy-invert mx-4 font-bold">© 2020 | KUSHUL SOOMAREE</div>

    <ul class="menu flex justify-end">
      <li class="kush-footer-item">
        <nuxt-link :to="{name: 'blog'}">Blogs</nuxt-link>
      </li>
      <li class="kush-footer-item">
        <nuxt-link :to="{name: 'events'}">Events</nuxt-link>
      </li>
      <li class="kush-footer-item">
        <nuxt-link :to="{name: 'projects'}">Projects</nuxt-link>
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
  margin: 0;
  padding: 0;
  @apply mx-4 font-bold;

  a {
    transition: all 0.2s ease-in-out;
    @apply border-b-2 border-gray-800;

    &:hover {
      @apply text-green-500 border-green-500;
    }
  }
}

.nuxt-link-exact-active {
  border-bottom: 2px solid #48bb78 !important;
  color: #48bb78 !important;
}

/* purgecss end ignore */
</style>
