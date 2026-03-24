---
globs: '["components/Background*","components/**/Background*"]'
description: For artistic or photographic backgrounds, always use AVIF/WebP
  (with fallback) unless user says strictly SVG. Add subtle radial gradients for
  content focus and dark contrast. Use picture element for best browser support.
---

Default to AVIF or WebP for background images; use <picture> with type fallbacks. Overlay a subtle dark radial gradient or filter (brightness/contrast). Use SVG backgrounds only if strictly vector art is needed, otherwise prefer highly optimized raster formats for rich, organic visuals. Keep center clear when text/UI overlays. Always apply performance best practices.