<template>
  <footer id="footer" class="mx-auto max-w-7xl">
    <hr />
    <div
      class="flex flex-row items-center justify-around w-full h-48 overflow-hidden  flex-nowrap"
    >
      <div id="footer-text flex-shrink">
        <p
          v-for="text in leftText"
          :key="text"
          class="text-xs font-medium md:text-lg"
        >
          {{ text }}
        </p>
      </div>

      <div class="flex flex-shrink space-x-2 overflow-hidden">
        <a
          v-for="icon in socialMediaIcons"
          :key="icon.name"
          :href="icon.link"
          class="p-1 overflow-hidden rounded-md hover:bg-gray-400"
        >
          <Icon
            :icon="icon.icon"
            class="w-6 h-6 md:w-12 md:h-12 max-w-12 max-h-12"
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
      socialMediaIcons: [],
      leftText: '',
    }
  },
  async fetch() {
    const content = await this.$content('footer')
      .only(['socialMediaIcons', 'leftText'])
      .fetch()
    this.socialMediaIcons = content.socialMediaIcons
    this.leftText = content.leftText
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
