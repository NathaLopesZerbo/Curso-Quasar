<template>
  <q-input
    :type="isPsw ? 'password' : 'text'"
    v-model="value"
  >
    <template v-slot:append> 
      <q-icon
        :name="isPsw ? 'visibility' : 'visibility_off'"
        @click="isPsw = !isPsw"
        class="cursor-pointer"
      />
    </template>
  </q-input>
</template>

<script setup lang="ts">
import { ref, computed, defineProps, defineEmits } from 'vue'

const props = defineProps<{ modelValue: string }>()

const emit = defineEmits(['update:modelValue'])

const value = computed({
  get: () => props.modelValue,
  set: (val: string) => emit('update:modelValue', val)
})

const isPsw = ref(true)
</script>
