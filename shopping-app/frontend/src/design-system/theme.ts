// Design System Theme
// Color Palette
export const colors = {
  // Primary Colors
  primary: {
    deepIndigo: '#283593', // Trust, Reliability
    saffron: '#FF6F00',    // Energy, Local identity
  },
  
  // Secondary Colors
  secondary: {
    leafGreen: '#388E3C',  // Sustainability
    warmYellow: '#FFC107', // Community, Positivity
  },
  
  // Neutral Shades
  neutral: {
    white: '#FFFFFF',
    lightGrey: '#F5F5F5',
    charcoal: '#212121',
  },
  
  // Semantic Colors
  semantic: {
    success: '#4CAF50',
    warning: '#FF9800',
    error: '#F44336',
    info: '#2196F3',
  },
  
  // Text Colors
  text: {
    primary: '#212121',
    secondary: '#757575',
    disabled: '#9E9E9E',
    inverse: '#FFFFFF',
  },
  
  // Background Colors
  background: {
    default: '#F5F5F5',
    paper: '#FFFFFF',
    dark: '#212121',
  }
};

// Typography
export const typography = {
  fontFamily: {
    primary: "'Inter', 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    secondary: "'Poppins', 'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    fallback: "'Noto Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
  },
  
  fontSize: {
    h1: '24px',      // Headline: 22-26px
    h2: '19px',      // Subheading: 18-20px
    body: '15px',    // Body Text: 14-16px
    caption: '12px'  // Caption/Hints: 12px
  },
  
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700
  },
  
  lineHeight: {
    normal: 1.5,
    compact: 1.3,
    relaxed: 1.6
  }
};

// Spacing Scale (8px base)
export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  xxl: '48px'
};

// Border Radius
export const borderRadius = {
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  pill: '50px'
};

// Shadows
export const shadows = {
  sm: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
  md: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
  lg: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
  xl: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
};

// Breakpoints
export const breakpoints = {
  xs: '0px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1400px'
};

// Z-Index
export const zIndex = {
  modal: 1000,
  overlay: 900,
  dropdown: 800,
  sticky: 700,
  header: 600,
  footer: 500,
  content: 100,
  base: 1
};

export default {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  breakpoints,
  zIndex
};