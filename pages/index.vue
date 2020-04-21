<template>
  <div class="container mx-auto home-main-container">
    <MainIntro />
    <div class="main-tagline-container section-gap">
      <div
        class="tagline-wrapper"
        v-bind:style="{ 'grid-area': tagline.gridarea, 'justify-content': tagline.justify, 'align-items': tagline.align }"
        v-for="(tagline, index) in taglines"
        :key="index"
      >
        <h2
          class="tracking-tight font-serif text-copy-primary text-3xl md:text-5xl text-fade"
        >{{tagline.text}}</h2>
        <img class="image-fade" :src="findImage(tagline.image)" alt="creative" />
      </div>
      <Main-image />
    </div>
  </div>
</template>
<script>
import { ghost, postsPerPage, postIndexFields } from '../api/ghost'
import MainImage from '../components/home-main-tagline.vue'
import MainIntro from '../components/home-main-intro.vue'

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
          gridarea: 'a',
          justify: 'flex-end',
          align: 'flex-end'
        },
        {
          text: 'Creative',
          image: 'creative.svg',
          gridarea: 'b',
          justify: 'center',
          align: 'flex-end'
        },
        {
          text: 'Creative',
          image: 'creative.svg',
          gridarea: 'c',
          justify: 'flex-start',
          align: 'flex-end'
        },
        {
          text: 'Creative',
          image: 'creative.svg',
          gridarea: 'd',
          justify: 'flex-end',
          align: 'center'
        },
        {
          text: 'Creative',
          image: 'creative.svg',
          gridarea: 'f',
          justify: 'flex-start',
          align: 'center'
        },
        {
          text: 'Creative',
          image: 'creative.svg',
          gridarea: 'h',
          justify: 'flex-end',
          align: 'flex-start'
        },
        {
          text: 'Creative',
          image: 'creative.svg',
          gridarea: 'i',
          justify: 'center',
          align: 'flex-start'
        },
        {
          text: 'Creative',
          image: 'creative.svg',
          gridarea: 'j',
          justify: 'flex-start',
          align: 'flex-start'
        }
      ]
    }
  },
  components: {
    PostList,
    MainImage,
    MainIntro
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

.main-tagline-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 0.5fr 1fr 0.5fr;
  grid-gap: 60px;
  grid-template-areas: 'a b c' 'd e f' 'h i j';

  @apply mt-8;
}

.tagline-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}

.text-fade {
  height: 100%;
  position: absolute;
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
