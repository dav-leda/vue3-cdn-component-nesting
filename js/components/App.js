
import NavBar from './NavBar.js'

export default {

  components: {
    NavBar
  },

  data: () => ({
    pages: [
      { title: 'Vue CDN', show: true },
      { title: 'Contacto', show: false },
      { title: 'Props', show: false },
      { title: 'Router', show: false },
      { title: 'State', show: false }
    ]
  }),
}



