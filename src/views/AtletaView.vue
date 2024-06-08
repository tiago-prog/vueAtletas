<template>
    <main class="atletaView">
        <h1 class="titulo">Informações do Atleta</h1>
        <div class="buttons">
            <button class="meu-botao">Atualizar</button>
            <button class="button-delete-default">Excluir</button>
        </div>
        <p class="nome">NOME: {{ atleta.username }}</p>
        <p class="objetivo">OBJETIVO: {{ atleta.goal }}</p>
        <span>ZONAS:</span>
        <section class="zonas">
            <div 
                v-for="key in Object.keys(atleta.zones[0] != undefined ? atleta.zones[0] : [])" 
                :key="key">
                <div class="zona">
                    <p class="zona-conteudo">{{ key }}:</p>
                    <p class="zona-conteudo">{{ atleta.zones[0][key] }}</p>
                </div>
            </div>
        </section>

        <section v-for="treino in atleta.training" >
            <trainingComponent 
                :semana="treino.semana"
                :segunda_aq="treino.segunda_aq"
                :segunda_main="treino.segunda_main"
                :segunda_esf="treino.segunda_esf"
                :terca_aq="treino.terca_aq"
                :terca_main="treino.terca_main"
                :terca_esf="treino.terca_esf"
                :quarta_aq="treino.quarta_aq"
                :quarta_main="treino.quarta_main"
                :quarta_esf="treino.quarta_esf"
                :quinta_aq="treino.quinta_aq"
                :quinta_main="treino.quinta_main"
                :quinta_esf="treino.quinta_esf"
                :sexta_aq="treino.sexta_aq"
                :sexta_main="treino.sexta_main"
                :sexta_esf="treino.sexta_esf"
                :sabado_aq="treino.sabado_aq"
                :sabado_main="treino.sabado_main"
                :sabado_esf="treino.sabado_esf"
                :domingo_aq="treino.domingo_aq"
                :domingo_main="treino.domingo_main"
                :domingo_esf="treino.domingo_esf"
            />
        </section>
       
    </main>
</template> 
  
<script setup>
  import { computed, ref } from "vue";
  import { useUserStore } from '../stores/atletasStore.js';
  import trainingComponent from '../components/trainingComponent.vue'
 

  const open = ref(false)


  const store = useUserStore();
  const atleta = computed(() => {
      return store.user;
    });
</script>   

<style lang="scss" scoped>
    .atletaView {
        display: flex;
        flex-direction: column;
        align-items: center;

        span {
            font-family: Roboto, sans-serif;
            font-weight: bold;
            font-size: 16px;
            color: #333; /* Cor preta */
            margin: 10px;
        }

        section {
            margin: 1rem;
        }
    }

    .buttons button {
        margin: 5px
    }

    .button-delete-default {
        background-color: #f44336; /* Cor de fundo vermelha */
        color: #fff; /* Cor do texto branca */
        padding: 10px 20px;
        border-radius: 4px;
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
        transition: background-color 0.3s ease; /* Efeito de transição */
    }

    .button-delete-default:hover {
        background-color: #c9302c; /* Cor de fundo vermelha mais escura */
    }

    .meu-botao {
        background-color: #007bff; /* Cor azul primária */
        color: #fff; /* Cor branca */
        padding: 10px 20px;
        border-radius: 4px;
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
        transition: background-color 0.3s ease; /* Efeito de transição */
    }

    .meu-botao:hover {
        background-color: #0056b3; /* Cor azul primária mais escura */
    }

    .titulo {
        font-family: Roboto, sans-serif;
        font-weight: bold;
        font-size: 24px;
        color: #fff; /* Cor branca */
    }

    .nome {
        font-family: Roboto, sans-serif;
        font-weight: normal;
        font-size: 16px;
        color: #e0e0e0; /* Cor cinza claro */
    }


    .objetivo {
        font-family: Roboto, sans-serif;
        font-weight: normal;
        font-size: 14px;
        color: #e0e0e0; /* Cor cinza claro */
    }   
    .zonas {
        display: flex;
        flex-direction: row;
        margin-top: 10px;
    }

    .zona {
        flex: 1 0 30%;
        padding: 10px;
        background-color: var( --vt-c-black-mute);
        border-radius: 4px;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        margin-right: 10px;
    }

    .zona-conteudo {
        font-family: Roboto, sans-serif;
        font-weight: normal;
        font-size: 14px;
        color: #666; /* Cor cinza escuro */
    }
</style>