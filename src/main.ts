import './normalize.css'
import './app.css'
import './pico.css'
import App from './App.svelte'

const app = new App({
  target: document.getElementById('app')!,
})

export default app
