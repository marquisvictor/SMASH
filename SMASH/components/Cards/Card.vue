<template>
  <div
    class=""
    :class="vueHorizontalChild ? 'card__container' : 'w-full h-full'"
  >
    <nuxt-link :to="link">
      <article class="relative w-full">
        <div
          v-if="image || videoId"
          class="z-20 h-auto min-w-full bg-center bg-contain"
        >
          <nuxt-img
            v-if="image && !videoId && imageLink"
            :src="imageLink"
            :alt="imageAlt || `Picture for ${title}`"
            class="w-full h-full min-h-[300px] object-scale-down"
            quality="50"
          />
          <vue-tube
            v-if="videoId && !image"
            :video-id="videoId"
            class="flex-shrink-0 w-full"
          />
        </div>

        <div
          class="z-50 w-full p-3 mx-auto break-normal bg-white shadow-lg"
          :class="[
            offset
              ? '-mt-16 rounded-lg card-text__container relative'
              : 'mt-0 rounded-b-lg w-full pt-4 pb-4',
          ]"
          :style="!vueHorizontalChild ? 'min-height: 11rem' : ''"
        >
          <p
            class="flex text-xs font-semibold tracking-wide text-gray-500 uppercase bg-teal-200 rounded-full "
          >
            {{ new Date(date).toDateString() }}
          </p>

          <p
            class="mt-1 text-sm font-semibold leading-tight md:text-base lg:text-lg"
          >
            {{ title }}
          </p>
          <p
            class="mt-1 text-xs font-medium leading-tight md:text-sm lg:text-base"
          >
            {{ subtitle }}
          </p>
        </div>
      </article>
    </nuxt-link>
  </div>
</template>

<script>
import { VueTube } from 'vuetube'
export default {
  name: 'Card',
  components: {
    VueTube,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      default: '',
      required: false,
    },
    date: {
      type: String,
      default: '',
      required: true,
    },
    image: {
      type: String,
      default: null,
      required: false,
    },
    videoId: {
      type: String,
      default: null,
      required: false,
    },
    offset: {
      type: Boolean,
      default: false,
      required: false,
    },
    vueHorizontalChild: {
      type: Boolean,
      default: false,
      required: false,
    },
    link: {
      type: String,
      default: '',
      required: false,
    },
    imageAlt: {
      type: String,
      default: '',
      required: false,
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

<style scoped>
.card__container {
  --padding: 3rem;

  width: calc(100% - (2 * var(--padding)));
  min-width: 12rem;
  height: calc(100% - 4rem);
}

.card-text__container {
  width: calc((100% - (1.15rem)));
  min-height: 7rem;
}

/* Taillwind `md` */
@media (min-width: 768px) {
  .card__container {
    width: calc((100% - (4 * var(--padding))) / 2);
  }

  .card-text__container {
    width: calc((100% - (1.25rem)));
    min-height: 12rem;
  }
}

/* Taillwind `lg` */
@media (min-width: 1024px) {
  .card__container {
    width: calc((100% - (2 * var(--padding))) / 3);
  }

  .card-text__container {
    width: calc((100% - (3rem)));
  }
}
</style>
