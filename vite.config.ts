import { defineConfig } from 'vite'
import ViteDotNetPlugin from "vite-dotnet"
import react from '@vitejs/plugin-react-swc'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()
  ,ViteDotNetPlugin("src/main.tsx")],
  
})

