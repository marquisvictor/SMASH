<template>
  <div class="relative">
    <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->

    <a
      :href="rootLink"
      class="text-xl font-medium text-gray-500 cursor-pointer hover:text-gray-900"
      v-if="!menuItems && !bottomItems"
    >
      {{ rootTitle }}
    </a>
    <button
      v-else
      type="button"
      class="inline-flex items-center text-xl font-medium bg-white rounded-md group hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      :class="active ? 'text-gray-900' : 'text-gray-500'"
      :aria-expanded="isOpen"
      @click="toggle"
    >
      <span>{{ rootTitle }}</span>
      <svg
        class="w-5 h-5 ml-2 text-gray-400 group-hover:text-gray-500"
        :class="active ? 'text-gray-600' : 'text-gray-400'"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-class="translate-y-1 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-1 opacity-0"
      v-if="menuItems"
    >
      <div
        v-show="isOpen"
        v-click-outside="hide"
        class="absolute z-10 w-screen max-w-md px-2 mt-3 -ml-4 transform sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
      >
        <div
          class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5"
        >
          <div class="relative grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8">
            <a
              v-for="item in menuItems"
              :key="item.link"
              :href="item.link || defaultLink"
              class="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50"
            >
              <img
                v-if="item.image"
                class="flex-shrink-0 w-6 h-6 text-indigo-600"
                aria-hidden="true"
                :src="require(`~/assets/img/${item.image}`) || defaultImage"
              />

              <div class="ml-4">
                <p class="text-base font-medium text-gray-900">
                  {{ item.title }}
                </p>
                <p class="mt-1 text-sm text-gray-500">
                  {{ item.subtitle }}
                </p>
              </div>
            </a>
          </div>
          <div
            v-if="bottomItems"
            class="px-5 py-5 space-y-6 bg-gray-50 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8"
          >
            <div
              v-for="(item, index) in bottomItems"
              :key="index"
              class="flow-root"
            >
              <a
                :href="item.link || defaultLink"
                class="flex items-center p-3 -m-3 text-base font-medium text-gray-900 rounded-md hover:bg-gray-100"
              >
                <img
                  v-if="item.image"
                  class="flex-shrink-0 w-6 h-6 text-gray-400"
                  aria-hidden="true"
                  :src="require(`~/assets/img/${item.image}`) || defaultImage"
                />

                <span class="ml-3">{{ item.title }}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'
export default {
  name: 'MenuItemDesktop',
  directives: {
    ClickOutside,
  },
  props: {
    active: {
      type: Boolean,
      default: false,
    },
    menu: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    isOpen: false,
    defaultLink: '/',
    defaultImage: 'default.png',
    defaultTitle: 'Placeholder',
  }),
  computed: {
    menuItems() {
      return this.menu?.submenu || null
    },
    rootTitle() {
      return this.menu?.title || this.defaultTitle
    },
    bottomItems() {
      return this.menu?.bottomMenu || null
    },
    rootLink() {
      return this.menu?.link || null
    },
  },
  mounted() {
    this.popupItem = this.$el
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    },
    hide() {
      this.isOpen = false
    },
  },
}
</script>
