<template>
  <div>
    <pageTitle :title="content.title || 'About'">
      <div
        v-if="content.body"
        class="max-w-3xl px-4 mx-auto mt-4 prose text-justify md:prose-2xl md:px-0"
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
    const content = await this.$content('overview/about').fetch()
    this.content = content
  },
}
</script>
