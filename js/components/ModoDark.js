



export default {

  data: () => ({
    darkLight: false,
  }),

  computed: {
    modoDarkLight() {
      return this.darkLight ? 'dark' : 'light'
    }
  },

  methods: {
    cambiarModo() {
      document
        .documentElement
        .className = this.modoDarkLight
    }
  },

  template: /*html*/ `

      <div class="modo-dark">
        <span>🌞️</span>
          <label for="checkbox">
            <input 
              type="checkbox"
              id="checkbox"
              v-model="darkLight"
              @change="cambiarModo"            
            />
            <div class="slider round"></div>
          </label>
        <span>🌘️</span>
      </div>

  `
}