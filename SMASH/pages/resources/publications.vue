<template>
  <div>
    <basic-page-template
      :title="content.title"
    >
    <ul
        class="flex flex-col items-center justify-start px-3 pb-5 space-y-6 overflow-visible md:px-0"
      >
        <li
          v-for="publication in publications.slice().reverse()"
          :key="publication.title"
          class="flex flex-col items-center max-w-4xl w-full p-6 space-y-1 overflow-hidden rounded shadow-md justify-evenly bg-gray-100"
        >
          <div
            :v-if="publication.authors"
            class="flex flex-row items-center justify-start w-full space-x-4"
          >
            <Pill
              v-for="author in publication.authors"
              :key="author"
              :text="author"
            />
          </div>
          <div class="space-y-3">
            <p class="mt-1 text-base font-medium leading-tight lg:text-lg">
              {{ publication.title }}
            </p>
            <div
              class="flex flex-col items-center justify-center space-y-3 font-bold tracking-tighter md:space-y-0 md:space-x-10 md:flex-row"
            >
              <a
                v-if="publication.file"
                :href="publication.file"
                class="p-2 hover:text-indigo-600"
                >Download</a
              >
              <a
                v-if="publication.code"
                :href="publication.code"
                class="p-2 hover:text-indigo-600"
                >Code</a
              >
              <a
                v-if="publication.prepend"
                :href="publication.prepend"
                class="p-2 hover:text-indigo-600"
                >Prepend</a
              >
              <a :href="publication.link" class="p-2 hover:text-indigo-600"
                >Read More</a
              >
            </div>
          </div>
        </li>
      </ul>
    </basic-page-template>
  </div>
</template>

<script>
import BasicPageTemplate from '@/components/basicPageTemplate.vue'
import Pill from '@/components/Pill'
export default {
  components: {
    BasicPageTemplate,
    Pill,
  },
  layout: 'header-footer',
  data() {
    return {
      publications: [],
      content: null,
    }
  },
  async fetch() {
    const publications = await this.$content('publications')
      .sortBy('date')
      .fetch()

    const content = await this.$content('resources/publications').fetch()

    this.publications = publications
    this.content = content
  },
}
</script>
