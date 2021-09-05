<template>
  <div
    class="mx-auto overflow-x-hidden overflow-y-hidden font-sans bg-white max-w-7xl"
  >
    <full-page :options="options">
      <div class="space-y-2 section">
        <div class="flex items-center justify-center max-h-60">
          <img
            class="h-full w-52 md:w-72"
            src="~/assets/SMASHLogo.svg"
            alt="SMASH Logo"
          />
        </div>

        <div class="flex flex-col items-center space-y-3 text-center">
          <h1 class="block text-6xl font-bold tracking-widest md:text-8xl">
            {{ title }}
          </h1>
          <p
            class="max-w-xs px-1 text-lg font-light tracking-wide md:max-w-md md:text-3xl"
          >
            {{ subtitle }}
          </p>
        </div>
      </div>

      <div class="section">
        <div class="flex items-center justify-center px-4 max-h-60">
          <p
            class="max-w-sm text-xl font-bold leading-loose tracking-tight text-center md:tracking-wide md:max-w-3xl md:text-3xl"
          >
            {{ shortSentence }}
          </p>
        </div>
      </div>
      <div class="section">
        <div class="flex flex-col items-center justify-center space-y-12">
          <div class="w-full pl-10 space-y-6 md:px-20 md:space-y-3">
            <p
              class="text-lg font-medium tracking-tight text-left text-gray-500 uppercase md:text-2xl"
            >
              What we've Been up to
            </p>

            <div
              class="flex flex-col justify-center md:flex-row md:space-x-7 md:space-y-0 space-y-7 md:justify-start"
            >
              <h2
                class="text-5xl font-bold tracking-wide text-left md:text-7xl"
              >
                Latest News
              </h2>
              <a
                class="flex flex-row items-center self-start justify-around md:self-end group"
                href="/news"
              >
                <p
                  class="text-sm font-semibold leading-3 text-gray-500 cursor-pointer md:text-lg group-hover:underline group-hover:text-gray-800"
                >
                  All News
                </p>
                <Icon
                  icon="ic:outline-keyboard-arrow-right"
                  class="w-4 h-4 cursor-pointer md:h-6 md:w-6 group-hover:text-gray-800"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
          <div class="w-full md:space-y-6">
            <div class="w-full px-10 overflow-hidden md:px-20 max-w-7xl">
              <vue-horizontal
                ref="horizontal"
                :button="$device.isMobile"
                class="w-full h-full news-scroll__container"
              >
                <article-card
                  v-for="(news, index) in newsPosts"
                  :key="index"
                  :title="news.title"
                  :date="news.createdAt"
                />
                <div class="flex items-start justify-center">
                  <a
                    class="flex flex-row items-center justify-center w-48 text-3xl tracking-tight text-black cursor-pointer mt-14 h-52 rounded-xl group"
                  >
                    <p
                      class="text-lg font-semibold leading-3 text-gray-500 cursor-pointer group-hover:underline group-hover:text-gray-800"
                    >
                      All News
                    </p>
                    <Icon
                      icon="ic:outline-keyboard-arrow-right"
                      class="w-6 h-6 cursor-pointer md:h-6 md:w-6 group-hover:text-gray-800"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </vue-horizontal>
            </div>
            <div
              v-if="!$device.isMobile"
              class="flex flex-row items-center justify-center h-12 mb-2 -mt-3 space-x-6 md:space-x-2 md:mb-0"
            >
              <button class="p-4 md:p-0" @click="prevNews">
                <Icon
                  icon="ic:outline-keyboard-arrow-left"
                  class="w-12 h-12 cursor-pointer md:h-10 md:w-10 group-hover:text-gray-800"
                  aria-hidden="true"
                />
              </button>

              <button class="p-4 md:p-0" @click="nextNews">
                <Icon
                  icon="ic:outline-keyboard-arrow-right"
                  class="w-12 h-12 cursor-pointer md:h-10 md:w-10 group-hover:text-gray-800"
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- <Footer class="bg-red-300 section fp-auto-height fp-noscroll" /> -->
    </full-page>
  </div>
</template>

<script>
import ArticleCard from '@/components/ArticleCard'
import VueHorizontal from 'vue-horizontal'
import Icon from '@/components/Icon'
export default {
  components: {
    ArticleCard,
    VueHorizontal,
    Icon,
  },
  async asyncData({ $content }) {
    const newsPosts = await $content('news').limit(5).fetch()

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
  data() {
    return {
      options: {
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        scrollBar: false,
        anchors: ['1', '2', '3'],
        navigation: !this.$device.isMobile,
      },
    }
  },
  head() {
    return {
      script: [
        {
          src: 'https://identity.netlify.com/v1/netlify-identity-widget.js',
        },
      ],
    }
  },
  methods: {
    prevNews() {
      this.$refs.horizontal.prev()
    },
    nextNews() {
      this.$refs.horizontal.next()
    },
  },
}
</script>

<style scoped>
.news-scroll__container > .v-hl-container > *:not(:first-child) {
  @apply ml-4;
}
</style>
