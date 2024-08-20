<template>
  <div class="game__design" v-if="$gameStore.isGameWon === false">
   <div class="stickman__floor"></div>
   <div class="stickman__pillar"></div>
   <div :class="$gameStore.wrongAnswer >= 1 ? 'stickman__loop_active' : 'stickman__loop'"></div>
   <div :class="$gameStore.wrongAnswer >= 2 ? 'stickman__head_active' : 'stickman__head'"></div>
   <div :class="$gameStore.wrongAnswer >= 3 ? 'stickman__body_active' : 'stickman__body'"></div>
   <div :class="$gameStore.wrongAnswer >= 4 ? 'stickman__left-arm_active' : 'stickman__left-arm'"></div>
   <div :class="$gameStore.wrongAnswer >= 5 ? 'stickman__right-arm_active' : 'stickman__right-arm'"></div>
   <div :class="$gameStore.wrongAnswer >= 6 ? 'stickman__left-leg_active' : 'stickman__left-leg'"></div>
   <div :class="$gameStore.wrongAnswer >= 7 ? 'stickman__right-leg_active' : 'stickman__right-leg'"></div>
 </div>
 <div class="stickman-victory" v-else>
   <div class="stickman-victory__head">
     <div class="stickman-victory__head_eyes">
       <div class="stickman-victory__head_eye"></div>
       <div class="stickman-victory__head_eye"></div>
     </div>
     <div class="stickman-victory__head_mouth"></div>
   </div>
   <div class="stickman-victory__body"></div>
   <div class="stickman-victory__left_arm"></div>
   <div class="stickman-victory__right_arm"></div>
   <div class="stickman-victory__left_leg"></div>
   <div class="stickman-victory__right_leg"></div>
 </div>
</template>

<script setup>

</script>