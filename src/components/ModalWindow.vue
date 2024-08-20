<template>
  <div v-if="isLandscape" class="rotate-modal">
    <div class="rotate-modal__content">
      <p>Please turn the device to a horizontal position.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const isLandscape = ref(false);

function checkOrientation() {
  isLandscape.value = window.innerHeight > window.innerWidth;
}

onMounted(() => {
  checkOrientation();
  window.addEventListener('resize', checkOrientation);
});

onUnmounted(() => {
  window.removeEventListener('resize', checkOrientation);
});
</script>
