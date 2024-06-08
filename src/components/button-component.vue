<template  >
    <button @click="open = true" class="removeButton">
        <img :src="iconRemove" alt="Remover Semana Do Calendário">
    </button>

    <Teleport to="body">
    <Transition>
        <div v-if="open" class="modal">
        <p>Tem certeza que quer excluir essa semana?</p>
        <button  class="cancel" @click="open = false">Cancelar</button>
        <button  class="next" @click="deleteWeek(semana)">Continuar</button>
        </div>
    </Transition>
      <div v-if="open == true" class="overlay"></div>
    </Teleport>
</template>


<script setup>
    import { ref } from "vue";
    import iconRemove from './icons/remove.svg'
    import { useUserStore } from "../stores/atletasStore.js";
    import { useTrashStore } from "../stores/trashStore.js";
    

    const trashStore = useTrashStore()
    const store = useUserStore()
    
    const open = ref(false)


  const deleteWeek = (semana) => {
    open.value = false
    trashStore.trashUpdate(store.user, semana)
    store.removeWeek(semana)
  }

    const props = defineProps({ 
        semana: {
            type: Number,
            required: true
        }
    })
</script>

<style lang="scss">
    .removeButton {
        background-color: var(--color-button-delete);
        border-radius: 20%;
        margin: 0 1rem 0 1rem;
    }

    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5); /* Cor cinza semitransparente */
    }

    .modal {    
  background-color: var(--color-background-soft);
  text-align: center;
  position: fixed;
  z-index: 999;
  top: 10%;
  left: 50%;
  width: 25rem;
  height: 10rem;
  margin-left: -12rem;
  padding: 3.5rem;
  border-radius: 1rem;

p {
  margin-bottom: 1rem;
}

button {
  padding: .3rem;
}

  .cancel {
    background-color: var(--color-background-soft);
    color:  var(--vt-c-red);
    border: none;
    font-weight: 600;
    margin-right: 2.5rem;
  }

  .next {
    background-color: var(--vt-c-blue);
    color: white;
  }

  .next, .cancel:hover {
    cursor: pointer;
  }
}

.v-enter-active {
  transition: opacity 0.3s ease-out;
}
.v-leave-active {
  transition: opacity 0.3s ease-in;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>