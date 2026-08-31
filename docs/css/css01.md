# 중앙에서 확장되는 밑줄 효과

<style scoped>
.demo-btn {
  font-size: 16px;
  color: #888;
  position: relative;
  border: none;
  background: none;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-duration: 400ms;
  transition-property: color;
  cursor: pointer;
  padding: 8px 0;
}

.demo-btn:focus,
.demo-btn:hover {
  color: #111;
}

.demo-btn:focus::after,
.demo-btn:hover::after {
  width: 100%;
  left: 0%;
}

.demo-btn::after {
  content: "";
  bottom: -2px;
  left: 50%;
  position: absolute;
  width: 0%;
  height: 2px;
  background-color: #333;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-duration: 400ms;
  transition-property: width, left;
}
</style>

<CodeDemo>
  <template #preview>
    <button class="demo-btn">Hover Me</button>
  </template>
  <template #description>
    버튼 가운데에서 양쪽으로 밑줄이 확장되는 hover 효과입니다. `::after` 가상 요소의 `width`와 `left`를 함께 트랜지션해 중앙 기준으로 퍼지는 움직임을 구현합니다.
  </template>
  <template #code>

```css
.demo-btn {
  font-size: 16px;
  color: #888;
  position: relative;
  border: none;
  background: none;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-duration: 400ms;
  transition-property: color;
}

.demo-btn:focus,
.demo-btn:hover {
  color: #111;
}

.demo-btn:focus:after,
.demo-btn:hover:after {
  width: 100%;
  left: 0%;
}

.demo-btn:after {
  content: "";
  bottom: -2px;
  left: 50%;
  position: absolute;
  width: 0%;
  height: 2px;
  background-color: #fff;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-duration: 400ms;
  transition-property: width, left;
}
```

  </template>
</CodeDemo>
