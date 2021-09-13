<template>
  <div>
    <pageTitle title="News">
      <div class="flex flex-col items-center">
        <div
          class="grid grid-cols-1 gap-6 p-10 mx-auto  md:w-9/12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2"
        >
          <Card
            v-for="article in news"
            :key="article.slug"
            image="article.image"
            :link="'/news/' + article.slug"
            :title="article.title"
            :date="article.date"
            class="max-w-md m-3"
            style="min-height: 14rem"
          />
        </div>
      </div>
    </pageTitle>
  </div>
</template>

<script>
import pageTitle from '@/components/pageTitle.vue'
import Card from '~/components/Cards/Card.vue'
export default {
  components: {
    pageTitle,
    Card,
  },
  layout: 'header-footer',
  async asyncData({ $content }) {
    const news = await $content('news').sortBy('date').fetch()

    return {
      news,
    }
  },
}
</script>