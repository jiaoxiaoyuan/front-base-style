import { defineConfig } from 'vite'
export default defineConfig({
    build: {
        lib: {
            entry: 'src/main.ts', // 假设你的入口文件是TypeScript文件
            name: 'myAtomicCssLib',
            formats: ['es', 'umd'],
            fileName: format => `my-atomic-css-lib.${format}.js`
        },
        rollupOptions: {
            output: {
                assetFileNames: 'assets/[name].[ext]'
            }
        }
    }
} as any)
