<template>
  <div
    class="flex min-h-screen flex-col text-copy-primary content-wrapper font-display"
    :class="theme"
  >
    <menu-section :theme="theme" @update-theme="updateTheme" @local-theme="storeTheme"></menu-section>
    <div class="post-template">
      <main id="site-main" class="site-main outer">
        <div class="inner">
          <nuxt />
        </div>
      </main>
    </div>
    <footer-section />
  </div>
</template>

<script>
import MenuSection from '../components/menu-section.vue'
import FooterSection from '../components/footer-section.vue'

export default {
  components: {
    MenuSection,
    FooterSection
  },
  data() {
    return {
      theme: 'theme-light'
    }
  },
  methods: {
    updateTheme(val) {
      this.theme = val
    },
    storeTheme(val) {
      this.theme = val
    }
  }
}
</script>

<style>
</style>
 