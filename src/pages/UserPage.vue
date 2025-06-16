<template>
  <q-page padding>
    <q-form class="q-gutter-md"> 
      <div>
         <q-input model-value="" label="Nome" filled />
      </div>
     
      <q-input model-value="" label="Data de Nascimento" filled class="data">
        <template v-slot:append>
          <q-icon name="event">
            <q-popup-proxy>
              <q-date model-value="" />
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
      <q-select model-value="" label="Gênero" filled :options="[
          'Masculino',
          'Feminino'
      ]"> 
      </q-select>
      <q-checkbox model-value="" label="Aceito os termos de uso"/>
      <q-btn label="Salvar"/>
    </q-form>
  </q-page>
</template>

<script setup lang="ts">

</script>

