// Reusable framer-motion configs
import type { MotionProps } from 'framer-motion'

export const fadeUp: Pick<MotionProps, 'initial' | 'animate'> = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
}

export const transitionDefault: MotionProps['transition'] = {
  duration: 0.7,
  ease: 'easeOut',
}
