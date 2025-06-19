import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Palitan ito ng pangalan ng repository mo
export default defineConfig({
  base: 'rolly_app',
  plugins: [react()],
})