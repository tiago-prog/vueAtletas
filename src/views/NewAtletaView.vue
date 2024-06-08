<template>
    <div class="container">
        <h1>Novo Atleta</h1>
        <h2>Formulário de cadastro</h2>

        <form @submit.prevent="handleSubmit">
            <label for="nome">Nome Completo:</label>
            <input type="text" id="nome" name="nome" required>

            <label for="objetivo">Objetivo do Treino:</label>
            <textarea id="objetivo" name="objetivo" required></textarea>

            <button type="submit">Enviar</button>
        </form>
    </div>
</template>


<script setup>
    import { useUserStore } from '../stores/atletasStore.js'
    import { useRouter } from 'vue-router'
    const store = useUserStore()
    const router = useRouter();


    const handleSubmit = async () => {
    const nome = document.getElementById('nome').value
    const objetivo = document.getElementById('objetivo').value
    const atleta = {   
        username: nome,
        goal: objetivo,
        zones: [],
        training: []
     }
    try {        
        await store.registerUser(atleta)
        document.getElementById('nome').value = ''
        document.getElementById('objetivo').value = ''
        router.push({ path: '/', force: true, query: { msg: 'registrado com exito' }})
    } catch (error) {
        router.push({ path: '/', query: { msg: 'sem exito no resgistro' }})
        console.error(error)
    }
    };

</script>

<style scoped>

.container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px;
    background: var( --vt-c-black-soft);
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

h1, h2 {
    text-align: center;
    color: var( --vt-c-white-soft);
    margin-bottom: 20px;

}

h1 {
    font-size: 2rem;
}

h2 {
    font-size: 1.3rem;
}

/* Estilos para cada seção do formulário */
.secao {
    margin-bottom: 20px;
}

label {
    display: block;
    margin-bottom: 5px;
    color: #757575;
}

input[type="text"],
input[type="email"],
input[type="tel"],
textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
    box-sizing: border-box;
}

input[type="number"] {
    width: 50px;
}

textarea {
    height: 100px;
}

/* Estilos para os botões */
button {
    background-color: var(--vt-c-blue);
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-top: 10px;
}

button:hover {
    background-color: #283a7c;
}

/* Estilos para os dias da semana */
.dias-semana {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
}

.dias-semana label {
    width: 150px;
    margin-right: 10px;
}

/* Estilos para os exercícios */
.exercicios {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
}

.exercicios label {
    width: 150px;
    margin-right: 10px;
}

/* Estilos para o aquecimento e resfriamento */
.aquecimento-resfriamento {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
}

.aquecimento-resfriamento label {
    width: 150px;
    margin-right: 10px;
}

</style>
