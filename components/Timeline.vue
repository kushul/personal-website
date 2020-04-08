<template>
  <div>
    <vue-timeline-update
      v-for="(project, index) in projects"
      :key="index"
      :date="getDate(project.date)"
      :title="project.title"
      :description="project.description"
      :thumbnail="'/images/' + project.thumbnail"
      :category="project.role"
      :icon="project.icon"
      :color="project.color"
      :animation="true"
      :animation-duration="1500"
      :animation-container="project.role"
      :is-last="true"
      class="timeline-container"
    >
      <div v-for="(tech,index) in project.tech" :key="index">{{tech}} /</div>
      <a :href="project.url" target="_blank" class="website-link">View website</a>
    </vue-timeline-update>
  </div>
</template>

<script>
import projects from '../static/content/projects'
export default {
  data() {
    return {
      projects: projects
    }
  },
  methods: {
    getDate(date) {
      return new Date(date)
    }
  }
}
</script>

