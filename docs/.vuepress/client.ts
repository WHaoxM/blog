import { defineClientConfig } from 'vuepress/client'
import Typewriter from 'vue-typewriter-effect'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    // 注册vue-typewriter-effect组件
    app.component('TypewriterEffect', Typewriter)
    
    // 检查是否在浏览器环境中
    if (typeof window !== 'undefined') {
      // 添加点击特效
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
          initializeClickEffects();
          loadCustomFonts();
          fixSvgIconsBorder();
          initializeTypewriterOnTagline();
        })
      } else {
        // DOM已经加载完成，直接初始化
        initializeClickEffects();
        loadCustomFonts();
        fixSvgIconsBorder();
        initializeTypewriterOnTagline();
      }
    }
  }
})

// 加载自定义字体
function loadCustomFonts() {
  // 创建并添加Google Fonts链接
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Source+Code+Pro:wght@400;500;600&display=swap';
  document.head.appendChild(link);

  // 应用字体到全局样式
  const fontStyles = document.createElement('style');
  fontStyles.textContent = `
    :root {
      --font-primary: 'Roboto', sans-serif !important;
      --font-code: 'Source Code Pro', monospace !important;
    }
    
    body, 
    .theme-container,
    .vp-blog-home .vp-hero-text,
    .vp-blog-home .vp-tagline,
    .vp-tagline,
    .vp-blog-home *,
    .theme-default-content *,
    .vp-navbar,
    .vp-sidebar,
    h1, h2, h3, h4, h5, h6,
    p, div, span, a, button, input, textarea, td, th {
      font-family: var(--font-primary) !important;
    }
    
    code, pre, kbd, samp {
      font-family: var(--font-code) !important;
    }
  `;
  document.head.appendChild(fontStyles);
}

// 修复SVG图标白色边框
function fixSvgIconsBorder() {
  const svgStyles = document.createElement('style');
  svgStyles.textContent = `
    /* 修复SVG图标白色边框 */
    .vp-navbar .vp-icon,
    .vp-sidebar .vp-icon,
    .theme-default-content img[src*=".svg"],
    .vp-icon,
    .iconify,
    svg {
      background: transparent !important;
      border: none !important;
      box-shadow: none !important;
    }
    
    /* 优化图标显示 */
    .vp-blog-home .vp-hero-actions .vp-button {
      border-radius: 8px;
      transition: all 0.3s ease;
    }
    
    .vp-blog-home .vp-hero-actions .vp-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    }
  `;
  document.head.appendChild(svgStyles);
}

// 在tagline上初始化打字机效果
function initializeTypewriterOnTagline() {
  // 等待DOM完全加载后再处理
  setTimeout(() => {
    // 查找tagline元素
    const heroSection = document.querySelector('.vp-blog-home .vp-hero');
    if (heroSection) {
      const taglineEl = heroSection.querySelector('.vp-tagline');
      if (taglineEl) {
        // 保存原始文本
        const originalText = taglineEl.textContent.trim();
        if (originalText && originalText.includes('Never stop')) {
          // 为tagline元素添加ID以便后续操作
          taglineEl.id = 'typewriter-tagline';
          
          // 直接替换innerHTML为typewriter组件
          taglineEl.innerHTML = `
            <div style="
              font-size: 1.5rem;
              font-weight: 500;
              color: #3eaf7c;
            ">
              <typewriter-effect 
                :text="'${originalText}'"
                :delay="50"
                :cursor="true"
                :cursor-blk="true"
                :type-class="'typewriter-text'"
              />
            </div>
          `;
          
          // 触发Vue重新渲染
          setTimeout(() => {
            // 这会强制页面重新渲染，让Vue组件生效
            const event = new CustomEvent('vue-content-updated');
            document.dispatchEvent(event);
          }, 100);
        }
      }
    }
  }, 1000); // 延迟1秒执行，确保页面元素已加载
}

function initializeClickEffects() {
  // CSS样式
  const style = document.createElement('style')
  style.textContent = `
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
  `
  document.head.appendChild(style)

  // 鼠标点击特效
  const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFBE0B', '#FB5607', '#8338EC']
  
  document.addEventListener('click', function(e) {
    // 创建特效元素
    const bubble = document.createElement('div')
    bubble.className = 'dynamic-cursor-bubble'
    
    // 随机选择颜色
    const color = colors[Math.floor(Math.random() * colors.length)]
    bubble.style.backgroundColor = color
    
    // 设置位置
    bubble.style.left = e.pageX + 'px'
    bubble.style.top = e.pageY + 'px'
    
    // 添加到页面
    document.body.appendChild(bubble)
    
    // 动画结束后移除元素
    setTimeout(() => {
      bubble.remove()
    }, 750)
  })

  // Canvas 粒子点击效果
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  canvas.style.cssText = 'position:fixed;top:0;left:0;pointer-events:none;z-index:9999;'
  document.body.appendChild(canvas)

  let particles = []
  let quiver = 6
  let settings = {
    size: 15,
    distance: 100,
    duration: 0.8,
    colors: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFBE0B', '#FB5607', '#8338EC'],
    stroke: 'rgba(150,150,200,0.4)',
    strokeWidth: 0.05,
    animate: true
  }

  const mouse = { x: 0, y: 0 }
  let width = window.innerWidth
  let height = window.innerHeight

  // 更新画布大小
  function resize() {
    width = window.innerWidth
    height = window.innerHeight
    canvas.width = width
    canvas.height = height
  }

  window.addEventListener('resize', resize)
  resize()

  // 粒子构造函数
  function Particle() {
    this.x = mouse.x
    this.y = mouse.y
    this.size = Math.random() * settings.size
    this.speed = Math.random() * 2 + .5
    this.color = settings.colors[Math.floor(Math.random() * settings.colors.length)]
    this.duration = settings.duration
    this.vx = (Math.random() - 0.5) * quiver
    this.vy = (Math.random() - 0.5) * quiver
  }

  // 绘制粒子
  Particle.prototype.draw = function() {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false)
    ctx.fillStyle = this.color
    ctx.fill()
  }

  // 更新粒子
  Particle.prototype.update = function() {
    this.x += this.vx
    this.y += this.vy
    this.duration -= 0.01
    this.size *= 0.95
  }

  // 点击事件处理
  document.addEventListener('click', function(e) {
    mouse.x = e.clientX
    mouse.y = e.clientY

    for (let i = 0; i < 20; i++) {
      particles.push(new Particle())
    }
  })

  // 动画循环
  function loop() {
    ctx.clearRect(0, 0, width, height)

    for (let i = 0; i < particles.length; i++) {
      particles[i].update()
      particles[i].draw()

      if (particles[i].duration <= 0 || particles[i].size <= 0) {
        particles.splice(i, 1)
        i--
      }
    }

    requestAnimationFrame(loop)
  }

  loop()
}