<template>
  <div class="game__keyboard">
    <button 
      class="game__letter"
      :class="{
        'game__letter_active-green': $gameStore.keysPressed.includes(letter) && $gameStore.word.includes(letter),
        'game__letter_active-red': $gameStore.keysPressed.includes(letter) && !$gameStore.word.includes(letter)
      }"
      v-for="letter in alphabet"
      :key="letter"
      :id="letter"   
      @click="$gameStore.addLetter(letter)"
      :disabled="$gameStore.keysPressed.includes(letter)"
    >{{ letter }}</button>
  </div>
</template>

<script setup>
let alphabet = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 
  'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 
  'w', 'x', 'y', 'z'
]
</script>