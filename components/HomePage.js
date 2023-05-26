


export default {

  template: /*html*/ `
    <section>
      
      <h2>Vue CDN</h2>
      <br>
      <p>

        A diferencia de otros frameworks de frontend como React, Angular o Svelte,
        Vue puede ser usado sin necesidad de un <a 
        href="https://sergiodxa.com/articles/que-es-un-bundler-de-js" target="_blank"
        >bundler</a>, simplemente cargando la librería (o, mejor dicho, biblioteca)
        desde un <a href="https://es.wikipedia.org/wiki/Red_de_distribuci%C3%B3n_de_contenidos" target="_blank">CDN</a>
        script dentro del archivo html.
        <br><br>
        Aunque técnicamente esto también es posible con <strong>React</strong>,
        para poder usar React de esta forma sería necesario pre-compilar el código JSX a HTML y JS nativos,
        mientras que Vue no requiere ningún paso previo de compilación.
        <br><br>
        Sin embargo, cuando estamos usando distintos componentes en nuestra app de Vue
        lo más recomendable es no cargar la librería de Vue (perdón, biblioteca 🤷‍♂️️) en el archivo html.
        La que se recomienda para esto <a href="https://vuejs.org/guide/quick-start.html#using-vue-from-cdn" target="_blank">en el sitio oficial de Vue</a>
        es usar un script con <strong>type="module"</strong> y el atributo <strong>defer</strong> dentro del <strong>head</strong>:

        <pre>
&lt;script type="module" src="main.js" defer&gt;&lt;/script&gt;
        </pre>

        Usar el atributo <strong>defer</strong> en el <strong>head</strong> es mucho mejor que poner el
        script al final del <strong>body</strong> porque <strong>defer</strong> permite que el script 
        sea cargado en paralelo al html, siendo ejecutado únicamente luego de que el html se renderiza,
        mientras que al poner el script al final del body el script es cargado recién
        cuando el html termina de renderizar.
        <br><br>

        Luego, dentro del archivo <strong>main.js</strong> es posible cargar la biblioteca de esta forma:

        <pre>
import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
import App from './app.js'
createApp(App).mount('#app')
        </pre>
        (Fíjense que es la versión <strong>vue.esm-browser</strong> no la versión <strong>vue.global</strong>).
        <br><br>
        Esto nos permite aprovechar el sistema de 
        <a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Modules" target="_blank">módulos de JavaScript</a>
        disponible en todos los browsers actuales. De esta forma cada componente de Vue 
        puede ser creado como un módulo aparte y luego importado dentro del componente principal
        (que por convención suele ser llamado App) como en el ejemplo de acá arriba.
        <br><br>
        Y así se pueden crear componentes sin necesidad de usar el método
        <strong>createApp</strong> para definirlos, simplemente se crea un objeto exportable
        con las distintas <strong>options</strong> de Vue (data, methods, computed, etc):

        <pre>
// app.js
import NavBar from './components/navBar.js'
export default {
  components: {
    NavBar
  },
  data: () => ({
    pages: [
      { title: 'Vue CDN', show: true },
      { title: 'Contacto', show: false },
      { title: 'Props', show: false },
      { title: 'Router', show: false }
    ]
  }),
}
        </pre>

      Así es como está hecha esta app: en el método <strong>data</strong> del archivo <strong>app.js</strong> cada uno de los objetos en el array <strong>pages</strong>
      se corresponde con cada una de las vistas.
      <br><br>        
      De todas formas, el hecho de que Vue pueda ser usado sin un bundler 
      <strong>no significa que siempre deba ser usado sin un bundler</strong>.
      <br><br>
      De hecho, la forma más usual de usar Vue es con un bundler, como por ejemplo <a href="https://esbuild.github.io/" target="_blank">esbuild</a>,
      que ya viene incorporado al crear una app de Vue con <a href="https://vitejs.dev/" target="_blank">Vite</a>.
      </p>
    </section>  
  `
}