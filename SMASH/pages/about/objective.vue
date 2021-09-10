<template>
  <div>
    <pageTitle title="Objective">
      <p
        class="max-w-3xl mx-auto mt-4 text-2xl font-medium tracking-wide text-justify "
      >
        <VueMarkdown
          class="w-full prose-sm prose text-justify md:prose lg:prose-lg"
        >
          {{ objective.objective }}
        </VueMarkdown>
      </p>
    </pageTitle>
  </div>
</template>

<script>
import pageTitle from '@/components/pageTitle'
import VueMarkdown from 'vue-markdown'
export default {
  name: 'Objective',
  components: {
    pageTitle,
    VueMarkdown,
  },
  layout: 'header-footer',
  data() {
    return {
      objective: '',
    }
  },
  async fetch() {
    const objective = await this.$content('objective').only('objective').fetch()
    this.objective = objective
  },
}
</script>
