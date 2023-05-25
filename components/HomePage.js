


export default {

  template: /*html*/ `
    <section>
      
      <h2>Vue CDN</h2>
      <br>
      <p>

        A diferencia de otros frameworks de frontend como <strong>Svelte</strong>,
        Vue puede ser usado sin necesidad de un <a 
        href="https://sergiodxa.com/articles/que-es-un-bundler-de-js" target="_blank"
        >bundler</a>, simplemente cargando la librería (o, mejor dicho, biblioteca)
        desde un <a href="https://es.wikipedia.org/wiki/Red_de_distribuci%C3%B3n_de_contenidos" target="_blank">CDN</a>
        en un tag de tipo script dentro del archivo html.
        <br><br>
        Aunque técnicamente esto también es posible con <strong>React</strong>,
        para poder usar React de esta forma sería necesario pre-compilar el código JSX a HTML y JS nativos,
        mientras que Vue no requiere ningún paso previo de compilación.
        <br><br>
        Sin embargo, cuando estamos usando distintos componentes en nuestra app de Vue
        lo más recomendable es usar un script con <strong>type="module"</strong> y el atributo <strong>defer</strong>:

        <pre>

&lt;script type="module" src="main.js" defer&gt;&lt;/script&gt;
        </pre>
        Y dentro del archivo main.js cargar la librería (perdón, biblioteca 🤷‍♂️️) de esta forma:

        <pre>

import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
import App from './app.js'
createApp(App).mount('#app')
        </pre>

        Esto nos permite aprovechar el sistema de 
        <a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Modules" target="_blank">módulos de JavaScript</a>
        disponible en todos los browsers actuales. De esta forma, cada componente de Vue 
        puede ser creado como un módulo aparte y luego importado dentro del componente principal,
        que por convención suele ser llamado App, como en el ejemplo de acá arriba.
        <br><br>
        De esta forma se pueden crear componentes sin necesidad de usar el método
        <strong>createApp</strong> para definirlos, simplemente se crea un objeto exportable
        con cada una de las <strong>options</strong> de Vue:

        <pre>

import NavBar from './components/NavBar.js'

export default {

  components: {
    NavBar
  },

  data: () => ({
    pages: [
      { title: 'Vue CDN', show: true },
      { title: 'Props', show: false },
      { title: 'Componentes', show: false },
      { title: 'Inline HTML', show: false }
    ]
  }),
}

        </pre>
        

      </p>
    </section>  
  `
}