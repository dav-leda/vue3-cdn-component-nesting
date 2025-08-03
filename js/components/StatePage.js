

import someStore from "../../state/someStore.js"

export default {

  data: () => ({
    someStore
  }),

  template: /*html*/ `

  <section>

    <h2>State Management</h2>

    <p>
      En Vue el manejo de estado global puede hacerse 
      con un objeto de JavaScript.
      Al cambiar algo en el objeto cambia el estado
      y los componentes vuelven a renderizar con el nuevo estado.
    </p>
  
    <pre>{{ JSON.stringify(someStore) }}</pre>
  </section>
  
  `
}