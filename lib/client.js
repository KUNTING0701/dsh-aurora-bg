window.__ModuleLoader__.load({
  id: 'dsh-aurora-bg',
  factory: (require) => {
    var module = { exports: {} }
    var exports = module.exports

    // DeepSeek 官网风格动态极光背景（纯 CSS transform，稳定无 canvas/mask/blur）
    const CSS = [
      'html{background-color:#0b1220}',
      'body{background-color:transparent!important;--dsw-alias-bg-base:transparent!important;--dsw-specific-sidebar-fill:rgba(15,20,40,.62)!important;--dsw-alias-bg-layer-1:rgba(16,22,38,.86)!important;--dsw-alias-bg-layer-2:rgba(18,26,46,.88)!important}',
      '[id=root]{background:transparent}',
      '.dsh-aurora-layer{position:fixed;left:-25%;top:-25%;width:150%;height:150%;z-index:-1;pointer-events:none;will-change:transform}',
      '.dsh-aurora-grid{background-image:linear-gradient(rgba(148,170,220,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(148,170,220,.05) 1px,transparent 1px);background-size:46px 46px}',
      '.dsh-aurora-blobs{background-image:radial-gradient(34% 30% at 26% 18%,rgba(77,107,254,.22) 0%,transparent 62%),radial-gradient(28% 26% at 82% 20%,rgba(0,168,255,.14) 0%,transparent 62%),radial-gradient(36% 32% at 72% 88%,rgba(139,92,246,.18) 0%,transparent 65%),radial-gradient(46% 40% at 52% 26%,rgba(140,170,255,.16) 0%,transparent 70%)}',
      '.dsh-aurora-gold{background-image:radial-gradient(24% 18% at 34% 26%,rgba(238,216,170,.17) 0%,transparent 60%),radial-gradient(18% 14% at 74% 58%,rgba(238,216,170,.11) 0%,transparent 60%),radial-gradient(13% 10% at 58% 40%,rgba(255,247,209,.09) 0%,transparent 62%)}',
      '.dsh-aurora-light{background-image:radial-gradient(36% 28% at 70% 16%,rgba(140,170,255,.13) 0%,transparent 60%),radial-gradient(30% 24% at 62% 10%,rgba(255,247,209,.07) 0%,transparent 65%)}',
      '.dsh-aurora-dense{background-image:radial-gradient(12% 10% at 18% 30%,rgba(83,141,202,.16) 0%,transparent 60%),radial-gradient(10% 8% at 86% 44%,rgba(77,107,254,.16) 0%,transparent 60%),radial-gradient(11% 9% at 62% 78%,rgba(0,168,255,.13) 0%,transparent 60%),radial-gradient(9% 7% at 30% 66%,rgba(238,216,170,.11) 0%,transparent 62%),radial-gradient(13% 10% at 48% 12%,rgba(140,170,255,.14) 0%,transparent 62%)}',
    ].join('')

    function apply(ctx) {
      // 样式注入（bundle 插件无 styles builtin，直接管理 style 标签）
      const styleTag = document.createElement('style')
      styleTag.textContent = CSS
      document.head.appendChild(styleTag)
      ctx.effect(() => () => { styleTag.remove() })

      // 五层背景
      ctx.effect(() => {
        const layers = []
        const names = ['dsh-aurora-grid', 'dsh-aurora-blobs', 'dsh-aurora-gold', 'dsh-aurora-light', 'dsh-aurora-dense']
        for (const n of names) {
          const el = document.createElement('div')
          el.className = 'dsh-aurora-layer ' + n
          document.body.append(el)
          layers.push(el)
        }
        const start = performance.now()
        const mouse = { x: 0.5, y: 0.5 }
        const smooth = { x: 0.5, y: 0.5 }
        let raf = 0
        const onPointerMove = (event) => {
          mouse.x = event.clientX / window.innerWidth
          mouse.y = event.clientY / window.innerHeight
        }
        // r: 旋转角速度 rad/s（负=反向）；s: scale 呼吸；f1/f2 漂移频率；a1/a2 幅度；p/q 视差
        const anim = [
          { f1: .05, a1: 16, f2: .045, a2: 12, p: 14, q: 10, r: 0, s: 0 },
          { f1: .07, a1: 24, f2: .06, a2: 18, p: 26, q: 19, r: .05, s: .05 },
          { f1: .09, a1: 18, f2: .075, a2: 13, p: 20, q: 14, r: -.07, s: .04 },
          { f1: .055, a1: 12, f2: .05, a2: 9, p: 14, q: 10, r: .03, s: 0 },
          { f1: .1, a1: 14, f2: .085, a2: 10, p: 18, q: 13, r: .1, s: .06 },
        ]
        const DEG = 180 / Math.PI
        const tick = (t) => {
          raf = requestAnimationFrame(tick)
          try {
            const drift = (t - start) / 1000
            smooth.x += (mouse.x - smooth.x) * 0.08
            smooth.y += (mouse.y - smooth.y) * 0.08
            const dx = (smooth.x - 0.5) * 2
            const dy = (smooth.y - 0.5) * 2
            for (let i = 0; i < layers.length; i++) {
              const a = anim[i]
              const px = Math.sin(drift * a.f1) * a.a1 + dx * a.p
              const py = Math.cos(drift * a.f2) * a.a2 + dy * a.q
              const sc = a.s ? (1 + a.s * Math.sin(drift * .08 + i)).toFixed(3) : ''
              if (a.r === 0 && !sc) {
                layers[i].style.transform = 'translate3d(' + px.toFixed(1) + 'px,' + py.toFixed(1) + 'px,0)'
              } else {
                const deg = (drift * a.r * DEG).toFixed(2)
                const parts = []
                if (a.r) parts.push('rotate(' + deg + 'deg)')
                if (sc) parts.push('scale(' + sc + ')')
                parts.push('translate3d(' + px.toFixed(1) + 'px,' + py.toFixed(1) + 'px,0)')
                layers[i].style.transform = parts.join(' ')
              }
            }
          } catch (err) {
            console.error('[aurora] tick error:', err)
          }
        }
        window.addEventListener('mousemove', onPointerMove, { passive: true })
        raf = requestAnimationFrame(tick)
        console.log('[aurora] persistent background started')
        return () => {
          cancelAnimationFrame(raf)
          window.removeEventListener('mousemove', onPointerMove)
          for (const el of layers) el.remove()
        }
      })
    }

    module.exports = { apply }
    return module.exports
  },
})
