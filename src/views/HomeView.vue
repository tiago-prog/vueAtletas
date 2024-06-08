<template>
  <div class="atletas">
    
      <h1>Lista de Atletas</h1>
      <section class="atletaCard">
        <div  v-for="user in getUsers" :key="user.id">
          <div class="items">
            <span>ID: {{ user.atleta_id }}</span>
            <span>Nome: {{ user.username }} </span> 
            <button @click="redirecionarUsuario(user)">Exibir</button>
          </div>
        </div>
      </section>
  </div>
</template>


<script setup>
  import { ref, onMounted, computed } from "vue";
  import { useRouter } from 'vue-router'
  import { useUserStore } from "../stores/atletasStore.js";
  const store = useUserStore();
  const router = useRouter();

  // Router
  const redirecionarUsuario = (user) => {
    store.setAtleta(JSON.stringify(user))
    router.push({ name: 'atleta', query: { 
      userID: user.atleta_id
    }})
  }

  // Users
  const getUsers = computed(() => {
    return store.getUsers;
  });


  const users = computed(() => {
    return store.users;
  });
  onMounted(() => {
    store.fetchUsers();
  });
</script>

<style scoped>
.atletas {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.atletaCard {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 10rem);
}
.items {
  margin: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border: solid;
}

</style>
