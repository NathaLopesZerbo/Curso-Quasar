import { defineBoot } from '#q-app/wrappers'
import PasswordInput from 'src/components/PasswordInput.vue'

declare module '@vue/runtime-core'{
  export interface GlobalComponents{
    PasswordInput: typeof PasswordInput
  }
}

export default defineBoot(({ app }) => {
  app.component( 'PasswordInput', PasswordInput)
})
