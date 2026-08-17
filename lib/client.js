window.__ModuleLoader__.load({
  id: 'dsh-aurora-bg',
  factory: (require) => {
    var module = { exports: {} }
    var exports = module.exports

    // v19：官网鲸鱼粒子完整动态移植（SVG circle 逐粒子 + 一次性 canvas 采样）
    const WHALE_SVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 18"><path fill="#FFFFFF" d="M22.9168 1.43018C22.6713 1.31018 22.5658 1.53918 22.4223 1.65519C22.3733 1.69269 22.3318 1.74169 22.2903 1.78669C21.9317 2.1697 21.5127 2.42121 20.9657 2.39121C20.1657 2.34621 19.4827 2.59771 18.8787 3.20973C18.7502 2.45521 18.3236 2.0047 17.6746 1.71569C17.3351 1.56568 16.9916 1.41518 16.7536 1.08867C16.5876 0.856163 16.5421 0.597155 16.4591 0.341647C16.4061 0.187643 16.3536 0.0301382 16.1761 0.00363739C15.9836 -0.0263635 15.9081 0.135141 15.8326 0.270145C15.5306 0.822162 15.4136 1.43018 15.4251 2.0462C15.4516 3.43174 16.0366 4.53527 17.1991 5.3203C17.3311 5.4103 17.3651 5.5003 17.3236 5.63181C17.2441 5.90231 17.1501 6.16482 17.0671 6.43533C17.0141 6.60784 16.9351 6.64584 16.7501 6.57033C16.1121 6.30383 15.5611 5.90931 15.074 5.4328C14.2475 4.63328 13.5 3.75075 12.568 3.05973C12.349 2.89822 12.13 2.74822 11.9034 2.60522C10.9524 1.68169 12.028 0.923165 12.277 0.833162C12.5375 0.739159 12.3675 0.41615 11.5259 0.42015C10.6844 0.42365 9.91439 0.705658 8.93286 1.08117C8.78935 1.13767 8.63835 1.17867 8.48384 1.21267C7.59332 1.04367 6.66829 1.00617 5.70226 1.11517C3.88321 1.31768 2.43016 2.1777 1.36213 3.64575C0.0790928 5.4103 -0.222916 7.41536 0.146595 9.50642C0.535106 11.7105 1.66014 13.535 3.38869 14.9616C5.18125 16.4406 7.24581 17.1657 9.60138 17.0266C11.0319 16.9441 12.6245 16.7526 14.421 15.2321C14.874 15.4576 15.3496 15.5476 16.1381 15.6151C16.7456 15.6716 17.3306 15.5851 17.7836 15.4911C18.4931 15.3411 18.4441 14.6841 18.1876 14.5636C16.1081 13.595 16.5646 13.9891 16.1496 13.67C17.2061 12.42 18.8202 10.1979 19.3182 7.17235C19.3672 6.83834 19.4297 6.36783 19.4222 6.09732C19.4182 5.93231 19.4562 5.86831 19.6447 5.84931C20.1657 5.78931 20.6712 5.64681 21.1357 5.3913C22.4833 4.65528 23.0268 3.44624 23.1548 1.9972C23.1738 1.77569 23.1508 1.54668 22.9168 1.43018ZM11.1749 14.4736C9.15936 12.889 8.18184 12.3675 7.77832 12.39C7.40081 12.4125 7.46881 12.8445 7.55182 13.126C7.63882 13.404 7.75182 13.5955 7.91033 13.8396C8.01983 14.0011 8.09533 14.2411 7.80083 14.4216C7.15181 14.8231 6.02327 14.2866 5.97027 14.2601C4.65673 13.4865 3.5587 12.4655 2.78467 11.069C2.03715 9.72493 1.60314 8.28289 1.53164 6.74384C1.51264 6.37233 1.62214 6.24082 1.99215 6.17332C2.47916 6.08332 2.98118 6.06432 3.46769 6.13582C5.52476 6.43633 7.27581 7.35586 8.74385 8.8129C9.58188 9.64243 10.2159 10.634 10.8689 11.6025C11.5634 12.631 12.3105 13.611 13.262 14.4146C13.598 14.6961 13.866 14.9101 14.1225 15.0681C13.349 15.1546 12.058 15.1731 11.1749 14.4746V14.4736ZM12.141 8.25988C12.141 8.09488 12.273 7.96338 12.439 7.96338C12.4765 7.96338 12.5105 7.97088 12.541 7.98188C12.5825 7.99688 12.6205 8.01938 12.6505 8.05338C12.7035 8.10588 12.7335 8.18088 12.7335 8.25988C12.7335 8.42489 12.6015 8.55639 12.4355 8.55639C12.2695 8.55639 12.141 8.42489 12.141 8.25988ZM15.1415 9.79893C14.949 9.87793 14.7565 9.94544 14.5715 9.95294C14.2845 9.96794 13.9715 9.85143 13.8015 9.70893C13.5375 9.48742 13.3485 9.36342 13.2695 8.97691C13.2355 8.8119 13.2545 8.55639 13.2845 8.40989C13.3525 8.09438 13.277 7.89187 13.0545 7.70787C12.8735 7.55786 12.643 7.51636 12.39 7.51636C12.2955 7.51636 12.209 7.47486 12.1445 7.44136C12.039 7.38886 11.9519 7.25735 12.035 7.09585C12.0615 7.04335 12.19 6.91584 12.22 6.89334C12.5635 6.69784 12.9595 6.76184 13.326 6.90834C13.6655 7.04735 13.9225 7.30236 14.292 7.66287C14.6695 8.09838 14.7375 8.21838 14.9525 8.54539C15.1225 8.8009 15.277 9.06341 15.3831 9.36392C15.4471 9.55142 15.3641 9.70493 15.1415 9.79893Z"/></svg>'

    const CSS = [
      'html{background-color:#0b1220}',
      'body{background-color:transparent!important;--dsw-alias-bg-base:transparent!important;--dsw-specific-sidebar-fill:rgba(15,20,40,.62)!important;--dsw-alias-bg-layer-1:rgba(16,22,38,.86)!important;--dsw-alias-bg-layer-2:rgba(18,26,46,.88)!important}',
      '[id=root]{background:transparent}',
      '.dsh-aurora-layer{position:fixed;left:-25%;top:-25%;width:150%;height:150%;z-index:-1;pointer-events:none;will-change:transform}',
      '.dsh-aurora-grid{background-image:linear-gradient(rgba(148,170,220,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(148,170,220,.05) 1px,transparent 1px);background-size:46px 46px}',
      '.dsh-aurora-gridfar{background-image:linear-gradient(rgba(120,140,200,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(120,140,200,.035) 1px,transparent 1px);background-size:92px 92px}',
      '.dsh-aurora-blobs{background-image:radial-gradient(34% 30% at 26% 18%,rgba(77,107,254,.22) 0%,transparent 62%),radial-gradient(28% 26% at 82% 20%,rgba(0,168,255,.14) 0%,transparent 62%),radial-gradient(36% 32% at 72% 88%,rgba(139,92,246,.18) 0%,transparent 65%),radial-gradient(46% 40% at 52% 26%,rgba(140,170,255,.16) 0%,transparent 70%)}',
      '.dsh-aurora-gold{background-image:radial-gradient(24% 18% at 34% 26%,rgba(238,216,170,.17) 0%,transparent 60%),radial-gradient(18% 14% at 74% 58%,rgba(238,216,170,.11) 0%,transparent 60%),radial-gradient(13% 10% at 58% 40%,rgba(255,247,209,.09) 0%,transparent 62%)}',
      '.dsh-aurora-light{background-image:radial-gradient(36% 28% at 70% 16%,rgba(140,170,255,.13) 0%,transparent 60%),radial-gradient(30% 24% at 62% 10%,rgba(255,247,209,.07) 0%,transparent 65%)}',
      '.dsh-aurora-dense{background-image:radial-gradient(12% 10% at 18% 30%,rgba(83,141,202,.16) 0%,transparent 60%),radial-gradient(10% 8% at 86% 44%,rgba(77,107,254,.16) 0%,transparent 60%),radial-gradient(11% 9% at 62% 78%,rgba(0,168,255,.13) 0%,transparent 60%),radial-gradient(9% 7% at 30% 66%,rgba(238,216,170,.11) 0%,transparent 62%),radial-gradient(13% 10% at 48% 12%,rgba(140,170,255,.14) 0%,transparent 62%)}',
      '.dsh-whale{position:fixed;right:2%;top:14%;width:min(44vw,560px);z-index:-1;pointer-events:none;opacity:.9}',
      '.dsh-whale svg{width:100%;height:auto;display:block;overflow:visible}',
      '.dsh-whale circle{fill:#b9c9ee}',
    ].join('')

    // 一次性采样：SVG → 60×60 亮度图 → 内部粒子（官网算法）
    const sampleWhale = () => {
      return new Promise((resolve) => {
        const S = 60
        const c = document.createElement('canvas')
        c.width = S; c.height = S
        const a = c.getContext('2d')
        if (!a) { resolve([]); return }
        a.fillStyle = '#000'; a.fillRect(0, 0, S, S)
        const img = new Image()
        img.onload = () => {
          const r = Math.min(S / img.width, S / img.height)
          const w = img.width * r, h = img.height * r
          a.drawImage(img, (S - w) / 2, (S - h) / 2, w, h)
          const d = a.getImageData(0, 0, S, S)
          const m = new Float32Array(S * S)
          for (let i = 0; i < S * S; i++) m[i] = (.299 * d.data[4 * i] + .587 * d.data[4 * i + 1] + .114 * d.data[4 * i + 2]) / 255
          const isEdge = (x, y) => {
            for (let dx = -2; dx <= 2; dx++) for (let dy = -2; dy <= 2; dy++) {
              if (!dx && !dy) continue
              const nx = x + dx, ny = y + dy
              if (nx < 0 || ny < 0 || nx >= S || ny >= S || m[ny * S + nx] <= .2) return true
            }
            return false
          }
          const pts = []
          for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) {
            const lum = m[y * S + x]
            if (lum > .2 && !isEdge(x, y)) {
              let edges = 0
              for (let dx = -1; dx <= 1; dx++) for (let dy = -1; dy <= 1; dy++) {
                if (!dx && !dy) continue
                const nx = x + dx, ny = y + dy
                if (nx < 0 || ny < 0 || nx >= S || ny >= S || m[ny * S + nx] <= .2) edges++
              }
              const th = Math.random() * Math.PI * 2
              const ph = Math.acos(2 * Math.random() - 1)
              const rad = 3 * (.4 + .6 * Math.random())
              pts.push({
                x: (x - S / 2) * .18, y: (S / 2 - y) * .18,
                op: lum, edge: edges / 8,
                sx: Math.sin(ph) * Math.cos(th) * rad, sy: Math.sin(ph) * Math.sin(th) * rad, sz: Math.cos(ph) * rad * .5,
              })
            }
          }
          resolve(pts)
        }
        img.onerror = () => resolve([])
        img.src = 'data:image/svg+xml;utf8,' + encodeURIComponent(WHALE_SVG)
      })
    }

    function apply(ctx) {
      const styleTag = document.createElement('style')
      styleTag.textContent = CSS
      document.head.appendChild(styleTag)
      ctx.effect(() => () => { styleTag.remove() })

      // 背景层
      ctx.effect(() => {
        const layers = []
        const names = ['dsh-aurora-gridfar', 'dsh-aurora-grid', 'dsh-aurora-blobs', 'dsh-aurora-gold', 'dsh-aurora-light', 'dsh-aurora-dense']
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
        const anim = [
          { f1: .04, a1: 10, f2: .035, a2: 8, p: 9, q: 6, r: 0, s: 0 },
          { f1: .05, a1: 16, f2: .045, a2: 12, p: 18, q: 13, r: 0, s: 0 },
          { f1: .07, a1: 24, f2: .06, a2: 18, p: 26, q: 19, r: .05, s: .05 },
          { f1: .09, a1: 18, f2: .075, a2: 13, p: 20, q: 14, r: -.07, s: .04 },
          { f1: .055, a1: 12, f2: .05, a2: 9, p: 14, q: 10, r: .03, s: 0 },
          { f1: .1, a1: 14, f2: .085, a2: 10, p: 18, q: 13, r: .1, s: .06 },
        ]
        const DEG = 180 / Math.PI
        const tick = (t) => {
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
          raf = requestAnimationFrame(tick)
        }
        window.addEventListener('mousemove', onPointerMove, { passive: true })
        raf = requestAnimationFrame(tick)
        return () => {
          cancelAnimationFrame(raf)
          window.removeEventListener('mousemove', onPointerMove)
          for (const el of layers) el.remove()
        }
      })

      // 官网鲸鱼粒子：完整动态移植
      ctx.effect(() => {
        const wrap = document.createElement('div')
        wrap.className = 'dsh-whale'
        const NS = 'http://www.w3.org/2000/svg'
        const svg = document.createElementNS(NS, 'svg')
        svg.setAttribute('viewBox', '-6 -4.5 12 9')
        wrap.appendChild(svg)
        document.body.append(wrap)
        let circles = []
        let disposed = false
        const clamp01 = (v) => Math.max(0, Math.min(1, v))
        const smoothstep = (a, b, x) => { const t = clamp01((x - a) / (b - a)); return t * t * (3 - 2 * t) }
        const mouse = { x: 0, y: 0, target: { x: 0, y: 0 } }
        const light = { x: 4.5, y: 5.5 }
        const onMove = (e) => {
          const r = wrap.getBoundingClientRect()
          if (!r.width || !r.height) return
          mouse.target.x = ((e.clientX - r.left) / r.width) * 12 - 6
          mouse.target.y = 4.5 - ((e.clientY - r.top) / r.height) * 9
        }
        window.addEventListener('mousemove', onMove, { passive: true })
        let raf = 0
        sampleWhale().then((pts) => {
          if (disposed) return
          if (!pts.length) { console.warn('[aurora] whale sampling produced no points'); return }
          circles = pts.map(() => {
            const c = document.createElementNS(NS, 'circle')
            c.setAttribute('r', '0.035')
            svg.appendChild(c)
            return c
          })
          const start = performance.now()
          const tick = () => {
            raf = requestAnimationFrame(tick)
            if (disposed) return
            try {
              const t = (performance.now() - start) / 1000
              mouse.x += (mouse.target.x - mouse.x) * .12
              mouse.y += (mouse.target.y - mouse.y) * .12
              const I = t - .3
              const L = clamp01(I / 2.5)
              const A = 1 - Math.pow(1 - L, 3) // assembly ease-out cubic
              light.x += ((4.5 + mouse.x * 1.05) - light.x) * .2
              light.y += ((5.5 + mouse.y * 1.05) - light.y) * .2
              const rot = t * .12 + (1 - A) * .3 + .04 * Math.sin(.25 * t)
              const breathe = .15 * Math.sin(.4 * t)
              wrap.style.transform = 'rotate(' + (rot * 57.29578).toFixed(2) + 'deg) translateY(' + (breathe * 30).toFixed(1) + 'px)'
              const lightR = 14, shadeMin = .28, shadeMax = 2.79
              for (let i = 0; i < pts.length; i++) {
                const p = pts[i]
                let cx = p.sx + (p.x - p.sx) * A
                let cy = p.sy + (p.y - p.sy) * A
                let cz = p.sz * (1 - A)
                const jx = (Math.sin(i * 12.9898) * 43758.5453 - Math.floor(Math.sin(i * 12.9898) * 43758.5453)) - .5
                const jy = (Math.sin(i * 78.233) * 12543.123 - Math.floor(Math.sin(i * 78.233) * 12543.123)) - .5
                const loose = A * (0.25 + 0.75 * p.edge)
                cx += jx * .05 * loose + Math.sin(t * .5 + i * .53) * .06 * loose
                cy += jy * .05 * loose + Math.cos(t * .42 + i * .71) * .06 * loose
                cz += Math.sin(t * .36 + i * .91) * .08 * loose
                const tail = smoothstep(.5, 4.5, p.x) * loose
                cy += Math.sin(t * 1.1 - p.x * .7) * .1 * tail
                cz += Math.cos(t * .9 - p.x * .55) * .06 * tail
                if (A > .95) {
                  const es = (A - .95) * 20
                  const dist = Math.sqrt(cx * cx + cy * cy)
                  const waveFade = smoothstep(0, 3, dist)
                  cz += Math.sin(dist * 3 - t * 1.5) * .06 * es * waveFade
                }
                if (A > .8) {
                  const me = (A - .8) * 5
                  const mx = cx - mouse.x, my = cy - mouse.y
                  const md = Math.sqrt(mx * mx + my * my)
                  if (md < 4.9 && md > .001) {
                    const tt = 1 - md / 4.9
                    const force = tt * tt * tt * me * .8
                    const na = Math.sin(i * .37 + t * .5) * 5
                    const ca = Math.cos(na), sa = Math.sin(na)
                    const ux = mx / md, uy = my / md
                    const px2 = ux * ca - uy * sa, py2 = ux * sa + uy * ca
                    cx += px2 * force * 2
                    cy += py2 * force * 2
                    cz += Math.sin(i * 1.7 + t) * force * .8
                  }
                }
                const ldx = cx - light.x, ldy = cy - light.y, ldz = cz - 3
                const ld = Math.sqrt(ldx * ldx + ldy * ldy + ldz * ldz)
                const lit = clamp01(1 - ld / lightR)
                const vLight = shadeMin + (shadeMax - shadeMin) * lit * lit
                const shimmer = Math.sin(t * 1.5 + cx * 5 + cy * 3) * .1 + .9
                const alpha = Math.min(1, p.op * (.45 + .3 * A) * shimmer * Math.min(vLight, 1))
                const c = circles[i]
                c.setAttribute('cx', cx.toFixed(3))
                c.setAttribute('cy', cy.toFixed(3))
                c.setAttribute('r', (0.035 + cz * .008).toFixed(4))
                c.setAttribute('opacity', alpha.toFixed(3))
              }
            } catch (err) {
              console.error('[aurora] whale tick error:', err)
            }
          }
          raf = requestAnimationFrame(tick)
          console.log('[aurora] v19 whale particles started: ' + pts.length + ' points')
        })
        return () => {
          disposed = true
          cancelAnimationFrame(raf)
          window.removeEventListener('mousemove', onMove)
          wrap.remove()
        }
      })
    }

    module.exports = { apply }
    return module.exports
  },
})
