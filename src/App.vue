<script setup lang="ts">
import { ref, inject } from 'vue'
import { TresCanvas } from '@tresjs/core'
import TheExperience from './components/TheExperience.vue'

import Theme from './BaseTheme.vue'

const theme = ref<BaseThemeInstance | null>(null)

inject('theme', theme)

</script>

<template>
  <Theme ref="theme" />
  <TresCanvas
    :clear-color="theme?.theme['color-bg']"
    window-size
  >
    <router-view v-slot="{ Component }">
      <transition>
        <component :is="Component" />
      </transition>
    </router-view>
  </TresCanvas>
</template>