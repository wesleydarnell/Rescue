/**
 * Types for the theme map defined in `src/BaseTheme.vue`.
 *
 * These are global — no import needed. Keep the key unions in sync with the
 * `theme` object in BaseTheme.vue; the `satisfies BaseTheme` there makes a
 * mismatch a compile error.
 */

/**
 * A resolved color literal. Deliberately excludes `var(--…)`: every token must
 * be readable by both CSS and THREE.Color, and Three cannot resolve CSS vars.
 */
type ThemeValue
  = | `#${string}`
    | `rgb(${string})`
    | `rgba(${string})`
    | `hsl(${string})`
    | `hsla(${string})`

/** Raw palette entries. Always hold literal color values. */
type ThemePaletteKey
  = | 'snow-white'
    | 'snow-drift'
    | 'snow-shadow'
    | 'ice-light'
    | 'ice-blue'
    | 'glacier'
    | 'sky-day'
    | 'sky-dusk'
    | 'sky-night'
    | 'sky-midnight'
    | 'pine-dark'
    | 'pine'
    | 'pine-frosted'
    | 'rock-slate'
    | 'timber'
    | 'aurora-teal'
    | 'aurora-violet'
    | 'ember'
    | 'warning'

/** Semantic UI tokens. Alias the palette by referencing its values directly. */
type ThemeSemanticKey
  = | 'color-bg'
    | 'color-surface'
    | 'color-border'
    | 'color-text'
    | 'color-text-muted'
    | 'color-accent'

type ThemeKey = ThemePaletteKey | ThemeSemanticKey

/** The full theme map provided by BaseTheme.vue. */
type BaseTheme = Record<ThemeKey, ThemeValue>

/** What a `<Theme />` template ref exposes via `defineExpose`. */
interface BaseThemeInstance {
  theme: BaseTheme
}
