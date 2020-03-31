
<template>
  <div
    class="main-menu container mx-auto font-bold md:flex justify-center md:justify-between items-center py-3 md:py-10"
  >
    <nuxt-link class="text-center block md:text-left text-3xl" :to="{name: 'index'}">
      <img src="../assets/images/kush.svg" />
    </nuxt-link>

    <ul class="flex justify-center py-10 md:py-0 md:mr-3">
      <li>
        <nuxt-link :to="{name: 'index'}">Home</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="{name: 'blog'}">Blog</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="{name: 'index'}">Pages</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="{name: 'tag'}">Tags</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="{name: 'author'}">Authors</nuxt-link>
      </li>
      <li>
        <button class="text-gray-800 ma-0" @click="toggleTheme()">
          <img v-if="theme === 'theme-light'" src="~/assets/images/light_mode.svg" />
          <img v-else-if="theme === 'theme-sepia'" src="~/assets/images/coffee_mode.svg" />
          <img v-else src="~/assets/images/dark_mode.svg" />
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      themes: ['theme-dark', 'theme-light', 'theme-sepia'],
      currentThemeIndex: 1
    }
  },
  computed: {
    total() {
      return this.themes.length - 1
    },
    currentTheme() {
      return this.themes[this.currentThemeIndex]
    }
  },
  mounted() {
    let localStoreTheme = this.theme
    localStoreTheme = localStorage.getItem('theme') || 'theme-dark'
    this.$emit('local-theme', localStoreTheme)
  },
  props: {
    theme: {
      type: String
    }
  },
  methods: {
    toggleTheme() {
      let myTheme = this.theme
      // myTheme = myTheme === 'theme-light' ? 'theme-dark' : 'theme-light'
      if (this.currentThemeIndex === this.total) {
        this.currentThemeIndex = 0
      } else {
        this.currentThemeIndex++
      }

      myTheme = this.themes[this.currentThemeIndex]
      this.$emit('update-theme', myTheme)
      localStorage.setItem('theme', myTheme)
    }
  }
}
</script>

<style scoped>
.main-menu {
  /* @apply hidden; */
  ul {
    li {
      padding: 0 10px;
    }
  }
}

@screen sm {
  .main-menu {
    @apply flex;
    ul {
      li {
        padding: 10px;

        button {
          transition: all 0.08s ease-in-out;
          cursor: pointer;
          img {
            width: 30px;
          }
        }
        a {
          padding: 10px;
        }
      }
    }
  }
}
</style>