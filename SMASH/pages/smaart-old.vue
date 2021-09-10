<template>
  <div>
    <pageTitle
      title="SMAART"
      subtitle="Spatial Multiscale Analytics, Applied Research, and Technology Seminar"
    >
      <div class="flex flex-col items-center">
        <!-- <p
          class="max-w-3xl mx-5 mt-4 text-2xl font-medium tracking-wide text-justify md:mx-0"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Erat
          imperdiet sed euismod nisi porta lorem mollis aliquam ut. Et magnis
          dis parturient montes.
        </p> -->
        <div class="flex flex-wrap m-auto -mx-2 overflow-hidden"></div>

        <div
          class="grid grid-cols-1 gap-6 p-10 mx-auto md:w-9/12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2"
        >
          <div
            v-for="video in smaartVideos"
            :key="video.videoId"
            class="flex flex-col justify-around overflow-hidden rounded shadow-lg "
          >
            <vue-tube :videoId="video.videoId" class="flex-shrink-0 w-full" />
            <div class="flex flex-col justify-around flex-grow px-6 py-4">
              <div class="mb-2 text-xl font-medium text-left">
                {{ video.title }}
              </div>
              <p class="text-xl font-normal text-center">
                {{ video.presenter }}
              </p>
              <p class="text-center">{{ video.date }}</p>
            </div>
          </div>
        </div>
      </div>
    </pageTitle>
  </div>
</template>

<script>
import pageTitle from '@/components/pageTitle.vue'
import { VueTube } from 'vuetube'
export default {
  components: {
    pageTitle,
    VueTube,
  },
  async asyncData({ $content }) {
    const smaartVideos = await $content('smaart')
      .only(['title', 'presenter', 'date', 'videoId'])
      .fetch()

    return {
      smaartVideos,
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