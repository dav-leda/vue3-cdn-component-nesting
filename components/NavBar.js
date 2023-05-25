

import HomePage from './HomePage.js'
import PropsPage from './PropsPage.js'
import ComponentesPage from './ComponentesPage.js'
import InlinePage from './InlinePage.js'
import ModoDark from './ModoDark.js'

export default {

  components: {
    HomePage, 
    PropsPage, 
    ComponentesPage,
    InlinePage,
    ModoDark
  },

  props: {
    pages: Array
  },


  methods: {
    showPage(title) {
      this.pages.forEach( page => 
        page.show = page.title === title 
      )
    },
    isShown(title) {
      return (
        this.pages.find(page => 
          page.title === title
        )
      ).show
    }
  },



  // Para el resaltado de sintaxis de templates literales
  // usar la extensión Inline HTML para VS Code
  // para que funcione hay que agregar /*html*/ antes del backtick

  template: /*html*/ `

    <nav>

      
      <h3 
      v-for="page in pages" :key="page"
      @click="showPage(page.title)"
      > {{ page.title }} </h3>
      
      
      <modo-dark/>
    </nav>

    <home-page v-show="isShown('Vue CDN')"/>   
    <componentes-page v-show="isShown('Componentes')"/>
    <props-page v-show="isShown('Props')"/>


  `
}




// showPage(page) {
//   Object.keys(this.showPages)
//     .forEach(key => 
//       this.showPages[key] = false)

//   this.showPages[page] = true
// }