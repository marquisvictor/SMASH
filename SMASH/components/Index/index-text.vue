<template>
  <section class="flex flex-col items-center justify-center">
    <div class="flex items-center justify-center px-4 max-h-60">
      <p
        class="max-w-sm text-xl font-bold leading-loose tracking-tight text-center  md:tracking-wide md:max-w-3xl md:text-3xl"
      >
        <VueMarkdown>
          {{ shortSentence }}
        </VueMarkdown>
      </p>
    </div>
  </section>
</template>

<script>
import VueMarkdown from 'vue-markdown'
export default {
  name: 'IndexText',
  components: {
    VueMarkdown,
  },
  data() {
    return {
      shortSentence: null,
    }
  },
  async fetch() {
    const content = await this.$content('index').only(['shortSentence']).fetch()
    this.shortSentence = content.shortSentence
  },
}
</script>