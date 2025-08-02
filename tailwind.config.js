module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./*.html"],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Coral
        primary: {
          DEFAULT: "#FF6B6B", // coral-500 - CTA power + feminine appeal
          50: "#FFF5F5", // coral-50
          100: "#FED7D7", // coral-100
          200: "#FEB2B2", // coral-200
          300: "#FC8181", // coral-300
          400: "#F56565", // coral-400
          500: "#FF6B6B", // coral-500
          600: "#E53E3E", // coral-600
          700: "#C53030", // coral-700
          800: "#9B2C2C", // coral-800
          900: "#742A2A", // coral-900
        },
        // Secondary Colors - Sky Blue
        secondary: {
          DEFAULT: "#87CEEB", // sky-blue-500 - trust + calming effect
          50: "#F0F9FF", // sky-blue-50
          100: "#E0F2FE", // sky-blue-100
          200: "#BAE6FD", // sky-blue-200
          300: "#7DD3FC", // sky-blue-300
          400: "#38BDF8", // sky-blue-400
          500: "#87CEEB", // sky-blue-500
          600: "#0284C7", // sky-blue-600
          700: "#0369A1", // sky-blue-700
          800: "#075985", // sky-blue-800
          900: "#0C4A6E", // sky-blue-900
        },
        // Accent Colors - Gold
        accent: {
          DEFAULT: "#FFD700", // gold-500 - premium indicators + luxury feel
          50: "#FFFBEB", // gold-50
          100: "#FEF3C7", // gold-100
          200: "#FDE68A", // gold-200
          300: "#FCD34D", // gold-300
          400: "#FBBF24", // gold-400
          500: "#FFD700", // gold-500
          600: "#D97706", // gold-600
          700: "#B45309", // gold-700
          800: "#92400E", // gold-800
          900: "#78350F", // gold-900
        },
        // Background Colors
        background: "#FFFFFF", // white - clean canvas for product focus
        surface: "#F8F9FA", // gray-50 - subtle section separation
        // Text Colors
        text: {
          primary: "#2C3E50", // slate-800 - high contrast scanning
          secondary: "#6C757D", // gray-500 - supporting without distraction
        },
        // Status Colors
        success: "#28A745", // green-600 - positive purchase confirmation
        warning: "#FFC107", // yellow-500 - limited stock urgency
        error: "#DC3545", // red-600 - form validation only
        // Neutral Colors
        neutral: {
          50: "#F8F9FA", // gray-50
          100: "#F1F3F4", // gray-100
          200: "#E9ECEF", // gray-200
          300: "#DEE2E6", // gray-300
          400: "#CED4DA", // gray-400
          500: "#ADB5BD", // gray-500
          600: "#6C757D", // gray-600
          700: "#495057", // gray-700
          800: "#343A40", // gray-800
          900: "#212529", // gray-900
        },
      },
      fontFamily: {
        // Headlines - Poppins (400, 600, 700)
        poppins: ['Poppins', 'sans-serif'],
        // Body - Inter (400, 500)
        inter: ['Inter', 'sans-serif'],
        // Default sans
        sans: ['Inter', 'sans-serif'],
        // Accents - Playfair Display (400, 600)
        playfair: ['Playfair Display', 'serif'],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      boxShadow: {
        // Product card shadow
        'product': '0 4px 12px rgba(0, 0, 0, 0.1)',
        // CTA button shadow
        'cta': '0 2px 8px rgba(255, 107, 107, 0.3)',
        'cta-hover': '0 4px 16px rgba(255, 107, 107, 0.4)',
        // Enhanced shadows
        'beauty': '0 8px 24px rgba(0, 0, 0, 0.15)',
      },
      borderRadius: {
        'beauty': '8px',
      },
      backgroundImage: {
        'gradient-beauty': 'linear-gradient(135deg, #87CEEB 0%, #FFB6C1 100%)',
        'gradient-luxury': 'linear-gradient(135deg, #FEF3C7 0%, #FCD34D 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      transitionDuration: {
        '250': '250ms',
      },
      transitionTimingFunction: {
        'beauty': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}