<template>
  <div
    class="mx-auto overflow-x-hidden overflow-y-hidden font-sans bg-white  max-w-7xl"
  >
    <div class="flex flex-col min-h-screen">
      <Header class="flex-shrink-0" />
      <index-title class="flex-grow min-h-full" />
    </div>
    <index-text class="section" />
    <index-news class="section" />
    <Footer class="mt-32" />
  </div>
</template>

<script>
import Header from '@/components/Header/Header.vue'
import IndexNews from '@/components/Index/index-news.vue'
import IndexText from '@/components/Index/index-text.vue'
import IndexTitle from '@/components/Index/index-title.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: {
    Header,
    Footer,
    IndexNews,
    IndexText,
    IndexTitle,
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
}
</script>

<style scoped>
.section {
  min-height: 80vh;
}
</style>
