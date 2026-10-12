```
npm create vite@latest my-app -- --template react
cd my-app
npm install -D vitest jsdom @testing-library/react @testing-library/jest-dom
npx vitest run --environment jsdom
```