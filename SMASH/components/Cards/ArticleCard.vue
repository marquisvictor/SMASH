<template>
  <div class="max-w-xs mb-2 overflow-visible md:mb-4 card__container">
    <article class="relative w-full">
      <div
        class="z-20 h-auto min-w-full bg-center bg-contain"
        style="background-image: url('~/assets/img/cardSample.jpg')"
      >
        <img src="~/assets/img/cardSample.jpg" class="w-full h-full" />
      </div>

      <div
        class="relative z-50 w-full p-3 mx-auto -mt-16 break-normal bg-white rounded-lg shadow-lg  card-text__container"
        style=""
      >
        <p
          class="flex px-2 text-xs font-semibold tracking-wide text-gray-500 uppercase bg-teal-200 rounded-full "
        >
          {{ new Date(date).toDateString() }}
        </p>

        <p
          class="mt-1 text-sm font-semibold leading-tight  md:text-base lg:text-lg"
        >
          {{ title }}
        </p>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'ArticleCard',
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
  },
  computed: {
    link() {
      return `/${this.title}`
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
