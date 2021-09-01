<template>
  <div class="relative">
    <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->

    <a
      v-if="!rowItems && !bottomItems"
      :href="link"
      class="text-xl font-medium text-gray-500 cursor-pointer  hover:text-gray-900"
    >
      {{ title }}
    </a>
    <div v-else class="relative">
      <button
        type="button"
        class="relative z-50 inline-flex items-center text-xl font-medium bg-white rounded-md  group hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        :class="active ? 'text-gray-900' : 'text-gray-500'"
        :aria-expanded="isOpen"
        @click="toggle"
        @mouseover="show"
        @mouseleave="delayHide"
      >
        <span>{{ title }}</span>
        <Icon
          icon="ic:outline-keyboard-arrow-down"
          class="flex-shrink-0 w-5 h-5 ml-2 text-gray-400  group-hover:text-gray-500"
          :class="active ? 'text-gray-600' : 'text-gray-400'"
        />
      </button>
      <div
        class="absolute z-0 w-20 h-10 -bottom-5"
        @mouseover="
          show
          mouseInMenu = true
        "
        @mouseleave="
          mouseInMenu = false
          delayHide
        "
      ></div>
    </div>
    <transition
      v-if="rowItems"
      enter-active-class="transition duration-200 ease-out"
      enter-class="translate-y-1 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-1 opacity-0"
    >
      <div
        v-show="isOpen"
        v-click-outside="hide"
        class="absolute z-10 w-screen max-w-sm px-2 mt-3 -ml-4 transform  sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
        @mouseover="
          show
          mouseInMenu = true
        "
        @mouseleave="hide"
      >
        <div
          class="overflow-hidden rounded-lg shadow-lg  ring-1 ring-black ring-opacity-5"
        >
          <div
            class="relative grid gap-6 px-5 py-6 font-medium bg-white  sm:gap-8 sm:p-8"
          >
            <a
              v-for="item in rowItems"
              :key="item.link"
              :href="item.link"
              class="flex items-center p-3 -m-3 rounded-lg hover:bg-gray-50"
            >
              <Icon
                v-if="item.icon"
                :icon="item.icon"
                class="flex-shrink-0 w-6 h-6 text-gray-400  group-hover:text-gray-500"
                :class="active ? 'text-gray-600' : 'text-gray-400'"
                aria-hidden="true"
              />

              <!-- class="flex-shrink-0 w-6 h-6 text-indigo-600" -->

              <div class="ml-4">
                <p class="font-medium text-gray-900 text-md">
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
            class="px-5 py-5 space-y-6  bg-gray-50 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8"
          >
            <div
              v-for="(item, index) in bottomItems"
              :key="index"
              class="flow-root"
            >
              <a
                :href="item.link"
                class="flex items-center p-3 -m-3 text-base font-medium text-gray-900 rounded-md  hover:bg-gray-100"
              >
                <Icon
                  v-if="item.icon"
                  :icon="item.icon"
                  class="text-gray-400 h-7 w-7 group-hover:text-gray-500"
                  :class="active ? 'text-gray-600' : 'text-gray-400'"
                  aria-hidden="true"
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
import Icon from '@/components/Icon.vue'
import ClickOutside from 'vue-click-outside'
export default {
  name: 'MenuItemDesktop',
  components: {
    Icon,
  },
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
    mouseInMenu: false,
  }),
  computed: {
    rowItems() {
      return this.menu?.rowItems || null
    },
    title() {
      return this.menu?.title || this.defaultTitle
    },
    bottomItems() {
      return this.menu?.bottomItems || null
    },
    link() {
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
      this.mouseInMenu = false
    },
    show() {
      this.isOpen = true
    },
    delayHide() {
      setTimeout(() => {
        if (this.mouseInMenu) {
          return
        }
        this.isOpen = false
      }, 1)
    },
  },
}
</script>
