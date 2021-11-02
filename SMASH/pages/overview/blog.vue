<template>
  <div>
    <pageTitle :title="content.title || 'Blog coming soon...'">
      <div
        v-if="content.body"
        class="max-w-6xl px-4 mx-auto mt-4 prose text-justify md:prose-2xl md:px-0"
        v-html="$md.render(content.body)"
      ></div>
    </pageTitle>
  </div>
</template>

<script>
import pageTitle from '@/components/pageTitle'
export default {
  name: 'Objective',
  components: {
    pageTitle,
  },
  layout: 'header-footer',
  data() {
    return {
      content: null,
    }
  },
  async fetch() {
    const content = await this.$content('overview/blog').fetch()
    this.content = content
  },
}
</script>
