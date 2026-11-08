import { useEffect, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {
  ACESFilmicToneMapping,
  CanvasTexture,
  Color,
  CylinderGeometry,
  DoubleSide,
  Group,
  LatheGeometry,
  MeshPhysicalMaterial,
  SRGBColorSpace,
  TorusGeometry,
  Vector2,
} from 'three'

function createLabelTexture() {
  const canvas = document.createElement('canvas')
  canvas.width = 1024
  canvas.height = 512
  const context = canvas.getContext('2d')
  if (!context) return new CanvasTexture(canvas)

  context.fillStyle = '#faf8f1'
  context.fillRect(0, 0, canvas.width, canvas.height)
  context.strokeStyle = '#c9a24a'
  context.lineWidth = 10
  context.strokeRect(20, 20, canvas.width - 40, canvas.height - 40)
  context.fillStyle = '#b68d43'
  context.font = '600 36px Manrope, sans-serif'
  context.textAlign = 'center'
  context.fillText('✦  PREMIUM NUTRITION  ✦', 512, 85)
  context.fillStyle = '#0a1a3f'
  context.font = '700 76px Manrope, sans-serif'
  context.fillText('BELVEX', 512, 185)
  context.fillStyle = '#aa8139'
  context.font = '600 24px Manrope, sans-serif'
  context.fillText('BALANCE · ENERGY · LIFE · VITALITY · EXCELLENCE', 512, 232)
  context.fillStyle = '#0a1a3f'
  context.font = '700 46px Manrope, sans-serif'
  context.fillText('MAGNESIUM', 512, 322)
  context.fillText('GLYCINATE', 512, 376)
  context.fillStyle = '#c9a24a'
  context.font = '600 28px Manrope, sans-serif'
  context.fillText('133 mg  ·  90 CAPSULES', 512, 433)
  const texture = new CanvasTexture(canvas)
  texture.colorSpace = SRGBColorSpace
  texture.anisotropy = 8
  return texture
}

function ProductJar({ animate }: { animate: boolean }) {
  const root = useRef<Group>(null)
  const phase = useRef(0)
  const label = useMemo(createLabelTexture, [])
  const body = useMemo(() => new LatheGeometry([
    new Vector2(.72, 0), new Vector2(.88, .035), new Vector2(.97, .12),
    new Vector2(1, .28), new Vector2(1, 1.03), new Vector2(.98, 1.16),
    new Vector2(.84, 1.32), new Vector2(.8, 1.43), new Vector2(.8, 1.58),
  ], 64), [])
  const bottle = useMemo(() => new MeshPhysicalMaterial({
    color: new Color('#0a1a3f'), roughness: .23, metalness: .12, clearcoat: 1, clearcoatRoughness: .16,
  }), [])
  const capMaterial = useMemo(() => new MeshPhysicalMaterial({
    color: new Color('#050d24'), roughness: .5, metalness: .1, clearcoat: .65,
  }), [])
  const gold = useMemo(() => new MeshPhysicalMaterial({
    color: new Color('#c9a24a'), roughness: .24, metalness: .82, clearcoat: .3,
  }), [])
  const labelMaterial = useMemo(() => new MeshPhysicalMaterial({
    map: label, roughness: .5, metalness: .02, clearcoat: .25, side: DoubleSide,
  }), [label])

  useEffect(() => () => {
    body.dispose()
    label.dispose()
    bottle.dispose()
    capMaterial.dispose()
    gold.dispose()
    labelMaterial.dispose()
  }, [body, label, bottle, capMaterial, gold, labelMaterial])

  useFrame(({ pointer }, delta) => {
    if (!root.current || !animate) return
    phase.current += delta
    root.current.rotation.y = Math.sin(phase.current * .4) * .055
    root.current.rotation.x += (pointer.y * .055 - root.current.rotation.x) * Math.min(1, delta * 2)
    root.current.position.y = Math.sin(phase.current * .55) * .045
  })

  return <group ref={root} position={[0, -.04, 0]} rotation={[.02, -.12, -.055]}>
    <mesh geometry={body} material={bottle} castShadow receiveShadow />
    <mesh position={[0, .77, 1.006]} material={labelMaterial} castShadow>
      <planeGeometry args={[1.86, .86]} />
    </mesh>
    <mesh position={[0, 1.67, 0]} material={gold}>
      <torusGeometry args={[.803, .025, 12, 64]} />
    </mesh>
    <mesh position={[0, 1.85, 0]} material={capMaterial} castShadow>
      <cylinderGeometry args={[.8, .8, .39, 64, 1]} />
    </mesh>
    <mesh position={[0, 2.055, 0]} material={gold}>
      <cylinderGeometry args={[.78, .78, .035, 64]} />
    </mesh>
    <mesh position={[0, 2.078, 0]} material={capMaterial}>
      <cylinderGeometry args={[.76, .76, .018, 64]} />
    </mesh>
  </group>
}

function Scene({ animate }: { animate: boolean }) {
  return <>
    <ambientLight intensity={1.05} />
    <directionalLight position={[-3, 4, 5]} intensity={3.2} color="#fff3d0" castShadow />
    <pointLight position={[4, 1, 1]} intensity={1.7} color="#7db6ff" />
    <pointLight position={[-3, -1, 0]} intensity={1.1} color="#c9a24a" />
    <group scale={.82}>
      <ProductJar animate={animate} />
    </group>
  </>
}

export default function HeroProductScene() {
  const host = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(true)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [rendererReady, setRendererReady] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updateMotion = () => setReducedMotion(media.matches)
    updateMotion()
    media.addEventListener('change', updateMotion)
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: .01 })
    if (host.current) observer.observe(host.current)
    return () => {
      media.removeEventListener('change', updateMotion)
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    if (!rendererReady) return
    if (host.current) host.current.dataset.ready = 'true'
  }, [rendererReady])

  return <div className="hero-3d-canvas" ref={host} aria-hidden="true">
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, .15, 6.15], fov: 38, near: .1, far: 40 }}
      gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
      frameloop={visible && !reducedMotion && !document.hidden ? 'always' : 'demand'}
      onCreated={({ gl }) => {
        gl.outputColorSpace = SRGBColorSpace
        gl.toneMapping = ACESFilmicToneMapping
        setRendererReady(true)
      }}
    >
      <Scene animate={visible && !reducedMotion && !document.hidden} />
    </Canvas>
  </div>
}
