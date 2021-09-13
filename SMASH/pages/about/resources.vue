<template>
  <div>
    <pageTitle title="Resources">
      <div
        v-if="resources.body"
        class="max-w-3xl mx-auto mt-4 text-2xl font-medium tracking-wide prose prose-2xl text-justify "
        v-html="$md.render(resources.body)"
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
      resources: '',
    }
  },
  async fetch() {
    const resources = await this.$content('pages/resources').fetch()
    this.resources = resources
  },
}
</script>
