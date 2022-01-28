<template>
  <div>
    <basic-page-template
    >
      <template #title>
        <!-- <vue-mathjax formula="{E}[{scale}]{ating Spatial Analysis}"></vue-mathjax> -->
        <h2 class="max-w-4xl mx-auto text-2xl font-bold tracking-wide md:text-4xl">
          {{content.title}}
        </h2>
      </template>
    <ul
        class="pb-5 space-y-6 overflow-visible md:px-0"
      >
        <li
          v-for="project in posts"
          :key="project.title"
          class="flex flex-col items-center justify-start w-full"
        >
            <horizontal-card
              class="md:w-3/4"
              :image="project.image"
              :image-alt="project.imageAlt || ''"
              :link="project.path"
            >
                <div class="flex flex-col items-center justify-center w-full h-full space-y-2">
                    <p class="w-full text-xs text-left text-gray-500 md:text-base">
                        {{ new Date(project.date).toLocaleDateString() }}
                    </p>
                    <p class="w-full text-base font-medium leading-tight text-left flex-grow-1 lg:text-xl md:text-lg">
                        {{project.title}}
                    </p>
                    <div v-if="project.authors" class="flex flex-col items-center justify-start space-y-3 md:space-y-0 md:space-x-3 md:w-full md:flex-row">
                        <Pill
                            v-for="author in project.authors"
                            :key="author"
                            :text="author"
                            color="bg-gray-500"
                        />
                    </div>
                </div>
            </horizontal-card>
        </li>
      </ul>
    </basic-page-template>
  </div>
</template>

<script>
import BasicPageTemplate from '@/components/basicPageTemplate.vue'
import Pill from '@/components/Pill'
import HorizontalCard from '~/components/Cards/HorizontalCard.vue'

export default {
  components: {
    BasicPageTemplate,
    HorizontalCard,
    Pill,
  },
  layout: 'header-footer',
  async asyncData({ $content }) {
    const posts = await $content('blog').fetch()
    const content = await $content('overview/blog').fetch()
    return {
      posts,
      content
    }
  },
  head() {
    
      return {
        script: [
          {
            hid: 'MathJaxConfig',
            innerHTML: `
            MathJax = {
                options: {
                    enableMenu: false
                }
            }
            `,
            type: 'text/javascript',
            charset: 'utf-8'
          },
          {
            hid: 'MathJax',
            src: 
            'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js'
          }
        ],
      }
    },
}
</script>
