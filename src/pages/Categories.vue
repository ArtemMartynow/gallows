<template>
  <div class="categories">
    <router-link
      :to="{name: 'Menu'}"
      class="categories__btn_back"
    >
      <img src="../assets/images/Vector.png" alt="back">
    </router-link>
    <h1 class="categories__title">Select a category</h1>
    <div class="categories__content">
      <router-link
        :to="{name: 'Game'}"
        class="categories__btn"
        @click="$gameStore.setCategory('movies')"
      >
        movies
      </router-link>
      <router-link
        :to="{name: 'Game'}"
        class="categories__btn"
        @click="$gameStore.setCategory('sport')"
      >
        sport
      </router-link>
      <router-link
        :to="{name: 'Game'}"
        class="categories__btn"
        @click="$gameStore.setCategory('cities')"
      >
        cities
      </router-link>
      <router-link
        :to="{name: 'Game'}"
        class="categories__btn"
        @click="$gameStore.setCategory('countries')"
      >
        countries
      </router-link>
      <router-link
        :to="{name: 'Game'}"
        class="categories__btn"
        @click="$gameStore.setCategory('animals')"
      >
        animals
      </router-link>
      <router-link
        :to="{name: 'Game'}"
        class="categories__btn"
        @click="$gameStore.setCategory('randomWord')"
      >
        random word
      </router-link>
    </div>
  </div>
  <ModalWindow />
</template>

<script setup>
import ModalWindow from '@/components/ModalWindow.vue'
</script>