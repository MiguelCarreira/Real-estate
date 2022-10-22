import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";
import { resolve, join } from 'path'


//const distDir = join(__dirname, './dist');
const srcDir = join(__dirname, './src');
const baseDir = join(__dirname, './');

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      '~': resolve(__dirname,'./src'),
      layout: resolve(__dirname, `${ srcDir }/layout`),
      components: resolve(__dirname, `${ srcDir }/components`),
      pages: resolve(__dirname, `${ srcDir }/pages`),
      constants: resolve(__dirname, `${ baseDir }/constants`),
      fragments: resolve(__dirname, `${ srcDir }/fragments`),
      utils: resolve(__dirname, `${ srcDir }/utils`),
      img: resolve(__dirname, `${ srcDir }/img`),
      assets: resolve(__dirname, `${ srcDir }/assets`)
    },
  },
  plugins: [svgr(), react({
    include: "**/*.jsx",  //added to reload on changes
  })]
})