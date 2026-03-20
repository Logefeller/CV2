import { useEffect, useRef, useState, lazy, Suspense } from 'react'
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import BookshelfPage from './pages/BookshelfPage'

gsap.registerPlugin(ScrollTrigger)

const Dithering = lazy(() =>
  import('@paper-design/shaders-react').then((mod) => ({ default: mod.Dithering }))
)

// ─── Cursor ───
function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    let mX = 0, mY = 0, cX = 0, cY = 0
    let rafId: number

    const onMove = (e: MouseEvent) => {
      mX = e.clientX
      mY = e.clientY
      cursor.classList.add('active')
    }

    const onLeave = () => cursor.classList.remove('active')

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)

    const loop = () => {
      cX += (mX - cX) * 0.15
      cY += (mY - cY) * 0.15
      cursor.style.left = cX + 'px'
      cursor.style.top = cY + 'px'
      rafId = requestAnimationFrame(loop)
    }
    loop()

    const addHoverListeners = () => {
      document.querySelectorAll('a, button').forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hovering'))
        el.addEventListener('mouseleave', () => cursor.classList.remove('hovering'))
      })
    }
    addHoverListeners()

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return <div ref={cursorRef} className="cursor-dot" />
}

// ─── Navbar ───
function Navbar() {
  const location = useLocation()
  const links = [
    { label: 'Home', to: '/' },
    { label: 'Videos', to: '/videos' },
    { label: 'Writings', to: '/writings' },
    { label: 'Bookshelf', to: '/bookshelf' },
  ]
  return (
    <nav className="navbar">
      <ul className="nav-links">
        {links.map(({ label, to }) => (
          <li key={to}>
            <Link
              to={to}
              style={location.pathname === to ? { color: '#f0f0f0' } : undefined}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

// ─── Hero ───
function Hero() {
  const [isHovered, setIsHovered] = useState(false)
  const taglineRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const el = taglineRef.current
    if (!el) return

    gsap.to(el, {
      yPercent: 10,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    })
  }, [])

  return (
    <section
      className="hero"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Dithering background — sits behind all hero content */}
      <Suspense fallback={null}>
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.12] mix-blend-screen">
          <Dithering
            colorBack="#00000000"
            colorFront="#EC4E02"
            shape="warp"
            type="4x4"
            speed={isHovered ? 0.5 : 0.15}
            className="size-full"
            minPixelRatio={1}
          />
        </div>
      </Suspense>

      <h1 ref={taglineRef} className="hero-tagline relative z-10">
        Hi! I'm Joel.<br />Welcome to my personal site!
      </h1>
    </section>
  )
}

// ─── Mission ───
function Mission() {
  const missionRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const el = missionRef.current
    if (!el) return
    if (el.querySelector('.blur-word')) return

    const container = el
    const temp = document.createElement('div')
    temp.innerHTML = container.innerHTML
    container.innerHTML = ''

    function walk(n: Node, isMuted: boolean) {
      if (n.nodeType === 3) {
        ;(n.textContent ?? '').split(/(\s+)/).forEach(part => {
          if (part.trim() === '') {
            container.appendChild(document.createTextNode(part))
          } else {
            const span = document.createElement('span')
            span.className = 'blur-word' + (isMuted ? ' muted' : '')
            if (isMuted) span.style.color = '#6b6b6b'
            span.textContent = part
            container.appendChild(span)
          }
        })
      } else if (n.nodeType === 1) {
        const elem = n as Element
        const muted = isMuted || elem.classList.contains('highlight')
        Array.from(n.childNodes).forEach(c => walk(c, muted))
      }
    }

    Array.from(temp.childNodes).forEach(n => walk(n, false))

    const words = container.querySelectorAll('.blur-word')
    if (!words.length) return

    gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top 95%',
        end: 'top 40%',
        scrub: true,
      },
    }).from(words, {
      filter: 'blur(10px)',
      opacity: 0,
      y: 6,
      duration: 1,
      stagger: 0.05,
      ease: 'none',
    })
  }, [])

  return (
    <p ref={missionRef} className="mission-text">
      "The highest reward for a person's toil is not what they gets for it but what they become by it."{' '}
      <span className="highlight">― John Ruskin</span>
    </p>
  )
}

// ─── About ───
function About() {
  const labelRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    // Word-split about text
    const el = textRef.current
    if (el) {
      const text =
        "My name is Joel. I did my Undergraduate in Finance and Masters in Data Science. I spend most of my time reading, explaining things through video, and writing when the mood strikes. This site is a loose collection of all of it."
      el.innerHTML = ''
      text.split(' ').forEach((word, i, arr) => {
        const span = document.createElement('span')
        span.className = 'blur-word'
        span.textContent = word
        el.appendChild(span)
        if (i < arr.length - 1) el.appendChild(document.createTextNode(' '))
      })

      gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: 'top 92%',
          end: 'top 45%',
          scrub: true,
        },
      }).from(el.querySelectorAll('.blur-word'), {
        filter: 'blur(10px)',
        opacity: 0,
        y: 6,
        duration: 1,
        stagger: 0.05,
        ease: 'none',
      })
    }

    // About label reveal
    const label = labelRef.current
    if (label) {
      const obs = new IntersectionObserver(
        entries => {
          entries.forEach(e => {
            if (e.isIntersecting) {
              label.classList.add('revealed')
              obs.unobserve(e.target)
            }
          })
        },
        { threshold: 0.3 }
      )
      obs.observe(label)
    }

    // About image reveal + parallax
    const img = imageRef.current
    if (img) {
      const imgObs = new IntersectionObserver(
        entries => {
          entries.forEach(e => {
            if (e.isIntersecting) {
              setTimeout(() => (e.target as HTMLElement).classList.add('revealed'), 100)
              imgObs.unobserve(e.target)
            }
          })
        },
        { threshold: 0.1 }
      )
      imgObs.observe(img)

      gsap.to(img, {
        yPercent: -10,
        ease: 'none',
        scrollTrigger: {
          trigger: img,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
    }
  }, [])

  return (
    <div className="about-grid">
      <div className="about-text-col">
        <div ref={labelRef} className="about-label">About me</div>
        <p ref={textRef} className="about-text"></p>
      </div>
      <div className="about-image-col">
        <div ref={imageRef} className="about-image-wrapper">
          <img
            src="/Pic2.jpg"
            alt="Joel"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  )
}

// ─── Home ───
function Home() {
  useEffect(() => {
    const lenis = new Lenis()
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => lenis.raf(time * 1000))
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <>
      <Hero />
      <section className="flow-section">
        <Mission />
        <About />
      </section>
      <footer className="site-footer">
        <a href="mailto:logefeller2@gmail.com">logefeller2@gmail.com</a>
      </footer>
    </>
  )
}

// ─── App ───
export default function App() {
  return (
    <HashRouter>
      <Cursor />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookshelf" element={<BookshelfPage />} />
      </Routes>
    </HashRouter>
  )
}
