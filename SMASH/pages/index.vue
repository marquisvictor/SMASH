<template>
  <div
    class="mx-auto overflow-x-hidden overflow-y-hidden font-sans bg-white max-w-7xl"
  >
    <div class="flex flex-col w-full h-auto min-h-screen">
      <Header class="flex-none" />
      <div
        class="flex flex-col-reverse items-center justify-center flex-1 h-full h-max-screen"
      >
        <div class="mb-10 space-y-3 text-center">
          <h1 class="block text-6xl font-bold tracking-widest md:text-8xl">
            SMASH
          </h1>
          <p
            class="max-w-xs text-lg font-light tracking-wide md:max-w-md md:text-3xl"
          >
            spatial multiscale analytical science hub
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
        class="max-w-sm text-xl font-bold leading-loose tracking-tight text-center md:tracking-wide md:max-w-3xl md:text-3xl"
      >
        Here at SMASH, we believe in this and that and this is our objective
        statement
      </p>
    </div>
    <div class="flex flex-col items-center justify-start min-h-screen">
      <div class="px-20 space-y-12">
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
            v-for="(title, index) in titles"
            :key="index"
            :title="title"
          />
        </vue-horizontal>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import ArticleCard from '@/components/ArticleCard'
import VueHorizontal from 'vue-horizontal'
export default {
  components: {
    // Globe: () => (process.browser ? import('@/components-lazy/Globe') : null),
    Header,
    ArticleCard,
    VueHorizontal,
  },
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
      ],
    }
  },
  data: () => ({
    titles: [
      'De Floriani Completes Term as President of the IEEE Computer Society',
      'Dr. Dong (Tony) Chen publishes in Remote Sensing of Environment',
      'Dr. Dong (Tony) Chen publishes in Remote Sensing of Environment',
      'Dr. Dong (Tony) Chen publishes in Remote Sensing of Environment',
      'GEOG Researchers Lead International Protocol on Forest Biomass',
      'testtty thehehtlSEHlwiUEH',
    ],
  }),
}
</script>
