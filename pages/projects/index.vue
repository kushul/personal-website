<template>
  <div class="container mx-auto">
    <h1 class="page-title">Projects</h1>
    <h3
      class="page-subtitle"
    >“If you undertake projects in mind, never leave for tomorrow.” “The more people you have to ask for permission, the more dangerous a project gets.” “I feel like every project I work on is a dream project, so long as I am learning.” “If you hold a candle close to you, its flame rises.”</h3>
    <Timeline />
  </div>
</template>

<script>
import Timeline from '../../components/Timeline.vue'
export default {
  components: {
    Timeline
  }
}
</script>