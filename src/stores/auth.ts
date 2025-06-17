import { defineStore, acceptHMRUpdate } from 'pinia';

interface User{
  name:string;
  email: string;
}

interface AuthStoreState{
  user: User | false
} 

export const useAuthStore = defineStore('auth', {
  state: (): AuthStoreState => ({
    user: false
  }),

  getters: {
    name(state){
      return state.user ? state.user.name: ''
    },
     email(state){
      return state.user ? state.user.email: ''
    }
  },

  actions: {
    login (username: string, password: string): User | false{
      this.user = false
      if(username === 'admin@admin.com' && password === 'admin1234'){
        this.user ={
          name: 'Administrador',
          email: 'admin@admin.com'
        }
      }
      return this.user
    },
    logout (){
      this.user = false
    }
  }
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot));
}
