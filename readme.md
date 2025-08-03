# Vue CDN

Ejemplo de uso de Vue con CDN (sin build).


## Carga de Vue mediante CDN

```js
// js/main.js

import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

import App from './components/App.js'

createApp(App).mount('#app')
```

## Routing

```js
import NavBar from './NavBar.js'

export default {

  components: {
    NavBar
  },

  data: () => ({
    pages: [
      { title: 'Vue CDN', show: true },
      { title: 'Contacto', show: false },
      { title: 'Props', show: false },
      { title: 'Router', show: false },
      { title: 'State', show: false }
    ]
  }),
}
```

## State Management

Crear un objeto para el manejo de estado:

```js
// state/someStore.js

export default {
  someState: {
    key1: 'value 1',
    key2: 'value 2',
    key3: 'value 3',
  }
}
```

Importar el objeto y declararlo como propiedad de `data`:

```js
// js/components/StatePage.js

import someStore from "../../state/someStore.js"

export default {

  data: () => ({
    someStore
  }),

  template: /*html*/ `
    <pre>{{ JSON.stringify(someStore) }}</pre>  
  `
}
```



