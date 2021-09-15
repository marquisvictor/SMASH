<template>
  <section class="flex flex-col justify-center space-y-2 section">
    <div class="flex items-center justify-center max-h-60">
      <nuxt-img
        class="h-full w-52 md:w-72"
        height="288"
        width="266"
        :src="imageLink"
        alt="SMASH Logo"
      />
    </div>

    <div class="flex flex-col items-center space-y-3 text-center">
      <h1 class="block text-6xl font-bold tracking-widest md:text-8xl">
        {{ title }}
      </h1>
      <p
        class="max-w-xs px-1 text-lg font-light tracking-wide  md:max-w-md md:text-3xl"
      >
        {{ subtitle }}
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'IndexTitle',
  components: {},
  data() {
    return {
      title: '',
      subtitle: '',
      image: '',
    }
  },
  async fetch() {
    const { title, subtitle, image } = await this.$content('pages/index')
      .only(['title', 'subtitle', 'image'])
      .fetch()

    this.title = title
    this.subtitle = subtitle
    this.image = image
  },
  computed: {
    imageLink() {
      if (!this.image) {
        return '/uploads'
      }
      return '/uploads/' + this.image.replace('/static/uploads/', '')
    },
  },
}
</script>