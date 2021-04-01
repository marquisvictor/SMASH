<template>
  <div class="font-sans bg-black background">
    <div
      class="container flex flex-col w-screen h-screen mx-auto overflow-hidden text-white"
    >
      <div class="flex items-center justify-end flex-none h-16">
        <div class="w-10 h-10 p-2 m-2 bg-green-600"></div>
        <div class="w-10 h-10 p-2 m-2 bg-green-600"></div>
      </div>
      <div class="flex flex-col flex-1 px-10">
        <div class="flex justify-between p-5 flex-0">
          <div class="flex-initial w-1/2 space-y-9">
            <h1
              class="font-medium tracking-wider text-7xl"
              style="color: #deb992"
            >
              SMASH
            </h1>
            <p
              class="text-2xl italic font-light tracking-wide text-yellow-400"
              style="color: #8b7966"
            >
              an initiative of the CGIS
            </p>
          </div>
          <div class="flex-initial w-1/2">
            <nav
              class="flex flex-col items-center py-5 font-medium flex-inital h-1/3"
              style="color: #1ba098"
            >
              <ul
                class="flex items-center space-x-6 text-3xl justify-evenly"
                style="line-height: 1rem"
              >
                <li>about</li>
                <li>news</li>
                <li>research</li>
              </ul>
            </nav>
          </div>
        </div>
        <div class="flex justify-between flex-1">
          <div class="flex-initial w-1/3"></div>
          <div
            class="relative flex flex-col items-center justify-center sphere"
          >
            <client-only>
              <Globe
                class="absolute"
                style="bottom: -50%"
                bump-Image-Url="//unpkg.com/three-globe/example/img/earth-topology.png"
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                :width="950"
                :height="950"
                :atmosphereAltitude="0.2"
                :pointOfView="{ altitude: 3.5 }"
                backgroundColor="rgba(255,0,255,0)"
              />
            </client-only>
          </div>
          <div class="flex-initial w-1/3"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    Globe: () => (process.browser ? import('@/components-lazy/Globe') : null),
  },
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
      ],
    }
  },
}
</script>

<style>
.background {
  /* background-image: url('//unpkg.com/three-globe/example/img/night-sky.png'); */
  background-color: #051622;
}
</style>
