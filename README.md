DxDateBox is not working in production mode (Vue3 + Vite) with type='datetime'. There's no such error in dev-mode. The error occurs only with type='datetime' parameter.

To run the app in production mode:
```
  npm ci
  npm run build
  npm run serve
```
Open the page and try to click on the button of DxDateBox. This error will appear in the console: `Uncaught TypeError: r[n] is not a function`
