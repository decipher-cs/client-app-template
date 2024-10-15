/** @type {import('tailwindcss').Config} */

export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         fontSize: {
            "2xs": "clamp(0.51rem, -0.02vi + 0.52rem, 0.5rem)",
            xs: "clamp(0.64rem, 0.05vi + 0.63rem, 0.67rem)",
            sm: "clamp(0.8rem, 0.17vi + 0.76rem, 0.89rem)",
            base: "clamp(1rem, 0.34vi + 0.91rem, 1.19rem)",
            md: "clamp(1.25rem, 0.61vi + 1.1rem, 1.58rem)",
            lg: "clamp(1.56rem, 1vi + 1.31rem, 2.11rem)",
            xl: "clamp(1.95rem, 1.56vi + 1.56rem, 2.81rem)",
            "2xl": "clamp(2.44rem, 2.38vi + 1.85rem, 3.75rem)",
            "3xl": "clamp(3.05rem, 3.54vi + 2.17rem, 5rem)",
            "4xl": "clamp(3.81rem, 5.18vi + 2.52rem, 6.66rem)",
            "5xl": "clamp(4.77rem, 7.48vi + 2.9rem, 8.88rem)",
            "6xl": "clamp(5.96rem, 10.69vi + 3.29rem, 11.84rem)",
         },
      },
   },
   plugins: [],
}
