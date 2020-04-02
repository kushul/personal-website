<template>
  <div class="container mx-auto main-home-container">
    <div
      class="tagline-wrapper"
      v-bind:style="{ 'grid-area': tagline.gridarea }"
      v-for="(tagline, index) in taglines"
      :key="index"
    >
      <h2
        class="tracking-tight font-serif text-copy-primary text-3xl md:text-5xl text-fade"
      >{{tagline.text}}</h2>
      <img class="image-fade" :src="findImage(tagline.image)" alt="creative" />
    </div>
    <div class="main-image-wrapper relative flex items-center justify-center">
      <img
        class="h-64 md:w-64 mx-auto rounded-full object-cover"
        src="~/assets/images/kushul_cartoon.jpg"
        alt
      />
      <div class="works__pulse-bg"></div>
      <div class="works__pulse-bg"></div>
    </div>
  </div>
</template>
<script>
import { ghost, postsPerPage, postIndexFields } from '../api/ghost'

import PostList from '../components/PostList'
export default {
  async asyncData({ params, store, error, payload }) {
    let pageginationPageNumber = 1
    if (params.pageNumber) {
      pageginationPageNumber = params.pageNumber
    }

    let paginationFilter = ''

    const posts = await ghost.posts.browse({
      limit: postsPerPage,
      page: pageginationPageNumber,
      include: 'tags,authors',
      fields: postIndexFields,
      filter: 'featured: true'
    })

    return {
      indexPosts: posts,
      indexPagination: posts.meta.pagination
    }
  },
  data() {
    return {
      taglines: [
        {
          text: 'Creative',
          image: 'creative.svg',
          gridarea: 'a'
        },
        {
          text: 'Creative',
          image: 'creative.svg',
          gridarea: 'b'
        },
        {
          text: 'Creative',
          image: 'creative.svg',
          gridarea: 'c'
        },
        {
          text: 'Creative',
          image: 'creative.svg',
          gridarea: 'd'
        },
        {
          text: 'Creative',
          image: 'creative.svg',
          gridarea: 'f'
        },
        {
          text: 'Creative',
          image: 'creative.svg',
          gridarea: 'h'
        },
        {
          text: 'Creative',
          image: 'creative.svg',
          gridarea: 'i'
        },
        {
          text: 'Creative',
          image: 'creative.svg',
          gridarea: 'j'
        }
      ]
    }
  },
  components: {
    PostList
  },
  methods: {
    findImage(name) {
      if (name) {
        const result = require(`~/assets/images/${name}`)
        return result
      }
    }
  }
}
</script>

<style lang="scss" scoped>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

.main-home-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 10px;
  grid-template-areas: 'a b c' 'd e f' 'h i j';
}

.tagline-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.text-fade {
  position: absolute;
  display: flex;
  align-items: center;
  height: 100%;
}

.main-image-wrapper {
  animation: bounce 2s infinite;
  grid-area: e;
}

.works__pulse-bg {
  animation: pulse 2s infinite;
  width: 150px;
  height: 150px;
  position: absolute;
  border-radius: 100%;
  opacity: 0.8;
  z-index: -1;

  @apply border-solid border-green-600 border-2;
}

.works__pulse-bg + .works__pulse-bg {
  width: 140px;
  height: 140px;
  -webkit-animation-delay: 0.3s;
  animation-delay: 0.3s;
}

.title {
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.links {
  padding-top: 15px;
}

.button {
  @apply shadow px-5 py-2 inline-block;
}
</style>
