<script setup lang="ts">
import { provide } from 'vue'

const palette = {
    /* Snow & ice */
    'snow-white': '#fbfdff',
    'snow-drift': '#eef4fa',
    'snow-shadow': '#d6e4f0',
    'ice-light': '#bfdcf0',
    'ice-blue': '#8fc1e3',
    'glacier': '#5da9d6',

    /* Sky */
    'sky-day': '#a8cfe8',
    'sky-dusk': '#5c7ba6',
    'sky-night': '#1b2a44',
    'sky-midnight': '#0d1626',

    /* Terrain & nature */
    'pine-dark': '#1f3d2e',
    'pine': '#2e5c43',
    'pine-frosted': '#6f8f7d',
    'rock-slate': '#4a5666',
    'timber': '#7a5c43',

    /* Accents */
    'aurora-teal': '#4fd8c4',
    'aurora-violet': '#9b7ede',
    'ember': '#e8895a',
    'warning': '#d9635e'
} satisfies Record<ThemePaletteKey, ThemeValue>

const semantic = {
    'color-bg': palette['sky-midnight'],
    'color-surface': 'rgba(27, 42, 68, 0.85)',
    'color-border': palette['rock-slate'],
    'color-text': palette['snow-white'],
    'color-text-muted': palette['snow-shadow'],
    'color-accent': palette['aurora-teal']
} satisfies Record<ThemeSemanticKey, ThemeValue>

const theme = { ...palette, ...semantic } satisfies BaseTheme

defineExpose({
    theme
})

provide('theme', theme)
</script>

<template>
    
</template>

<style>
:root {
  /* Snow & ice */
  --snow-white: v-bind(theme['snow-white']);
  --snow-drift: v-bind(theme['snow-drift']);
  --snow-shadow: v-bind(theme['snow-shadow']);
  --ice-light: v-bind(theme['ice-light']);
  --ice-blue: v-bind(theme['ice-blue']);
  --glacier: v-bind(theme['glacier']);

  /* Sky */
  --sky-day: v-bind(theme['sky-day']);
  --sky-dusk: v-bind(theme['sky-dusk']);
  --sky-night: v-bind(theme['sky-night']);
  --sky-midnight: v-bind(theme['sky-midnight']);

  /* Terrain & nature */
  --pine-dark: v-bind(theme['pine-dark']);
  --pine: v-bind(theme['pine']);
  --pine-frosted: v-bind(theme['pine-frosted']);
  --rock-slate: v-bind(theme['rock-slate']);
  --timber: v-bind(theme['timber']);

  /* Accents */
  --aurora-teal: v-bind(theme['aurora-teal']);
  --aurora-violet: v-bind(theme['aurora-violet']);
  --ember: v-bind(theme['ember']);
  --warning: v-bind(theme['warning']);

  /* Semantic UI tokens */
  --color-bg: v-bind(theme['color-bg']);
  --color-surface: v-bind(theme['color-surface']);
  --color-border: v-bind(theme['color-border']);
  --color-text: v-bind(theme['color-text']);
  --color-text-muted: v-bind(theme['color-text-muted']);
  --color-accent: v-bind(theme['color-accent']);
}
</style>