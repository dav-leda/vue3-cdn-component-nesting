
import NavBar from './components/NavBar.js'

export default {

  components: {
    NavBar
  },

  data: () => ({
    pages: [
      { title: 'Vue CDN', show: true },
      { title: 'Props', show: false },
      { title: 'Componentes', show: false }
    ]
  }),
}



