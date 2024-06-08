import { defineStore } from 'pinia'

export const useTrashStore = defineStore("trash", {
  state: () => ({ trash: [], }),
  getters: {
    getTrash(state){
      return state.trash
    }
  },
  actions: {
   trashUpdate(user, semana) {
     this.trash = {user: user, semana: semana}
   },
   trashUndo(semana) {
    console.log(this.trash, semana)
   }
  }
})