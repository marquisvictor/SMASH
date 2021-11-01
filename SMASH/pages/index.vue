<template>
  <div
    class="mx-auto overflow-x-hidden overflow-y-hidden font-sans bg-white  max-w-7xl"
  >
    <div class="flex flex-col min-h-screen">
      <Header class="flex-shrink-0" />
      <index-title class="flex-grow min-h-full" />
    </div>
    <index-text class="section" />
    <index-news class="section" />
    <Footer class="mt-32" />
  </div>
</template>

<script>
import Header from '@/components/Header/Header.vue'
import IndexNews from '@/components/Index/index-news.vue'
import IndexText from '@/components/Index/index-text.vue'
import IndexTitle from '@/components/Index/index-title.vue'
import Footer from '@/components/Footer.vue'
export default {
  head() {
    return {
      script: [
        {
          src: 'https://identity.netlify.com/v1/netlify-identity-widget.js',
        },
      ],
    }
  },
}
</script>

<<<<<<< HEAD
<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
=======
<style scoped>
.section {
  min-height: 80vh;
>>>>>>> 782342d9581a7bc40e85c5c78f736afe0f45b87a
}
</style>
