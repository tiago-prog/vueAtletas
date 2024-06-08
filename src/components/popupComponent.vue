<script setup>
  //  const props = defineProps({
  //       open: {
  //           type: Boolean,
  //           required: true
  //       }
  //  })
  import { ref } from 'vue'

const open = ref(false)
</script>

<template>
<button @click="open = true">Open Modal</button>

<Teleport to="body">
  <Transition>
    <div v-if="open" class="modal">
      <p>Tem certeza que quer excluir essa semana?</p>
      <button  class="cancel" @click="open = false">Cancelar</button>
      <button  class="next" @click="open = false">Continuar</button>
    </div>
  </Transition>
</Teleport>
</template>

<style lang="scss" scoped>
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
    background-color: var(--vt-c-red);
    color: white;
    margin-right: 1rem;
  }

  .next {
    background-color: var(--vt-c-blue);
    color: white;
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