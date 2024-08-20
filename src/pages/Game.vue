<template>
  <div class="game">
    <div class="game__content_victory" v-if="$gameStore.isGameWon === true">
      <Stickman />
      <div class="game__content_victory-next">
        <h1>Win</h1>
        <img 
          src="../assets/images/arrow-right-solid.png" 
          alt="arrow"
          @click="restart()"  
        >
      </div>
    </div>
    <div class="game__content_game-over" v-else-if="$gameStore.gameOver === true">
      <HiddenWord />
      <Stickman />
      <div class="game-over">
      <img 
        src="../assets/images/rotate-right-solid.png" 
        alt="restart"
        @click="restart()"
      >
      <h1>Game over</h1>
    </div>
    </div>
    <div class="game__content" v-else>
      <HiddenWord />
      <Stickman />
      <Keyboard/>
    </div>
    <router-link
      :to="{name: 'Menu'}"
      class="game__btn-menu"
      @click="exitMenu()"
    >
      menu
    </router-link>
    <img
      src="../assets/images/restart.png" 
      alt="restart"
      class="game__btn-restart"  
      @click="restart()"
      v-if="$gameStore.isGameWon !== true && $gameStore.gameOver !== true"
    >
  </div>
  <ModalWindow />
</template>

<script setup>
import HiddenWord from '../components/game/HiddenWord.vue'
import Stickman from '../components/game/Stickman.vue'
import Keyboard from '../components/game/Keyboard.vue'
import StorageHelper from '../helpers/LocalStorageHelper'
import ModalWindow from '@/components/ModalWindow.vue'
import { useGameStore } from "../stores/GameStore"

const gameStore = useGameStore()

let movies = [
  'ratatouille', 'jaws', 'pinocchio', 'playtime', 
  'notorious', 'moonlight', 'ran', 'goodfellas', 
  'titanic', 'boyhood ', 'aliens', 'rashomon', 'parasite'
]

let cities = [
  'vienna', 'calgary', 'copenhagen', 'zurich', 
  'geneva', 'sydney', 'vancouver', 'osaka', 
  'toronto', 'tokyo ', 'amsterdam', 'wellington', 'luxembourg'
]

let animals = [
  'elephant', 'tiger', 'dolphin', 'lion', 
  'whale', 'giraffe', 'panda', 'kangaroo', 
  'gorilla', 'chimpanzee ', 'shark', 'turtle', 'penguin'
]

let sport = [
  'boxing', 'football', 'cricket', 'tennis', 
  'volleyball', 'swimming', 'badminton', 'baseball', 
  'golf', 'basketball', 'cycling', 'bowling', 'athletics'
]

let countries = [
  'ukraine', 'canada', 'usa', 'japan', 
  'poland', 'netherlands', 'germany', 'france',
  'italy', 'spain', 'czechia', 'brazil', 'portugal', 'argentina', 'turkey'
]

let randomWord = [...movies, ...cities, ...animals, ...sport] 

function getRandomWord(words) {
  const randomIndex = Math.floor(Math.random() * words.length)
  return gameStore.setWord(words[randomIndex])
}

function exitMenu() {
  gameStore.restart()
  StorageHelper.remove('selectedCategory')
}

function restart() {
  gameStore.restart()
  if(gameStore.category === 'movies') {
  getRandomWord(movies)
  } else if(gameStore.category === 'cities') {
    getRandomWord(cities)
  } else if(gameStore.category === 'animals') {
    getRandomWord(animals)
  } else if(gameStore.category === 'sport') {
    getRandomWord(sport)
  } else if(gameStore.category === 'countries') {
    getRandomWord(countries)
  } else {
    getRandomWord(randomWord)
  }
}

if(!StorageHelper.get('selectedCategory')) {
  StorageHelper.set('selectedCategory', gameStore.category)
}
gameStore.setCategory(StorageHelper.get('selectedCategory'))
restart()
</script>