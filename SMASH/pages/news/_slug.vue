<template>
  <div class="flex flex-row items-start justify-center">
    <div
      class="p-4 mx-2 mt-10 mb-16 space-y-12 overflow-hidden bg-gray-100 rounded-md shadow-2xl  md:mx-10 max-w-7xl"
    >
      <div class="w-full max-w-5xl space-y-12 md:px-20">
        <article>
          <div class="py-2 space-y-4 text-center">
            <h2 class="text-2xl font-bold tracking-wide md:text-4xl">
              {{ post.title }}
            </h2>

            <div v-if="post.authors" class="space-x-3">
              <Pill
                v-for="author in post.authors"
                :key="author"
                :text="author"
              />
            </div>
            <p class="text-xs text-gray-500 md:text-base">
              {{ new Date(post.date).toLocaleDateString() }}
            </p>
          </div>

          <nuxt-content
            :document="post"
            class="max-w-3xl px-1 mx-auto mt-4 prose prose-lg text-justify  md:prose-lg md:px-0"
          />
        </article>

        <div
          class="flex flex-col items-center justify-around  md:items-start md:flex-row"
        >
          <nuxt-link
            v-if="prev"
            :to="prev.path"
            class="flex flex-col items-center justify-around p-2 space-y-1  md:space-y-3"
          >
            <Icon
              icon="ic:outline-keyboard-arrow-left"
              class="flex-shrink-0 w-12 h-12 text-indigo-600"
              aria-hidden="true"
            />
            <div class="space-y-1 text-center">
              <p
                class="hidden overflow-hidden font-semibold text-center break-normal  md:block"
                style="max-width: 12rem; max-height: 6rem"
              >
                {{ prev.title }}
              </p>
              <span class="text-xs text-gray-500 uppercase md:hidden"
                >Previous Article</span
              >
            </div>
          </nuxt-link>

          <nuxt-link
            v-if="next"
            :to="next.path"
            class="flex flex-col items-center justify-around p-2 space-y-1  md:space-y-3"
          >
            <Icon
              icon="ic:outline-keyboard-arrow-right"
              class="flex-shrink-0 w-12 h-12 text-indigo-600"
              aria-hidden="true"
            />
            <div class="space-y-1 text-center">
              <p
                class="hidden overflow-hidden font-semibold text-center break-normal  md:block"
                style="max-width: 12rem; max-height: 6rem"
              >
                {{ next.title }}
              </p>
              <span class="text-xs text-gray-500 uppercase md:hidden"
                >Next Article</span
              >
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Pill from '@/components/Pill'
import Icon from '@/components/Icon.vue'
export default {
  components: {
    Pill,
    Icon,
  },
  layout: 'header-footer',
  async asyncData({ $content, params, error }) {
    let post
    let prev, next
    try {
      post = await $content('news', params.slug).fetch()
    } catch (e) {
      error({ message: 'Publication not found' })
    }

    try {
      ;[prev, next] = await $content('news')
        .only(['title', 'path'])
        .sortBy('date')
        .surround(params.slug)
        .fetch()
    } catch (e) {
      error({ message: 'No surrounding publications found' })
    }

    return {
      post,
      prev,
      next,
    }
  },
}
</script>
<style>
.md\:prose-2xl h1 {
  font-size: 2em !important;
}

.prose-lg h1 {
  font-size: 1.5em;
}

.custom_h1 {
  font-size: 1.5em;
}
</style>
