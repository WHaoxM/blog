<template>
  <div></div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  // 初始化点击特效
  const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFBE0B', '#FB5607', '#8338EC'];
  
  document.addEventListener('click', function(e) {
    // 创建特效元素
    const bubble = document.createElement('div');
    bubble.className = 'dynamic-cursor-bubble';
    
    // 随机选择颜色
    const color = colors[Math.floor(Math.random() * colors.length)];
    bubble.style.backgroundColor = color;
    
    // 设置位置
    bubble.style.left = e.pageX + 'px';
    bubble.style.top = e.pageY + 'px';
    
    // 添加到页面
    document.body.appendChild(bubble);
    
    // 动画结束后移除元素
    setTimeout(() => {
      bubble.remove();
    }, 750);
  });
});
</script>

<style scoped>
.dynamic-cursor-bubble {
  position: fixed;
  pointer-events: none;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: bubble-animation 0.75s ease-out forwards;
  z-index: 9999;
}

@keyframes bubble-animation {
  0% {
    width: 0;
    height: 0;
    opacity: 0.8;
  }
  100% {
    width: 40px;
    height: 40px;
    opacity: 0;
  }
}
</style>