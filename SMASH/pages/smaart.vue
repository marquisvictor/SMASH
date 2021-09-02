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
          class="grid grid-cols-1 gap-6 p-10 mx-auto  md:w-9/12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2"
        >
          <div
            v-for="video in smaartVideos"
            :key="video.videoId"
            class="flex flex-col justify-around overflow-hidden rounded shadow-lg "
          >
            <VueTube :videoId="video.videoId" class="flex-shrink-0 w-full" />
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
import 'vuetube/dist/vuetube.css'
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
