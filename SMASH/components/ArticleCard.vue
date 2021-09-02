<template>
  <div
    class="relative flex flex-col items-center justify-start flex-none w-64 overflow-visible"
    :style="{ 'min-height': cardHeight }"
  >
    <div ref="image" class="w-full h-48 overflow-hidden shadow-xl rounded-2xl">
      <img src="~/assets/img/cardSample.jpg" class="w-full h-full" />
    </div>
    <div
      ref="text"
      class="absolute flex flex-col items-center justify-between w-10/12 overflow-hidden bg-white shadow-xl flow-hidden rounded-2xl top-36"
      style="min-height: 10rem"
    >
      <div
        class="flex flex-col items-center justify-center flex-1 h-full text-center"
      >
        <p
          class="w-full p-2 text-lg font-semibold leading-snug tracking-tight text-black"
        >
          {{ title }}
        </p>

        <p
          v-if="subtitle"
          class="w-full p-2 text-sm font-medium text-justify text-gray-600"
        >
          {{ subtitle }}
        </p>
      </div>

      <a
        class="flex self-end flex-none h-10 p-2 text-xs font-light text-center"
        :href="link"
      >
        Read More
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleCard',
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      default: '',
      required: false,
    },
  },
  data: () => ({
    cardHeight: '25rem',
  }),
  computed: {
    link() {
      return `/${this.title}`
    },
  },
  //   mounted() {
  //     const imageHeight = this.$refs.image.clientHeight
  //     const textHeight = this.$refs.text.clientHeight
  //     this.cardHeight = imageHeight + textHeight

  //     console.log(this.textHeight)
  //   },
}
</script>
