<template>
  <div>
    <basic-page-template
      :title="content.title"
      :body-content="content"
    >
    </basic-page-template>
  </div>
</template>

<script>
import BasicPageTemplate from '@/components/basicPageTemplate.vue'
export default {
  name: 'PageTitle',
  components: {
    BasicPageTemplate,
  },
  layout: 'header-footer',
  data() {
    return {
      content: '',
    }
  },
  async fetch() {
    const content = await this.$content('resources/software').fetch()
    this.content = content
  },
}
</script>
