<template>
 <div>
    <basic-page-template
      :title="content.abbreviation || content.title"
      :subtitle="content.abbreviation ? content.title : null"
      :body-content="content"
    >
    </basic-page-template>
  </div>
</template>

<script>
import BasicPageTemplate from '@/components/basicPageTemplate.vue'
export default {
  components: {
    BasicPageTemplate
  },
  layout: 'header-footer',
  async asyncData({ $content, params, error }) {
    let content
    try {
      content = await $content('projects', params.slug).fetch()
    } catch (e) {
      error({ message: 'Projects not found' })
    }

    return {
      content,
    }
  },
}
</script>