export default function BackgroundArtwork() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <picture>
        <source srcSet="/bg.avif" type="image/avif" />
        <source srcSet="/bg.webp" type="image/webp" />
        <img
          src="/bg.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover scale-105 brightness-110 contrast-110"
          draggable="false"
          decoding="async"
          loading="eager"
        />
      </picture>
      {/* New: Radial overlay for clarity/depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(0,0,0,0) 30%, rgba(0,0,0,0.6) 100%)'
        }}
      />
    </div>
  )
}
