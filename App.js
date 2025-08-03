
import NavBar from './components/NavBar.js'

export default {

  components: {
    NavBar
  },

  data: () => ({
    pages: [
      { title: 'Vue CDN', show: false },
      { title: 'Contacto', show: false },
      { title: 'Props', show: false },
      { title: 'Router', show: false },
      { title: 'State', show: true }
    ]
  }),
}



