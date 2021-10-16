<template>
  <div>
    <pageTitle
      :title="content.title || 'SMAART'"
      :subtitle="
        content.subtitle ||
        'Spatial Multiscale Analytics, Applied Research, and Technology Seminar'
      "
    >
      <div
        class="grid grid-cols-1 gap-6 p-10 mx-auto  md:w-9/12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 justify-items-center"
      >
        <Card
          v-for="video in smaartVideos"
          :key="video.title"
          :title="video.title"
          :date="video.date"
          :video-id="video.videoId"
          :subtitle="video.presenter"
          class="max-w-md m-3"
          style="min-height: 14rem"
        />
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
    const smaartVideos = await $content('smaart')
      .only(['title', 'presenter', 'date', 'videoId'])
      .fetch()

    const content = await $content('resources/smaart').fetch()

    return {
      smaartVideos,
      content,
    }
  },
}
</script>
<style>
/* TODO
Nuxt purges when `scoped`, temporary fix */
.vuetube {
  position: relative;
  cursor: pointer;
}

.vuetube__box {
  position: relative;
}

.vuetube__box::before {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  box-sizing: content-box;
  width: 100%;
  height: 60px;
  padding-bottom: 50px;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==);
  background-repeat: repeat-x;
  background-position: top;
  transition: opacity 0.25s cubic-bezier(0, 0, 0.2, 1);
  content: '';
  pointer-events: none;
}

.vuetube__thumbnail {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.vuetube__image {
  width: inherit;
  height: inherit;
  object-fit: cover;
  object-position: center;
  vertical-align: top;
}

.vuetube__button {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  margin: 0;
  padding: 0;
  overflow: visible;
  font-size: 100%;
  font-family: inherit;
  text-transform: none;
  background-color: transparent;
  border: none;
  transform: translate(-50%, -50%);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  cursor: pointer;
  transition: opacity 0.25s cubic-bezier(0, 0, 0.2, 1),
    visibility 0.25s cubic-bezier(0, 0, 0.2, 1);
  -webkit-appearance: button;
}

.vuetube__button::-moz-focus-inner {
  padding: 0;
  border-style: none;
}

.vuetube__button:-moz-focusring {
  outline: 1px dotted;
}

.vuetube__icon {
  display: block;
  width: 68px;
  height: 48px;
}

.vuetube__icon-bg {
  transition: fill 0.1s cubic-bezier(0.4, 0, 1, 1),
    fill-opacity 0.1s cubic-bezier(0.4, 0, 1, 1);
  fill: #212121;
  fill-opacity: 0.8;
}

.vuetube:hover .vuetube__icon-bg {
  transition: fill 0.1s cubic-bezier(0, 0, 0.2, 1),
    fill-opacity 0.1s cubic-bezier(0, 0, 0.2, 1);
  fill: #f00;
  fill-opacity: 1;
}

.vuetube__icon-triangle {
  fill: #fff;
}

.vuetube__iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.vuetube--played .vuetube__box::before {
  opacity: 0;
}

.vuetube--played .vuetube__button {
  visibility: hidden;
  opacity: 0;
}

.vuetube__button:focus:not(:focus-visible) {
  outline: none;
}
</style>