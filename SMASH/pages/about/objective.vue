<template>
  <div>
    <pageTitle title="Objective">
      <div
        v-if="objective.body"
        class="max-w-3xl px-4 mx-auto mt-4 prose md:prose-2xl md:px-0"
        v-html="$md.render(objective.body)"
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
      objective: '',
    }
  },
  async fetch() {
    const objective = await this.$content('pages/objective').fetch()
    this.objective = objective
  },
}
</script>
