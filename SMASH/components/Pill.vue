<template>
  <span
    class="px-3 py-1 text-xs font-bold tracking-tight text-white md:text-sm rounded-2xl"
    :class="color"
  >
    {{ text }}
  </span>
</template>
<script>
export default {
  name: 'Pill',
  props: {
    text: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: false,
      default: 'bg-indigo-500'
    },
  },
}
</script>