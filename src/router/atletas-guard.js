import { useUserStore } from '../stores/atletasStore.js'
import { createApp } from 'vue'
import App from '../App.vue'
import { storeToRefs, createPinia } from 'pinia'

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)


export default function (to, from, next) {
    
    const store = useUserStore()
    const { users } = storeToRefs(store)
    const ID = (users) => {
        return users.map((res) => res.atleta_id)
    }

    if (!to.query.userID) {
      next({
        path: '/', // Redirecionar para a rota principal se nenhum ID for fornecido
        query: { error: 'ID de atleta não especificado' }, // Passar mensagem de erro na query
      });
      return;
    } else if (ID(users.value).length == 0) {
        alert("Espertinho você neh?")
        next({
            path: '/', // Redirecionar para a rota principal se o ID não existir
            query: { error: 'ID de atleta não existe' }, // Passar mensagem de erro na query
        });
    }

    // Se o ID estiver presente, permita o acesso à rota
    next();
  }