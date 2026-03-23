// Soft, abstract, subtle background layer for Bruket
// See: #F8B195 #F67280 #C06C84 #6C5B7B #355C7D
export default function BackgroundArtwork() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 w-full h-full select-none">
      {/* Top cluster */}
      <svg
        className="absolute left-1/2 -translate-x-1/2 top-[-60px] md:top-[-100px] w-[540px] md:w-[700px] opacity-[0.14] mix-blend-soft-light blur-3xl"
        width="700" height="400" viewBox="0 0 700 400" fill="none" xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <ellipse cx="120" cy="55" rx="110" ry="46" fill="#F8B195"/>
        <ellipse cx="360" cy="68" rx="160" ry="56" fill="#355C7D"/>
        <ellipse cx="540" cy="140" rx="72" ry="44" fill="#C06C84"/>
        <ellipse cx="270" cy="120" rx="100" ry="42" fill="#F67280"/>
        <ellipse cx="420" cy="180" rx="88" ry="40" fill="#6C5B7B"/>
      </svg>
      {/* Bottom cluster */}
      <svg
        className="absolute left-1/2 -translate-x-1/2 bottom-[-90px] md:bottom-[-120px] w-[480px] md:w-[670px] opacity-[0.13] mix-blend-soft-light blur-3xl"
        width="680" height="360" viewBox="0 0 680 360" fill="none" xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <ellipse cx="410" cy="290" rx="170" ry="54" fill="#355C7D"/>
        <ellipse cx="610" cy="320" rx="54" ry="30" fill="#C06C84"/>
        <ellipse cx="80" cy="310" rx="90" ry="27" fill="#F8B195"/>
        <ellipse cx="250" cy="250" rx="78" ry="31" fill="#F67280"/>
        <ellipse cx="140" cy="210" rx="64" ry="28" fill="#6C5B7B"/>
      </svg>
    </div>
  );
}
