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

      <q-select
        v-model="gender"
        label="Gênero"
        filled
        :options="['Masculino', 'Feminino']"
      />

      <PasswordInput v-model="password" />

      <q-checkbox v-model="term" label="Aceito os termos de uso" />

      <q-btn label="Salvar" class="bg-blue-13 text-white" @click="onSave" />
    </q-form>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useQuasar } from 'quasar'
import PasswordInput from 'src/components/PasswordInput.vue'

const { notify } = useQuasar()

const name = ref('')
const bornDate = ref('')
const gender = ref('')
const term = ref(false)
const password = ref('')

 function onSave() {
  if (!name.value || !bornDate.value || !gender.value || !term.value || !password.value){
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
</script>
