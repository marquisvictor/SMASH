<template>
  <div
    class="container w-full mx-auto mt-16 space-y-12 overflow-hidden max-w-7xl"
  >
    <div class="w-full py-2 space-y-2 text-center">
      <h2 class="text-6xl font-bold tracking-wide md:text-7xl">
        {{ title }}
      </h2>
      <p v-if="subtitle" class="text-2xl font-medium">{{ subtitle }}</p>
    </div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'PageTitle',
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: false,
    },
  },
}
</script>
