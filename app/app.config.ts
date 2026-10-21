export default defineAppConfig({
  ui: {
    colors: {
      primary: 'leaf',
      neutral: 'pine'
    },
    button: {
      slots: {
        base: 'rounded-full font-medium'
      }
    },
    input: {
      slots: { base: 'rounded-xl' },
      defaultVariants: { variant: 'outline' }
    },
    select: {
      slots: { base: 'rounded-xl' }
    },
    textarea: {
      slots: { base: 'rounded-xl' }
    }
  }
})
