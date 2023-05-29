


export default {

  template: /*html*/ `
    <section>
      
      <h2>Vue CDN</h2>
      <br>
      <p>

        A diferencia de otros frameworks de frontend como React, Angular o Svelte,
        Vue puede ser usado sin necesidad de un <a 
        href="https://sergiodxa.com/articles/que-es-un-bundler-de-js" target="_blank"
        >bundler</a>, simplemente cargando la librería (o, mejor dicho, biblioteca, o sea: <i>library</i>)
        desde una <a href="https://es.wikipedia.org/wiki/Red_de_distribuci%C3%B3n_de_contenidos" target="_blank">CDN</a>
        en un script dentro del archivo <strong>index.html</strong>
        <br><br>
        Aunque esto también es posible con React,
        para poder usar React desde una CDN en un archivo html sería necesario pre-compilar el código JSX a HTML y JS nativos,
        mientras que Vue no requiere de ningún paso previo de compilación. Lo único que hay que hacer es cargar la librería
        (perdón, biblioteca 😬️) en un <strong>script</strong>:
<pre>

&lt;script src=&quot;https://unpkg.com/vue@3/dist/vue.global.js&quot;&gt;&lt;/script&gt;

</pre>

        
        Sin embargo, cuando estamos usando componentes
        lo más recomendable es no cargar la librería de Vue en el archivo html.
        Lo que se recomienda para esto <a href="https://vuejs.org/guide/quick-start.html#using-the-es-module-build" target="_blank">en la documentación de Vue</a>
        es que en <strong>index.html</strong> solamente se incluya un script con <strong>type="module"</strong> 
        y el atributo <strong>defer</strong>, cargando el archivo JS principal (main.js):

        <pre>

&lt;script type="module" src="main.js" defer&gt;&lt;/script&gt;
        </pre>

        Este script puede estar en el <strong>head</strong> de <strong>index.html</strong> 
        ya que al usar el atributo <strong>defer</strong> el script se va a ejecutar <strong>luego de que renderice el código html</strong>.
        <br><br>
        Hacerlo de esta forma es mejor que poner el script al final del <strong>body</strong> 
        porque <strong>defer</strong> permite que el script 
        sea cargado en paralelo al html (aunque sea ejecutado después)
        mientras que al poner el script al final del <strong>body</strong> el script es cargado recién
        cuando el html termina de renderizar.
        <br><br>

        Luego, dentro del archivo <strong>main.js</strong> es posible cargar la biblioteca de Vue de esta forma:

        <pre>

import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

import App from './app.js'

createApp(App).mount('#app')
        </pre>
        (Fíjense que es la versión <strong>esm-browser</strong> no la versión <strong>vue.global</strong>).
        <br><br>
        Esto nos permite aprovechar el sistema de 
        <a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Modules" target="_blank">módulos de JavaScript</a>
        disponible en todos los browsers actuales. De esta forma cada componente de Vue 
        puede ser creado como un módulo aparte y luego importado dentro del componente principal
        (que por convención suele ser llamado <strong>App</strong>) como en el ejemplo de acá arriba.
        <br><br>
        Y así se pueden crear distintos componentes por fuera del método
        <strong>createApp</strong>. 
        <br>
        Para cada componente se crea un archivo .js con un objeto exportable (con <strong>export default</strong>)
        y dentro de ese objeto se incluyen las distintas <strong>options</strong> de Vue (o sea: data, methods, computed, etc):

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

      Así es como está hecho este sitio: en el método <strong>data</strong> del archivo <strong>app.js</strong> cada uno de los objetos en el array <strong>pages</strong>
      se corresponde con cada una de las vistas (<i>views</i>).
      <br><br>        
      De todas formas, el hecho de que Vue pueda ser usado sin un bundler 
      <strong>no significa que siempre deba ser usado sin un bundler</strong>.
      <br><br>
      En realidad, la forma más usual de usar Vue es con un bundler, generalmente <a href="https://esbuild.github.io/" target="_blank">esbuild</a>
      que ya viene incorporado al crear una app de Vue con <a href="https://vitejs.dev/" target="_blank">Vite</a>.
      </p>
    </section>  
  `
}