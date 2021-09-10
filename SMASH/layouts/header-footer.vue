<template>
  <div class="antialiased">
    <Header />
    <Nuxt class="min-h-screen" />
    <Footer />
  </div>
</template>
<script>
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer'
export default {
  components: {
    Header,
    Footer,
  },
}
</script>
<style></style>
