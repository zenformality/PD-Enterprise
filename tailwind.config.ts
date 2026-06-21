import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import daisyui from "daisyui";

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  plugins: [typography, forms, daisyui],
  daisyui: {
    themes: ["light", "dark"]
  }
};
