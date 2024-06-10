import { defineConfig } from 'vite';
import reactSWCPlugin from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [
    reactSWCPlugin(),
  ],
});
