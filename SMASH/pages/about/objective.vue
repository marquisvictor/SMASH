<template>
  <div>
    <pageTitle title="Objective">
      <p
        class="max-w-3xl mx-auto mt-4 text-2xl font-medium tracking-wide text-justify "
      >
        {{ objective.objective }}
      </p>
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
    const objective = await this.$content('objective').only('objective').fetch()
    this.objective = objective
  },
}
</script>
