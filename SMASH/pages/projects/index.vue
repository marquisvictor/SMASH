<template>
  <div>
    <basic-page-template
      title="Projects"
    >
    <ul
        class="px-3 pb-5 space-y-6 overflow-visible md:px-0"
      >
        <li
          v-for="project in projects"
          :key="project.title"
          class="flex flex-col items-center justify-start w-full"
        >
            <horizontal-card
              class="w-full md:w-3/4"
              :icon="project.icon"
              :text="project.title"
              :link="project.path"
            />
          
        </li>
      </ul>
    </basic-page-template>
  </div>
</template>

<script>
import BasicPageTemplate from '@/components/basicPageTemplate.vue'
import HorizontalCard from '~/components/Cards/HorizontalCard.vue'
export default {
  components: {
    BasicPageTemplate,
    HorizontalCard
  },
  layout: 'header-footer',
  async asyncData({ $content }) {
    const projects = await $content('projects').fetch()
    return {
      projects,
    }
  },
}
</script>
