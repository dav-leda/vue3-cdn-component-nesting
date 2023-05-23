

import HomePage from './HomePage.js'
import AboutPage from './AboutPage.js'
import ContactPage from './ContactPage.js'

export default {

  components: {
    HomePage, AboutPage, ContactPage
  },

  props: {
    pages: Object
  },

  data: () => ({
    showPages: {
      home: true,
      about: false,
      contact: false
    }
  }),

  methods: {
    showPage(page) {
      Object.keys(this.showPages)
        .forEach(key => 
          this.showPages[key] = false)

      this.showPages[page] = true
    }
  },

  // Para el resaltado de sintaxis de templates literales
  // usar la extensión Inline HTML para VS Code
  // para que funcione hay que agregar /*html*/ antes del backtick

  template: /*html*/ `

    <nav>

      <div @click="showPage('home')">
        <p>{{ pages['home'] }}</p>
      </div>

      <div @click="showPage('about')">
        <p>{{ pages['about'] }}</p>
      </div>
      
      <div @click="showPage('contact')">
        <p>{{ pages['contact'] }}</p>
      </div>

    </nav>

    <home-page v-show="showPages['home']"/>   
    <about-page v-show="showPages['about']"/>
    <contact-page v-show="showPages['contact']"/>

  `
}