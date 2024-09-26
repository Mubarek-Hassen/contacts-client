import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import dotenv from "dotenv"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "VITE_BASE_URL": JSON.parse(import.meta.env.VITE_BASE_URL),
  },
})
