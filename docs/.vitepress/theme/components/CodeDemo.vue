<template>
  <div class="code-demo">
    <div v-if="slots.description" class="code-demo-description">
      <p class="code-demo-label">
        <svg v-bind="iconProps">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
        코드 설명
      </p>
      <div class="code-demo-description-body">
        <slot name="description" />
      </div>
    </div>
    <p class="code-demo-label">
      <svg v-bind="iconProps">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
      {{ title }}
    </p>
    <div class="code-demo-preview">
      <slot name="preview" />
    </div>
    <button class="code-collapse-btn" @click="open = !open">
      <svg v-bind="iconProps" width="16" height="16" stroke-width="2" class="code-collapse-icon" :class="{ open }">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
      {{ open ? '코드 접기' : '코드 보기' }}
    </button>
    <div v-show="open" class="code-collapse-content">
      <slot name="code" />
    </div>
  </div>
</template>

<script setup>
import { ref, useSlots } from 'vue'

defineProps({
  title: {
    type: String,
    default: '코드 적용 예시',
  },
})

const slots = useSlots()
const open = ref(false)

const iconProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '13',
  height: '13',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2.5',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round',
}
</script>

<style scoped>
.code-demo {
  overflow: hidden;
  margin: 20px 0 0;
}

.code-demo-label {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  width: 100%;
  font-size: 13px;
  color: var(--vp-c-text-2);
  border-bottom: 1px solid var(--vp-c-divider);
  margin: 0 !important;
  padding: 8px 16px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.code-demo-preview {
  padding: 14px;
  min-height: 200px;
}

.code-demo-description {
  border-top: 1px solid var(--vp-c-divider);
}

.code-demo-description-body {
  font-size: 13px;
  color: var(--vp-c-text-1);
  padding: 12px 16px;
  line-height: 1.6;
}

.code-demo-description-body p {
  margin: 0 !important;
  line-height: inherit;
  font-size: inherit;
}

.code-collapse-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: var(--vp-c-text-2);
  background: transparent;
  border: none;
  border-top: 1px solid var(--vp-c-divider);
  border-bottom: 1px solid var(--vp-c-divider);
  width: 100%;
  padding: 8px 16px;
  cursor: pointer;
  transition: color 0.2s, background 0.2s;
}

.code-collapse-btn:hover {
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg-soft);
}

.code-collapse-icon {
  transition: transform 0.2s;
}

.code-collapse-icon.open {
  transform: rotate(90deg);
}

.code-collapse-content > div[class*="language-"] {
  margin: 0;
}
</style>
