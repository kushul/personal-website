<template>
  <div class="flex min-h-screen flex-col">
    <menu-section></menu-section>
    <input type="checkbox" class="theme-switch" v-model="darkmode" />
    <nuxt class="flex-grow" />
    <footer-section />
  </div>
</template>

<script>
import MenuSection from '~/components/menu-section.vue'

import FooterSection from '~/components/footer-section.vue'

export default {
  computed: {
    darkmode: {
      get: function() {
        return this.$store.getters['getDarkMode']
      },
      set: function(value) {
        this.$store.dispatch('setDarkMode', value)
      }
    }
  },
  mounted() {
    this.$store.dispatch('checkDarkMode')
  },
  data() {
    return {}
  },
  components: {
    MenuSection,
    FooterSection
  },
  created() {
    this.$store.dispatch('initGhost')
  }
}
</script>

<style lang="scss">
:root {
  /* color-scheme: light dark; */
}

.container {
  @apply px-4;
}

@screen sm {
  .container {
    @apply px-0;
  }
}
</style>
