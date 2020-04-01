<template>
  <div class="container mx-auto items-center flex justify-center">
    <div>
      <div class="flex justify-center text-center md:text-right">
        <!-- <h1 class="text-4xl">What's boo?</h1> -->
        <!-- <h2
          class="tracking-tight font-serif text-gray-700 text-3xl md:text-5xl"
        >A free and open source theme for headless Ghost CMS</h2>
        <p class="text-xl md:text-2xl text-gray-500 mt-5">Built with NuxtJS & TailwindCSS</p>-->
        <!-- <div class="mt-5">
          <nuxt-link :to="{path: '/blog'}" class="button">View posts</nuxt-link>
        </div>-->
      </div>
      <div class="main-image-wrapper relative flex items-center justify-center h-64 md:w-64">
        <img
          class="h-64 md:w-64 mx-auto rounded-full object-cover"
          src="~/assets/images/kushul_cartoon.jpg"
          alt
        />
        <div class="works__pulse-bg"></div>
        <div class="works__pulse-bg"></div>
      </div>
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
  components: {
    PostList
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

.main-image-wrapper {
  animation: bounce 2s infinite;
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
