<template>
  <div class="hidden-word">
    <span v-if="$gameStore.gameOver === false">{{ $gameStore.displayWord }}</span>
    <span v-else>{{ $gameStore.word }}</span>
  </div>
</template>

<script setup>

</script>