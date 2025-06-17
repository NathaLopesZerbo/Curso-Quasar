<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          Teste
        </q-toolbar-title>
        <q-btn :label="name" icon="person" rounded flat/>
        <q-menu>
          <q-list>
            <q-item>
              <q-btn label="Sair" @click="authStore.logout"/>
              
            </q-item>
          </q-list>
        </q-menu>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
    
  </q-layout>
</template>

<script lang="ts">
import { storeToRefs } from 'pinia';
import { useAuthStore } from 'src/stores/auth';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'MainLayout',

  setup() {
      const authStore = useAuthStore()
      const {name} = storeToRefs(authStore)


      authStore.login('admin','admin')
      

    return{
      authStore,
      name
    }
  }

});
</script>
