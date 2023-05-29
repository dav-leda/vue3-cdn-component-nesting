

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
      this.pages.forEach(page => page.show = page.title === title)
      window.scroll(0,0)
    },
    isVisible(title) {
      const findPage = this.pages.find(page => page.title === title)
      return findPage.show
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

    <home-page v-show="isVisible('Vue CDN')"/>   
    <router-page v-show="isVisible('Router')"/>
    <props-page v-show="isVisible('Props')"/>
    <contact-page v-show="isVisible('Contacto')"/>

  `
}
