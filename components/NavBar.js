

import HomePage from './HomePage.js'
import PropsPage from './PropsPage.js'
import RouterPage from './RouterPage.js'
import ContactPage from './ContactPage.js'
import ModoDark from './ModoDark.js'

export default {

  components: {
    HomePage, 
    PropsPage, 
    RouterPage,
    ContactPage,
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
        v-for="page in pages" :key="page.title"
        @click="showPage(page.title)"
      > {{ page.title }} </h3>
      
      <modo-dark/>
    </nav>

    <home-page v-show="isShown('Vue CDN')"/>   
    <router-page v-show="isShown('Router')"/>
    <props-page v-show="isShown('Props')"/>
    <contact-page v-show="isShown('Contacto')"/>

  `
}
