<template>
  <div class="w-full px-20 mt-16 space-y-12">
    <h2 class="w-full py-2 font-bold tracking-wide text-center text-7xl">
      {{ title }}
    </h2>
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
  },
}
</script>
