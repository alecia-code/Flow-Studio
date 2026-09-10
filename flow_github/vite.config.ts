import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id: string) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

// GitHub Pages hosts project sites at /<repository-name>/.
// During Actions builds GITHUB_REPOSITORY is provided automatically.
// User/organization sites (<name>.github.io) are served from the domain root.
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1]
const isRootPagesRepository = repositoryName?.endsWith('.github.io')
const base = process.env.GITHUB_ACTIONS === 'true' && repositoryName && !isRootPagesRepository
  ? `/${repositoryName}/`
  : '/'

export default defineConfig({
  base,
  plugins: [
    figmaAssetResolver(),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
