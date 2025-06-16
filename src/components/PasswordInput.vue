<template>

  <q-input :type="isPsw ? 'password' : 'text'" v-model="value">
    <template v-slot:append> 
      <q-icon :name=" isPsw ? 'visibility' : 'visibility_off'" @click="isPsw = !isPsw"> 
      </q-icon>
    </template>
  </q-input>

</template>

<script  lang="ts">
import { computed, defineComponent, ref } from 'vue';
  export default defineComponent({
    name: 'PasswordInput',
    props: {
      modelValue: {
        type:String,
        required: true
      }
    },
    setup(props, {emit}) {
      const value = computed({
        get: () => props.modelValue,
        set: value => emit('update:modelValue', value)
      })

      const isPsw = ref<boolean>(true)

      return{
        value,
        isPsw
      }
    }
  })
  
</script>
