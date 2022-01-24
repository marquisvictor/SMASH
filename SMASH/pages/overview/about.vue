<template>
  <div>
    <basic-page-template
      :title="page.title"
      :subtitle="page.subtitle"
      :body-content="page"
    >
    </basic-page-template>
  </div>
</template>

<script>
import BasicPageTemplate from '@/components/basicPageTemplate.vue'
export default {
  name: 'Objective',
  components: {
    BasicPageTemplate
  },
  layout: 'header-footer',
  data() {
    return {
      page: null,
    }
  },
  async fetch() {
    const page = await this.$content('overview/about').fetch()
    this.page = page
    console.log(page)
  },
}
</script>
