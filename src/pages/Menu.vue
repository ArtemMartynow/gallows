<template>
  <div class="menu">
    <div class="menu__content">
      <h1 class="menu__title">gallo_s</h1>
      <router-link
        :to="{name: 'Categories'}"
        class="menu__play-btn"
      >start</router-link>
    </div>
  </div>
  <ModalWindow />
</template>

<script setup>
import ModalWindow from '@/components/ModalWindow.vue'
</script>