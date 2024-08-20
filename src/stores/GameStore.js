import { defineStore } from 'pinia'

export const useGameStore = defineStore('GameStore', {
  state: () => ({
   wrongAnswer: 0,
   word: '',
   keysPressed: [],
   gameOver: false,
   category: ''
  }),
  getters: {
    displayWord: state => {
      return state.word.split('').map(letter => state.keysPressed.includes(letter) ? letter : '_').join(' ')
    },
    isGameWon: state => {
      return state.word.split('').every(letter => state.keysPressed.includes(letter));
    }
  },
  actions: {
    setWord(word) {
      this.word = word
    },
    setCategory(category) {
      this.category = category
    },
    addLetter(letter) {
      this.keysPressed.push(letter)
      if (!this.word.includes(letter)) {
        this.wrongAnswer++
      } 
      if (this.wrongAnswer === 7) {
        this.gameOver = true
      }
    },
    restart() {
      this.wrongAnswer = 0
      this.gameOver = false
      this.keysPressed = []
    },
  }
})