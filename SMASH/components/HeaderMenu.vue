<template>
  
</template>

<script>
import DownArrow from './DownArrow.vue'

export default {
  name: 'DownArrow',
  components: {
    DownArrow,
  },
  props: {
    rootName: {
      type: String,
      default: 'Placeholder',
    },
  },
}
</script>
