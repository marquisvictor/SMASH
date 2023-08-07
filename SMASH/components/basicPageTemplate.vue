<template>
  <section
    class="container w-full mx-auto mt-16 space-y-12 overflow-hidden max-w-7xl"
  >
    <div class="w-full py-2 space-y-2 text-center">
      <slot name="title">
        <h2
          class="max-w-4xl mx-auto text-5xl font-bold tracking-wide md:text-6xl"
        >
          {{ title || null }}
        </h2>
      </slot>
      <slot name="subtitle">
        <p v-if="subtitle" class="text-2xl font-medium">{{ subtitle }}</p>
      </slot>
    </div>

    <div class="max-w-6xl mx-auto mt-4">
      <nuxt-content
        v-if="bodyContent"
        :document="bodyContent"
        class="mx-auto prose text-justify md:prose-2xl"
      />
      <slot></slot>
    </div>
  </section>
</template>
<script>
export default {
  name: 'BasicPageTemplate',
  props: {
    title: {
      type: String,
      required: false,
      default: '',
    },
    subtitle: {
      type: String,
      required: false,
      default: '',
    },
    bodyContent: {
      type: String,
      required: false,
      default: '',
    },
  },
}
</script>
<style>
.md\:prose-2xl h1 {
  font-size: 2em !important;
}

.prose-lg h1 {
  font-size: 1.5em;
}

.custom_h1 {
  font-size: 1.5em;
}
</style>
