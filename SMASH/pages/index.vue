<template>
  <div
    class="mx-auto overflow-x-hidden overflow-y-hidden font-sans bg-white  max-w-7xl"
  >
    <div class="flex flex-col w-full h-auto min-h-screen">
      <div
        class="flex flex-col-reverse items-center justify-center flex-1 h-full  h-max-screen"
      >
        <div class="mb-10 space-y-3 text-center">
          <h1 class="block text-6xl font-bold tracking-widest md:text-8xl">
            {{ title }}
          </h1>
          <p
            class="max-w-xs text-lg font-light tracking-wide  md:max-w-md md:text-3xl"
          >
            {{ subtitle }}
          </p>
        </div>
        <div class="flex items-center justify-center w-screen max-h-60">
          <img
            class="h-full w-52 md:w-72"
            src="~/assets/SMASHLogo.svg"
            alt="SMASH Logo"
          />
        </div>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center mb-36 my-28">
      <p
        class="max-w-sm text-xl font-bold leading-loose tracking-tight text-center  md:tracking-wide md:max-w-3xl md:text-3xl"
      >
        {{ shortSentence }}
      </p>
    </div>
    <div class="flex flex-col items-center justify-start min-h-screen">
      <div class="w-full px-20 space-y-12">
        <h2 class="w-full py-2 font-bold tracking-wide text-left text-7xl">
          News
        </h2>
        <vue-horizontal responsive>
          <!-- <template v-slot:btn-next>
            <div
              class="flex items-center h-full pl-12 replaced-btn"
              style="background: linear-gradient(to right, #ffffff00, white)"
            >
              <div
                class="px-1 py-2 text-sm font-bold text-black bg-white border-2 border-black rounded-md"
              >
                more
              </div>
            </div>
          </template> -->
          <article-card
            v-for="(news, index) in newsPosts"
            :key="index"
            :title="news.title"
          />
          <!-- Change to custom -->
          <article-card v-if="newsPosts.length === 5" title="See More" />
        </vue-horizontal>
      </div>

      <div class="w-full px-20 space-y-12">
        <h2 class="w-full py-2 font-bold tracking-wide text-left text-7xl">
          Projects
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
import ArticleCard from '@/components/ArticleCard'
import VueHorizontal from 'vue-horizontal'
export default {
  components: {
    ArticleCard,
    VueHorizontal,
  },
  async asyncData({ $content }) {
    const newsPosts = await $content('news')
      .only(['date', 'description', 'title'])
      .limit(5)
      .fetch()

    const { title, subtitle, shortSentence } = await $content('core', 'index')
      .only(['title', 'subtitle', 'shortSentence'])
      .fetch()

    return {
      newsPosts,
      title,
      subtitle,
      shortSentence,
    }
  },
  data: () => ({}),
  head() {
    return {
      script: [
        {
          src: 'https://identity.netlify.com/v1/netlify-identity-widget.js',
        },
      ],
    }
  },
}
</script>
