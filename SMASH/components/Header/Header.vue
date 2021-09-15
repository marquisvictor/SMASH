<template>
  <header class="relative w-full bg-white">
    <div class="px-4 mx-auto max-w-7xl sm:px-6">
      <div
        class="flex items-center justify-between py-6 border-b-2 border-gray-100  md:justify-start md:space-x-10"
      >
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <nuxt-link v-if="!onHome" to="/" class="flex items-center">
            <span class="sr-only">SMASH</span>

            <nuxt-img
              class="w-auto h-8 sm:h-10"
              height="40"
              width="40"
              :src="image"
              alt="SMASH Logo"
              quality="50"
            />
            <abbr
              v-if="!onHome"
              class="pl-2 text-4xl font-bold tracking-wider"
              title="Spatial Multiscale Analytical Science Hub"
              style="text-decoration: none !important"
            >
              SMASH
            </abbr>
          </nuxt-link>
        </div>
        <div id="first" class="-my-2 -mr-2 md:hidden">
          <button
            type="button"
            class="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md  hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            aria-expanded="false"
            @click="toggleMobileMenu"
          >
            <span class="sr-only">Open menu</span>
            <Icon
              icon="heroicons-outline:menu"
              class="w-6 h-6"
              aria-hidden="true"
            />
          </button>
        </div>

        <nav class="hidden space-x-10 md:flex" role="navigation">
          <MenuItemDesktop
            v-for="(item, index) in navMenuItems"
            :key="index"
            :menu="item"
          />
        </nav>
        <div class="items-center justify-end hidden md:flex md:flex-1 lg:w-0">
          <a
            :href="button.link"
            class="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white bg-black border border-transparent rounded-md shadow-sm  whitespace-nowrap hover:bg-indigo-700"
          >
            {{ button.title }}
          </a>
        </div>
      </div>
    </div>

    <!--
    Mobile menu
    -->
    <div
      v-if="mobileMenuOpen"
      class="absolute inset-x-0 top-0 p-2 transition origin-top-right transform  md:hidden"
      style="z-index: 80"
    >
      <div
        class="bg-white divide-y-2 rounded-lg shadow-lg  ring-1 ring-black ring-opacity-5 divide-gray-50"
      >
        <div class="px-5 pt-5 pb-6">
          <div class="flex items-center justify-between">
            <nuxt-link to="/" class="flex items-center space-x-2">
              <nuxt-img
                height="40"
                width="40"
                class="w-auto h-8"
                :src="image"
                alt="SMASH Logo"
              />
              <p class="text-lg font-bold tracking-wider">SMASH</p>
            </nuxt-link>

            <div class="-mr-2">
              <button
                type="button"
                class="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md  hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                @click="closeMobileMenu"
              >
                <span class="sr-only">Close menu</span>
                <Icon
                  icon="heroicons-outline:x"
                  class="w-6 h-6"
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
          <div class="mt-6 ml-1">
            <nav class="grid gap-y-8" role="navigation">
              <a
                v-for="navMenuRowItem in mobileNavMenuItems.rowItems"
                :key="navMenuRowItem.title"
                :href="navMenuRowItem.link"
                class="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50"
              >
                <Icon
                  :icon="navMenuRowItem.icon"
                  class="flex-shrink-0 w-6 h-6 text-indigo-600"
                  aria-hidden="true"
                />

                <span class="ml-3 text-base font-medium text-gray-900">
                  {{ navMenuRowItem.title }}
                </span>
              </a>
            </nav>
          </div>
        </div>
        <div class="px-5 py-6 space-y-6">
          <div class="flex items-center justify-evenly">
            <a
              v-for="navMenuBottomItem in mobileNavMenuItems.bottomItems"
              :key="navMenuBottomItem.title"
              :href="navMenuBottomItem.link"
              class="text-base font-medium text-gray-900 hover:text-gray-700"
            >
              <div class="flex items-center justify-center flex-shrink-0">
                <Icon
                  :icon="navMenuBottomItem.icon"
                  class="w-6 h-6 text-black"
                  aria-hidden="true"
                />
              </div>
              {{ navMenuBottomItem.title }}
            </a>
          </div>
          <div>
            <a
              :href="button.link"
              class="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-black border border-transparent rounded-md shadow-sm  hover:bg-indigo-700"
            >
              {{ button.title }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import MenuItemDesktop from '@/components/Header/MenuItemDesktop'
import Icon from '@/components/Icon.vue'
export default {
  name: 'Header',
  components: {
    MenuItemDesktop,
    Icon,
  },
  props: {
    height: {
      type: Number,
      default: 400,
    },
  },
  data() {
    return {
      navMenuItems: [],
      button: {},
      mobileMenuOpen: false,
      branding: {},
      image: '',
    }
  },
  async fetch() {
    const content = await this.$content('core/header')
      .only(['navMenuItems', 'button', 'image'])
      .fetch()
    this.image = await this.getImageLink(content.image)
    this.navMenuItems = content.navMenuItems
    this.button = content.button
  },
  computed: {
    onHome() {
      if (this.$route.path === '/') {
        return true
      }
      return false
    },
    mobileNavMenuItems() {
      const mobileNavMenuItems = { rowItems: [], bottomItems: [] }
      this.navMenuItems.forEach((el) => {
        if (!el.rowItems) {
          // TODO
          return
        }

        mobileNavMenuItems.rowItems.push(el.rowItems)
        mobileNavMenuItems.bottomItems.push(el.bottomItems)
      })

      mobileNavMenuItems.rowItems = mobileNavMenuItems.rowItems.flat(2)
      mobileNavMenuItems.bottomItems = mobileNavMenuItems.bottomItems.flat(2)
      return mobileNavMenuItems
    },
    imageLink() {
      if (!this.image) {
        this.getImageLink()
      }
      return '/uploads/' + this.image.replace('/static/uploads/', '')
    },
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen
    },
    closeMobileMenu() {
      this.mobileMenuOpen = false
    },
    getImageLink(image) {
      return '/uploads/' + image.replace('/static/uploads/', '')
    },
  },
}
</script>
