<template>
  <footer id="footer" class="mx-auto max-w-7xl">
    <hr />
    <div
      class="flex flex-row items-center justify-around w-full h-48 overflow-hidden  flex-nowrap"
    >
      <div id="footer-text flex-shrink" v-html="$md.render(footerText)"></div>

      <div class="flex flex-shrink space-x-2 overflow-hidden">
        <a
          v-for="icon in mediaIcons"
          :key="icon.name"
          :href="icon.link"
          class="p-1 overflow-hidden rounded-md hover:bg-gray-400"
        >
          <Icon
            :icon="icon.icon"
            class="w-6 h-6 md:w-10 md:h-10 max-w-12 max-h-10"
            aria-hidden="true"
          />
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
import Icon from '@/components/Icon.vue'
export default {
  name: 'Footer',
  components: {
    Icon,
  },
  props: {},
  data() {
    return {
      mediaIcons: [],
      footerText: '',
    }
  },
  async fetch() {
    const footerContent = await this.$content('core/footer').fetch()
    const socialMedia = await this.$content('core/contact')
      .only('socialNetworks')
      .fetch()
    this.footerText = footerContent.footerText
    this.mediaIcons = socialMedia.socialNetworks
  },
  computed: {},
  methods: {},
}
</script>

<style scoped>
#footer-text > p:nth-child(1) {
  @apply font-semibold leading-snug uppercase;
  @apply text-sm md:text-lg tracking-tighter md:tracking-tighter;
}
</style>
