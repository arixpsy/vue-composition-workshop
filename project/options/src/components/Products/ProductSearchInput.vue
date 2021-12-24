<script setup lang="ts">
import {
  NButton,
  NInput,
  NInputGroup,
} from "naive-ui";
import { ref } from 'vue'
const input = ref('')
</script>

<template>
  <form @submit.prevent="$emit('triggerSearch')">
    <NInputGroup>
      <NInput v-model:value="input" @input="$emit('update:searchTerm', $event)" size="large" round clearable placeholder="Look for a item" />
      <NButton @click="$emit('triggerSearch')" round size="large">Search</NButton>
    </NInputGroup>
  </form>
</template>

<style scoped>
.n-input-group {
  width: 600px;
}
</style>