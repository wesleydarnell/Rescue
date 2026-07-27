declare module '*.ejs' {
  const template: (env?: Record<string, unknown>) => string
  export default template
}
