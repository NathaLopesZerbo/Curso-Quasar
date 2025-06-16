<template>
  <q-page padding>
    <q-form class="q-gutter-md flex column"> 
      <q-input v-model="name" label="Nome" filled />

      <q-input v-model="bornDate" mask="##/##/####" label="Data de Nascimento" filled class="data">
        <template v-slot:append>
          <q-icon name="event">
            <q-popup-proxy>
              <q-date v-model="bornDate" mask="DD/MM/YYYY"/>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
      <q-select v-model="gender" label="Gênero" filled :options="[
          'Masculino',
          'Feminino'
      ]"> 
      </q-select>
      <PasswordInput v-model="password" />
      <q-checkbox v-model="term" label="Aceito os termos de uso"/>
      <q-btn label="Salvar" class="bg-blue-13 text-white" @click="onSave"/>
    </q-form>
  </q-page>
</template>

<script lang="ts">
import { useQuasar } from 'quasar'
import PasswordInput from 'src/components/PasswordInput.vue'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'UserPage',
  components: {
    PasswordInput
  },
  setup() {
    const { notify } = useQuasar()

    const name = ref<string>('')
    const bornDate = ref<string>('')
    const gender = ref<string>('')
    const term = ref<boolean>(false)
    const password = ref<string>('')

    const onSave = () => {
      if (name.value  === '') {
        notify({
          message: 'Campo está vazio.',
          type: 'negative'
        })
      } else {
        notify({
          message: `${name.value} salvo com sucesso.`,
          type: 'positive'
        })
      }
    }

    return {
      name,
      bornDate,
      gender,
      term,
      password,
      onSave
    }
  }
})
</script>

