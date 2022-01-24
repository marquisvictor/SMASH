<template>
  <a
    class="flex items-center max-w-6xl p-3 overflow-hidden rounded shadow-md min-w-20 justify-evenly"
    :href="link"
  >
      <div
        v-if="icon || image"
        class="flex items-center justify-center w-1/2">
          <Icon
              v-if="icon"
              :icon="icon"
              class="w-10 h-10 text-gray-400 md:w-20 md:h-20"
              aria-hidden="true"
          />
          <nuxt-img
            v-if="imageLink"
            :src="imageLink"
            :alt="imageAlt || `Picture for ${text}`"
            class="w-3/4 h-3/4 min-h-[300px] object-scale-down max-h-10 max-w-10"
            quality="50"
        />
      </div>
      <div class="flex-shrink-0 w-1/2 h-full p-2">
          <slot>
            <p class="text-base font-medium leading-tight text-left flex-grow-1 lg:text-xl md:text-lg">
              {{text}}
            </p>
          </slot>
      </div>
  </a>
</template>


<script>
import Icon from '@/components/Icon.vue'
export default {
  name: 'HorizontalCard',
  components: {
    Icon  
  },
  props: {
    text: {
      type: String,
      required: false,
      default: ''
    },
    icon: {
      type: String,
      required: false,
      default: ''
    },
    image: {
      type: String,
      required: false,
      defalt: ''
    },
    imageAlt: {
      type: String,
      required: false,
      default: '',
    },
    link: {
      type: String,
      required: false,
      default: '',
    },
  },
  computed: {
    imageLink() {
      if (!this.image) {
        return
      }
      return '/uploads/' + this.image.replace('/static/uploads/', '')
    },
  },
}
</script>