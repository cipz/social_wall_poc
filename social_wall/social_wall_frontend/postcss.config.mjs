const config = {
  plugins: [
    ["@tailwindcss/postcss", {
      theme: {
        colors: {
          border: 'hsl(var(--border))',
          background: 'hsl(var(--background))',
          foreground: 'hsl(var(--foreground))',
        },
      },
    }],
  ],
};

export default config;
