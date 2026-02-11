rm -rf dist node_modules/.cache .nx

npx nx graph

npx nx build web-app
npx nx build web-app

npx nx run-many --target=test --all
npx nx run-many --target=test --all

npx nx run-many --target=build --all
npx nx run-many --target=build --all

echo "export const version = '2.0.0';" >> libs/utils/src/index.ts
npx nx graph --affected

npx nx build kotlin-utils
npx nx build kotlin-utils

Nx treats Kotlin, TS, Java and Go as first class citizens, we can build Kotlin alongside our TypeScript app with the same command. Caching, dependency graph and affected commands work across all languages.