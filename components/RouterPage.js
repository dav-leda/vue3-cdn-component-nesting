


export default {

  template: /*html*/ `

    <section>

      <h2>Simulando un router</h2>
      <br>
      <p>

        Como pueden ver, la <strong>nav bar</strong> de esta app funciona como un router para 
        <a href="https://es.wikipedia.org/wiki/Single-page_application" target="_blank">SPA</a>
        ya que permite mostrar las distintas vistas clickeando en los links sin necesidad de usar tags de tipo <strong>&lt;a href=""&gt; </strong> 
        que por defecto generan una llamada al servidor y la carga de una nueva página. En este caso lo único que hacen los links es disparar un método que cambia el valor de la propiedad booleana <strong>show</strong>
        de <strong>false</strong> a <strong>true</strong>, y este valor booleano es leído por una directiva <strong>v-show</strong> para cada una de las vistas.
        <br><br>
        Sin embargo, esto es mucho más limitado que un SPA router real ya que la barra de navegación
        del browser debería actualizarse con el cambio de ruta. Y también debería guardar un historial de navegación.
  
        <br><br>
        Para poder hacer todo eso es necesario usar <a href="https://router.vuejs.org/" target="_blank">Vue Router</a>.

      </p>

    </section>

  `
}