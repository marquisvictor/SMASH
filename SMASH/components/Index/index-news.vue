<template>
  <section class="">
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
          <h2 class="text-5xl font-bold tracking-wide text-left md:text-7xl">
            Latest News
          </h2>
          <nuxt-link
            to="/news"
            class="flex flex-row items-center self-start justify-around md:self-end group"
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
          </nuxt-link>
        </div>
      </div>
      <div class="w-full md:space-y-6">
        <div class="w-full px-10 overflow-hidden md:px-20 max-w-7xl">
          <vue-horizontal
            ref="horizontal"
            :button="$device.isMobile"
            class="w-full h-full news-scroll__container"
          >
            <Card
              v-for="(news, index) in newsPosts"
              :key="index"
              :title="news.title"
              :date="news.createdAt"
              :link="news.path"
              :image="news.image"
              :image-alt="news.imageAlt"
              offset
              class="max-w-xs mb-2 overflow-visible md:mb-4"
            />
            <div class="flex items-start justify-center">
              <nuxt-link
                to="/news"
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
              </nuxt-link>
            </div>
          </vue-horizontal>
        </div>
        <div
          v-if="!$device.isMobile"
          class="flex flex-row items-center justify-center h-12 mb-2 -mt-3 space-x-6 md:space-x-2 md:mb-0"
        >
          <button
            class="p-4 md:p-0"
            aria-label="Previous News Stories"
            @click="prevNews"
          >
            <Icon
              icon="ic:outline-keyboard-arrow-left"
              class="w-12 h-12 cursor-pointer md:h-10 md:w-10 group-hover:text-gray-800"
              aria-hidden="true"
            />
          </button>

          <button
            class="p-4 md:p-0"
            aria-label="Next News Stories"
            @click="nextNews"
          >
            <Icon
              icon="ic:outline-keyboard-arrow-right"
              class="w-12 h-12 cursor-pointer md:h-10 md:w-10 group-hover:text-gray-800"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Card from '@/components/Cards/Card'
import VueHorizontal from 'vue-horizontal'
import Icon from '@/components/Icon'
export default {
  name: 'IndexNews',
  components: {
    Card,
    VueHorizontal,
    Icon,
  },
  data() {
    return {
      newsPosts: [],
    }
  },
  async fetch() {
    const news = await this.$content('news').limit(5).sortBy('date', 'desc').fetch()
    this.newsPosts = news
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

<style>
.news-scroll__container > .v-hl-container > *:not(:first-child) {
  margin-left: 1rem;
}
</style>
