<template>
  <div>
    <pageTitle :title="content.title || 'Projects'">
      <div
        v-if="content.body"
        class="max-w-6xl px-4 mx-auto mt-4 text-2xl prose text-justify  md:prose-2xl md:px-0"
        v-html="$md.render(content.body || '')"
      ></div>
    </pageTitle>
  </div>
</template>

<script>
import pageTitle from '@/components/pageTitle'
export default {
  name: 'PageTitle',
  components: {
    pageTitle,
  },
  layout: 'header-footer',
  data() {
    return {
      content: '',
    }
  },
  async fetch() {
    const content = await this.$content('projects/index').fetch()
    this.content = content
  },
}
</script>
