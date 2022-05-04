<template>
  <section class="flex flex-col items-center justify-center">
    <div
      class="flex flex-col items-center justify-center px-4 space-y-5 max-h-60"
    >
      <p
        class="max-w-sm text-xl font-bold leading-loose tracking-tight text-center md:tracking-wide md:max-w-3xl md:text-3xl"
      >
        {{ shortSentence }}
      </p>
      <a
        href="/overview/about"
        class="inline-flex items-center justify-center px-4 py-2 text-base font-medium text-white bg-black border border-transparent rounded-md shadow-sm whitespace-nowrap hover:bg-indigo-700"
      >
        Read more
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'IndexText',
  components: {},
  data() {
    return {
      shortSentence: null,
    }
  },
  async fetch() {
    const content = await this.$content('pages/index')
      .only(['shortSentence'])
      .fetch()
    this.shortSentence = content.shortSentence
  },
}
</script>
