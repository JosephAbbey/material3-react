/// <reference types="vite/client" />

declare module '*.csv' {
  const data: Record<string, string>[];
  export default data;
}
