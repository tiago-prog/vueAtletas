<template>
    <div class="week-group">
        <h1>Semana {{ semana }}</h1>
        <removeButton :semana="semana" />
        <!-- <a v-if="trashStore.store" @click="trash_undo(semana)">Desfazer</a> -->
    </div>
<p>Seus treinos da semana {{ semana }}</p>
<ul>
    <li>
        <time datetime="2022-02-01">1-<p>segunda</p></time>
        <span>AQUECIMENTO:</span> 
        <p>{{ segunda_aq }}</p>
        <br/>
        <span>PRINCIPAL:</span>  
        <p>{{ segunda_main }}</p>
        <br/>
        <span>ESFRIMENTO:</span>
        <p>{{ segunda_esf }}</p>
      </li>
      <li>
        <time datetime="2022-02-02">2-<p>terça</p></time>
        <span>AQUECIMENTO:</span> 
        <p>{{ terca_aq }}</p>
        <br/>
        <span>PRINCIPAL:</span>  
        <p>{{ terca_main }}</p>
        <br/>
        <span>ESFRIMENTO:</span>
        <p>{{ terca_esf }}</p>
      </li>
      <li>
        <time datetime="2022-02-03">3-<p >quarta</p></time>
        <span>AQUECIMENTO:</span> 
        <p>{{ quarta_aq }}</p>
        <br/>
        <span>PRINCIPAL:</span>  
        <p>{{ quarta_main }}</p>
        <br/>
        <span>ESFRIMENTO:</span>
        <p>{{ quarta_esf }}</p>
      </li>
      <li>
        <time datetime="2022-02-04">4-<p>quinta</p></time>
        <span>AQUECIMENTO:</span> 
        <p>{{ quinta_aq }}</p>
        <br/>
        <span>PRINCIPAL:</span>  
        <p>{{ quinta_main }}</p>
        <br/>
        <span>ESFRIMENTO:</span>
        <p>{{ quinta_esf }}</p>
      </li>
      <li>
        <time datetime="2022-02-05">5-<p>sexta</p></time>
        <span>AQUECIMENTO:</span> 
        <p>{{ sexta_aq }}</p>
        <br/>
        <span>PRINCIPAL:</span>  
        <p>{{ sexta_main }}</p>
        <br/>
        <span>ESFRIMENTO:</span>
        <p>{{ sexta_esf }}</p>
      </li>
      <li>
        <time datetime="2022-02-06">6-<p>sábado</p></time>
        <span>AQUECIMENTO:</span> 
        <p>{{ sabado_aq }}</p>
        <br/>
        <span>PRINCIPAL:</span>  
        <p>{{ sabado_main }}</p>
        <br/>
        <span>ESFRIMENTO:</span>
        <p>{{ sabado_esf }}</p>
      </li>
      <li>
        <time datetime="2022-02-07">7-<p>domingo</p></time>
        <span>AQUECIMENTO:</span> 
        <p>{{ domingo_aq }}</p>
        <br/>
        <span>PRINCIPAL:</span>  
        <p>{{ domingo_main }}</p>
        <br/>
        <span>ESFIAMENTO:</span>
        <p>{{ domingo_esf}}</p>
      </li>
</ul>
</template>

<style lang="scss" scoped>
   body {
	display: flex;
	flex-flow: column;
	align-items: center;
	font-family: "Poppins", serif;
	background: rgb(238, 174, 202);
	background: radial-gradient(
		circle,
		rgba(238, 174, 202, 1) 0%,
		rgba(148, 187, 233, 1) 100%
	);
}

.week-group {
    display: flex;
    align-items: center;
    
    button {
        max-height: 2rem;
    }
}


.text-active {
    color: rgba(255, 255, 255, 0.5);
    
}

h1 {
	font-weight: 800;
}

ul {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
	flex-wrap: wrap;
	list-style: none;

	li {
        color: var(--vt-c-text-dark-1);
		display: flex;
		width: 10rem;
		height: auto;
		margin: 0.25rem;
		flex-flow: column;
		border-radius: 0.2rem;
		padding: 1rem;
		font-weight: 300;
		font-size: 0.8rem;
		box-sizing: border-box;
		background: var( --vt-c-black-soft);
		backdrop-filter: blur(4px);
		-webkit-backdrop-filter: blur(4px);
		border-radius: 10px;
		border: 1px solid rgba(255, 255, 255, 0.18);

        span {
            font-weight: bold;
            user-select: none;
            text-decoration: underline;
        }
        

		time {
            display: flex;
			font-size: 2rem;
			margin: 0 0 1rem 0;
			font-weight: 500;
            p {
                font-size: 1.5rem;
                cursor: pointer;
                font-weight: 600;
                user-select: none;
                text-decoration: underline;
            }
		}
	}
	.today {
		time {
			font-weight: 800;
		}
		background: #ffffff70;
	}
}

</style>


<script setup>
    import { computed } from 'vue'
    import { useTrashStore } from "../stores/trashStore.js";
    import removeButton from './button-component.vue'

    const trashStore = useTrashStore()

    const trash_undo = computed(() => {
        return trashStore.trashUndo;
    });

    const props = defineProps({
        semana: {
            type: Number,
            required: true
        },
        segunda_aq: {
            type: String,
            required: true
        },
        segunda_main: {
            type: String,
            required: true
        },
        segunda_esf: {
            type: String,
            required: true
        },
        terca_aq: {
            type: String,
            required: true
        },
        terca_main: {
            type: String,
            required: true
        },
        terca_esf: {
            type: String,
            required: true
        },
        quarta_aq: {
            type: String,
            required: true
        },
        quarta_main: {
            type: String,
            required: true
        },
        quarta_esf: {
            type: String,
            required: true
        },
        quinta_aq: {
            type: String,
            required: true
        },
        quinta_main: {
            type: String,
            required: true
        },
        quinta_esf: {
            type: String,
            required: true
        },
        sexta_aq: {
            type: String,
            required: true
        },
        sexta_main: {
            type: String,
            required: true
        },
        sexta_esf: {
            type: String,
            required: true
        },
        sabado_aq: {
            type: String,
            required: true
        },
        sabado_main: {
            type: String,
            required: true
        },
        sabado_esf: {
            type: String,
            required: true
        },
        domingo_aq: {
            type: String,
            required: true
        },
        domingo_main: {
            type: String,
            required: true
        },
        domingo_esf: {
            type: String,
            required: true
        }
    })
</script>

