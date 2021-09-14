<template>
  <div class="flex flex-row items-start justify-center">
    <div
      class="max-w-4xl p-4 mx-2 mt-10 mb-16 space-y-12 overflow-hidden bg-gray-100 rounded-md shadow-2xl  md:w-10/12 md:mx-10"
    >
      <div class="space-y-4 md:ml-3 md:mt-3">
        <h2 class="text-3xl font-bold tracking-wide">Join Us!</h2>

        <div
          v-if="join.body"
          class="tracking-tight prose prose-lg md:w-6/12"
          v-html="$md.render(join.body)"
        ></div>
      </div>
      <div class="flex items-center justify-center py-10">
        <form
          class="space-y-12"
          netlify-honeypot="bot-field"
          data-netlify="true"
          name="contact"
          method="POST"
          @submit.prevent
        >
          <div class="hidden">
            <label
              >Don’t fill this out if you’re human: <input name="bot-field"
            /></label>
          </div>
          <div class="flex flex-row space-x-10 md:space-x-20">
            <div class="flex flex-col space-y-2 leading-tight tracking-tight">
              <label class="font-bold text-gray-700"> First Name </label>
              <input
                class="
                  mt-0
                  block
                  w-full
                  pl-2
                  pr-0.5
                  bg-gray-50
                  border-0 border-b-2 border-gray-200
                  focus:ring-0
                  focus:border-black
                  py-2
                "
                type="text"
                name="firstName"
                placeholder="John"
              />
            </div>
            <div class="flex flex-col space-y-2 leading-tight tracking-tight">
              <label class="font-bold text-gray-700"> Last Name </label>
              <input
                class="
                  mt-0
                  block
                  w-full
                  pl-2
                  pr-0.5
                  bg-gray-50
                  border-0 border-b-2 border-gray-200
                  focus:ring-0
                  focus:border-black
                  py-2
                "
                type="text"
                name="lastName"
                placeholder="Smith"
              />
            </div>
          </div>
          <div
            class="flex flex-row items-center justify-center space-x-6  md:space-x-12"
          >
            <label class="font-bold text-gray-700"> Email </label>
            <input
              class="
                mt-0
                block
                w-full
                pl-2
                pr-0.5
                bg-gray-50
                border-0 border-b-2 border-gray-200
                focus:ring-0
                focus:border-black
              "
              type="email"
              name="email"
              placeholder="john@example.com"
            />
          </div>
          <div class="flex flex-col items-center justify-center space-x-12">
            <textarea
              class="flex-shrink-0 block w-full p-1 mt-0 border-0 border-b-2 border-gray-200  focus:ring-0 focus:border-black"
              name="message"
            ></textarea>
          </div>
          <div class="flex flex-row items-center justify-center">
            <button
              class="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-black border border-transparent rounded-md shadow-sm  hover:bg-indigo-700"
            >
              Send!
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  layout: 'header-footer',
  data() {
    return {
      join: '',
    }
  },
  async fetch() {
    const join = await this.$content('pages/join').fetch()
    this.join = join
  },
}
</script>
