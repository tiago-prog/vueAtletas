import { defineStore } from 'pinia'
import axios from 'axios'
const BASE_URL = 'http://54.94.211.233:3333/API_KEY=dc2su'

export const useUserStore = defineStore("user", {
  state: () => ({
      user: [],
      users: [],
  }),
  getters: {
    getUser(state){
      return state.user
    },
    getUsers(state){
        return state.users
      }
  },
  actions: {
    async removeWeek(week) {
       let weekUpdate = this.user.training.filter(t => t.semana !== week)
       let userUpdate = {
        "atleta_id": this.user.atleta_id,
        "username": this.user.username,
        "goal": this.user.goal,
        "zones": this.user.zones,
        "training": [...weekUpdate]
       }
      this.setAtleta(JSON.stringify(userUpdate))
      try {
        const res = await axios.put(`${BASE_URL}/atletas/${this.user.atleta_id}`, userUpdate);
      } catch (error) {
        console.error(error)
      }
    },
    async registerUser(data) {
       await axios.post(`${BASE_URL}/atletas`, data)
        .then(() => alert(`O atleta ${data.username} foi registrado com sucesso!`))
        .catch(function (error) {
          alert(`Erro ao registrar o atleta`)
          console.error(error);
        });
    },
    setAtleta(data) {
      // console.log(data)
      return this.user = JSON.parse(data);
    },
    async fetchUsers() {
      try {
        const data = await axios.get(`${BASE_URL}/atletas`)
        this.users = data.data
        }
        catch (error) {
          alert(error)
          console.log(error)
      }
    }
  }
})