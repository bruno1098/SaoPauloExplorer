export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

export const containerWidths = {
  story: {
    default: '33.333333%',
    md: '50%',
    sm: '100%',
  },
  details: {
    default: '400px',
    sm: '100%',
  },
} as const;