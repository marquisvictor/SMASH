<template>
  <div>
    <pageTitle :title="content.title || 'Our Team'">
      <div
        class="grid grid-cols-1 gap-6 p-10 mx-auto  md:w-9/12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 justify-items-center"
      >
        <article
          v-for="person in people"
          :key="person.name"
          class="flex flex-col items-center justify-start max-w-sm p-2 m-4 space-y-5 bg-white "
        >
          <div class="overflow-hidden rounded-md shadow-md h-60">
            <nuxt-img
              fit="cover"
              height="280"
              width="280"
              class="object-contain w-full h-full"
              :src="imageLink(person.image)"
              :alt="`Photo of ${person.name}`"
              quality="50"
            />
          </div>
          <div class="w-full space-y-2">
            <p class="text-lg font-bold leading-4 tracking-wide">
              {{ person.name }}
            </p>
            <p class="text-base font-semibold tracking-tighter text-blue-600">
              {{ person.role }}
            </p>
          </div>

          <div
            class="text-base prose text-justify text-gray-700 md:prose-xl"
            style="min-height: 9rem"
            v-html="$md.render(person.bio)"
          ></div>
          <div
            v-if="person.socialLinks"
            class="flex flex-row items-center justify-start w-full space-x-2"
          >
            <a
              v-for="icon in person.socialLinks"
              :key="icon.name"
              :href="icon.link"
              class="p-1 overflow-hidden rounded-md hover:bg-gray-400"
            >
              <Icon :icon="icon.icon" class="w-7 h-7" aria-hidden="true" />
            </a>
          </div>
        </article>
      </div>
    </pageTitle>
  </div>
</template>

<script>
import pageTitle from '@/components/pageTitle'
import Icon from '@/components/Icon.vue'

export default {
  name: 'Team',
  components: {
    pageTitle,
    Icon,
  },
  layout: 'header-footer',
  data() {
    return {
      people: [],
      content: null,
    }
  },
  async fetch() {
    const people = await this.$content('people')
      .sortBy('priority')
      .sortBy('name')
      .fetch()

    const content = await this.$content('overview/team').fetch()

    this.people = people
    this.content = content
  },
  methods: {
    imageLink(imagePath) {
      return '/uploads/' + imagePath.replace('/static/uploads/', '')
    },
  },
}
</script>
