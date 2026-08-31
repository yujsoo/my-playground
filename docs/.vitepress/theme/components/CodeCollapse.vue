<template>
  <div class="code-collapse">
    <button class="code-collapse-btn" @click="open = !open">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="code-collapse-icon"
        :class="{ open }"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
      {{ open ? '코드 접기' : '코드 보기' }}
    </button>
    <div v-show="open" class="code-collapse-content">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const open = ref(false)
</script>

<style>
.code-collapse-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: var(--vp-c-text-2);
  background: transparent;
  border: none;
  padding: 4px 0;
  cursor: pointer;
  transition: color 0.2s;
}

.code-collapse-btn:hover {
  color: var(--vp-c-text-1);
}

.code-collapse-icon {
  transition: transform 0.2s;
}

.code-collapse-icon.open {
  transform: rotate(90deg);
}

.code-collapse-content > div[class*="language-"] {
  margin-top: 0;
  border-radius:0;
}
</style>
