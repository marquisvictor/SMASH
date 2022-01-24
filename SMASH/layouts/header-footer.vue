<template>
  <div class="antialiased">
    <Header />
    <Nuxt class="min-h-screen px-5" />
    <Footer />
  </div>
</template>
<script>
import Footer from '@/components/Footer'
import Header from '@/components/Header/Header'
export default {
  components: {
    Header,
    Footer,
  },
}
</script>
<style></style>
